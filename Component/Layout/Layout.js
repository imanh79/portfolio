import React from "react";
import Header from "../Header/Header";


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className='main'>{children}</main>
    
    </div>
  );
};

export default Layout;
