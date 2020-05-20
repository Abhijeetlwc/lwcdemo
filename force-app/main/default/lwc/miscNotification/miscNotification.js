import { LightningElement } from 'lwc';
import { showToastEvent } from 'lightning/platformShowToastEvent';

export default class MiscNotification extends LightningElement {

    title = "Sample Title";
    message = 'Sample Message';
    variant = 'error';
    variantOptions = [
        { label : 'error', value : 'error' },
        { label : 'success', value : 'success' },
        { label : 'warning', value : 'warning' },
        { label : 'info', value : 'info' },
    ];

    titleChange(event){
        this.title = event.target.value;
    }

    messageChange(event){
        this.message = event.target.value;
    }

    variantChange(event){
        this.variant = event.target.value;
    }

    showNotification(){
        const evt = new showToastEvent({
            title : this.title,
            message : this.message,
            variant : this.variant,
        });
        this.dispatchEvent(evt);
    }

}