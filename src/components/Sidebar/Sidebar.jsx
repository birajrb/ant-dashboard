import { Menu } from "antd";
import React from "react";
import styles from "./Sidebar.module.css";
import cx from "classnames";
import menuItems from "./menuItems";

function Sidebar({ isCollapsed }) {
  const { SubMenu } = Menu;

  return (
    <div className={styles.container}>
      {!isCollapsed ? <div className={cx(styles.title)}>Sandbox</div> : <div className={styles.title}>S</div>}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "95vh" }}
      >
        {menuItems.map((menuItem, index) =>
          menuItem.subNav ? (
            <SubMenu icon={menuItem.icon} title={menuItem.title}>
              {menuItem.subNav.map((subNavItem, index) => (
                <Menu.Item key={subNavItem.title} icon={subNavItem.icon} className={styles.submenu}>
                  {subNavItem.title}
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item icon={menuItem.icon} key={menuItem.title}>
              {menuItem.title}
            </Menu.Item>
          )
        )}
      </Menu>
    </div>
  );
}

export default Sidebar;
