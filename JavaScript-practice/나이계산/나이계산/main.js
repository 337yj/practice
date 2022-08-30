// const calc = document.querySelector('.btn');

document.querySelector('.btn').addEventListener('click', function(){
    let currentYear = 2022;
    let birthYear = prompt("태어난 년도를 입력하세요.", "YYYY");
    let age; 
    age = currentYear - birthYear + 1;
    document.querySelector("#result").innerHTML = (`당신의 나이는 ${age}세 입니다.`);
});
