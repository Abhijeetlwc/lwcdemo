import { createElement } from 'lwc';
// createElement works only for test cases.
import Hello from 'c/helloBinding';

/*afterAll(() =>{
    while (document.body.firstChild){
        document.body.removeChild(document.body.firstChild);
    }
})*/

describe('c-hello-binding' , () => {

    afterEach(() =>{
        while (document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('onchange input', () => {
        // create element
        const element = createElement('c-hello-binding', {
            is: Hello
        });
        document.body.appendChild(element);

        const EXPECTED = 'Welcome Message';
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).not.toBe('Lightning Web Component');

        // trigger new greeting
        const inputEl = element.shadowRoot.querySelector('lightning-input');
        inputEl.value = EXPECTED;
        inputEl.label = 'Test Input';
        inputEl.name = 'test Name';

        // HTML Events
        inputEl.dispatchEvent(new CustomEvent('change'));

        //promise
        return Promise.resolve().then(() => {
             //expect(div.textContent).toBe(' ${EXPECTED}' );
             expect(div.textContent).toBe('Welcome Message');
        });
    });

    it('displays button click', () => {
        // create element
        const element = createElement('c-hello-binding', {
            is: Hello
        });
        document.body.appendChild(element);

        const EXPECTED = 'Button Clicked';
        const div = element.shadowRoot.querySelector('div');
        expect(div.textContent).not.toBe('Lightning Web Component');

        // trigger new greeting
        const buttonEle = element.shadowRoot.querySelector('lightning-button');
        buttonEle.value = EXPECTED;
        buttonEle.variant = 'brand';
        buttonEle.name = 'test';

        // HTML Events
        buttonEle.dispatchEvent(new CustomEvent('click'));

        //promise
        return Promise.resolve().then(() => {
             //expect(div.textContent).toBe( '${EXPECTED}' );
             expect(div.textContent).toBe('Button Clicked');
        });
    });

});