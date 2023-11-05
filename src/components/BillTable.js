import React from "react";

function BillTable() {
  return (
    <section className="bill-table">
      <h2>Invoice Details</h2>
      <table>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>{/* Add bill items here */}</tbody>
      </table>
    </section>
  );
}

export default BillTable;
