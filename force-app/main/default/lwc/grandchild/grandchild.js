import { LightningElement } from 'lwc';

export default class Grandchild extends LightningElement {

    handleSimpleEvent(){

        alert(' Grand Child ');
    }
}