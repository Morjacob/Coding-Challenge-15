import { assets } from './asset.js'; 


export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        percentage: ((asset.price * asset.quantity) / totalValue) * 100
    }));
}