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
import Footer from "./components/Footer";
import Home from "./Home";
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import Sorbents from "./components/More/Sorbents";
import SocksPillows from './components/More/SocksPillows';



function App() {
  return (
    <HashRouter>
    <ThemeProvider theme={themes}>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/sorbenty" component={Sorbents}/>
    <Route exact path="/rekawy-poduszki-sorpcyjne" component={SocksPillows}/>
    </Switch>
    </ThemeProvider> 
  </HashRouter>

  );
}

export default App;
