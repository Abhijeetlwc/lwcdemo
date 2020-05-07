import { createElement } from 'lwc';
// createElement works only for test cases.
import Hello from 'c/helloWorld';

afterAll(() =>{
    while (document.body.firstChild){
        document.body.removeChild(document.body.firstChild);
    }
})

// test class name as compare to apex
describe('c-hello', () => {
   /* afterEach(() =>{
        while (document.body.firstChild){
            document.body.removeChild(document.body.firstChild);
        }
    });*/
    it('display greeting', () => {
        // create Element
        const element = createElement('c-hello_world', {
            is: Hello
        });
        // adding our component into DOM
        document.body.appendChild(element);
        // verify displayed greeting
        const div = element.shadowRoot.querySelector('p');
        // assert statement
        expect(div.textContent).toBe('Lightning Web Component');
    });
    it('display not greeting', () => {
        const element = createElement('c-hello_world', {
            is: Hello
        });
        document.body.appendChild(element);
        const div = element.shadowRoot.querySelector('p');
        expect(div.textContent).not.toBe('Lightning Web Component!!');
    });
});