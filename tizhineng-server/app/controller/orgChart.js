'use strict';

const Controller = require('egg').Controller;

class OrgChart extends Controller {
  constructor(options){
    super(options);
    // 统一响应结果
    this.resultShow = {
      noParentCode:() => this.ctx.sendRes(this.ctx, {
        status: 400,
        code: 0,
        msg: '归属的parentCode可能不存在'
      }),
      success: () => this.ctx.sendRes(this.ctx, {
        status: 201,
        code: 1
      }),
      faile: () => this.ctx.sendRes(this.ctx, {
        status: 400,
        code: 0
      }),
      repeatOrgCode: () => this.ctx.sendRes(this.ctx, {
        status: 400,
        code: 0,
        msg: 'orgCode重复'
      }), 
      getDataSuccess: (data) => this.ctx.sendRes(this.ctx, {
        status: 200,
        code: 1,
        data
      }),
      orgCodeRepeat: () => this.ctx.sendRes(this.ctx, {
        status: 400,
        code: 0,
        msg: '要修改的orgCode找不到'
      })
    };
  }
  // 测试示例
  async test(){
    // 要求传递的参数是大于10的数组，字段为num
    const {ctx} = this;
    const isSuccess = ctx.valid(ctx, { 
      rules: {
        num: '>10',
        name: {
          type: 'string',
          required: false,
          default: 'wangdatao'
        }
      },
      params: ctx.request.query
    });
    if(!isSuccess){
      return;
    }
    const {name} = ctx.request.query;
    ctx.sendRes(ctx,{data:name});
  }

  
  // 添加部门
  /**
   * /org_chart/addDepartment
   * POST
   * body:{
   *  orgCode: number,
   *  orgName: string,
   *  parentCode: number
   * }
   * 
   * response: {
   *  code: 1,
   *  msg: '成功'
   * }
   */
  async addDepartment() {
    const {ctx} = this;
    const isSuc = ctx.valid(ctx, {
      rules: {
        orgName: 'string',
        parentCode: 'orgCode'
      }
    });
    if(!isSuc){
      return;
    }
    const {orgName, parentCode} = ctx.request.body;
    const orgCode = new Date().getTime();
    // services接口
    const result = await ctx.service.orgChart.addDepartment(orgCode, orgName, parentCode);
    this.resultShow[result]();
  }
  // 修改部门
  /**
   * /org_chart/editDepartment
   * POST
   * body:{
   *  orgCode: 'number' 不可以被修改，但是必传
   *  willUpdate: {
   *    orgName: 'string',
   *    parentCode: number
   *  }
   * }
   * response: {
   *  code: 1
   * }
   */
  async editDepartment(){
    const {ctx} = this;
    // 验证传递参数是否正确
    let isSuccF = ctx.valid(ctx, {
      rules: {
        orgCode: 'orgCode',
        willUpdate: 'object'
      }
    });
    if(!isSuccF){
      return;
    }
    // 验证要修改的数据参数是否正确
    let isSuccT = ctx.valid(ctx, {
      rules: {
        orgName: {
          required: false,
          type: 'string'
        },
        parentCode: {
          required: false,
          type: 'orgCode'
        }
      },
      params: ctx.request.body.willUpdate
    });
    if(!isSuccT){
      return;
    }
    // 验证是否有多余的字段
    let isPass = ctx.moreProp(ctx, ['orgName','parentCode'], ctx.request.body.willUpdate);
    if(!isPass){
      return;
    }
    // 等待services接口 
    const {orgCode, willUpdate} = ctx.request.body;
    const result = await ctx.service.orgChart.editDepartment(orgCode, willUpdate);
    this.resultShow[result]();
  }
  // 删除部门
  /**
   * /org_chart/delDepartment
   * POST
   * body: {
   *  orgCode: number,
   *  deep: true
   * }
   * response: {
   *  code:1
   * }
   */
  async delDepartment(){
    const {ctx} = this;
    let isSucc = ctx.valid(ctx, {
      rules: {
        orgCode: 'orgCode',
        deep: {
          type: 'boolean',
          required: false,
          default: false
        }
      }
    });
    if(!isSucc){
      return;
    }
    // services接口
    const {orgCode, deep} = ctx.request.body;
    const result = await ctx.service.orgChart.delDepartment(orgCode, deep);
    this.resultShow[result]();
  }
  // 查看组织架构(根据parentCode)
  /**
   * /org_chart/getDepartment
   * GET
   * body: {
   *  parentCode: number  
   * }
   * response: {
   *  code: 1
   * }
   */
  async getDepartment(){
    const {ctx} = this;
    const {query} = ctx.request;
    let isSucc = ctx.valid(ctx, {
      rules: {
        parentCode: {
          type: 'orgCode',
          required: false,
          default: 10000
        }
      },
      params: query
    });
    if(!isSucc){
      return;
    }
    // services接口
    const {parentCode} = query;
    const result = await ctx.service.orgChart.getDepartment(parentCode);
    if(typeof result === 'string'){
      this.resultShow[result]();
    }else{
      this.resultShow['getDataSuccess'](result);
    }
  }
  // 获取组织架构所有的org list
  /**
   * /org_chart/getOrglist
   * GET
   * response: {
   *  code: 1
   * }
   */
  async getTotalOrglist(){
    const {ctx} = this;
    const result = await ctx.service.orgChart.getOrglist();
    this.resultShow['getDataSuccess'](result);
  }
}

module.exports = OrgChart;
