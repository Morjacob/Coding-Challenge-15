const { assets, getAssetById } = require('./asset');

class transaction {
    constructor (assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
    }
}

execute() 
    const asset = getAssetById(this.assetId); 

    if (!asset) {
        throw new Error(`Asset with ID ${this.assetId} not found`);
    }


    if (this.type === 'buy') {
        asset.quantity += this.quantity; 
        console.log(`Bought ${this.quantity} of ${asset.name}`);
    } 
   
    else if (this.type === 'sell') {
        if (asset.quantity < this.quantity) {
       
            throw new Error(`Insufficient quantity for sale of ${asset.name}`);
        }
        asset.quantity -= this.quantity;
        console.log(`Sold ${this.quantity} of ${asset.name}`);
    } 
   
    else {
        throw new Error('Transaction type must be either "buy" or "sell"');
    };



module.exports = { Transaction };