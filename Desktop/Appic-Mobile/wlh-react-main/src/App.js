import React, { useState } from "react";
import Header from "../src/lib/components/header/Header";
import HorizontalCard from "../src/lib/components/horizontalcard/HorizontalCard"
import "./App.css";
import RTBDataGrid from "./lib/components/RTBDataGrid/index";

import RTBInfiniteGrid from "./lib/components/RTBInfiniteGrid/index";
function App() {
  return (
    <>
      {/* <Header /> */}
	  {/* <HorizontalCard/ > */}
	  {/* <RTBDataGrid/>
     */}
     <RTBInfiniteGrid/>
    </>
  );
}

export default App;
