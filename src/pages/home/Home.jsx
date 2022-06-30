import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './home.scss';
import ChartOfTheYear from '../../components/ChartOfTheYear/ChartOfTheYear';
import DailyChart from '../../components/DailyChart/DailyChart';
import DolarBlue from '../../components/DolarBlue/DolarBlue';
// import Test from '../../components/Test/Test';


const Home = () => {
  return (
    <div className="home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar />
          home container
          <ChartOfTheYear />
          <DailyChart />
          <DolarBlue />
          {/* <Test /> */}
        </div>
    </div>
  )
}

export default Home;
