const Service = require('egg').Service;
const {createStudentQuery} = require('../sql');
class ApplyStudentService extends Service {
  // 验证身份证是否重复
  async isIdCardRepeat(mysql, idCard){
    let result = await mysql.select('apply_student', {
      where: {
        idCard: idCard,
        isAble: 1
      }
    });
    return result.length === 0 ? false : true;
  }
  // 录入学生
  async addStudent(studentInfo){
    const {mysql} = this.app;
    let isRepeat = await this.isIdCardRepeat(mysql, studentInfo.idCard);
    if(isRepeat){
      return 'idCardRepeat';
    }
    let result = await mysql.insert('apply_student', studentInfo);
    return result.affectedRows === 1 ? 'success' : 'faile';
  }
  // 查询学生
  async getStudent(query){
    const {pageSize = 10, pageIndex = 1} = query;
    const {mysql} = this.app;
    delete query.pageSize;
    delete query.pageIndex;
    query.isAble = 1;
    let total = await mysql.query(createStudentQuery(query,0,0));
    let sql = createStudentQuery(query, pageSize, pageIndex);
    let result = await mysql.query(sql);
    return {
      total: total.length,
      studentList: result
    };
  }
  // 删除学生
  async delStudent(sid){
    const {mysql} = this.app;
    let result = await mysql.update('apply_student', {isAble: 0}, {
      where: {
        sid: sid
      }
    });
    return result.affectedRows === 1 ? 'success' : 'faile'; 
  }
}
module.exports = ApplyStudentService;