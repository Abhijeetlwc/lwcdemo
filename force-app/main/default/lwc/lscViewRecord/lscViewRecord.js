import { LightningElement,api } from 'lwc';

export default class LscViewRecord extends LightningElement {

    @api recordId;
    @api objectApiName;

    handleSubmit(){

        alert(' Submitted');
    }

    handleSuccess(){

        alert(' Successfully');
    }
}