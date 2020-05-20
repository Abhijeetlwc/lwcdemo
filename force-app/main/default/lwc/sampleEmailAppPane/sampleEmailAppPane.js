import { LightningElement, api } from 'lwc';

export default class SampleEmailAppPane extends LightningElement {

    @api people;
    @api messageBody;
    @api subject;
}