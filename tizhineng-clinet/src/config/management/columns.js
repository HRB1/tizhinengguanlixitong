import React from "react"
export default [
    {
      title: "姓名",
      dataIndex: "staffName",
      className: "listOne"
    },
    {
      title: "序号",
      dataIndex: "staffId"
    },
    {
      title: "部门",
      dataIndex: "department"
    },
    {
      title: "职位",
      dataIndex: "position"
    },
    {
      title: "薪资",
      dataIndex: "salary"
    },
    {
      title: "联系电话",
      dataIndex: "tel"
    },
    {
      title: "是否离职",
      dataIndex: "isQuit",
      render: (text, item) => <span>{item.isQuit === "0" ? "否" : "是"}</span>
    },
    {
      title: "离职原因",
      dataIndex: "quitReason"
    },
    {
      title: "身份证号",
      dataIndex: "IDNum"
    },
    {
      title: "入职时间",
      dataIndex: "entryTime",
      render: (text, item) => (
        <span>
          {new Date(Number(item.entryTime))
            .toLocaleDateString()
            .replace(/\//g, "-")}
        </span>
      )
    },
    {
      title: "学历",
      dataIndex: "education"
    },
    {
      title: "籍贯",
      dataIndex: "nativePlace"
    },
    {
      title: "民族",
      dataIndex: "nation"
    },
    {
      title: "婚姻状况",
      dataIndex: "isMarray",
      render: (text, item) => (
        <span>{item.isMarray === "0" ? "未婚" : "已婚"}</span>
      )
    },
    {
      title: "户籍性质",
      dataIndex: "nativeType"
    },
    {
      title: "现住址",
      dataIndex: "address"
    },
    {
      title: "负责班级",
      dataIndex: "classId"
    },
    {
      title: "负责幼儿园",
      dataIndex: "gartenId"
    },
    {
      title: "课时数",
      dataIndex: "classNum"
    }
  ]