import {  Observable, Observer } from "rxjs";

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

const obs$ = new Observable( subscriber => {

    subscriber.next('Hola');
    
    subscriber.next('Mundo');

    subscriber.next('Hola');
    
    subscriber.next('Mundo');

    // Forzar error

    // const a = undefined;
    // a.nombre = "pepito"

    subscriber.complete()

    subscriber.next('Hola');
    
    subscriber.next('Mundo');

});


obs$.subscribe( observer )



// obs$.subscribe(
//     resp => {
//     console.log(resp);
//     }, 
//     error => {
//         console.warn(error);
//     },
//     () => {
//         console.info('Completado')
//     }   
    
// )