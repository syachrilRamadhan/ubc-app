import React from "react";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-5">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top__icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top__icon_wrapper">
              <FaTwitter />
            </div>
            <div className="header_top__icon_wrapper">
              <FaInstagram />
            </div>
          </div>

          <div className="text-gray-400 text-[20px] cursor-pointer">
            <b>Tokopaedi</b>
          </div>
          <div className="flex gap-4">
            <select className="text-gray-500 text-[12px] w-[70px] p-[8px]" name="currecny" id="currency">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="IDR">IDR</option>
            </select>
            <select className="text-gray-500 text-[12px] w-[90px] p-[10px]" name="languange" id="languange">
              <option value="English">English</option>
              <option value="Indonesia">Indonesia</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
