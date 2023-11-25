"use strict";
function reverse(arr) {
    return [...arr].reverse(); // le spread operateur cree un nouveau tableaux qu'on poura donc modifier
}
// class A {
//     private a = 3
//     protected b = 3
//     public c = 3
//     log (){
//         console.log(this.a)
//     }
// }
// class B extends A {
//     log() {
//         console.log(this.b)
//     }
// }
// const aInstance = new A();
// aInstance.log();
// console.log(aInstance.c)
class Collection {
    items;
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    first() {
        return this.items[0] || null;
    }
    isEqual(a) {
        return a.items === this.items;
    }
}
class Subscriber {
    on = (name, cb) => {
    };
}
// abstract methods have to be declared in a class that enherits from it
// abstract class Geometry {
//     x = 0
//     y = 0
//     abstract surface(): number
// }
// class Triangle extends Geometry {
//     x = 2
//     y = 2
//     surface() {
//         return 3;
//     }
// }
// methode static
class Geometry {
    static origin = { x: 0, y: 0 };
}
Geometry.origin;
