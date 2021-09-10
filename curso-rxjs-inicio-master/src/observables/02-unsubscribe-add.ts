import {  Observable, Observer, Subscriber } from "rxjs";

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


const intervalo$ =  new Observable<Number> ( subscriber => {

    // Crear contador 1,2,3,4,5...
    let count: number = 0;

    const interval = setInterval( () => {
        count++;
        subscriber.next(count);
    }, 1000)

    setTimeout(() => {
        subscriber.complete();
    }, 1500);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido...');
    }
    
})


// let subs = intervalo$.subscribe( num => {
//     console.log('Num:', num )
// })

// let sub2 = intervalo$.subscribe( num => {
//     console.log('Num:', num )
// })

// let sub3 = intervalo$.subscribe( num => {
//     console.log('Num:', num )
// })

const sub1 = intervalo$.subscribe( observer )

const sub2 = intervalo$.subscribe( observer )

const sub3 = intervalo$.subscribe( observer )

sub1.add( sub2.add( sub3 ) );

setTimeout(() => {
    sub1.unsubscribe();
    // sub2.unsubscribe();
    // sub3.unsubscribe();
    console.log('Completado timeout')
}, 6000);