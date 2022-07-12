import React from 'react';

import {DashboardLayout} from '../components/Layout';
import logoimg from '../images/logo.png';
import '../styles/home.css';


const HomePage = () => {
  return (
    <DashboardLayout>
      <img></img>
      <div className="Main">
        <img src={logoimg} className="logoimg" height="30px"/>
        <p>Our Hearts in Korea,<br/> Our Eyes to the World</p>
        <div class="button-down"></div>
      </div>
      <div></div>
    </DashboardLayout>
  )
}

export default HomePage;