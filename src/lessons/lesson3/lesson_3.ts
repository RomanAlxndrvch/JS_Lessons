import axios from "axios";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


/*axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((value) => {
        console.log(value.data)
    })
    .catch((err) => {
        console.log(err)
    })*/

/*axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'newTitle',
    body: 'newBody',
    userId: '5'
}).then((value) => {
    console.log(value.data)
})
    .catch(() => {
        console.log('err')
    })*/

/*
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'newTitle',
    body: 'newBody_1',
    userId: '565',
    id: 111
}).then((value) => {
    console.log(value.data)
})
    .catch(() => {
        console.log('err')
    })
*/


/*axios.delete('https://jsonplaceholder.typicode.com/posts/1',).then((value) => {
    console.log(value.data)
})
    .catch(() => {
        console.log('err')
    })*/


// just a plug
export default () => {
};