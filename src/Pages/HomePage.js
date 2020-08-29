import React from "react";
import "antd/dist/antd.css";
import "./HomePage.css";
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Divider,
  Card,
  List,
  Typography
} from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

const testdata = [
    "This is list 2",
    "Check",
];

function HomePage() {
  return (
    <Layout>
      <Header>
        <Menu mode="horizontal">
          <Menu.Item>New Message</Menu.Item>
          <Menu.Item>Delete</Menu.Item>
          <Menu.Item>Archive</Menu.Item>
          <Menu.Item>Junk</Menu.Item>
          <Menu.Item>Sweep</Menu.Item>
          <Menu.Item>Move To</Menu.Item>
        </Menu>
      </Header>
      <Row>
        <Col span={2}>
          <Layout>
            <Sider width={200} className="sidebar">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0, minHeight: 1000 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Favorites">
                  <Menu.Item key="1">Inbox</Menu.Item>
                  <Menu.Item key="2">Drafts</Menu.Item>
                  <Menu.Item key="3">Sent</Menu.Item>
                  <Menu.Item key="4">Deleted</Menu.Item>
                  <Menu.Item key="4">Robin Counts</Menu.Item>
                  <Menu.Item key="4">Travel</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="Folders">
                  <Menu.Item key="5">Inbox</Menu.Item>
                  <Menu.Item key="6">Junk</Menu.Item>
                  <Menu.Item key="7">Inbox</Menu.Item>
                  <Menu.Item key="3">Sent</Menu.Item>
                  <Menu.Item key="4">Deleted</Menu.Item>
                  <Menu.Item key="4">Archive</Menu.Item>
                  <Menu.Item key="4">Travel</Menu.Item>
                </SubMenu>
                <Menu.Item>New Folder</Menu.Item>
              </Menu>
            </Sider>
          </Layout>
        </Col>
        <Col span={2}></Col>
        <Layout>
          <Col span={22}>
            <Card>
              <Divider orientation="left">Default Size</Divider>
              <List
                bordered
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Layout>
        <Layout>
          <Col span={22}>
          <Card>
              <Divider orientation="left">Default Size</Divider>
              <List
                bordered
                dataSource={testdata}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Layout>
      </Row>
    </Layout>
  );
}

export default HomePage;
