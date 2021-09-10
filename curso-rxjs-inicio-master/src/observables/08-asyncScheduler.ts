import {  Observer, asyncScheduler  } from "rxjs";

// const observer: Observer<any> = {
//     next: function (value): void {
//         console.log('siguiente [next]:', value )
//     },
//     error: function (err: any): void {
//         throw new Error("Function not implemented.");
//     },
//     complete: function (): void {
//         console.info('completado [obs]');
//     }
// }

const saludar = () => console.log('Hola mundo..');
const saludar2 = nombre => console.log(`Hola ${ nombre }`);

asyncScheduler.schedule( saludar, 2000);
asyncScheduler.schedule( saludar2, 2000, 'Aldair47x');

const subscription = asyncScheduler.schedule( function(state:number) {
    console.log('state: ', state );
    this.schedule(state + 1, 1000)
},3000, 0)


setTimeout(() => {
    subscription.unsubscribe();
}, 10000);
