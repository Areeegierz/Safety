import { Tabs } from "antd";
import Widget from "../../../components/Widget";
import TabPane from "antd/lib/tabs/TabPane";
import List from "./list";
import Error from "./error";
import Edit from "./edit";

const LineWalk = () => {
  return (
    <Widget
      title={<span style={{ marginLeft: "20px" }}>ประวัติการประเมิน</span>}
      styleName="gx-card-tabs gx-card-profile"
    >
      <Tabs className="gx-tabs-right" defaultActiveKey="1">
        <TabPane tab="รายการ" key="1">
          <List />
        </TabPane>
        <TabPane tab="สิ่งผิดปกติ" key="2">
          <Error />
        </TabPane>
        <TabPane tab="แก้ไขแล้ว" key="3">
          <Edit />
        </TabPane>
      </Tabs>
    </Widget>
  );
};
export default LineWalk;
