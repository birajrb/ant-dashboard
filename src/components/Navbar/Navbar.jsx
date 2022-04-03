import { Menu, Row } from "antd";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { HomeOutlined, BellOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

function Navbar({ isCollapsed, sidebarToggle }) {
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Row justify="space-between">
      {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: styles.trigger,
        onClick: sidebarToggle,
      })}
      <div style={{ border: "none", flex: "auto", justifySelf: "flex-end" }}>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          style={{ border: "none", flex: "auto", justifyContent: "flex-end" }}
        >
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
