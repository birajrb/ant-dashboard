import { Col, Menu, Row } from "antd";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { HomeOutlined, BellOutlined, SettingOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

function Navbar() {
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Row style={{ backgroundColor: "#fff" }} justify="space-between">
      <Col style={{ paddingLeft: "1em", fontSize: "1.5rem" }}>Dashboard</Col>
      <Col>
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{ border: "none" }}>
          <Menu.Item key="home" icon={<HomeOutlined />}></Menu.Item>
          <Menu.Item key="notification" icon={<BellOutlined />}></Menu.Item>
          <SubMenu key="SubMenu" icon={<SettingOutlined />}>
            <Menu.ItemGroup>
              <Menu.Item key="profile">Profile</Menu.Item>
              <Menu.Item key="logout">Logout</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Col>
    </Row>
  );
}

export default Navbar;
