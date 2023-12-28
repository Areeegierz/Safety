import React from "react";

import IntlMessages from "util/IntlMessages";
import Basic from "../../components/navigation/Breadcrumb/Basic";
import { Card, Tabs } from "antd";
import LineWalk from "../Estimate/companents/lineWalk";
import SaftyContact from "../Estimate/companents/SafetyContact";

const Index = () => {
  return (
    <div className="contrainer">
      <Basic slug={"แบบประเมิน"} />
      <Card>
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
    </div>
  );
};

export default Index;
