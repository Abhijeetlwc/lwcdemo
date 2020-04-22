import { LightningElement, track} from 'lwc';

export default class CalculatorCmp extends LightningElement {

    number1;
    number2;

    @track result;
    @track result1;
    @track result2;
    @track result3;
    handleChangeEvent(event){
         const val = event.target.value;
         const name = event.target.name;

         if(name == 'number1'){
             this.number1 = val;
         }
         else{
             this.number2 = val;
         }
    }

    dosum(){
         const sum = parseInt(this.number1) + parseInt(this.number2);
         this.result = sum;
    }

    dosubs(){
        const subs = parseInt(this.number1) - parseInt(this.number2);
        this.result1 = subs;

    }

    domulti(){
        const multi = parseInt(this.number1) * parseInt(this.number2);
        this.result2 = multi;

    }

    dodiv(){
        const div = parseInt(this.number1) / parseInt(this.number2);
        this.result3 = div;

    }
}