import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
} from "antd";
const FilterTable = ({
  onFinish,
  actionTypeOption,
  applicationTypeOption,
}) => {
  const [form] = Form.useForm();
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={3}>
            <Form.Item name="employee_name" label="Log ID">
              <Input style={{ width: "100%" }} placeholder="e.g Admin.User" />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="action_type" label="Action Type">
              <Select style={{ width: "100%" }}>
                {actionTypeOption?.map((option) => (
                  <Select.Option key={option.label} value={option.label}>
                    {option.label}{" "}
                  </Select.Option>
                ))}{" "}
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="application_type" label="Application Type">
              <Select style={{ width: "100%" }}>
                {applicationTypeOption?.map((option) => (
                  <Select.Option key={option.label} value={option.label}>
                    {option.label}{" "}
                  </Select.Option>
                ))}{" "}
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="form_date" label="Form Date">
              <DatePicker
                placeholder={"Select Date"}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="to_date" label="To Date">
              <DatePicker
                placeholder={"Select Date"}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="application_id" label="Application ID ">
              <Input style={{ width: "100%" }} placeholder="e.g 21984/2021" />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item label="">
              <Button
                htmlType="submit"
                style={{ marginTop: "29px", width: "100%" }}
                type="primary"
              >
                Search Logger
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FilterTable;
