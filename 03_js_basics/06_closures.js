// function outest(){
//     var c = 30
//     function outer(b){
//     function inner(){
//         // let a = 100;
//         console.log(a,b,c);
//     }
//     // let a = 10;
//     return inner;
//  }
//   return outer;
// }
// var innFun = outest()(20);
// innFun();




function counterFun(){
    var counter = 0
    function increaseCounter(){
        counter++;
        console.log(counter);
    }
    return increaseCounter;
}
var c1 = counterFun()
c1();
c1();c1()

var c2 = counterFun()
c2()