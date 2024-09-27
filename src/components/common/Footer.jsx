import * as Route from '@/constants/routes';
import logo from '@/images/logo5.png';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const visibleOnlyPath = [
    Route.HOME,
    Route.SHOP
  ];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <strong>
{/*           <span>
            Developed by
            {' '}
              <div>
                <div>Muhammad Taha Nandgaonkar </div>
                <div>Muhammad Taha Nandgaonkar </div>
                <div>Muhammad Taha Nandgaonkar </div>
                <div>Muhammad Taha Nandgaonkar </div>
                
              </div>
              
            
            <a href="https://github.com/akk1310">@Muhammad Taha Nandgaonkar and team</a>
          </span> */}
          <span>
            {/* Developed by */}
            {' '}
            
            {/* <a href="https://github.com/akk1310">@Adnan Kundlik and team</a> */}
            <div>
              <div  >Developed by:</div>
              <div>Muhammad Taha Nandgaonkar</div>
              <div>Affan Deshmukh</div>
              <div>Saurav Wadkar </div>
            </div>
          </span>
        </strong>
      </div>
      <div className="footer-col-2">
        <img alt="Footer logo" className="footer-logo" src={logo} />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className="footer-col-3">
        <strong>
          <span>
            Follow for more
            {/* <a href="https://github.com/jgudo/ecommerce-react">HERE</a> */}
          </span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
