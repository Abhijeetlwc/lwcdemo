import { LightningElement } from 'lwc';

export default class QuickCase extends LightningElement {
    subject;
    description;
    statusvalue;
    originvalue;
    priorityvalue;
    //status;
    //origin;
    //priority;

    handleChange(event){
        let name= event.target.name;
        let val = event.target.value;

        if(name === 'subject'){
            this.subject = val;
        }
        else if( name === 'decription'){
            this.description = val;
        }
    }

    // use lightning compobox from compomemnt library

    get status(){
        return [
           { label : 'New' , value : 'new' },
           { label : 'Closed' , value : 'Closed' }
        ];
    }

    get origin(){
        return [
           { label : 'Web' , value : 'Web' },
           { label : 'Phone' , value : 'Phone' },
           { label : 'Email' , value : 'Email' },
        ];
    }

    get priority(){
        return [
           { label : 'High' , value : 'High' },
           { label : 'Low' , value : 'Low' },
           { label : 'Medium' , value : 'Medium' },
        ];
    }

    handleCreate(){
       
    }
}