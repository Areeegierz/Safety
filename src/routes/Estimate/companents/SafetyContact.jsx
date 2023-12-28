import { Card, Form, Tabs, Tag } from "antd";
import TextArea from "antd/lib/input/TextArea";

const SaftyContact = () => {
  return (
    <Card>
      <Form layout="vertical">
        <Form.Item label={`รายละเอียดระบุ (เล่าเหตุการณ์)`}>
          <TextArea></TextArea>
        </Form.Item>
      </Form>
    </Card>
  );
};
export default SaftyContact;
