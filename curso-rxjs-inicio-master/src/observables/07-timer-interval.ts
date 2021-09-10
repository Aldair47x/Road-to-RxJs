import {  Observer, fromEvent, of, range, interval, timer } from "rxjs";



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

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5)

// const interval$ = interval(1000);

// const timer$ = timer(2000, 1000);
const timer$ = timer( hoyEn5 );


console.log('Inicio');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Fin');