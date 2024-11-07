import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';
import { assets, getAssetById } from './asset.js';

console.log('Assets:', assets);
console.log('Get Asset by ID (ID = 1):', getAssetById(1));

function displayPortfolio() {
    const totalValue = calculatePortfolioValue();
    const portfolioData = document.getElementById('portfolio-data');
    
    const totalValueElement = document.createElement('p');
    totalValueElement.innerHTML = `<strong>Total Portfolio Value:</strong> $${totalValue.toFixed(2)}`;
    portfolioData.appendChild(totalValueElement);

    const allocation = getPortfolioAllocation();
    const allocationDetails = allocation.map(asset => {
        const allocationElement = document.createElement('p');
        allocationElement.innerHTML = `<strong>${asset.name}:</strong> ${asset.allocation.toFixed(2)}%`;
        return allocationElement;
    });


    allocationDetails.forEach(element => portfolioData.appendChild(element));
}

function displayTransaction(transaction) {
    const transactionDetails = document.getElementById('transaction-details');
    

    const transactionElement = document.createElement('p');
    transactionElement.innerHTML = `<strong>Transaction:</strong> ${transaction.getTransactionDetails()}`;
    transactionDetails.appendChild(transactionElement);
}

function displayUpdatedPortfolio() {
    const totalValue = calculatePortfolioValue();
    const updatedPortfolioInfo = document.getElementById('updated-portfolio-info');
    
   
    const updatedValueElement = document.createElement('p');
    updatedValueElement.innerHTML = `<strong>Updated Portfolio Value:</strong> $${totalValue.toFixed(2)}`;
    updatedPortfolioInfo.appendChild(updatedValueElement);

    const allocation = getPortfolioAllocation();
    const updatedAllocationDetails = allocation.map(asset => {
        const allocationElement = document.createElement('p');
        allocationElement.innerHTML = `<strong>${asset.name}:</strong> ${asset.allocation.toFixed(2)}%`;
        return allocationElement;
    });


    updatedAllocationDetails.forEach(element => updatedPortfolioInfo.appendChild(element));
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Initial Portfolio:");
    displayPortfolio();

    const transaction1 = new Transaction(1, 'buy', 20);
    const transaction2 = new Transaction(2, 'sell', 10);

    console.log(`Transaction 1: ${transaction1.quantity} of ${transaction1.asset.name} (${transaction1.type})`);
    console.log(`Transaction 2: ${transaction2.quantity} of ${transaction2.asset.name} (${transaction2.type})`);

    displayTransaction(transaction1);
    displayUpdatedPortfolio();

    displayTransaction(transaction2);
    displayUpdatedPortfolio();
});

