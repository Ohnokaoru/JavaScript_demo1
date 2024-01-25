const h1 = document.querySelector("h1");
console.log(h1);
h1.innerText = "大樂透";
// h1.innerHTML="<u>大樂透</u>";
h1.style.color = "brown";

// 取標籤後用.innerHTML或.innerHTML改變內文
const dateEl = document.querySelector(".date");
dateEl.innerText = Date()
console.log(dateEl);

// 函式 (python定要先宣告才能使用，JavaScript則不需要)
function getRandomInt(start, end) {
    let c = Math.floor(Math.random() * end) + start;
    return c
}
function getNumber(num) {
    // 大樂透1-49 
    let number = [];
    for (j = 0; j < num; j++) {
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
        number.push(numbers);
    }
    return number;
}




// 取得開獎按鈕並更新內容
function getLottroy() {
    let num = prompt("要多少樂透組數:")
    number = getNumber(num);
    //將div id=lottroy的內容給lottroyEl
    const lottroyEl = document.querySelector("#lottroy")
    // 開獎字串清空
    lottroyEl.innerHTML = ""
    for (let i = 0; i < number.length; i++) {
        result = number[i].join(",");
        lottroyEl.innerHTML += `<h3>第${i + 1}組號碼:${number[i].join(", ")}</h3><hr>`
        // document.write(`<h3>第${i + 1}組號碼:${number[i].join(", ")}</h3><hr>`)
    }

}

//a-b<0 升敘
function compare(a, b) {
    return a - b;
}

