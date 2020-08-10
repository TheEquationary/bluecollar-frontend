import React from "react";
import "./home.css";
// components
import Topbar from "../../components/topbar/Topbar";
import { Content } from "../../components/page-layout/Layout";
import ServiceCard from "../../components/service-card/ServiceCard";
// assets
import Electricity from "../../assets/electricity.jpg";
import Painting from "../../assets/painting.JPG";
import Plumbing from "../../assets/plumbing.JPG";
import Renovation from "../../assets/renovation.JPG";

// TEST COMMIT

const Home = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Content>
        <div className="services-list-container">
          <ServiceCard 
           frontImage={Electricity} 
           backText="Electricity is the set of physical phenomena associated with the presence and motion of matter that has a property." 
          />
          <ServiceCard 
           frontImage={Painting} 
           backText="Painting is the practice of applying paint, pigment, color or other medium to a solid surface. The medium is commonly." 
          />
          <ServiceCard 
           frontImage={Plumbing} 
           backText="Plumbing is any system that conveys fluids for a wide range of applications. Plumbing uses pipes, valves, plumbing." 
          />
          <ServiceCard 
           frontImage={Renovation} 
           backText="Renovation is the process of improving a broken, damaged, or outdated structure. Renovations are typically either." 
          />
        </div>
      </Content>
    </React.Fragment>
  )
}

export default Home;