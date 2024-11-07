import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';
import { assets, getAssetById } from './asset.js';


const updatePortfolioDisplay = () => {
    const portfolioData = document.getElementById('portfolio-data');
    if (!portfolioData) {
        console.error('Element with id "portfolio-data" not found!');
        return;
    }


    portfolioData.innerHTML = '';

    const allocation = getPortfolioAllocation();
    

    const allocationTitle = document.createElement('h4');
    allocationTitle.textContent = "Portfolio Allocation:";
    portfolioData.appendChild(allocationTitle);

    allocation.forEach(({ name, allocation }) => {
        const allocationElement = document.createElement('p');
        allocationElement.textContent = `${name}: ${allocation.toFixed(2)}%`;
        portfolioData.appendChild(allocationElement);
    });
};


const displayTransaction = (transaction) => {
    const transactionDetails = document.getElementById('transaction-details');
    if (!transactionDetails) {
        console.error('Element with id "transaction-details" not found!');
        return;
    }


    const transactionElement = document.createElement('p');
    transactionElement.textContent = `Transaction: ${transaction.getTransactionDetails()}`;
    transactionDetails.appendChild(transactionElement);
};


const updateUpdatedPortfolioDisplay = () => {
    const updatedPortfolioInfo = document.getElementById('updated-portfolio-info');
    if (!updatedPortfolioInfo) {
        console.error('Element with id "updated-portfolio-info" not found!');
        return;
    }


    updatedPortfolioInfo.innerHTML = '';

    const allocation = getPortfolioAllocation();


    const updatedAllocationTitle = document.createElement('h4');
    updatedAllocationTitle.textContent = "Updated Portfolio Allocation:";
    updatedPortfolioInfo.appendChild(updatedAllocationTitle);

    allocation.forEach(({ name, allocation }) => {
        const allocationElement = document.createElement('p');
        allocationElement.textContent = `${name}: ${allocation.toFixed(2)}%`;
        updatedPortfolioInfo.appendChild(allocationElement);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("Initial Portfolio:");


    updatePortfolioDisplay();  


    const transaction1 = new Transaction(1, 'buy', 20);
    const transaction2 = new Transaction(2, 'sell', 10);

    console.log(`Transaction 1: ${transaction1.quantity} of ${transaction1.asset.name} (${transaction1.type})`);
    console.log(`Transaction 2: ${transaction2.quantity} of ${transaction2.asset.name} (${transaction2.type})`);

  
    displayTransaction(transaction1);
    updateUpdatedPortfolioDisplay();  

    displayTransaction(transaction2);
    updateUpdatedPortfolioDisplay();  
});
console.log('Assets:', assets); console.log('Get Asset by ID (ID = 1):', getAssetById(1));
