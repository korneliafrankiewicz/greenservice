import './App.scss';
import React from "react";
import {Header} from "./components/Header/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import { Container } from '@material-ui/core';
import {themes} from "./themes"
import Bestsellers from './components/Bestsellers/Bestsellers';
import { Cooperation } from './components/Cooperation';
import { CooperationComponent } from './components/CooperationComponent';
import ContactUs from "./components/ContactForm";
import CompanyData from './components/CompanyData';
import Footer from "./components/Footer";



function Home() {
  return (
    <div className="home">
    <ThemeProvider theme={themes}>
      <CooperationComponent />
      <Container >
      <Header/>

      <Bestsellers />
      <Cooperation />

      <ContactUs/>
      <CompanyData />
      </Container>
      <Footer/ >
      



    </ThemeProvider>
    </div>


  );
}

export default Home;