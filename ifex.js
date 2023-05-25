let userNumber=prompt("숫자를 입력하세요"); // string값으로 받는다.

console.log(userNumber);

if(userNumber != null){  //if(userNumber) 만 해도 된다. 어차피 null이면 if문 실행안되니까
    userNumber=parseInt(userNumber);
    (userNumber %2) ? alert(`${userNumber}: 짝수`) : alert(`${userNumber}: 홀수`)
}