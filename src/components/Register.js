import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import AuthService from "../services/auth.service";

const buttonStyle = ({ hover }) => ({
  background: hover ? "#d69e2e" : "white",
  color: hover ? "white" : "black",
  border: hover ? "1px #d69e2e solid" : "1px #d69e2e solid",
});

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function Register() {
  const [hover, setHover] = useState(false);
  const [form] = Form.useForm();
  let history = useHistory();
  const onFinishRegister = async (values) => {
    let username = values.username;
    let password = values.confirm;
    let email = values.email;
    let user = { username, password, email };
    await AuthService.register(user);
    history.push("/");
  };

  return (
    <div>
      <div className="flex container mx-auto my-4">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinishRegister}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="username"
            label="Username"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your username!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailFormItemLayout} className="">
            <Button
              style={buttonStyle({ hover })}
              onPointerOver={() => setHover(true)}
              onPointerOut={() => setHover(false)}
              type="primary"
              htmlType="submit"
              className="rounded-full"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
