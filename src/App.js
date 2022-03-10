import { Layout } from "antd";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarToggle = () => {
    setIsCollapsed((prev) => !prev);
  };
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout>
      <Sider width={200} theme="light" trigger={null} collapsible collapsed={isCollapsed}>
        <Sidebar isCollapsed={isCollapsed} />
      </Sider>
      <Layout className="main-wrapper">
        <Header style={{ backgroundColor: "#fff", padding: "0" }}>
          <Navbar isCollapsed={isCollapsed} sidebarToggle={sidebarToggle} />
        </Header>
        <Content style={{ minHeight: "95vh" }}>Content</Content>
      </Layout>
    </Layout>
  );
}

export default App;
