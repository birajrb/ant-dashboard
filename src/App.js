import { Layout } from "antd";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const sidebarToggle = () => {
    setIsCollapsed((prev) => !prev);
  };

  useEffect(() => {
    window.innerWidth <= 760 ? setIsCollapsed(true) : setIsCollapsed(false);
  }, []);

  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout className="main-layout">
      <Sider width={250} theme="dark" trigger={null} collapsible collapsed={isCollapsed}>
        <Sidebar isCollapsed={isCollapsed} />
      </Sider>
      <Layout className="main-wrapper">
        <Header style={{ backgroundColor: "#fff", padding: "0" }}>
          <Navbar isCollapsed={isCollapsed} sidebarToggle={sidebarToggle} />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            backgroundColor: "#fff",
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
