import React from 'react';
import { FlippingCard, FlippingCardFront, FlippingCardBack } from "react-ui-cards";

const ServiceCard = (props) => {
  return (
    <FlippingCard style={{ width: 300, height: 210, minHeight: 210, cursor: 'pointer' }}>
      <FlippingCardBack>
        <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center', backgroundColor: "#F9B109", height: '100%', color: 'white' }}>
          {props.backText}
        </div>
      </FlippingCardBack>
      <FlippingCardFront>
        <img src={props.frontImage} alt="service.jpg"  />
      </FlippingCardFront>
    </FlippingCard>
  )
}

export default ServiceCard;