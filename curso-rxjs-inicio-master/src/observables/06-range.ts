import {  Observer, fromEvent, of, range } from "rxjs";

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

// const src$ = of(1,2,3,4,5);
const src$ = range(1,5);

console.log('Inicio');
src$.subscribe( observer );
console.log('Fin');