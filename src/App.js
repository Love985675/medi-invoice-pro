import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import BillTable from "./components/BillTable";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
     
      <BillTable />
      <Footer />
    </div>
  );
}

export default App;
