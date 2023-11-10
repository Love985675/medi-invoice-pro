import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import BillTable from "./components/BillTable";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <SearchBar />
      
      <Footer />
    </div>
  );
}

export default App;
