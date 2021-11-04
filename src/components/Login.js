import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AuthService from "../services/auth.service";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import { useAtom } from "jotai";
import { userAtom } from "../App";

const buttonStyle = ({ hover }) => ({
  background: hover ? "#d69e2e" : "white",
  color: hover ? "#553c9a" : "#553c9a",
  border: hover ? "2px #d69e2e solid" : "2px #d69e2e solid",
});

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
    md: { span: 16 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 10,
    },
    sm: {
      span: 16,
      offset: 10,
    },
    md: {
      span: 16,
      offset: 10,
    },
  },
};

function Login() {
  const [userLogged, setUserLogged] = useAtom(userAtom);
  const [hover, setHover] = useState(false);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  let history = useHistory();

  const onFinishRegister = async (values) => {
    let username = values.username;
    let password = values.password;

    let user = { username, password };
    await AuthService.login(user).then(() => {
      setUserLogged(true);
    });
    history.push("/");
  };

  return (
    <div class="flex items-center ">
      <div class="flex-1 h-full max-w-4xl mx-auto  rounded-lg shadow-xl">
        <div class="my-auto flex flex-col md:flex-row ">
          <div class="invisible md:visible h-32 md:h-auto md:w-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://image.freepik.com/vecteurs-libre/chien-chat-animal-maison-logo-icone-illustration_7688-1444.jpg"
              alt="img"
            />
          </div>
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div class="w-full">
              <div class="flex justify-center">
                <img
                  src="../images/birdhouse.png"
                  alt="pets"
                  className="h-20"
                />
              </div>
              <h1 class="mb-4 text-2xl font-bold text-center text-gray-700">
                Sign in
              </h1>
              <div>
                <Form
                  {...formItemLayout}
                  layout={formLayout}
                  form={form}
                  name="register"
                  onFinish={onFinishRegister}
                  scrollToFirstError
                >
                  <Form.Item
                    name="username"
                    tooltip="What do you want others to call you?"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input
                      autoFocus="autofocus"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>

                  <Form.Item
                    style={{ marginBottom: 0 }}
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Item>

                  <div class="my-2 text-center">
                    <p class="text-sm">
                      Don't have an account yet?{" "}
                      <Link
                        to={{ pathname: "/register" }}
                        className="text-blue-600 hover:underline"
                      >
                        {" "}
                        Sign up.
                      </Link>
                    </p>
                  </div>
                  <Form.Item {...tailFormItemLayout} className="">
                    <Button
                      style={buttonStyle({ hover })}
                      onPointerOver={() => setHover(true)}
                      onPointerOut={() => setHover(false)}
                      type="primary"
                      htmlType="submit"
                      className="rounded-full font-semibold"
                    >
                      LogIn
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
