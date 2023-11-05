import React, { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [medicineList, setMedicineList] = useState([]); // Array to store available medicines
  const [bill, setBill] = useState([]); // Array to store selected medicines for the bill

  // Implement your search and add to bill logic here

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Search for medicines..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Add a list of medicines with add to bill functionality */}
      <div className="medicine-list">
        {/* Medicine list items go here */}
      </div>
      <div className="bill">
        {/* Bill table goes here */}
      </div>
    </section>
  );
}

export default SearchBar;
