function doo(val){
var k =val;
console.log("hi");

if(val>3){
    console.log('nice');
}
else if(val>0){
    console.log('awesome');
}
else{
    console.log('kwa');
}

while(val>20){
    console.log('go');
    val -= 5;
}
for(var i =1;i<11;i++){
    console.log(i*k);
}

var n = {price:30 , qty:3}

for(i in n){
  console.log(i);
}

console.log(5=='5');
console.log(5=='5');

console.log(5=='5');
console.log(5=='5');

document.write("do what");
}



doo(10);