import { Card, Collapse } from "antd";
import Widget from "../../../components/Widget";
import { useState } from "react";

import { Col, Row } from 'antd';

import { Form, Tabs, Tag } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Select } from 'antd';


const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const LineWalk = () => {
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


  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };
  const toggleDisable = () => {
    setDisabled(!disabled);
  };
  const onChange = (e) => {
    console.log('checked = ', e.target.checked);
    setChecked(e.target.checked);
  };

  const label = `${checked ? 'Checked' : 'Unchecked'}-${disabled ? 'Disabled' : 'Enabled'}`;

  const onChange1 = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };


  return (
    <>
      <Collapse onChange={callback}>
      <Panel header="เลือกพื้นที่ Line Walk" key="0">
        <Row>
          <Col span={12}>
          <h>โรงงาน RMC</h> 
          < br />
                <Select
                  showSearch
                  style={{
                    width: "100%",
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
                      label: 'RMC พานทอง 1',
                    },
                    {
                      value: '2',
                      label: 'RMC นิคมปิ่นทอง',
                    },
                    {
                      value: '3',
                      label: 'RMC พัทยา',
                    },
                    {
                      value: '4',
                      label: 'RMC ลพบุรี',
                    },
                    {
                      value: '5',
                      label: 'RMC บางโคล่',
                    },
                    {
                      value: '6',
                      label: 'RMC ไทรน้อย',
                    },
                    {
                      value: '7',
                      label: 'RMC สายไหม',
                    },
                    {
                      value: '8',
                      label: 'RMC ปากน้ำ',
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
          <Col span={12}>
              <Form layout="vertical">
                <Form.Item label={`Site งานลูกค้า`}>
                  <TextArea></TextArea>
                </Form.Item>
              </Form>
            </Col>
        </Row>

        </Panel>
        <Panel header="เครื่องจักร" key="1">
          <b>Mixer</b>
          <Row>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>ปิด Main Switch(ที่ตู้ Control) และล็อคกุญแจ</Card>
            </Col>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>สับก้าน Load Breaker Switch และล็อคกุญแจ</Card>
            </Col>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>แขวนป้ายห้ามเดินเครื่องจักร</Card>
            </Col>
          </Row>
          <b>Skiphoist</b>
          <Row>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>ปิด Main Switch(ที่ตู้ Control) และล็อคกุญแจ</Card>
            </Col>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>ใส่สลักล็อกรางกระบะ Skip-Hoist</Card>
            </Col>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>แขวนป้ายห้ามเดินเครื่องจักร</Card>
            </Col>
          </Row>
          <b>ตู้ควบคุมเครื่องจักร</b>
          <Row>
            <Col span={12}>
              <Card onClick={() => active(1)} style={style}>ปิด Main Switch(ที่ตู้ MDB) และล็อคกุญแจ</Card>
            </Col>
            <Col span={12}>
              <Card onClick={() => active(1)} style={style}>แขวนป้ายห้ามเดินเครื่องจักร</Card>
            </Col>
          </Row>
        </Panel>
        <Panel header="การทำงานบนที่สูง" key="2">
          <h>รถโม่</h>
          <Row>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>คาดเข็มขัดนิรภัยเมื่อขับรถ</Card>
            </Col>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>กล้องใช้งานได้เป็นปกติทั้ง 2 ทาง (กล้องส่องไปข้างหน้า และกล้องส่องในหัวเก๋ง)</Card>
            </Col>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>ไม่ใช้โทรศัพท์ขณะขับรถ หรือ ใช้อุปกรณ์เสริมช่วยโทร</Card>
            </Col>
          </Row>
          <h>รถจักรยานยนต์</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>สวมหมวกกันน๊อคเมื่อขับมอเตอร์ไซค์</Card>
            </Col>
          </Row>
          <h>รถยนต์</h>
          <Row>
            <Col span={12}>
              <Card onClick={() => active(1)} style={style}>คาดเข็มขัดนิรภัยเมื่อขับรถ</Card>
            </Col>
            <Col span={12}>
              <Card onClick={() => active(1)} style={style}>ไม่ใช้โทรศัพท์ขณะขับรถ หรือ ใช้อุปกรณ์เสริมช่วยโทร</Card>
            </Col>
          </Row>
        </Panel>
        <Panel header="พฤติกรรมความปลอดภัยในการขับขี่" key="3">
          <h>รถโม่</h>
          <Row>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>คาดเข็มขัดนิรภัยเมื่อขับรถ</Card>
            </Col>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>กล้องใช้งานได้เป็นปกติทั้ง 2 ทาง (กล้องส่องไปข้างหน้า และกล้องส่องในหัวเก๋ง)</Card>
            </Col>
            <Col span={8}>
              <Card onClick={() => active(1)} style={style}>ไม่ใช้โทรศัพท์ขณะขับรถ หรือ ใช้อุปกรณ์เสริมช่วยโทร</Card>
            </Col>
          </Row>
          <h>รถจักรยานยนต์</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>สวมหมวกกันน๊อคเมื่อขับมอเตอร์ไซค์</Card>
            </Col>
          </Row>
          <h>รถยนต์</h>
          <Row>
            <Col span={12}>
              <Card onClick={() => active(1)} style={style}>คาดเข็มขัดนิรภัยเมื่อขับรถ</Card>
            </Col>
            <Col span={12}>
              <Card onClick={() => active(1)} style={style}>ไม่ใช้โทรศัพท์ขณะขับรถ หรือ ใช้อุปกรณ์เสริมช่วยโทร</Card>
            </Col>
          </Row>
        </Panel>
        <Panel header="พฤติกรรมความปลอดภัยในการใช้เครื่องมือ" key="4">
          <h>งานตัด/งานเจียร์</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>ใช้เครื่องมือที่ผ่านการตรวจสอบ มีสติ๊กเกอร์แสดงผ่านการตรวจสอบ</Card>
            </Col>
          </Row>
          <h>งานเชื่อม</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>มีการขอ Work permit ใช้เครื่องมือที่ผ่านการตรวจสอบ มีสติกเกอร์แสดงผ่านการตรวจสอบ</Card>
            </Col>
          </Row>
        </Panel>
        <Panel header="พฤติกรรมความปลอดภัยในการทำงานที่อับอากาศ " key="5">
          <h>ไซโล</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>มีป้ายชี้บ่งทางเข้าที่อับอากาศ</Card>
            </Col>
          </Row>
          <h>ถังน้ำ</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>มีป้ายชี้บ่งทางเข้าที่อับอากาศ</Card>
            </Col>
          </Row>
          <h>ถังน้ำยา</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>มีป้ายชี้บ่งทางเข้าที่อับอากาศ</Card>
            </Col>
          </Row>
        </Panel>
        <Panel header="พฤติกรรมความปลอดภัยในการซ่อมเครื่องจักร" key="6">
          <h>Mixer</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>หลังจากซ่อมเครื่องจักรแล้ว ใส่การ์ดครอบกลับเหมือนเดิม</Card>
            </Col>
          </Row>
          <h>เครื่องลาก</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>หลังจากซ่อมเครื่องจักรแล้ว ใส่การ์ดครอบกลับเหมือนเดิม</Card>
            </Col>
          </Row>
          <h>ปากครอบโลน Skip</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>หลังจากซ่อมเครื่องจักรแล้ว ใส่การ์ดครอบกลับเหมือนเดิม</Card>
            </Col>
          </Row>
        </Panel>
        <Panel header="อื่นๆ" key="7">
        <h>มี Red Zone ติดอยู่ที่พักจบส.เพื่อชี้แจงให้จบส.รับรู้และเข้าใจ</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>Unsafe</Card>
            </Col>
          </Row>
          <h>สังเกตเรื่องการดื่มแอลอฮอล์</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>Unsafe</Card>
            </Col>
          </Row>
          <h>สังเกต การเสพสารเสพติด</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>Unsafe</Card>
            </Col>
          </Row>
          <h>สังเกตการทานยาที่มีฤทธ์ต่อระบบประสาทและสมอง</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>Unsafe</Card>
            </Col>
          </Row>
          <h>สารเคมี</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>น้ำยาผสมคอนกรีตมี SDS ตรงกับที่ใช้จริง</Card>
            </Col>
          </Row>
          <h>ฝุ่นไม่ฟุ้งกระจาย</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>Unsafe</Card>
            </Col>
          </Row>
          <h>น้ำไม่ไหลออกนอกโรงงาน</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>Unsafe</Card>
            </Col>
          </Row>
          <h>บ่อคายไม่หกล้น</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>Unsafe</Card>
            </Col>
          </Row>
          <h>ถังดับเพลิงมีสภาพพร้อมใช้งาน</h>
          <Row>
            <Col span={24}>
              <Card onClick={() => active(1)} style={style}>Unsafe</Card>
            </Col>
          </Row>
        </Panel>
        <Panel header="Nearmiss" key="8">
          <Form layout="vertical">
            <Form.Item label={`พบ Nearmiss ในโรงงาน โปรดระบุรายละเอียด (เล่าเหตุการณ์)`}>
              <TextArea></TextArea>
            </Form.Item>
          </Form>
        </Panel>
        <Panel header="ระบุเรื่องที่น่าชมเชย" key="9">
          <Form layout="vertical">
            <Form.Item label={`เรื่องที่น่าชมเชย (พิมพ์ข้อความ โปรดระบุรายละเอียด)`}>
              <TextArea></TextArea>
            </Form.Item>
          </Form>
        </Panel>
      </Collapse>
    </>
  );
};
export default LineWalk;
