import {  Observer, fromEvent } from "rxjs";

// coldobservable son los que la data es producida por el mismo observable
// y hot observable cuando la data es producida por fuera del observable

const observer: Observer<any> = {
    next: function (value): void {
        console.log('siguiente [next]:', value )
    },
    error: function (err: any): void {
        throw new Error("Function not implemented.");
    },
    complete: function (): void {
        console.info('completado [obs]');
    }
}

const src1$ = fromEvent<MouseEvent>( document, 'click');
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup');

src1$.subscribe( observer );
src2$.subscribe( observer );