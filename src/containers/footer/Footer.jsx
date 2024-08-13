import React from 'react';
import "./footer.css";
import { LuCopyright } from "react-icons/lu";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
     <span>
     <LuCopyright className='copyright-icon' />{`${currentYear} Muhammed Falah C`}
      <br />
      All rights reserved
     </span>
    </div>
  );
}

export default Footer;
