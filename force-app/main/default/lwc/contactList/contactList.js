import { LightningElement } from 'lwc';

export default class ContactList extends LightningElement {

    contacts = [
        {
            Id : 1,
            Name : "Abhijeet Yadav",
            Email : "abhijeetlwc@gmail.com",
            Phone : "1234567890"
        },
        {
            Id : 2,
            Name : "Shweta Yadav",
            Email : "shwetalwc@gmail.com",
            Phone : "1234567890"
        },
        {
            Id : 3,
            Name : "Ravan Yadav",
            Email : "ravanlwc@gmail.com",
            Phone : "1234567890"
        }
    ];
}