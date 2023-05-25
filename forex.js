const students=["가","나","다"];

for(let index in students){
    students[index]+="파이팅";
    console.log(`${index} 번째는 ${students[index]} 입니다.`);
}
console.log(students);