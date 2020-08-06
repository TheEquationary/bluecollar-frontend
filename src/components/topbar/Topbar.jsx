import React from "react";
import "./topbar.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// assets
import LogoBlueCollar from "../../assets/logo-bluecollar.png";
// constants
import { menuKeys } from "../../constants";
// antd
import { MenuOutlined } from '@ant-design/icons';
import { Space, Menu } from "antd";
const { SubMenu } = Menu;

const Topbar = () => {

  const history = useHistory();
  const currentMenuKey = useSelector(state => state.uiState.currentMenuKey);
  const screenBreakpoint = useSelector(state => state.uiState.screenBreakpoint);

  const handleMenuClick = (key) => {
    console.log(key);
  }

  return (
    <div className="topbar">
      <div className="topbar_inner">
        <Space>
          <img src={LogoBlueCollar} alt="logo.png" className="logo" />
          <span className="title-tagline">
            <b>BlueCollar</b><br />
            <i>Handymen and Rennovation Services</i>
          </span>
        </Space>
        <Space>
          <Menu onClick={handleMenuClick} selectedKeys={currentMenuKey} mode="horizontal" className="topbar_menu">
            <Menu.Item key={menuKeys.HOME} onClick={() => history.push("/login")}>
              <b>Home</b>
            </Menu.Item>
            <SubMenu title={<b>Services</b>}>
              <Menu.Item key={menuKeys.SERVICES.ELECTRICIAN}>Electrician</Menu.Item>
              <Menu.Item key={menuKeys.SERVICES.PLUMBER}>Plumber</Menu.Item>
            </SubMenu>
            <Menu.Item key={menuKeys.ABOUT_US} onClick={() => history.push("/about-us")}>
              <b>About Us</b>
            </Menu.Item>
          </Menu>
          <span className="material-icons topbar_menu_icon">menu</span>
        </Space>
      </div>
    </div>
  )
}

export default Topbar;