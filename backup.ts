import fs from 'fs';

interface Product {
   product: string;
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

// function addProduct(newProduct:Product) {
//    const isDuplicate = productData.some((product) => product.id === newProduct.id);
//    if (isDuplicate) {
//      console.log('ERROR!! Product have the same ID');
//    } else {
//      productData.push(newProduct);
//      fs.writeFileSync('./data.json', JSON.stringify(productData, null, 2));
//      console.log('PRODUCT ADDED SUCCESSFULLY ');
//    }
//  }

//  const newProduct: Product = 
//    {
//     "id": "16",
//     "name": "Floormat",
//      "quantity": 53,
//     "unit_price": 45   }
 
// addProduct(newProduct);




//                                    /* LIST ALL PRODUCTS*/                                          

// /*                                 NOTE: NOT YET DESCENDING!!!!!!!!!!!!!!!                                    */

// function productList(){
//     const availableStocks=productData.filter((product)=>product.quantity>=1);
   
//      availableStocks.forEach((product)=>{
//      const total_price= product.unit_price / product.quantity;
//      console.log( `Product Name:${product.name}            Unit Price: ${product.unit_price}         Total Price: ${total_price}`);
//    })
// }
//    productList(); 





//                                       /*UPDATE A PRODUCT*/

  



// function updateProduct(productId: string, quantity: number, unitPrice: number)
//  {
//   const productIndex = productData.findIndex ((product) => product.id === productId);
//   if (productIndex === -1) {
//     console.log('Product with the provided ID does not exist. Cannot update.');
//   }else {
//   productData[productIndex].id===productId;
//   productData[productIndex].quantity ===quantity;
 
//   fs.writeFileSync('./data.json', JSON.stringify(productData, null, 2));
//      console.log('PRODUCT ADDED SUCCESSFULLY ');
  
  
//   }
// }


// const productUpdates:Product{
//   "id":"1",
//   "quantity":23,
//   "unit_price":22
// }






// //call the function unknown parameter 

// updateProduct(productUpdates)

// // const data=fs.readFileSync('./data.json')
// // console.log(data.toString());


