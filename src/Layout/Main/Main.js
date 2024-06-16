import React from 'react';
import Header from '../../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div>
       <div >
        <h1>Advertisement</h1>
        </div> 
        <div>
            <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
