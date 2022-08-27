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

function App() {
    const makeCounter = (startNum:number) => {
        return {
            value:startNum,
            increase (){this.value++},
            decrease(){this.value--},
            reset(){this.value=0},
            set(){this.value=startNum}
        }
    }

    let counter = makeCounter(5)
    let counter2 = makeCounter(10)

    return (
        <div className="container">
            {/*<Lesson1 />*/}
            {/*<Lesson3 />*/}
            {/*<Lesson4 />*/}
        </div>
    );
}

export default App;
