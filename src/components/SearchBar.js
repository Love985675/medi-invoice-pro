import React, { useState } from "react";
import medicineData from "../data/medicineData";
import BillTable from "./BillTable";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [medicineList, setMedicineList] = useState([]);
  const [bill, setBill] = useState([]);

  const handleSearch = (query) => {
    const filteredMedicines = medicineData.filter((medicine) =>
      medicine.name.toLowerCase().includes(query.toLowerCase())
    );
    setMedicineList(filteredMedicines);
  };

  const addToBill = (selectedMedicine) => {
    setBill((prevBill) => [...prevBill, { ...selectedMedicine, quantity: 1 }]);
  };

  const handleSelectMedicine = (selectedMedicine) => {
    addToBill(selectedMedicine);
    setMedicineList([]);
    setSearchTerm("");
  };

  const updateQuantity = (id, quantity) => {
    setBill((prevBill) =>
      prevBill.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeFromBill = (id) => {
    setBill((prevBill) => prevBill.filter((item) => item.id !== id));
  };

  const handleSearchTermChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    handleSearch(newSearchTerm);
  };

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Search for medicines..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <div className="medicine-list">
        {medicineList.map((medicine) => (
          <div key={medicine.id} onClick={() => handleSelectMedicine(medicine)}>
            {medicine.name} - ${medicine.price}
          </div>
        ))}
      </div>
      <div className="bill">
        <h2>Bill Summary</h2>
        <BillTable
          bill={bill}
          updateQuantity={updateQuantity}
          removeFromBill={removeFromBill}
        />
      </div>
    </section>
  );
}

export default SearchBar;
