
// ! Birinchi masala : Quyidagi objectlar uchun type yarating.✅
// type pupils={
//     name: string
//     age: number
//      maeks:{
//         science: number
//         math : number  
//      }
// }
// const student = { 
//     name: 'John', 
//     age: 20,
//     marks: {
//         science: 70,
//         math: 75
//     }
// }

// type Books={
//     author: string
//     title: string
//     readingStatus:boolean
// }
// let library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }
// ];


// type Programming={
//     languages:string
//     isChallenging: boolean
//     isRewarding:boolean
//     difficulty: number
//     jokes: string
// }
// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
// };



// ! Ikkinchi masala: Quyidagi funksiyalar uchun type (signaturasini) belgilang✅
// type Greet=(time:string, name:string)=> string
// function greet(time: string, name: string) {
//     console.log(`Good ${time}, ${name}`)
//   }


//   type Average=(time:number, name:number)=> string
//   function average(x: number, y: number) {
//     return (x + y) / 2
//   }


//   type Than=(time:string, name:number)=> string
//   function isLongerThan(s: string, n: number) {
//     return s.length > n
//   }

//! Uchunchi masala :1-masalada yaratilgan student object uchun belgilangan typedan tashkil topgan massiv yarating. Massivni 10 element bilan toldiring✅
type People = {
    name: string,
    age: number
    marks:{
        science: number
        math : number 
    }
}
const student: People[] = [
    {
        name: 'Aslbek',
        age: 20,
        marks:{
            science:40,
            math:90
        }
    },

    {
        name: 'Dilshodbek',
        age: 21,
        marks:{
            science:90,
            math:80
        }
    },
    {
        name: 'Ilyosbek',
        age: 25,
        marks:{
            science:80,
            math:90
        }
    },
    {
        name: 'Diyorbek',
        age: 16,
        marks:{
            science:70,
            math:80
        }
    },
    {
        name: 'Shokirjon',
        age: 10,
        marks:{
            science:70,
            math:90
        }
    },
    {
        name: 'Umidbek',
        age: 18,
        marks:{
            science:80,
            math:90
        }
    },
    {
        name: 'Sanjarbek',
        age: 20,
        marks:{
            science:70,
            math:90
        }
    },
    {
        name: 'Akmal',
        age: 18,
        marks:{
            science:80,
            math:80
        }
    },
 
]
// ! Tortnchi masala : Eng katta yoshli student ni malumotlarini chiqaring

const names = student
.filter(student => student.age > 23)
console.log(names);

// !Beshinchi masala :Barcha studentlarning science qiymatlarini yigindisini chiqaring
for(let i=0; i<student.length;i++ ){
    console.log();
    
}
