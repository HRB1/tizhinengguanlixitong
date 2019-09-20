const Controller = require('egg').Controller;
const {createRule, createProp} = require('../../utils/utils');
class ApplyStudentController extends Controller{
  constructor(props){
    super(props);
    this.statusShow = {
      success: () => this.ctx.sendRes(this.ctx, {
        code: 1,
        status: 201
      }),
      faile: () => this.ctx.sendRes(this.ctx, {
        code: 0,
        status: 400
      }),
      idCardRepeat: () => this.ctx.sendRes(this.ctx, {
        code: 0,
        status: 400,
        msg: 'idCard重复，该身份证号可能已经添加过了'
      }),
      successData: data => this.ctx.sendRes(this.ctx, {
        code: 1,
        status: 200,
        data
      })
    };
  }
  // 录入学生
  async addStudent(){
    const {ctx} = this;
    const myProp = [
      ['name','string', true],
      ['sex', 'sex', true],
      ['idCard', 'idCard', true],
      ['birthday', 'datetime', true],
      ['education', 'string', true],
      ['tel', 'tel', true],
      ['email', 'email', false],
      ['place', 'string', true],
      ['homeAddress', 'string', false],
      ['orgCode', 'orgCode', true],
      ['teacherId', 'number', true],
      ['isRecommend', 'sex', true],
      ['recommendName', 'string', false],
      ['recommendCard', 'idCard', false],
      ['recommendTel', 'tel', false],
      ['notes', 'notes', false]
    ];
    let isPass = ctx.valid(ctx, {
      rules: createRule(myProp)
    });
    if(!isPass){
      return;
    }
    const isSucc = ctx.moreProp(ctx, createProp(myProp), ctx.request.body);
    if(!isSucc){
      return;
    }
    // 等待service接口
    let result = await ctx.service.applyStudent.addStudent(ctx.request.body);
    this.statusShow[result]();
  }
  // 查询学生
  async getStudent(){
    const myProps = [
      ['sid', 'number', false],
      ['name', 'string', false],
      ['idCard', 'idCard', false],
      ['orgCode', 'orgCode', false],
      ['teacherId', 'number', false],
      ['pageSize', 'number', false],
      ['pageIndex', 'number', false]
    ];
    const {ctx} = this;
    let isPass = ctx.valid(ctx, {
      rules: createRule(myProps),
      params: ctx.request.query
    });
    if(!isPass){
      return;
    }
    let isSucc = ctx.moreProp(ctx, createProp(myProps), ctx.request.query);
    if(!isSucc){
      return;
    }
    // 等待service接口
    let result = await ctx.service.applyStudent.getStudent(ctx.request.query);
    if(typeof result === 'string'){
      this.statusShow[result]();
    }else{
      this.statusShow['successData'](result);
    }
    
  }

  // 删除学生
  async delStudent(){
    const {ctx} = this;
    const myProp = [
      ['sid', 'number', true]
    ];
    let isPass = ctx.valid(ctx, {
      rules: createRule(myProp)
    });
    if(!isPass){
      return;
    }
    // 等待service接口
    let result = await ctx.service.applyStudent.delStudent(ctx.request.body.sid);
    this.statusShow[result]();
  }
 
}

module.exports = ApplyStudentController;