import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {

    handleSimpleEvent(event){
       /* const message = event.detail.message;
        const pageno = event.detail.pageno;
        const name = event.detail.staticval;

        console.log(' Message is ' +message);
        console.log(' Page no is ' +pageno);
        console.log(' Name is ' +name);
        alert(' Event handled '+message); */

        console.log(' Message is ', event.target.message);
        console.log(' Page No. is ', event.target.pageno);
    }
}