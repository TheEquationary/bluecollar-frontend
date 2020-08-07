import React from "react";
import { FlippingCard, FlippingCardFront, FlippingCardBack } from "react-ui-cards";
// components
import Topbar from "../../components/topbar/Topbar";
import { Content } from "../../components/page-layout/Layout";

const Home = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Content>
        <FlippingCard>
          <FlippingCardBack>
            Content that will be displayed on the back of the card
  	      </FlippingCardBack>
          <FlippingCardFront>
            Content that will be displayed on the front of the card
  	      </FlippingCardFront>
        </FlippingCard>
      </Content>
    </React.Fragment>
  )
}

export default Home;