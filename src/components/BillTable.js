function BillTable({ bill, updateQuantity, removeFromBill }) {
  const totalCost = bill.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  // Calculate the GST (8%)
  const gst = (totalCost * 0.08).toFixed(2);

  // Calculate the total amount (including GST)
  const totalAmount = (parseFloat(totalCost) + parseFloat(gst)).toFixed(2);

  // Calculate the grand total (total cost + GST)
  const grandTotal = (parseFloat(totalCost) + parseFloat(gst)).toFixed(2);

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(
      "<html><head><title>Print Invoice</title></head><body>"
    );

    const tableContent = document.querySelector(".bill-table").cloneNode(true);

    // Remove the "Action" column (last column) from the printed content
    const rows = tableContent.querySelectorAll("tbody tr");
    rows.forEach((row) => row.lastElementChild.remove());
    printWindow.document.write(tableContent.innerHTML);

    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <section className="bill-table">
      <h2>Invoice Details</h2>
      <table>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>GST-8%</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bill.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value))
                  }
                />
              </td>
              <td>₹{item.price.toFixed(2)}</td>
              <td>₹{((item.price / 100) * 8).toFixed(2)}</td>
              <td>
                ₹
                {(
                  item.quantity * item.price +
                  (item.price / 100) * 8 * item.quantity
                ).toFixed(2)}
              </td>
              <td>
                <button onClick={() => removeFromBill(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4"></td>
            <td>Grand Total: ₹{grandTotal}/-</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <center>
        <button className="print-button" onClick={handlePrint}>
          Print Invoice
        </button>
      </center>
    </section>
  );
}

export default BillTable;
