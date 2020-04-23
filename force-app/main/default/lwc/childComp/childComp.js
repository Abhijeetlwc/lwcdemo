import { LightningElement, api, track } from 'lwc';

export default class ChildComp extends LightningElement {

    @api message;
    @api pageno;
    @api contact;

    handleEvent(){
        
        const eventS = new CustomEvent(
            'simple',
            {
               // detail : "Message from Child Component"
               //detail : { message : this.message, pageno : this.pageno, staticval : "Abhijeet Yadav"}
               bubbles : true,
               composed : false
            }
        );
        
        this.dispatchEvent(eventS);
    }

}