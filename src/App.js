import './App.scss';
import React from "react";
import {Header} from "./components/Header/Header";
import {ThemeProvider} from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import {themes} from "./themes"
import Bestsellers from './components/Bestsellers/Bestsellers';
import {Title} from './components/Title';
import { Cooperation } from './components/Cooperation';
import { CooperationComponent } from './components/CooperationComponent';
import ContactUs from "./components/ContactForm";
import Footer from "./components/Footer"


function App() {
  return (
    <ThemeProvider theme={themes}>
      <CooperationComponent />
      <Container >
      <Header/>

      <Bestsellers />
      <Cooperation />

      <ContactUs/>
      
      </Container>
      <Footer/ >
      



    </ThemeProvider>

  );
}

export default App;
