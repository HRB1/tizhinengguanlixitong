const Service = require('egg').Service;
const {createTeacherQuery} = require('../sql');
class MarketTeacherService extends Service{
  // 判断身份证是否重复
  async isIdCardRepeat (mysql, idCard){
    const result = await mysql.select('market_teacher', {
      where: {
        idCard: idCard,
        isAble: 1
      },
      columns: ['idCard']
    });
    if(result.length === 0){
      return false;
    }else{
      return true;
    }
  }
  // 添加市场老师
  async addTeacher(teacherInfo){
    const {mysql} = this.app;
    // 验证idCard是否重复
    let result = await this.isIdCardRepeat(mysql, teacherInfo.idCard);
    if(result){
      return 'idCardRepeat';
    }
    await mysql.insert('market_teacher', teacherInfo);
    return 'success';
  }
  // 查看市场老师
  async getTeacher(query){
    const {pageSize = 10, pageIndex = 1} = query;
    const {mysql} = this.app;
    delete query.pageIndex;
    delete query.pageSize;
    query.isAble = 1;
    let total = await mysql.query(createTeacherQuery(query,0,0));
    // 联合查询显示市场老师信息
    let sql = createTeacherQuery(query,pageSize,pageIndex);
    let result = await mysql.query(sql);
    return {
      total: total.length,
      teachers: result
    };
  }
  // 删除市场老师
  async delTeacher(id){
    const {mysql} = this.app;
    let result = await mysql.update('market_teacher', {isAble: 0}, {
      where: {
        id: id
      }
    });
    return result.affectedRows === 1 ? 'success' : 'faile';
  }
}
module.exports = MarketTeacherService;