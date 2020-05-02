import { LightningElement, api, track, wire } from 'lwc';
import getAllCases from '@salesforce/apex/CaseController.getAllCases';
export default class WireMethod extends LightningElement {
    @api records;
    @api errors;
    @track subject;

    handleChange(event){

        const sVal = event.target.value;
        this.subject = sVal;
    }

    /*

        @wire(getAllCases) cases;
        cases
             - data
             - error

        @wire(getAllCases) cases;
        wiredCase({ data, error }){
            - data => caseList
            - error => error (An Object)
        }

    */

    /*

         @wire(getAllCases) cases;

    */

    @wire(getAllCases, {
        subject : '$subject'
    }) 
     wiredCases({
         data, error
    }){
        if(data){
            this.records = data;
            this.errors = undefined;
        }
        if(error){
            this.errors = error;
            this.records = undefined;
            
        }

    }
}