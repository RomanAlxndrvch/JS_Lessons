console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
const sum = (n1: number, n2: number) => {
    return n1 + n2
}
console.log(sum(3, 9))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

const makeCounter = () => {
    let counter = 0
    return () => {
        return counter++
    }
}

let counter = makeCounter()
let counter2 = makeCounter()
console.log(counter() + ' func1')
console.log(counter() + ' func1')
console.log(counter2() + ' func2')
console.log(counter() + ' func1')
console.log(counter2() + ' func2')

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

const makeCounter_3 = (startNum: number) => {
    return {
        value: startNum,
        increase() {
            this.value++
        },
        decrease() {
            this.value--
        },
        reset() {
            this.value = 0
        },
        set() {
            this.value = startNum
        }
    }
}

let counter_3 = makeCounter_3(5)
let counter2_3 = makeCounter_3(10)


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//Напишите функцию sumTo(n), которая вычисляет сумму чисел

const sum_2 = (n: number): number => {
    if (n === 1) {
        return 1
    }
    else {
        return n + sum_2(n - 1)
    }
}

const sum_3 = (n: number) => {
    let finalSum = 0
    for (let i = 0; i <= n; i++) {
        finalSum += i
    }
    return finalSum
}


const factorial = (n: number): number => {
    if (n != 1) {
        return n * factorial(n - 1)
    }
    else {
        return 1
    }
}

function fib(n: number): number {
    if (n <= 1) {
        return n
    }
    else {
        return fib(n - 1) + fib(n - 2)
    }
}


console.log(factorial(5))


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};