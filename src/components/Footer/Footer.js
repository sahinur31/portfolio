import React from "react";
import Flip from 'react-reveal/Flip';

const Footer = () => {
  return (
    <footer>
      <div className="text-center py-3 bg-dark text-white">
        <Flip top>
        <p className="">
          Copyright &copy;2021 Nurar Nahar. All rights reserved.
        </p>
        </Flip>
      </div>
    </footer>
  );
};

export default Footer;
