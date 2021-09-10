import {  Observable, Observer, Subject, Subscriber, of } from "rxjs";

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

const obs$ = of(1,2,3,4,5,6);

obs$.subscribe( observer );

console.log('Fin del obs$');