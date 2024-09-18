"use client";

import { useState } from "react";

const Categories = () => {
  const [continent, setContinent] = useState();

  const settingCountryName = (e: any) => {
    setContinent(e.target.innerText);
  };

  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div
        onClick={(e) => {
          settingCountryName(e);
        }}
        className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100"
      >
        Asia
      </div>
      <div
        onClick={(e) => {
          settingCountryName(e);
        }}
        className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100"
      >
        Europe
      </div>
      <div
        onClick={(e) => {
          settingCountryName(e);
        }}
        className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100"
      >
        North America
      </div>
      <div
        onClick={(e) => {
          settingCountryName(e);
        }}
        className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100"
      >
        South America
      </div>
      <div
        onClick={(e) => {
          settingCountryName(e);
        }}
        className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100"
      >
        Africa
      </div>
      <div
        onClick={(e) => {
          settingCountryName(e);
        }}
        className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100"
      >
        Austalia & Oceania
      </div>
    </div>
  );
};

export default Categories;
