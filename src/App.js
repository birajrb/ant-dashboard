import { Layout } from "antd";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout>
      <Navbar />
      <Layout className="main-wrapper">
        <Sider width={200} style={{ minHeight: "95vh" }} theme="light">
          <Sidebar />
        </Sider>
        <Content style={{ minHeight: "95vh" }}>Content</Content>
      </Layout>
    </Layout>
  );
}

export default App;
