function birthCheck() {
    const date=new Date();
    const currentYear=date.getFullYear();// 상수
    // const currentYear = 2023;
    let birthYear;
    // let age;

    // null을 체크하기 위해서 변수를 더 썼다
    let birthStr;
    let birthNum;
    birthStr = prompt("태어난 년도");
    // console.log(birthStr);

    if(birthStr.length==4){
    
        if(birthStr){
            // 값
            console.log("태어난해"+birthStr);
            birthYear=parseInt(birthStr);
            if (!isNaN(birthYear)){
                let age = currentYear - birthYear + 1;
                if (age < 20) {
                    alert("성인이 아닙니다 ")
                }
                alert(`${currentYear} 년 현재, ${age}세 입니다`)
            } else{
                alert("정확한 날짜가 아닙니다.")
            }

        }else{
            // null : 거짓을 의미한다.
            console.log(birthStr);
        }
    }
    else{
        alert("올바른 값을 입력해주세요");
    }
}






const date = new Date();
const hour = date.getHours();

console.log('년도 ' + date.getFullYear());
console.log('월 ' + date.getMonth() + 1);
console.log('일 ' + date.getDate());
console.log('시 ' + date.getHours());
console.log('분 ' + date.getMinutes());
console.log('초 ' + date.getSeconds());

if (hour < 12) {
    alert('오전입니다.');
}

if (hour >= 12) {
    alert('오후입니다.');
}