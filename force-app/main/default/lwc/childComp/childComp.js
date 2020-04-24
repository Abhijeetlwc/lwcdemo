import { LightningElement, api, track } from 'lwc';

export default class ChildComp extends LightningElement {

    @api message;
    @api pageno;
    @api contact;
    @track date = new Date();

    @api
    childMethod(messageFromParent, page_no){
        this.date = new Date();
        this.message = messageFromParent;
        this.pageno = page_no;
    }

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