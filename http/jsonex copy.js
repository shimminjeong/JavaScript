function displayA(){
    console.log("A");
}

// 매개변수도 일반적인 변수이고,
// 변수에는 함수도 담을 수 있다.
function displayB(callback){
    // callback 변수에는 = 함수가 담겨져 있다.
    setTimeout(()=> {
        console.log("B")}
        ,2000);
}
function displayC(){
    console.log("C");
}

displayB(function(){
    console.log("C");
});


// displayB(displayC);