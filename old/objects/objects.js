class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}}`);
    }
}

class Wizar extends Player{
    constructor(name, type){
        super(name,type)
    }
    introduce(){
        console.log(`WEEEEEE I'm a ${this.type}}`);
    }
}

var a=5;
var b=a;
let obj={a: 'a',b:'b',c:'c'};
let clone =Object.assign({},obj);