/* eslint-disable no-undef */
import { LightningElement, wire } from 'lwc';

import { getRecord } from 'lightning/uiRecordApi';

export default class ProductCard extends LightningElement {

    recordId;
    product;
    name='';

    @wire(getRecord, { recordId : '$recordId', fields : '$nameField'})
    wiredRecord({ data }) {
        if(data) {
            this.product = data;
            this.name = data.fields.Name.value;
        }
    }
}