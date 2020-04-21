import { LightningElement } from 'lwc';

export default class IfElseDemo extends LightningElement {

    isTom = false;
    isJerry = true;

    showTom(){
          this.isJerry = false;
          this.isTom = true;
    }

    showJerry(){
         this.isTom = false;
         this.isJerry = true;

    }
}