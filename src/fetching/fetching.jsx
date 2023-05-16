async function getProducts(state) {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  state(data.products);
}

export { getProducts };
