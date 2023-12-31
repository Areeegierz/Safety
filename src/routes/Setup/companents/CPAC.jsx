import { Card, Collapse } from "antd";

import { useState } from "react";

import { Table } from 'antd';

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const CPAC = () => {
  const [style, setStyle] = useState();
  const callback = (key) => { };
  const active = (key) => {
    setStyle({
      borderColor: "red",
      backgroundColor: "#FFD8D0",
      padding: "10px",
      fontFamily: "Sans-Serif",
    });
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: 150,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      width: 150,
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <>
    <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 10,
    }}
    scroll={{
      y: 240,
    }}
  />    </>
  );
};
export default CPAC;
