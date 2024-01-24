
//函式 (python定要先宣告才能使用，JavaScript則不需要)
function getRandomInt(start, end) {
    let c = Math.floor(Math.random() * end) + start;
    return c
}

function getLottroy() {
    //  for i in range(len(number)): print(number[i])

    const lottroyEl = document.querySelector("#lottroy")
    for (let i = 0; i < number.length; i++) {
        console.log(number[i].join(","));
        lottroyEl.innerHTML += `<h3>第${i + 1}組號碼:${number[i].join(", ")}</h3><hr>`
        // document.write(`<h3>第${i + 1}組號碼:${number[i].join(", ")}</h3><hr>`)





    }


    // 大樂透1-49 
    let number = [];
    for (j = 0; j < 5; j++) {
        numbers = [];
        while (true) {
            let c = getRandomInt(1, 49);
            if (!numbers.includes(c)) {
                numbers.push(c);
            }
            if (numbers.length == 6) {
                break;
            }
        }
        numbers.sort(compare);
        number.push(numbers)
    }
    console.log(number);


    //a-b<0 升敘
    function compare(a, b) {
        return a - b;
    }


}

// 取標籤後用.innerHTML或.innerHTML改變內文
const dateEl = document.querySelector(".date");
dateEl.innerText = Date()
console.log(dateEl);

document.write(Date() + `<br>`);


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

const h1 = document.querySelector("h1");

console.log(h1, lottroyE1);

h1.innerText = "大樂透";
// h1.innerHTML="<u>大樂透</u>";
h1.style.color = "brown";