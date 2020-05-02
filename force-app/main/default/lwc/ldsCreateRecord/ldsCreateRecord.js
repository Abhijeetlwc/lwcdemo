import { LightningElement,api } from 'lwc';

export default class LdsCreateRecord extends LightningElement {

    @api objectApiName;

    handlesuccess(){
        alert(' record created');
    }

    handleSuccess(){
        alert(' record is created');
    }
}