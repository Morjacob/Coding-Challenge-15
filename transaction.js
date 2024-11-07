
import { assets, getAssetById } from './asset.js';

export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;

        
        this.processTransaction();
    }

    processTransaction() {
       
        const asset = getAssetById(this.assetId);

       
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
          
            throw new Error("Invalid transaction type. Please use 'buy' or 'sell'.");
        }
    }

   
    getTransactionDetails() {
        const asset = getAssetById(this.assetId);
        return `${this.type.charAt(0).toUpperCase() + this.type.slice(1)} ${this.quantity} of ${asset.name} at $${asset.price} each. New quantity: ${asset.quantity}`;
    }
}
