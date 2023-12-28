import { Card, Tabs, Tag } from "antd";
import Widget from "../../../components/Widget";
import TabPane from "antd/lib/tabs/TabPane";
import List from "./list";
import Error from "./error";
import Edit from "./edit";

const SaftyContact = () => {
  return (
    <Card>
      <div className="gx-media gx-featured-item">
        <div className="gx-media-body gx-featured-content">
          <div className="gx-featured-content-left">
            <Tag className="gx-rounded-xs gx-text-uppercase" color="#06BB8A">
              12/12/2023 31MZ กระทุ่มแบน
            </Tag>
            <div className="ant-row-flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default SaftyContact;
