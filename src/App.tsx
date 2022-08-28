import React from 'react';
import './App.css';
// import Lesson1 from './lessons/lesson1/lesson1';
// import './lessons/lesson2/lesson2';
// import Lesson3 from './lessons/lesson3/Lesson3';
// import Lesson4 from './lessons/lesson4/Lesson4';
// import './lessons/lesson5/lesson5';
// import './lessons/lesson6/lesson6';
// import './lessons/lesson7/lesson7';
// import './lessons/lesson8/lesson8';

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function App() {
    const printList = (tree: any): any => {
        let arr = []
        if (tree.next === null) {
            arr.push(tree.value)
        }
        else {
            printList(tree.next)
        }
        return arr
    }

    console.log(printList(list))

    /*  function fib(n: number): number {
          return n <= 1 ? n : fib(n - 1) + fib(n - 2);
      }*/


    return (
        <div className="container">
            {/*<Lesson1 />*/}
            {/*<Lesson3 />*/}
            {/*<Lesson4 />*/}
        </div>
    );
}

export default App;
