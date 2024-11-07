export const assets = [
    { id: 1, name: `Corporate Bond`, type:`bond`, price: 130, quantity: 20 },
    { id: 2, name: `Target Stock`, type: `stock`, price: 110, quantity: 40 },
    { id: 3, name: `Disney Stock`, type: `stock`, price: 140, quantity: 50 },
];

export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}

module.exports = {
    assets,
    getAssetById

};