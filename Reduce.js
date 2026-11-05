const list = [1, 2, 3, 4, 5, 6, 7];

const sum = list.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);

const companies = [
    { name: 'Samsung', marketValue: 100000, CEO: 'Kim Hyun Suk', founded: 1938, country: 'South Korea' },
    { name: 'Microsoft', marketValue: 80000, CEO: 'Satya Nadella', founded: 1975, country: 'USA' },
    { name: 'Intel', marketValue: 50000, CEO: 'Pat Gelsinger', founded: 1968, country: 'USA' },
    { name: 'Facebook', marketValue: 75000, CEO: 'Mark Zuckerberg', founded: 2004, country: 'USA' },
    { name: 'Spotify', marketValue: 30000, CEO: 'Daniel Ek', founded: 2006, country: 'Sweden' },
    { name: 'Apple', marketValue: 120000, CEO: 'Tim Cook', founded: 1976, country: 'USA' },
];

const totalMarketValue = companies.reduce((accumulator, company) => {
    return accumulator + company.marketValue;
}, 0);

console.log(totalMarketValue);


const cart = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 2 },
    { productName: 'Alface', pricePerKg: 3, kg: 1.3 },
    { productName: 'Tomate', pricePerKg: 7, kg: 3 },
    { productName: 'Cenoura', pricePerKg: 4, kg: 2.5 },
    { productName: 'Batata', pricePerKg: 2, kg: 5 },
    { productName: 'Cebola', pricePerKg: 6, kg: 1.5 },
    { productName: 'Pimentão', pricePerKg: 8, kg: 2 },
];

const totalCartValue = cart.reduce((accumulator, item) => {
    return accumulator + (item.pricePerKg * item.kg);
}, 0);

console.log(`Total value of the cart: R$ ${totalCartValue.toFixed(2)}`);