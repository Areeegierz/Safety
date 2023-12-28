import { Card, Collapse } from "antd";
import Widget from "../../../components/Widget";
import { useState } from "react";

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const LineWalk = () => {
  const [style, setStyle] = useState();
  const callback = (key) => {};
  const active = (key) => {
    setStyle({
      borderColor: "red",
      backgroundColor: "#FFD8D0",
      padding: "10px",
      fontFamily: "Sans-Serif",
    });
  };
  return (
    <>
      <Collapse onChange={callback}>
        <Panel header="เครื่องจักร" key="1">
          <Card onClick={() => active(1)} style={style}>
            55555555
          </Card>
        </Panel>
        <Panel header="การทำงานบนที่สูง" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="พฤติกรรมความปลอดภัยในการขับขี่" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="พฤติกรรมความปลอดภัยในการใช้เครื่องมือ" key="4">
          <p>{text}</p>
        </Panel>
        <Panel header="พฤติกรรมความปลอดภัยในการทำงานที่อับอากาศ " key="5">
          <p>{text}</p>
        </Panel>
        <Panel header="พฤติกรรมความปลอดภัยในการซ่อมเครื่องจักร" key="6">
          <p>{text}</p>
        </Panel>
        <Panel header="อื่นๆ" key="7">
          <p>{text}</p>
        </Panel>
        <Panel header="Nearmiss" key="8">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </>
  );
};
export default LineWalk;
