import { LightningElement } from 'lwc';

export default class htmlEventsBasics extends LightningElement {

    message = "Welcome Abhijeet";

    handleChange(event){
        const val = event.target.value;
        const lbl = event.target.label;
        console.log(' Value is ' + val + ' Label is ', lbl);
    }

}