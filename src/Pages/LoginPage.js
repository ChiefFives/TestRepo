import React, {Component} from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox, Card, Layout,text } from "antd";
import Request, { setClientToken } from "../Api/Request";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Content } = Layout;
//test
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 24
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 16,
    span: 16
  }
};

const intialState = {
  username: "",
  password: "",
  errors: {},
  isAuthorized: false,
  isLoading: false
};

class LoginPage extends React.Component {
  state = intialState;

  componentWillUnmount() {}

  onUsernameChange = username => {
    this.setState({ username });
  };

  onPasswordChange = password => {
    this.setState({ password });
  };

  onPressLogin() {
    const { username, password } = this.state;
    const payload = { username, password };
    console.log(payload);

    const onSuccess = ({ data }) => {
      // Set JSON Web Token on success
      setClientToken(data.token);
      this.setState({ isLoading: false, isAuthorized: true });
    };

    const onFailure = error => {
      console.log(error && error.response);
      this.setState({ errors: error.response.data, isLoading: false });
    };

    // Show spinner when call is made
    this.setState({ isLoading: true });

    Request.post("/api-token-auth/", payload)
      .then(onSuccess)
      .catch(onFailure);
  }

  getNonFieldErrorMessage() {
    // Return errors that are served in `non_field_errors`
    let message = null;
    const { errors } = this.state;
    if (errors.non_field_errors) {
      message = (
        <div style={styles.errorMessageContainerStyle}>
          {errors.non_field_errors.map(item => (
            <text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </text>
          ))}
        </div>
      );
    }
    return message;
  }

  getErrorMessageByField(field) {
    // Checks for error message in specified field
    // Shows error message from backend
    let message = null;
    if (this.state.errors[field]) {
      message = (
        <div style={styles.errorMessageContainerStyle}>
          {this.state.errors[field].map(item => (
            <text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </text>
          ))}
        </div>
      );
    }
    return message;
  }

  render() {
    return (
      <Layout className="layout">
        <Content
          style={{ alignSelf: "center", height: "100%", minHeight: 1000 }}
        >
          <Card style={{ width: 500, marginTop: 200 }}>
            <Form {...layout} name="login" initialValues={{ remember: true }}>
              <Form.Item
                style={{ textAlign: "center" }}
                name="admin"
                rules={[
                  {
                    required: true,
                    message: "Please input username"
                  }
                ]}
              >
                <Input placeholder="Admin" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input password"
                  }
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Link to="/submit">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                </Link>
              </Form.Item>
            </Form>
          </Card>
        </Content>
      </Layout>
    );
  }
}

const styles = {
    innerContainer: {
      marginBottom: 32,
    },
    logotypeContainer: {
      alignItems: 'center',
    },
    logotype: {
      maxWidth: 280,
      maxHeight: 100,
      resizeMode: 'contain',
      alignItems: 'center',
    },
    containerStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f6f6f6',
    },
    
    
    errorMessageContainerStyle: {
      marginBottom: 8,
      backgroundColor: '#fee8e6',
      padding: 8,
      borderRadius: 4,
    },
    errorMessageTextStyle: {
      color: '#db2828',
      textAlign: 'center',
      fontSize: 12,
    },
  };
  

export default LoginPage;
