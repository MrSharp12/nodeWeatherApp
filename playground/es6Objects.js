// object property shorthand
const name = 'Matt';
const userAge = 40;

const user = {
    name,
    age: userAge,
    location: 'Indianapolis'
};

// console.log(user);

// object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
};

// const label = product.label;
// const stock = product.stock;

// const {label: productLabel, stock, rating = 5} = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
};

transaction('order', product);