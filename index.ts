
install : npm install typescript ts-node

start: npx ts-node ./src/index.ts

clone project repo: git clone https://github.com/mayoljonathan/products_app


import fs from 'fs';

interface Product {
  id: string;
  name: string;
  unit_price: number;
  quantity: number;
}



let productData: Product[] = [];
if (fs.existsSync('./data.json')) {
  const fileData = fs.readFileSync('./data.json', 'utf8');
  productData = JSON.parse(fileData);
}





function addProduct(newProduct:Product) {
  



  const isDuplicate = productData.some((product) => product.id === newProduct.id);
  if (isDuplicate) {
    console.log('ERROR!! Product have the same ID');
  } else {
    productData.push(newProduct);
    fs.writeFileSync('./data.json', JSON.stringify(productData, null, 2));
    console.log('PRODUCT ADDED SUCCESSFULLY ');
  }
}
//ADD PRODUCT
const newProduct: Product = 
  {
    "id": "52",
    "name": "Pomelo",
    "quantity": 54,
    "unit_price": 45
  }
 
addProduct(newProduct);





          /*





const data=fs.readFileSync('./data.json')
console.log(data.toString());







//function productList(){  const availableStock=productData.filter((product) => product.quantity>=1) if(availableStock){}}


*/
