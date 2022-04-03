import {
  UsergroupAddOutlined,
  UserAddOutlined,
  BellOutlined,
  OrderedListOutlined,
  FileAddOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const menuItems = [
  { title: "Home", icon: <HomeOutlined />, path: "/" },
  {
    title: "User",
    icon: <UsergroupAddOutlined />,
    path: "/user/",
    subNav: [
      {
        title: "Create Member",
        path: "/user/create/",
        icon: <UserAddOutlined />,
      },
      {
        title: "Active Member",
        path: "/user/active/",
        icon: <UserAddOutlined />,
      },
      {
        title: "General Member",
        path: "/user/general/",
        icon: <UserAddOutlined />,
      },
      {
        title: "Pending User",
        path: "/user/pending/",
        icon: <UserAddOutlined />,
      },
      {
        title: "Rejected User",
        path: "/user/rejected/",
        icon: <UserAddOutlined />,
      },
    ],
  },
  {
    title: "Event",
    icon: <BellOutlined />,
    path: "/event/",
    subNav: [
      {
        title: "Create Event",
        path: "/event/create/",
        icon: <FileAddOutlined />,
      },
      {
        title: "Event List",
        path: "/event/list/",
        icon: <OrderedListOutlined />,
      },
    ],
  },
];

export default menuItems;
