import { LightningElement, api } from 'lwc';

export default class OpportunityDetails extends LightningElement {

    @api recordId;
    @api objectApiName;

    constructor(){
        super();
        console.log(' record Id', recordId);
        console.log(' object api name', this.objectApiName);
    }
}