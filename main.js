
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';
import { assets, getAssetById } from './asset.js';


function displayPortfolio() {
    const totalValue = calculatePortfolioValue();
    console.log(`Total Portfolio Value: $${totalValue.toFixed(2)}`);

    const allocation = getPortfolioAllocation();
    console.log("Portfolio Allocation:");
    allocation.forEach(asset => {
        console.log(`${asset.name}: ${asset.percentage}%`);
    });
}


console.log("Initial Portfolio:");
displayPortfolio();

const transaction1 = new Transaction(1, 'buy', 20); 
const transaction2 = new Transaction(2, 'sell', 10); 


console.log("\nTransaction 1 (Buy 20 units of Asset 1):");
console.log(transaction1.getTransactionDetails());
displayPortfolio();

console.log("\nTransaction 2 (Sell 10 units of Asset 2):");
console.log(transaction2.getTransactionDetails());
displayPortfolio();


