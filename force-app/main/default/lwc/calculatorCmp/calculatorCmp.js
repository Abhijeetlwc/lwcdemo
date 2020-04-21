import { LightningElement } from 'lwc';

export default class CalculatorCmp extends LightningElement {

    number1;
    number2;

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
         alert(sum);
    }

    dosubs(){
        const subs = parseInt(this.number1) - parseInt(this.number2);
        alert(subs);

    }

    domulti(){
        const multi = parseInt(this.number1) * parseInt(this.number2);
        alert(multi);

    }

    dodiv(){
        const div = parseInt(this.number1) / parseInt(this.number2);
        alert(div);

    }
}