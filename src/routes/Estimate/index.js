import React from "react";

import IntlMessages from "util/IntlMessages";
import Basic from "../../components/navigation/Breadcrumb/Basic";
import { Card, Tabs } from "antd";
import LineWalk from "../Estimate/companents/lineWalk";
import SaftyContact from "../Estimate/companents/SafetyContact";

import { useState } from 'react';
import { Cascader, Radio } from 'antd';

import { Col, Row } from 'antd';

import { DatePicker, Space } from 'antd';

import { Select } from 'antd';

const Index = () => {
  const [placement, SetPlacement] = useState(' ');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <div className="contrainer">
        <Basic slug={"แบบประเมิน"} />
        <Card>
          <div>
            <Row>
              <Col span={8}>
                <Space direction="vertical">
                  <h>วันที่ดำเนินการ</h>
                  <DatePicker onChange={onChange} />
                </Space>
              </Col>
              <Col span={8}>
                <h>สังกัดพนักงาน</h> < br />
                <Select
                  showSearch
                  style={{
                    width: 250,
                  }}
                  placeholder="Search to Select"
                  optionFilterProp="children"
                  filterOption={(input, option) => (option?.label ?? '').includes(input)}
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                  }
                  options={[
                    {
                      value: '1',
                      label: 'RMC Metro',
                    },
                    {
                      value: '2',
                      label: 'RMC EAST',
                    },
                    {
                      value: '3',
                      label: 'RMC WEST',
                    },
                    {
                      value: '4',
                      label: 'RMC NORTH',
                    },
                    {
                      value: '5',
                      label: 'RMC NORTHEAST',
                    },
                    {
                      value: '6',
                      label: 'RMC SOUTH',
                    },
                    {
                      value: '7',
                      label: 'QMIX',
                    },
                    {
                      value: '8',
                      label: 'RMC Excellence',
                    },
                    {
                      value: '9',
                      label: 'Strategic Planning',
                    },
                    {
                      value: '10',
                      label: 'Sustainability RMC Business',
                    },
                  ]}
                />
              </Col>
              
              <Col span={8}>
                <h>ระดับพนักงาน</h> < br />
                <Radio.Group value={placement} onChange={placementChange}>
                  <Radio.Button value="Level1">จัดการ</Radio.Button>
                  <Radio.Button value="Level2">บังคับบัญชา</Radio.Button>
                  <Radio.Button value="Level3">ปฏิบัติการ</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
          </div>
          < br />

          <Tabs
            defaultActiveKey="1"
            type="card"
            size={"small"}
            items={[
              {
                label: `Line Walk`,
                key: 1,
                children: <LineWalk />,
              },
              {
                label: `Safety Contact`,
                key: 2,
                children: <SaftyContact />,
              },
            ]}
          />
        </Card>
      </div >
    </>
  );
};

export default Index;
