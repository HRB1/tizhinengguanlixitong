export default [
  {
    title: "考勤统计",
    dataSrc: "/kqtj/kqzcl"
  }, {
    title: "按人员统计",
    columns: [
      {
        title: '姓名',
        dataIndex: 'name'
      }, {
        title: '工号',
        dataIndex: 'key',
        render(text, record) {
          let num = record.key + ""
          if (num.length < 5) {
            let str = ""
            for (let i = 0; i < 5 - num.length; i++) {
              str += "0"
            }
            return str + record.key
          }
          return record.key
        }
      }, {
        title: '部门',
        dataIndex: 'section'
      }, {
        title: '职务',
        dataIndex: 'duty'
      }, {
        title: '手机',
        dataIndex: 'tel'
      }, {
        title: '工作日天数',
        render(text, record) {
          return record.workday.normal + record.workday.abnormal
        }
      }, {
        title: '工作日考勤正常天数',
        render(text, record) {
          return record.workday.normal
        }
      }, {
        title: '工作日考勤异常天数',
        render(text, record) {
          return record.workday.abnormal
        }
      }
    ],
    checks: [
      {
        title: "打卡天数",
        dataIndex: 'card',
        isChecks: true
      }, {
        title: "带薪假天数",
        render(text, record) {
          return record.holiday.normal
        },
        isChecks: true
      }, {
        title: "扣薪假天数",
        render(text, record) {
          return record.holiday.abnormal
        },
        isChecks: true
      }, {
        title: "请假总天数",
        render(text, record) {
          return record.holiday.abnormal + record.holiday.normal
        },
        isChecks: true
      }, {
        title: "工作时长",
        dataIndex: 'workTime',
        isChecks: true
      }
    ],
    dataSrc: "/rytj/list"
  }, {
    title: "按日期统计",
    columns: [
      {
        title: '日期',
        dataIndex: 'date',
        render(text, record) {
          return new Date(record.date).toISOString().slice(0, 10)
        }
      }, {
        title: '星期',
        dataIndex: 'week',
        render(text, record) {
          let num = ""
          switch (record.week) {
            case 1:
              num = "一"
              break;
            case 2:
              num = "二"
              break;
            case 3:
              num = "三"
              break;
            case 4:
              num = "四"
              break;
            case 5:
              num = "五"
              break;
            case 6:
              num = "六"
              break;
            case 7:
              num = "日"
              break;
            default:
              break;
          }
          return "星期" + num
        }
      }, {
        title: '应考勤人数',
        render(text, record) {
          return record.checking.normal + record.checking.abnormal
        }
      }, {
        title: '考勤正常人数',
        render(text, record) {
          return record.checking.normal
        }
      }, {
        title: '考勤异常人数',
        render(text, record) {
          return record.checking.abnormal
        }
      }
    ],
    checks: [],
    dataSrc: "/rqtj/list"
  }
]