import {  Observable, Observer, Subject, Subscriber } from "rxjs";

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

const intervalo$ = new Observable<number>( subs => {
    const intervalId = setInterval( () => subs.next( Math.random() ), 1000 )

    return () => {
        clearInterval( intervalId );
        console.log('Intervalo destruido');
    };
});

const subjects$ = new Subject();

const intervalSubject = intervalo$.subscribe( subjects$ )

// const subs1 = intervalo$.subscribe( rndNumber => {
//     console.log( 'subs1: ', rndNumber)
// });

// const subs2 = intervalo$.subscribe( rndNumber => {
//     console.log( 'subs2: ', rndNumber)
// });

// const subs1 = subjects$.subscribe( rndNumber => {
//     console.log( 'subs1: ', rndNumber)
// });

// const subs2 = subjects$.subscribe( rndNumber => {
//     console.log( 'subs2: ', rndNumber)
// });

const subs1 = subjects$.subscribe( observer )

const subs2 = subjects$.subscribe( observer )

setTimeout(() => {
    subjects$.next(10);
    subjects$.complete();
    intervalSubject.unsubscribe();
}, 3500);

