async function getProducts(nProduct) {
  let response;

  try {
    response = await fetch(`https://fakestoreapi.com/products?limit=${nProduct}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }

  return response.json();
}

function displayProductInPrettyFormat(products) {
  for (let i = 0; i < products.length; i++) {
    console.log(`ID           : ${products[i].id}`);
    console.log(`Title        : ${products[i].title}`);
    console.log(`Price        : ${products[i].price}`);
    console.log(`Description  : ${products[i].description}`);
    console.log(`Category     : ${products[i].category}`);
    console.log(`Image        : ${products[i].image}`);
    console.log(`Rating Rate  : ${products[i].rating.rate}`);
    console.log(`Rating Count : ${products[i].rating.count}`);
    console.log("==============================================");
  }
}

(async () => {
  try {
    const products = await getProducts(10);
    displayProductInPrettyFormat(products);
  } catch (error) {
    console.error(error);
  }
})();
