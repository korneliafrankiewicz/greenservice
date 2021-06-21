import './App.scss';
import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {themes} from "./themes"
import Home from "./Home";
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Sorbents from "./components/More/Sorbents";
import SocksPillows from './components/More/SocksPillows';
import CorksorbGreenOcean from './components/More/CorksorbGreenOcean';
import Pallets from "./components/More/Pallets";
import Trays from './components/More/Trays';
import SpillKits from './components/More/SpillKits';
import Cabinets from './components/More/Cabinets';
import DrainCovers from './components/More/DrainCovers';
import FloodFence from './components/More/FloodFence';
import WaterBarriers from './components/More/WaterBarriers';
import Biomaster from "./components/More/Biomaster";
import StickyMats from './components/More/StickyMats';


function App() {
  return (
    <HashRouter>
    <ThemeProvider theme={themes}>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/sorbenty" component={Sorbents}/>
    <Route exact path="/rekawy-poduszki-sorpcyjne" component={SocksPillows}/>
    <Route exact path="/corksorb-greenocean" component={CorksorbGreenOcean}/>
    <Route exact path="/wanny-wychwytowe" component={Pallets}/>
    <Route exact path="/kuwety-ociekowe" component={Trays}/>
    <Route exact path="/zestawy-awaryjne" component={SpillKits}/>
    <Route exact path="/szafki-wozki" component={Cabinets}/>
    <Route exact path="/oslony-studzienkowe-ograniczniki-rozlewu" component={DrainCovers}/>
    <Route exact path="/zapory-przeciwpowodziowe" component={FloodFence}/>
    <Route exact path="/bariery-wodne" component={WaterBarriers}/>
    <Route exact path="/srodki-biobojcze-biomaster" component={Biomaster}/>
    <Route exact path="/maty-sticky" component={StickyMats}/>
    </Switch>
    </ThemeProvider> 
  </HashRouter>

  );
}

export default App;
