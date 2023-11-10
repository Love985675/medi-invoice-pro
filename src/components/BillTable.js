// Inside the BillTable component
function BillTable({ bill, updateQuantity, removeFromBill }) {
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
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </td>
              <td>₹{item.price.toFixed(2)}</td>
              <td>₹{(item.price / 100 * 8).toFixed(2)}</td>
              <td>₹{(item.quantity * item.price + (item.price / 100 * 8)*item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeFromBill(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default BillTable;
