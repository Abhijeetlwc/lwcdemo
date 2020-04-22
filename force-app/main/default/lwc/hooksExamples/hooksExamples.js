import { LightningElement } from 'lwc';

export default class HooksExamples extends LightningElement {

    name = 'Abhijeet ';


    constructor(){
        super();
        console.log(' Inside Constructor');
        this.name = this.name + ' Yadav';
    }

    connectedCallback(){
        console.log(' connectedCallback');
    }

    disconnectedCallback(){
        console.log(' disconnectedCallback');
    }

    renderedCallback(){
        console.log(' renderedCallback');
    }

   /* render(){
        return
    }*/

    errorCallback(error, stack){
        console.error();
    }
}