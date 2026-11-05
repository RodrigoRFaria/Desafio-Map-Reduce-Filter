const companies = [
    { name: 'Samsung', marketValue: 100000, CEO: 'Kim Hyun Suk', founded: 1938, country: 'South Korea' },
    { name: 'Microsoft', marketValue: 80000, CEO: 'Satya Nadella', founded: 1975, country: 'USA' },
    { name: 'Intel', marketValue: 50000, CEO: 'Pat Gelsinger', founded: 1968, country: 'USA' },
    { name: 'Facebook', marketValue: 75000, CEO: 'Mark Zuckerberg', founded: 2004, country: 'USA' },
    { name: 'Spotify', marketValue: 30000, CEO: 'Daniel Ek', founded: 2006, country: 'Sweden' },
    { name: 'Apple', marketValue: 120000, CEO: 'Tim Cook', founded: 1976, country: 'USA' },
];

/*const marketValueOldCompanies = companies.map(company => {
    company.marketValue = company.marketValue + (company.marketValue * 10 / 100);
    return company;
}).filter(company => company.founded < 1990).reduce((acc, company) => acc + company.marketValue, 0);

console.log(marketValueOldCompanies);*/

const marketValueOldCompanies = companies
    .map(company => {
        company.marketValue = company.marketValue + (company.marketValue * 10 / 100);
        return company;
    })
    .filter(company => company.founded < 1990)
    .reduce((acc, company) => acc + company.marketValue, 0);

    console.log(marketValueOldCompanies);