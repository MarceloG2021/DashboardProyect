import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import Chart from '../../components/chart/Chart';

const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar />
          home container
          <Chart />
        </div>
    </div>
  )
}

export default Home;
