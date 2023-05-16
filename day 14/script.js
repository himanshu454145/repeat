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
}


doo(10);