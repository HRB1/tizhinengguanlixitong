const Service = require('egg').Service;
class OrgChartService extends Service{
  // 验证parentCode是否已经存在表中
  async isParentCode(mysql, parentCode){
    const isParentCode = await mysql.select('org_chart', {
      where: {
        orgCode: parentCode
      }
    });
    if(isParentCode.length === 0 && parentCode !== 10000){
      return false;
    }
    return true;
  }
  // 验证orgCode是否存在表中
  async isOrgCodeRepeat(mysql, orgCode){
    const isOrgCode = await mysql.select('org_chart', {
      where: {
        orgCode: orgCode,
        isAble: 1
      }
    });
    if(isOrgCode.length !== 0){
      return true;
    }
    return false;
  }
  // 添加组织架构中的单位
  /**
   * 
   * @param {number} orgCode 
   * @param {string} orgName 
   * @param {number} parentCode 
   * @return {string} 'success' 'faile'
   */
  async addDepartment(orgCode, orgName, parentCode){
    const {mysql} = this.app;
    let resultOrgCode = await this.isOrgCodeRepeat(mysql, orgCode);
    if(resultOrgCode){
      return 'repeatOrgCode';
    }
    let resultParentCode = await this.isParentCode(mysql, parentCode);
    if(!resultParentCode){
      return 'noParentCode';
    }
    let resultLevel = await mysql.select('org_chart', {
      where: {
        orgCode: parentCode,
        isAble: 1
      },
      columns: ['orgLevel']
    });
    let orgLevel = 1;
    if(resultLevel.length > 0){
      orgLevel = resultLevel[0].orgLevel + 1;
    }
    const result = await mysql.insert('org_chart', {orgCode, orgName, orgLevel, parentCode});
    return result.affectedRows === 1 ? 'success' : 'faile';
  }
  // 获取组织架构中的单位
  /**
   * @param {number} parentCode
   * @return {Array} 
   * 
   *   */
  async getDepartment(parentCode){
    const {mysql} = this.app;
    let resultParentCode = await this.isParentCode(mysql, parentCode);
    if(!resultParentCode){
      return 'noParentCode';
    }
    const result = mysql.select('org_chart', {
      where: {
        parentCode: parentCode,
        isAble: 1
      }
    });
    return result;
  }
  // 获取组织架构列表
  /**
   * @return {Array} 
   *   */
  async getOrglist(){
    const {mysql} = this.app;
    
    const result = mysql.select('org_chart', {
      where: {
        isAble: 1
      },
      columns: ['orgCode','orgName','id']
    });
    return result;
  }
  // 修改所有的orgLevel
  async editAllLvel(orgCode, parentCode, mysql){
    // 根据orgCode和parentCode去更新自身的orgLevel
    async function updateLevel(orgCode, parentCode){
      // 根据parentCode去查询父级的orgLevel
      let resultLevel = await mysql.select('org_chart', {
        where: {
          orgCode: parentCode,
          isAble: 1
        },
        columns: ['orgLevel']
      });
      let orgLevel;
      if(resultLevel.length > 0){
        orgLevel = resultLevel[0].orgLevel + 1;
      }else {
        orgLevel = 1;
      }
      // 更新自身的orgLevel
      let willUpdate = {orgLevel, parentCode};
      if(orgLevel === 1){
        willUpdate.parentCode = 10000;
      }
      await mysql.update('org_chart', willUpdate, {
        where: {orgCode: orgCode,isAble: 1}
      });
    }
    //查询该单位的所有子级并更新orgLevel
    async function updateAllLevel(orgCode){
      let resultOrgCode = await mysql.select('org_chart', {
        columns: ['orgCode', 'parentCode'],
        where: {
          parentCode: orgCode,
          isAble: 1
        }
      });
      for(let item of resultOrgCode){
        await updateLevel(item.orgCode, item.parentCode);
        await updateAllLevel(item.orgCode);
      }
    }
    // 更新自身的orgLevel
    updateLevel(orgCode, parentCode);
    updateAllLevel(orgCode, parentCode);
  }
  // 更新单位信息
  /**
   * 
   * @param {number} orgCode 
   * @param {object} willUpdate
   * @willUpdate {string} orgName
   * @willUpdate {number} orgLevel
   * @willUpdate {number} parentCode 
   */
  async editDepartment(orgCode, willUpdate){
    const {mysql} = this.app;
    let isRepeat = await this.isOrgCodeRepeat(mysql, orgCode);
    if(!isRepeat){
      return 'orgCodeRepeat';
    }
    await mysql.update('org_chart', willUpdate, {
      where: {
        orgCode: orgCode,
        isAble: 1
      }
    });
    if(willUpdate.parentCode){
      await this.editAllLvel(orgCode, willUpdate.parentCode, mysql);
    }
    return 'success';
  }
  // 递归查找要删除的子项并删除

  async findAllItem(orgCode,mysql){
    // 根据orgCode获取其子项的所有orgCode并修改isAble
    async function  getChild(orgCode){
      await editIsAble(orgCode);
      let result = await mysql.select('org_chart', {
        columns: ['orgCode'],
        where: {
          parentCode: orgCode,
          isAble: 1
        }
      });
      for (let item of result){
        await editIsAble(item.orgCode);
        await getChild(item.orgCode);
      }
    }
    async function editIsAble(orgCode){
      await mysql.update('org_chart', {isAble: 0}, {
        where: {
          orgCode: orgCode
        }
      });
    }
    await getChild(orgCode);
    return true;
  }
  // 删除单位
  async delDepartment(orgCode, deep){
    const {mysql} = this.app;
    let isRepeat = await this.isOrgCodeRepeat(mysql, orgCode);
    if(!isRepeat){
      return 'orgCodeRepeat';
    }
    if(!deep){
      let resultParent = await mysql.select('org_chart', {
        where: {
          orgCode: orgCode,
          isAble: 1
        },
        columns: ['parentCode']
      });
      let parentCode = resultParent[0].parentCode;
      // 提升子单位的所有等级
      let child = await mysql.select('org_chart', {
        columns: ['orgCode'],
        where: {
          parentCode: orgCode,
          isAble: 1
        }
      });
      for(let item of child){
        await this.editAllLvel(item.orgCode, parentCode, mysql);
      }
      // 删除指定单位
      await mysql.update('org_chart', {isAble: 0} ,{
        where: {
          orgCode: orgCode
        }
      });
      return 'success';
    }else{
      await this.findAllItem(orgCode, mysql);
      return 'success';
    }
  }
}
module.exports = OrgChartService;