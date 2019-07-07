import React from 'react';
import './scss/now-ui-kit.scss';
import { FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import './main.css'

//images for the main site
import drenched from './img/1_Drenched.JPG';
import dane from './img/2_dane.jpg';
import hair from './img/4_hair.jpg';
import backside from './img/6_backside.JPG';
import backside2 from './img/7_backside2.jpg';
import lick from './img/10_lick.JPG';
import me from './img/13_me.JPG';
import dazed from './img/5_Dazed.JPG';
import feet from './img/8_feet.JPG';
import lounging from './img/15_lounging.jpg';
import grandpa from './img/14_grandpa.JPG';
import lines from './img/16_lines.jpg';
import rg from './img/3_rg.jpg';
import hands from './img/9_hands.JPG';
import nude from './img/12_nude.JPG';
import broken from './img/11_broken.JPG';

function App() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-4">
            <div class="card card-body">
              <img src={drenched} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={hair} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={backside2} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={lick} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={me} class="img-raised"></img>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card card-body">
              <img src={dane} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={dazed} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={feet} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={lounging}class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={grandpa} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={lines} class="img-raised"></img>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="card card-body">
              <img src={rg} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={backside} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={hands} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={nude} class="img-raised"></img>
            </div>
            <div class="card card-body">
              <img src={broken} class="img-raised"></img>
            </div>
          </div>
        </div>
      </div>
      <div class="footkoko">
        <div class="col">
          <IconContext.Provider value={{ color: "#2c2c2c"}}>
          <a href="https://www.instagram.com/kyokomoto/">< FaInstagram/></a>
          </IconContext.Provider>
          <div>Artwork by Kyoko, Website by Yoshi</div>
          
        </div>
        
      </div>
    </div>
  );
}
export default App;