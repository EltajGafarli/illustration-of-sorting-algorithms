let maindiv = document.getElementById("container");
let numbers = [210, 300, 220, 270, 150, 100, 150, 25, 100, 45];
let txt = document.getElementById("txt");


for (let i = 0; i < numbers.length; i++) {
    let child = document.createElement("div");
    child.classList.add("col");
    child.setAttribute("id", "id" + i);
    maindiv.appendChild(child);
}

for (let i = 0; i < numbers.length; i++) {
    let child = document.createElement("p")
    child.classList.add("value");
    child.innerText = numbers[i];
    child.setAttribute("id", "text" + i);
    document.getElementById("id" + i).appendChild(child);
}

for (let i = 0; i < numbers.length; i++) {
    document.getElementById("id" + i).style.backgroundColor = "darkblue";

}

if (window.innerWidth > 420) {
    let arr = document.querySelectorAll(".col");
    setWidth(arr, numbers)

    function setWidth(arr, numbers) {
        for (let i = 0; i < numbers.length; i++) {
            arr[i].style.width = `${800/(1.5*arr.length)}px`
            arr[i].style.height = `${numbers[i]}px`;
        }
    }

    function setNum(numbers) {
        for (let i = 0; i < numbers.length; i++) {
            document.getElementById("text" + i).innerText = numbers[i];
        }
    }


    function bubbleSort() {
        txt.innerText = "Bubble Sort";
        let nums = [...numbers];
        sort(nums, arr);
        async function sort(numbers, arr) {
            for (let i = 0; i < numbers.length; i++) {
                for (let j = 0; j < numbers.length - 1 - i; j++) {
                    await timer(1000);
                    if (numbers[j] > numbers[j + 1]) {
                        let temp = numbers[j];
                        numbers[j] = numbers[j + 1];
                        numbers[j + 1] = temp;
                        setWidth(arr, numbers);
                        setNum(numbers);
                    }
                }
            }
        }
    }


    function insertionSort() {
        txt.innerText = "Insertion Sort";
        let nums = [...numbers];
        sort(arr, nums);
        async function sort(arr, numbers) {
            for (let i = 1; i < numbers.length; i++) {
                for (let j = i - 1; j > -1; j--) {
                    await timer(1000);
                    if (numbers[j + 1] < numbers[j]) {

                        [numbers[j + 1], numbers[j]] = [numbers[j], numbers[j + 1]];
                        setWidth(arr, numbers);
                        setNum(numbers);

                    }
                }
            };

        }
    }

    function selectionSort() {
        window.onload;
        txt.innerText = "Selection Sort";
        let nums = [...numbers];
        sort(nums, arr);
        async function sort(arr, numbers) {
            let min;

            for (let i = 0; i < arr.length; i++) {
                min = i;

                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[min]) {
                        min = j;
                    }
                }

                if (min !== i) {
                    //swap
                    await timer(1000);
                    [arr[i], arr[min]] = [arr[min], arr[i]];
                    setWidth(numbers, arr);
                    setNum(arr);
                }
            }

        }
    }

    function timer(ms) { return new Promise(res => setTimeout(res, ms)); }
} else {
    let arr = document.querySelectorAll(".col");
    setWidth(arr, numbers)
    let colArr = createHex(numbers);
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = colArr[i];
    }

    function setWidth(arr, numbers) {
        for (let i = 0; i < numbers.length; i++) {
            arr[i].style.width = "50px"
            arr[i].style.height = "50px";
        }
    }

    function setNum(numbers) {
        for (let i = 0; i < numbers.length; i++) {
            document.getElementById("text" + i).innerText = numbers[i];
        }
    }


    function bubbleSort() {
        txt.innerText = "Bubble Sort";
        let nums = [...numbers];
        sort(nums, arr);
        async function sort(numbers, arr) {
            for (let i = 0; i < numbers.length; i++) {
                for (let j = 0; j < numbers.length - 1 - i; j++) {
                    await timer(1000);
                    if (numbers[j] > numbers[j + 1]) {
                        let temp = numbers[j];
                        numbers[j] = numbers[j + 1];
                        numbers[j + 1] = temp;
                        [arr[j].style.backgroundColor, arr[j + 1].style.backgroundColor] = [arr[j + 1].style.backgroundColor, arr[j].style.backgroundColor];
                        setNum(numbers);
                    }
                }
            }
        }
    }


    function insertionSort() {
        txt.innerText = "Insertion Sort";
        let nums = [...numbers];
        sort(arr, nums);
        async function sort(arr, numbers) {
            for (let i = 1; i < numbers.length; i++) {
                for (let j = i - 1; j > -1; j--) {
                    await timer(1000);
                    if (numbers[j + 1] < numbers[j]) {

                        [numbers[j + 1], numbers[j]] = [numbers[j], numbers[j + 1]];
                        // setWidth(arr, numbers);
                        [arr[j + 1].style.backgroundColor, arr[j].style.backgroundColor] = [arr[j].style.backgroundColor, arr[j + 1].style.backgroundColor]
                        setNum(numbers);

                    }
                }
            };

        }
    }

    function selectionSort() {
        window.onload;
        txt.innerText = "Selection Sort";
        let nums = [...numbers];
        sort(nums, arr);
        async function sort(arr, numbers) {
            let min;

            for (let i = 0; i < arr.length; i++) {
                min = i;

                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[min]) {
                        min = j;
                    }
                }

                if (min !== i) {
                    //swap
                    await timer(1000);
                    [arr[i], arr[min]] = [arr[min], arr[i]];
                    // setWidth(numbers, arr);
                    [numbers[i].style.backgroundColor, numbers[i].style.backgroundColor] = [numbers[min].style.backgroundColor, arr[i].style.backgroundColor];
                    setNum(arr);
                }
            }

        }
    }

    function timer(ms) { return new Promise(res => setTimeout(res, ms)); }
}


function createHex(numbers) {
    let hexcol = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let colArr = []
    for (let i = 0; i < numbers.length; i++) {
        let sharp = "#";
        for (let j = 0; j < 6; j++) {
            sharp += hexcol[Math.floor(Math.random() * hexcol.length)];
        }
        colArr.push(sharp);
    }
    return colArr;
}