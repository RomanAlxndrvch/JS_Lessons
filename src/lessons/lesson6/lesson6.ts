console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// class student {
//
//     static minimumScore = 4
//
//     name: string;
//     lastName: string
//     groupNumber: number
//     scores: number[]
//
//     constructor(name: string, lastName: string, groupNumber: number, scores: number[]) {
//         this.name = name
//         this.lastName = lastName
//         this.groupNumber = groupNumber
//         this.scores = scores
//     }
//
//     showStudentWithScoreOverFour() {
//         if (this.scores.every(el => el >= student.minimumScore)) console.log(this.name + ' ' + this.groupNumber)
//     }
// }
//
// const studentGroup = [
//     new student('Roman', 'Troian', 2, [4, 5, 4, 5, 5]),
//     new student('Anastasiia', 'Troian', 5, [5, 5, 5, 5, 5]),
//     new student('John', 'Levandovsi', 3, [2, 5, 4, 5, 5]),
//     new student('Danial', 'Del Pierro', 2, [2, 2, 2, 2, 5]),
//     new student('Diana', 'Kasova', 1, [3, 2, 4, 5, 1]),
//     // new student('Roman', 'Troian', 5, [4, 5, 4, 5, 5]),
//     // new student('Roman', 'Troian', 5, [4, 5, 4, 5, 5]),
//     // new student('Roman', 'Troian', 5, [4, 5, 4, 5, 5]),
//     // new student('Roman', 'Troian', 5, [4, 5, 4, 5, 5]),
//     // new student('Roman', 'Troian', 5, [4, 5, 4, 5, 5]),
// ]
//
//
// studentGroup.forEach(el => el.showStudentWithScoreOverFour())

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?


// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию


// class Time {
//     seconds: number
//     minutes: number
//     hours: number
//
//     constructor(seconds: number, minutes: number, hours: number) {
//         this.seconds = seconds
//         this.minutes = minutes
//         this.hours = hours
//     }
//
//     set secondsSetter(sec: number) {
//         if (sec > 60) throw new Error('Seconds too big')
//         this.seconds = sec
//     }
//
//     set minutesSetter(min: number) {
//         if (min > 60) throw new Error('Minutes too big')
//         this.minutes = min
//     }
//
//     set hoursSetter(hours: number) {
//         if (hours > 24) throw new Error('Hours too big')
//         this.hours = hours
//     }
//
//
//     setTime(seconds: number, minutes: number, hours: number) {
//         this.secondsSetter = seconds
//         this.minutesSetter = minutes
//         this.hoursSetter = hours
//     }
//
//     showTime() {
//         console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
//     }
// }
//
// const timer = new Time(200, 200, 200)
// timer.setTime(59, 59, 20)
// timer.showTime()


// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};