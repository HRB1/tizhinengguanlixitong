const Controller = require('egg').Controller;
const {createRule, createProp} = require('../../utils/utils');
class MarketTeacher extends Controller {
  constructor(props){
    super(props);
    this.statusShow = {
      idCardRepeat: () => this.ctx.sendRes(this.ctx, {
        code: 0,
        status: 400,
        msg: '招生老师身份证号重复'
      }),
      success: () => this.ctx.sendRes(this.ctx, {
        status: 201,
        code: 1
      }),
      faile: () => this.ctx.sendRes(this.ctx, {
        status: 400,
        code: 0
      }),
      successData : data => this.ctx.sendRes(this.ctx, {
        status: 200,
        code: 1,
        data: data
      })
    };
  }
  // 添加市场老师
  async addTeacher(){
    const {ctx} = this;
    let isPass = ctx.valid(ctx, {
      rules: {
        name: 'string',
        sex: 'sex',
        idCard: 'idCard',
        homeAdd: 'string',
        recordDate: 'datetime',
        orgCode: 'orgCode',
        graduateSchool: {
          required: false,
          type: 'string'
        },
        referrer: {
          required: false,
          type: 'number'
        }
      }
    });
    if(!isPass){
      return;
    }
    const isSucc = ctx.moreProp(
      ctx, 
      [
        'name',
        'sex',
        'idCard',
        'graduateSchool',
        'homeAdd',
        'recordDate',
        'referrer',
        'orgCode'
      ], 
      ctx.request.body);
    if(!isSucc){
      return;
    }
    // service接口
    let serviceResult = await ctx.service.marketTeacher.addTeacher(ctx.request.body);
    this.statusShow[serviceResult]();
  }
  
  // 查看市场老师
  async getTeacher(){
    const {ctx} = this;
    const allProps = [
      ['id', 'number', false],
      ['name','string'],
      ['idCard','idCard'],
      ['homeAdd','string'],
      ['recordDate','datetime'],
      ['referrer','number'],
      ['orgCode','orgCode'],
      ['pageSize', 'number'],
      ['pageIndex', 'number']
    ];
    const isPass = ctx.valid(ctx, {
      rules: createRule(allProps),
      params: ctx.request.query
    });
    if(!isPass){
      return;
    }
    const isSucc = ctx.moreProp(ctx, createProp(allProps), ctx.request.query);
    if(!isSucc){
      return;
    }
    // 等待service接口 
    let result = await ctx.service.marketTeacher.getTeacher(ctx.request.query);
    if(typeof result === 'string'){
      this.statusShow[result]();
    }else{
      this.statusShow['successData'](result);
    }
  }

  // 删除市场老师
  async delTeacher(){
    const {ctx} = this;
    let isPass = ctx.valid(ctx, {
      rules: {
        id: 'number'
      }
    });
    if(!isPass){
      return;
    }
    // 等待servic接口
    let result = await ctx.service.marketTeacher.delTeacher(ctx.request.body.id);
    this.statusShow[result]();
  }
}
module.exports = MarketTeacher;