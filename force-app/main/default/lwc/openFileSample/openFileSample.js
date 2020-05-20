import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class OpenFileSample extends NavigationMixin(LightningElement) {

    navigateToFiles(){

        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName: 'filePreview'
            },
            state : {
                recordIds: '0069D000002bz1PQAQ,069xx000000000BAAQ',
                selectedRecordId:'0069D000002bz1PQAQ'
            }
        });
    }

}