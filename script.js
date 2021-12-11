function Cart() {
  var [products, setProducts] = React.useState([
  { name: "monitor", qty: 0, price: 6000 },
  { name: "mouse", qty: 0, price: 2500 },
  { name: "keyboard", qty: 0, price: 1800 },
  { name: "speaker", qty: 0, price: 4500 },
  { name: "headphones", qty: 0, price: 2300 },
  { name: "laptop", qty: 0, price: 55000 }]);

  var [totalQty, setTotalQty] = React.useState(0);
  var [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    var totalQtyfromArray = products.map(a => a.qty);
    var totalPrice = products.map(a => a.qty * a.price);
    setTotalPrice(totalPrice.reduce((r, t) => r + t));
    setTotalQty(totalQtyfromArray.reduce((r, t) => r + t));
  }, [products]);

  const handleClick = (index, qty) => {
    var chnageqty = [...products];
    chnageqty[index] = { ...chnageqty[index], qty: qty };
    setProducts(chnageqty);
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h1", null, "Cart")),

    products === null || products === void 0 ? void 0 : products.map((item, i) => /*#__PURE__*/
    React.createElement("div", { key: i }, /*#__PURE__*/
    React.createElement("h2", null,
    item.name, " =>Price:", item.price, " ", "Qty:", item.qty), /*#__PURE__*/

    React.createElement("div", null, /*#__PURE__*/
    React.createElement("button", { onClick: () => handleClick(i, item.qty + 1) }, "+"), "\xA0\xA0\xA0", /*#__PURE__*/
    React.createElement("button", { onClick: () => item.qty != 0 ? handleClick(i, item.qty - 1) : null }, "-")))), /*#__PURE__*/



    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h2", null, "Total item:", totalQty), /*#__PURE__*/
    React.createElement("h2", null, "Total Amount:", totalPrice))));



}
ReactDOM.render( /*#__PURE__*/React.createElement(Cart, null), document.getElementById("root"));
