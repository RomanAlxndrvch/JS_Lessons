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

let arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]

function App() {

    /*
        function flat(arr: any): any {
            let newArr: any[] = []
            if (Array.isArray(arr)) {
                arr.forEach((el: any) => newArr.push(el))
            }
            else {
                flat(arr)
            }
            return newArr
        }
    */


    let newArr: any[] = []

    function flat(arr: typeof arr4) {
        arr.forEach((el: any) => {
            return Array.isArray(el) ? flat(el) : newArr.push(el)
        })
        return newArr
    }


    console.log(flat(arr4))

    return (
        <div className="container">
            {/*<Lesson1 />*/}
            {/*<Lesson3 />*/}
            {/*<Lesson4 />*/}
        </div>
    );
}

export default App;
