function Cart() {
  var [products, setProducts] = React.useState([
    { name: "monitor", qty: 0, price: 6000 },
    { name: "mouse", qty: 0, price: 2500 },
    { name: "keyboard", qty: 0, price: 1800 },
    { name: "speaker", qty: 0, price: 4500 },
    { name: "headphones", qty: 0, price: 2300 },
    { name: "laptop", qty: 0, price: 55000 }
  ]);
  var [totalQty, setTotalQty] = React.useState(0);
  var [totalPrice, setTotalPrice] = React.useState(0);
  
  React.useEffect(() => {  
    var totalQtyfromArray = products.map((a) => a.qty);
    var totalPrice = products.map((a) => a.qty * a.price);
    setTotalPrice(totalPrice.reduce((r, t) => r + t));
    setTotalQty(totalQtyfromArray.reduce((r, t) => r + t));
   }, [products]);

  const handleClick = (index, qty) => {
    var chnageqty = [...products];
    chnageqty[index] = { ...chnageqty[index], qty: qty };
    setProducts(chnageqty);
  };
  
  return (
    <div>
      <div>
        <h1>Cart</h1>
      </div>
      {products?.map((item, i) => (
        <div key={i}>
          <h2>
            {item.name} =>Price:{item.price}{" "}Qty:{item.qty}
          </h2>
          <div>
            <button onClick={() => handleClick(i, item.qty+1)}>+</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => item.qty!=0?handleClick(i, item.qty-1):null}>-</button>
          </div>
        </div>
      ))}
      <div>
        <h2>Total item:{totalQty}</h2>
        <h2>Total Amount:{totalPrice}</h2>
      </div>
    </div>
  );
}
ReactDOM.render(<Cart />, document.getElementById("root"));
