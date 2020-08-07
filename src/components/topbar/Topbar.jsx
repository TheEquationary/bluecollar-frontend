import React, { useState } from "react";
import "./topbar.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// assets
import LogoBlueCollar from "../../assets/logo-bluecollar.png";
// constants
import { menuKeys } from "../../constants";
// antd
import { Space, Menu, Drawer } from "antd";
const { SubMenu } = Menu;

const Topbar = () => {

  const history = useHistory();

  // Global state 
  const currentMenuKey = useSelector(state => state.uiState.currentMenuKey);

  // Component state
  const [drawer, setDrawer] = useState(false);

  // constants
  const titleAndTagline =
    <React.Fragment>
      <b>BlueCollar</b><br />
      <i>Handymen and Rennovation Services</i>
    </React.Fragment>

  // handlers
  const handleMenuClick = (key) => {
    console.log(key);
  }

  const handleSideMenuIconClick = () => {
    setDrawer(true);
  }

  return (
    <div className="topbar">
      <div className="topbar_inner">
        <Space>
          <img src={LogoBlueCollar} alt="logo.png" className="logo" />
          <span className="title-tagline">
            {titleAndTagline}
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
          <span className="material-icons topbar_menu_icon" onClick={handleSideMenuIconClick}>menu</span>
        </Space>
      </div>
      {drawer &&
        <Drawer
          title={titleAndTagline}
          placement="top"
          closable={true}
          onClose={() => setDrawer(false)}
          visible={drawer}
          height="auto"
        >
          <Menu
            onClick={handleMenuClick}
            style={{ width: "100%" }}
            selectedKeys={currentMenuKey}
            mode="inline"
          >
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
        </Drawer>}
    </div>
  )
}

export default Topbar;