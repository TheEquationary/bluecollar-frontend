import React from "react";
// components
import Topbar from "../../components/topbar/Topbar";
import {Content} from "../../components/page-layout/Layout";

const Home = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Content>
        <h1>Hello World</h1>
      </Content>
    </React.Fragment>
  )
}

export default Home;