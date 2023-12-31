import React from "react";

import Basic from "../../components/navigation/Breadcrumb/Basic";
import { Card, Tabs } from "antd";
import CPAC from "../Setup/companents/CPAC";
import QMIX from "../Setup/companents/QMIX";

import { useState } from 'react';

import { Col, Row } from 'antd';

import { Button, Modal } from 'antd';

import { PlusCircleOutlined } from '@ant-design/icons';

import { Form, Input, message, Space } from 'antd';


const Index = () => {
  const [placement, SetPlacement] = useState(' ');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };
  const onFinishFailed = () => {
    message.error('Submit failed!');
  };
  const onFill = () => {
    form.setFieldsValue({
      url: 'https://taobao.com/',
    });
  };


  return (
    <>
      <div className="contrainer">
        <Basic slug={"เพิ่มผู้ใช้งาน"} />
        <Card title="เพิ่มผู้ใช้งาน" extra={<button type="button" class="ant-btn ant-btn-primary" ant-click-animating-without-extra-node="false"><span onClick={showModal}>+ เพิ่มข้อมูล</span></button>}>
          
              <Modal title="เพิ่มผู้ใช้งาน" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    name="basic"
                    label="ชื่อผู้ใช้งาน"
                    rules={[
                      {
                        required: true,
                      },

                    ]}
                  >
                    <Input placeholder="กรุณากรอกชื่อผู้ใช้งาน" />
                  </Form.Item>
                </Form>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    name="basic"
                    label="รหัสผ่าน"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input placeholder="กรุณากรอกรหัสผ่าน" />
                  </Form.Item>
                </Form>
              </Modal>

          <Tabs
            defaultActiveKey="1"
            type="card"
            size={"small"}
            items={[
              {
                label: `CPAC`,
                key: 1,
                children: <CPAC />,
              },
              {
                label: `QMIX`,
                key: 2,
                children: <QMIX />,
              },
            ]}
          />
        </Card>
      </div >
    </>
  );
};

export default Index;