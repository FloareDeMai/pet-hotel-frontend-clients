import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import AuthService from "../services/auth.service";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

function Register() {
  const [hover, setHover] = useState(false);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("vertical");
  let history = useHistory();

  const onFinishRegister = async (values) => {
    let username = values.username;
    let password = values.confirm;
    let email = values.email;
    let user = { username, password, email };
    AuthService.register(user).then(
      (res) => {
        if (res.status === 200) {
          showToastSuccess("User register successfuly!");
          history.push("/login");
        }
      },
      (error) => {
        showToastError(error.response.data.message);
      }
    );
  };

  const showToastError = (message) => {
    toast.error(message, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showToastSuccess = (message) => {
    toast.success(message, {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex items-center ">
      <div className="flex-1 h-full max-w-4xl mx-auto  rounded-lg shadow-xl">
        <div className="my-auto flex flex-col md:flex-row ">
          <div className="invisible md:visible h-32 md:h-auto md:w-1/2">
            <img
              className="object-cover w-full h-full"
              src="https://image.freepik.com/vecteurs-libre/chien-chat-animal-maison-logo-icone-illustration_7688-1444.jpg"
              alt="img"
            />
          </div>
          <ToastContainer
            position="top-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <div className="flex justify-center">
                <img src="../images/pets.png" alt="pets" className="h-20" />
              </div>
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                Sign up
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
                    name="email"
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
                    <Input placeholder="Email" />
                  </Form.Item>

                  <Form.Item
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

                  <Form.Item
                    name="confirm"
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
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Confirm password"
                    />
                  </Form.Item>

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
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>

                  <Form.Item {...tailFormItemLayout} className="">
                    <Button
                      style={buttonStyle({ hover })}
                      onPointerOver={() => setHover(true)}
                      onPointerOut={() => setHover(false)}
                      type="primary"
                      htmlType="submit"
                      className="rounded-full font-semibold"
                    >
                      Sign up
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

export default Register;
