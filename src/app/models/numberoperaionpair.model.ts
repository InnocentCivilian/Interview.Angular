export interface NumberActionPair {
    value: number,
    second: number,
    action: string | 'multiply' | 'add'
    // result:() => number;
    // function delete(key:number):void { 
    //     console.log('Key deleted.')
    // }
}
// export class NumberActionPair implements INumberActionPair{
//     value: number;
//     second: number;
//     action: string;
    
//     result():number { 
//         return this.value +this.second
//     }
// }