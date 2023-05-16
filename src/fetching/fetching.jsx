async function getProducts(state) {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  state(data.products);
}

async function categorySmartPhone(category, state) {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  const data = await response.json();
  console.log(data);
  state(data.products)
}

async function uniqueProduct(id, state) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();

  state(data);
}

export { getProducts, categorySmartPhone, uniqueProduct };
