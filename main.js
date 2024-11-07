import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';
import { assets, getAssetById } from './asset.js';

function displaySection(id, title, content) {
    const section = document.getElementById(id);
    section.innerHTML = `
        <h2>${title}</h2>
        ${content}
    `;
}

function displayPortfolio() {
    const totalValue = calculatePortfolioValue();
    const allocation = getPortfolioAllocation();

    const allocationDetails = allocation.map(asset => 
        `<p><strong>${asset.name}:</strong> ${asset.allocation.toFixed(2)}%</p>`
    ).join('');

    displaySection('portfolio-data', 'Initial Portfolio Information', `
        <p><strong>Total Portfolio Value:</strong> $${totalValue.toFixed(2)}</p>
        <h3>Portfolio Allocation:</h3>
        ${allocationDetails}
    `);
}

function displayTransaction(transaction) {
    const transactionDetails = `
        <p><strong>Transaction:</strong> ${transaction.quantity} of ${transaction.asset.name} (${transaction.type})</p>
    `;
    displaySection('transaction-details', 'Transaction Details', transactionDetails);
}

function displayUpdatedPortfolio() {
    const totalValue = calculatePortfolioValue();
    const allocation = getPortfolioAllocation();

    const updatedAllocationDetails = allocation.map(asset => 
        `<p><strong>${asset.name}:</strong> ${asset.allocation.toFixed(2)}%</p>`
    ).join('');

    displaySection('updated-portfolio-info', 'Updated Portfolio Information', `
        <p><strong>Updated Portfolio Value:</strong> $${totalValue.toFixed(2)}</p>
        <h3>Updated Portfolio Allocation:</h3>
        ${updatedAllocationDetails}
    `);
}

document.addEventListener("DOMContentLoaded", () => {

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

console.log('Assets:', assets);
console.log('Get Asset by ID (ID = 1):', getAssetById(1));




