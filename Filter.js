const list = [20, 3, 234, 12, 5, 7, 9, 1, 0, 4, 100, 50, 2, 6, 8, 1000];

const evenNumbers = list.filter((number) => number > 100);

const newList = list.filter((number) => number % 2 === 0);

console.log(evenNumbers);
console.log(newList);




const companies = [
    { name: 'Samsung', marketValue: 100000, CEO: 'Kim Hyun Suk', founded: 1938, country: 'South Korea' },
    { name: 'Microsoft', marketValue: 80000, CEO: 'Satya Nadella', founded: 1975, country: 'USA' },
    { name: 'Intel', marketValue: 50000, CEO: 'Pat Gelsinger', founded: 1968, country: 'USA' },
    { name: 'Facebook', marketValue: 75000, CEO: 'Mark Zuckerberg', founded: 2004, country: 'USA' },
    { name: 'Spotify', marketValue: 30000, CEO: 'Daniel Ek', founded: 2006, country: 'Sweden' },
    { name: 'Apple', marketValue: 120000, CEO: 'Tim Cook', founded: 1976, country: 'USA' },
];

const companiesFoundedBefore2000 = companies.filter((company) => company.founded < 2000 && company.marketValue > 80000 );

console.log(companiesFoundedBefore2000);