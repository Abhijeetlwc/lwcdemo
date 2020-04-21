import { LightningElement } from 'lwc';

export default class IteratorDemo extends LightningElement {
    contacts = [
        {
            Id : 1,
            Name : "Abhijeet Yadav",
            Email : "abhijeetlwc@gmail.com"
        },
        {
            Id : 2,
            Name : "Shweta Yadav",
            Email : "shwetalwc@gmail.com"
        },
        {
            Id : 3,
            Name : "Ravan Yadav",
            Email : "ravanlwc@gmail.com"
        }
    ]
}