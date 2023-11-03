
/*
 This function returns the total sum of the prices
 of the products in the cart
*/

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price);
    return sum
}