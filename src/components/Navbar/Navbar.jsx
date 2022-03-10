import { Col, Menu, Row } from "antd";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { HomeOutlined, BellOutlined, SettingOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

function Navbar() {
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Row style={{ backgroundColor: "#fff" }} justify="space-between">
      <div className={styles.imageContainer}>
        <img src="https://sandbox.com.np/static/media/logov2.a9e9c80c.svg" />
      </div>
      <div>
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
      </div>
    </Row>
  );
}

export default Navbar;
