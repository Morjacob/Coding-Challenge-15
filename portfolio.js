import { assets } from `./asset.js`;

export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();  
    return assets.map(asset => {
        const allocationPercentage = (asset.price * asset.quantity / totalValue) * 100;
        return {
            id: asset.id,
            name: asset.name,
            allocation: allocationPercentage.toFixed(2) + '%'
        };
    });
}


module.exports = {
    calculatePortfolioValue,
    getPortfolioAllocation
};