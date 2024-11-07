

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';
import { assets, getAssetById } from './asset.js';


function displayPortfolio() {
    const totalValue = calculatePortfolioValue();
    const portfolioInfo = document.getElementById('portfolio-info');
    portfolioInfo.innerHTML = `
        <p><strong>Total Portfolio Value:</strong> $${totalValue.toFixed(2)}</p>
    `;

    const allocation = getPortfolioAllocation();
    const allocationDetails = allocation.map(asset => 
        `<p><strong>${asset.name}:</strong> ${asset.percentage.toFixed(2)}%</p>`
    ).join('');
    
    portfolioInfo.innerHTML += `<h3>Portfolio Allocation:</h3>${allocationDetails}`;
}


function displayTransaction(transaction) {
    const transactionDetails = document.getElementById('transaction-details');
    transactionDetails.innerHTML += `
        <p><strong>Transaction:</strong> ${transaction.getTransactionDetails()}</p>
    `;
}


function displayUpdatedPortfolio() {
    const totalValue = calculatePortfolioValue();
    const updatedPortfolioInfo = document.getElementById('updated-portfolio-info');
    updatedPortfolioInfo.innerHTML = `
        <p><strong>Updated Portfolio Value:</strong> $${totalValue.toFixed(2)}</p>
    `;

    const allocation = getPortfolioAllocation();
    const updatedAllocationDetails = allocation.map(asset => 
        `<p><strong>${asset.name}:</strong> ${asset.percentage.toFixed(2)}%</p>`
    ).join('');
    
    updatedPortfolioInfo.innerHTML += `<h3>Updated Portfolio Allocation:</h3>${updatedAllocationDetails}`;
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("Initial Portfolio:");
    displayPortfolio();  


    const transaction1 = new Transaction(1, 'buy', 20); 
    const transaction2 = new Transaction(2, 'sell', 10); 


    displayTransaction(transaction1);
    displayUpdatedPortfolio();  

    displayTransaction(transaction2);
    displayUpdatedPortfolio();  
});

