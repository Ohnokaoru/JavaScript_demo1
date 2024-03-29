// let 宣告變數
let x = 10;
{
    let x = 50;
}
let y = 20;
// console.log() 工程師看的->python的print()
console.log(x + y);

// const 常數(大寫)
const PI = 3.1415926;
let radius = 10;
let area = radius * radius * PI;
// str+number->str
let result = "圓面積:" + area;
console.log(result);

// document.write()->給使用者看的(網頁內容區)
document.write("<h2>" + result + "</h2>");

//alert 跳出警告視窗
//promt()->python的input()
let say_something = prompt("請輸入你想說的:");
alert(say_something);

//typeof()->看型態
console.log(typeof (result));

/**長註解 123 456 789*/

let weight = prompt("請輸入體重(kg):")
let height = prompt("請輸入身高(m):")
let bmi = weight / (height) ** 2
document.write("BMI:" + bmi)

// ul.li 串接
// .toFixed()取小數點後幾位
let ans = "<ul>";
ans += "<li>身高:" + height + "</li>";
ans += "<li>體重:" + weight + "</li>";
ans += "<li>BMI:" + bmi.toFixed(2) + "</li>";
ans += "</ul>";
document.write(ans);


let email = "abc@gmail.com";
console.log(email);
console.log(email.length);
console.log(email[email.length - 1]);


// for 迴圈
// let 初始值;初始值<字串的長度;遞增{包覆要印內容}
/**for i in len(email):
    print(i,email[i */
for (let i = 0; i < email.length; i++) {
    console.log(i, email[i]);
}


// i++ -> i+=1
// i++ 後置運算(先輸出再加)
let a = 100;
console.log(a++);


// ++i 後置運算(先加再輸出)
let b = 200;
console.log(++b);


//自動轉型
console.log(10 == "10");


//值與型態必須完全相等
console.log(10 === "10");


//型態轉換 Number, String, Boolean
console.log(String(10) == "10");
console.log(10 == Number("10"));


// and->&&, or->||
let ch = 60;
let en = 60;
let math = 50;
if ((ch >= 60 || en >= 60) && math >= 60) {
    console.log("pass");
} else {
    console.log("fail...");
}

let z = null;
console.log(z + 10);

console.log(Math.PI);

//取0-1之間的亂數
let g = Math.random();
console.log(g);

// 1-10亂數，for迴圈
for (i = 0; i < 10; i++) {
    let r = Math.floor(Math.random() * 10) + 1;
    console.log(r);
}


// 大樂透1-49 
for (i = 0; i < 6; i++) {
    let c = Math.floor(Math.random() * 49) + 1;
    console.log(c);
}

// while迴圈
while (true) {
    let c = getRandomInt(1, 49);
    console.log(c);
    if (c == 49) {
        break;
    }
}

// 函式 (python定要先宣告才能使用，JavaScript則不需要)
function getRandomInt(start, end) {
    let c = Math.floor(Math.random() * end) + start;
    return c
}

let numbers = [];
// 大樂透1-49 用反引號包頭尾 ${變數}->` ${變數}`
//.push()->與python的 .append() 一樣
for (i = 0; i < 6; i++) {
    let x = getRandomInt(1, 49)
    console.log(x);
    document.write(`第${i + 1}個號碼:${x}<br>`)
    numbers.push(x)
}

// array
//大樂透1-49，五組
let number = [];
//外迴圈
for (j = 0; j < 6; j++) {
    //內迴圈
    numbers = [];
    for (i = 0; i < 6; i++) {
        let x = getRandomInt(1, 49)
        console.log(x);
        document.write(`<h3>第${j + 1}組<br>第${i + 1}個號碼:${x}</h3><br>`)
        numbers.push(x)
    }
    number.push(numbers)
}
console.log(number);

/** for i in range(len(number)):
  print(number[i]) */
for (let i = 0; number.length; i++) {
    console.log(number[i].join(","));
}

//取得時間
document.write(Date());

let d = 3.5;
document.write(parseInt(d));

//obj ->json
let user = {
    name: "ken",
    height: 165.3,
    weight: 60
}
console.log(user, typeof (user));
console.log(user.name, user["name"]);


console.log(getBmi(160, 50));

//計算BMI函示
function getBmi(height, weight) {
    let bmi = user["weight"] / (user["height"] / 100) ** 2;
    if (isNaN(bmi)) {
        return "數值錯誤"
    }
    return bmi.toFixed(2);
}

