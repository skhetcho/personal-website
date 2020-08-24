import React, { Component } from "react";
import Header from "./components/structure/Header";
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";
import Resume from "./resume.json";
import { ToastProvider } from "react-toast-notifications";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faMicrochip,
  faLaptopCode,
  faShieldAlt,
  faMoon,
  faDog,
  faUtensils,
  faBrain,
  
} from '@fortawesome/free-solid-svg-icons';


library.add(
  fab,
  faMicrochip,
  faLaptopCode,
  faShieldAlt,
  faMoon,
  faDog,
  faUtensils,
  faBrain,
  faLinkedin
  );

class App extends Component {
  componentDidMount() {
    document.title = [
      Resume.basics.name,
      Resume.basics.label,
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");
  }

  render() {
    return (

      <ToastProvider>
        <Header />
        <Content />
        <Footer />
      </ToastProvider>
    );
  }
}

export default App;
{/*
TODO:
  - import fontawesome icons properly
  - replace progress bar with multi item carousel
  - replace array based prop handling in ProgressBar to object based handling (optional)
*/}