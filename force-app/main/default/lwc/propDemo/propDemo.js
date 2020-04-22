import { LightningElement, track, api } from 'lwc';

export default class PropDemo extends LightningElement {
    @track message = 'Reactive Property';

    @api message1 = 'Reactive Property using @api decorator';

    get name(){
        return 'Abhijeet Yadav';
    }

    get changedMessage(){
        return this.message1+ ' Added value using get prop!';
    }

    handleChange(event){
        this.message1 = event.target.value;
        //Console.log(' Updated Message ', this.message);
    }
}