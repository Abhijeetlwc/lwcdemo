import { LightningElement, track} from 'lwc';
import getAllCases from '@salesforce/apex/CaseController.getAllCases';
export default class Apeximperative extends LightningElement {
    @track subject;
    @track records;
    @track errors;

    handleChange(event){

        const sVal = event.target.value;
        getAllCases({
            subject : sVal
        })

        .then(result =>{
            console.log(' case records ', result)
            this.records = result;
        })

        .catch(error =>{
            console.log(' Error', error)
            this.errors = error;
            
        }
      )
        
    }


}