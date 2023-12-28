import { Table } from "antd";

const Error = () => {
  const dataSource = [
    {
      date: "12/12/2023",
      plant: "31MZ กระทุ่มแบน",
      age: 32,
      normal: "5",
      error: "7",
    },
    {
      date: "12/12/2023",
      plant: "31MZ กระทุ่มแบน",
      age: 32,
      normal: "9",
      error: "3",
    },
  ];

  const columns = [
    {
      title: "วันที่",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "โรงงาน",
      dataIndex: "plant",
      key: "plant",
    },
    {
      title: "ปกติ (ข้อ)",
      dataIndex: "normal",
      key: "normal",
    },
    {
      title: "ผิดปกติ (ข้อ)",
      dataIndex: "error",
      key: "error",
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default Error;
