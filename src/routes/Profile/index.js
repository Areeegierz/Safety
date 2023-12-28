import React, { Component } from "react";
import { Col, Row, Table, Tabs } from "antd";
import ProfileHeader from "../../components/profile/ProfileHeader";
import Widget from "../../components/Widget";
import PieChartWithCustomizedLabel from "../../components/pie/components/PieChartWithCustomizedLabel";
import TabPane from "antd/lib/tabs/TabPane";
import List from "./companents/list";
import Error from "./companents/error";
import Edit from "./companents/edit";
import LineWalk from "./companents/lineWalk";
import SaftyContact from "./companents/SafetyContact";
import Basic from "../../components/navigation/Breadcrumb/Basic";
class Profile extends Component {
  render() {
    const columns = [
      {
        title: "Line Walk",
        dataIndex: "linewalk",
        key: "linewalk",
      },
      {
        title: "Safety Contact",
        dataIndex: "safetycontact",
        key: "safetycontact",
      },
    ];
    const dataSource = [
      {
        linewalk: "100",
        safetycontact: "30",
      },
    ];
    return (
      <div>
        {/* <Basic slug={`ข้อมูลส่วนตัว`} /> */}
        <div className="mt-5">
          <ProfileHeader />
          <div className="gx-profile-content">
            <Row>
              <Col xl={8} lg={10} md={10} sm={24} xs={24}>
                <Widget
                  title="OVERVIEW"
                  styleName="gx-card-tabs gx-card-profile"
                >
                  <PieChartWithCustomizedLabel />
                  <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={false}
                  />
                </Widget>
              </Col>

              <Col xl={16} lg={14} md={14} sm={24} xs={24}>
                <Widget>
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
                </Widget>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
