// // var myString = 'Hoc JS tai F8!';

// // // 1. length
// // // console.log(myString.length);

// // // 2. Find index
// // // console.log(myString.indexOf('JS'));
// // // doi voi chuoi co nhiu chu giong nhau thi cho them 1 tham so nua tu chu sau JS
// // // console.log(myString.indexOf('JS', 6));
// // // dung lastIndexOf se tim thay vi tri sau cung
// // // console.log(myString.lastIndexOf('JS'));

// // // 3. Cut string cos 2 tham so thi se cut tu vi tri cut la duoc
// // // console.log(myString.slice(4, 6));

// // // 4. replace thay the chu
// // // console.log(myString.replace('JS', 'Javascript'));
// // // chung ta se tim thay duoc tat ca chu trong cuoi neu dung cau lenh (/JS/g)
// // // console.log(myString.replace(/JS/g, 'Javascript'));

// // // 5 Convert to upper case
// // // console.log(myString.toUpperCase());

// // // 6 Convert to lower case
// // // console.log(myString.toLowerCase());

// // // 7. Trim se giup chung ta xoa khoang trong
// // // console.log(myString.trim());

// // // 8. Split
// // // var languages = 'Javascript, PHP, Ruby';
// // // console.log(languages.split(', '));

// // // 9. Get a character by index
// // // const myString2 = 'Huu Nguyen';
// // // console.log(myString2[10]);// undefined
// // // console.log(myString2.charAt(10));// chuoi rong

// // // ----------------------------------------------------------

// // // Làm việc với number
// // // var age = 30;
// // // var PI = 3.14;

// // // console.log(age.toString()); => '30';
// // // mặc định ko truyền vào tham số nó sẽ hiểu 0

// // // số thập phân dưới 3.5 thì sẽ làm tròn xuống, và ngược lại
// // // console.log(PI.toFixed());

// // // -----------------------------------------

// // // Tạo mảng
// // // arr stt goi la chi muc, key,
// // // var languages = [
// // //    'javascript',
// // //    'PHP',
// // //    'Ruby',
// // // ]
// // // typeof của array là 1 oj
// // // console.log(languages[2]);
// // // cach kiem tra arr bang cach nay de check kieu du lieu
// // // console.log(Array.isArray(languages))

// // // -----------------------------------------


// // /** lam viec voi arr
// //  * 1. To String
// //  * 2. Join
// //  * 3. Pop
// //  * 4. Push
// //  * 5. Shift
// //  * 6. UnShift
// //  * 7. Splicing
// //  * 8. Concat
// //  * 9. Slicing
// //  */

// // var languages = [
// //    'javascript',
// //    'PHP',
// //    'Ruby',
// // ]
// // // 1. TO STRING ep kieu ve string
// // // console.log(languages.toString())

// // // 2. JOIN
// // console.log(languages.join(', ')) // javascript, PHP, Ruby

// // // 3. POP xóa ele cuối bảng & trả về phần tử đã xóa
// // console.log(languages.pop());

// // // 4. PUSH thêm 1 hoặc nhiều phần tử vào mảng & trả về độ dài mới của mảng
// // console.log(languages.push('Dark')); //['javascript', 'PHP', 'Ruby', 'Dark']

// // // 5. SHIFT ngược lại với POP
// // console.log(languages.shift()); // xóa ele đầu bảng & trả về phần tử đã xóa

// // // 6. UNSHIFT thêm 1 hoặc nhiều phần tử vào đầu mảng & trả về độ dài mới của mảng
// // console.log(languages.unshift('Java')); //['Java', 'javascript', 'PHP', 'Ruby']

// // // 7. SPLICING (splice) có 2 tham số, 1 phần tử là số chỉ mục, 2 là số chỉ mục mún xóa
// // languages.splice(1, 2) // ['javascript'] cũng có thể chèn vào bằng cách
// // languages.splice(1, 2, 'Dark', 'Java') // ['javascript', 'Dark', 'Java', 'PHP', 'Ruby']

// // // 8. CONCAT dùng để nối arr
// // var languages = [
// //    'javascript',
// //    'PHP',
// //    'Ruby',
// // ]
// // var languages2 = [
// //    'javascript2',
// //    'PHP2',
// //    'Ruby2',
// // ]
// // console.log(languages.concat(languages2));
// // // vị trí thứ nhất sẽ là arr chính dùng để nối arr

// // // 9. SLICING (slice) dùng để cắt 1 vài ele của bảng hoặc toàn bộ
// // console.log(languages.slice());

// // // ------------------------------------------------------------------------

// // // 1. Function toán tử call ()
// // // es5 function (){}
// // function showDiaLog() {
// //    alert('Hi xin chào các bạn!')
// // }
// // showDiaLog() // Hi xin chào các bạn!

// // // Tham số trong hàm (func)
// // /**
// //  *  1. Tham số?
// // - Định nghĩa? tham số là giá trị truyền vào khi gọi trong function
// // - Kiểu dữ liệu?
// // - Tính private?
// // - 1 tham số
// // - Nhiều tham số

// //  * 2. Truyền tham số
// // - 1 tham số
// // - Nhiều tham số

// //  * 3. Arguments?
// // - Đối tượng arguments
// // - Giới thiệu vòng lặp for
// // */

// // // message gọi là tham số truyền vào
// // function writeLog(message) {
// //    console.log(message)
// // }
// // // khi gọi tới func & truyền giá trị vào gọi là đối số
// // writeLog(123)

// // // tham số của 1 func có tính private (riêng tư)
// // // có nghĩa là khi khai báo trong 1 func chúng ta
// // // ko được sử dụng bên ngoài func đó

// // // 3. Arguments
// // // arguments xuất hiện khi nó ở trong 1 func
// // function argumentS() {
// //    console.log(arguments);
// // }
// // argumentS('log 1', 'log 2', 'log 3'); // Arguments ['log 1', 'log 2', 'log 3']

// // // vòng lặp for ( for of )
// // function forOf() {
// //    var myString = '';
// //    for (var param of arguments) {
// //       myString += `${param} - ` //  log 1 - log 2 - log 3
// //       console.log(param);// log 1 /n log 2 /n log 3
// //    }
// // }
// // // forOf('log 1', 'log 2', 'log 3')
// // forOf(myString)

// // // ----------------------------------------------------------

// // // Return (trả về) và đồng thời nó sẽ tạm dừng code từ dòng return đó

// // function tong(a, b) {
// //    return a + b
// // }
// // var result = tong(2, 8)
// // console.log(result)// 10

// // // khi định nghĩa ra 2 func trùng tên nó sẽ gọi func sau cùng sẽ đè hết tất cả func đó

// // // -----------------------------------------------------------------

// // /**
// //  * Các loại func
// //  *
// //  * 1.Declaration Func
// //  * 2.Expression Func
// //  * 3.Arrow Func
// //  * */

// // // .Expression Func
// // var showMessage2 = function () { }
// // setTimeout(function () { })
// // var myOject = {
// //    myFunction: function () { }
// // }

// // function showMessage() {
// //    console.log('Declaration Function');
// // }

// // var showMessage2 = function () {
// //    console.log('Expression Function');
// // }

// // // gọi function 1 trước khi định nghĩa nó vẫn chạy,
// // // gọi function 2 trước khi định nghĩa nó ko chạy, gọi là cơ chế hoisting

// // // -----------------------------------------------------------

// // /**
// //  * Polyfill
// //  */

// // if (!String.prototype.includes) {
// //    String.prototype.includes = function (search, start) {
// //       'use strict';

// //       if (search instanceof RegExp) {
// //          throw TypeError('first argument must not be a RegExp')
// //       }
// //       if (start === undefined) { start = 0 }
// //       return this.indexOf(search, start) !== -1
// //    }
// // }

// // /**
// //  * Object trong JS
// //  *
// //  * trong đó vế trái là key, vế phải là value
// //  */

// // var emailKey = 'email'
// // var myInfo = {
// //    name: 'Huu Nguyen',
// //    age: 22,
// //    address: 'HCM, VN',
// //    // [emailKey]: 'nthuu1910@gmail.com',
// //    // thêm thuộc tính
// //    phone: '0335899947',
// //    getName: function () {
// //       return this.name;
// //    },
// //    // thêm phương thức
// //    getAge: function () { }
// // };
// // // xóa 1 key & value
// // // delete myInfo.name

// // // thêm 1 key & value
// // // myInfo.email = 'nthuu1910@gmail.com';
// // // lấy 1 value của obj
// // console.log(myInfo.getName());


// // // Function => phương thức (method)
// // // Others => thuộc tính (property)

// // // -----------------------------------------------------

// // // Object constructor / Obj là đối tượng, constructor là xây dựng
// // // object constructor thì nên viết hoa chữ cái đầu tiên ko bắt buộc nhưng nó là quy ước chung
// function User(firstName, lastName, avatar) {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.avatar = avatar;
//    this.getName = function () {
//       return `${this.firstName} ${this.lastName}`
//    }
// }
// User.prototype.className = 'F8'
// User.prototype.getClassName = function () {
//    return this.className;
// }

// var author = new User('Huu', 'Nguyen', 'Avatar');
// var user = new User('Nguyen', 'Huynh', 'Avatar2');

// console.log(author);
// console.log(user);

// // 1.prototype (nguyên mẫu)
// // prototype giúp chúng ta thêm 1 thuộc tính bên ngoài hàm tạo
// // 2.sử dụng khi nào  k

// //-----------------------------------------------------------------
// // Toán tử 3 ngôi - Ternary operator

// var course = {
//    name: 'Javascript',
//    coin: 250// nếu cho 0 sẽ chạy vào case thứ 2
// }

// // if (course.coin > 0) {
// //    console.log(`${course.coin} Coins`); // 250 coin
// // } else {
// //    console.log('Free'); log = 0
// // }

// var result = course.coin > 0 ? `${course.coin} Coins` : 'Free'

// console.log(result);// 250 coin

// var a = 1;
// var b = 2;

// var c = a > 0 ? a : b;

// // -------------------------------------------------------

// /**
//  * Vòng lặp - loop
//  *
//  * 1. for - lặp vói điều kiện đúng
//  * 2. for/in - lặp qua key của đối tượng => arr, obj, str
//  * 3. for/of - lặp qua value của đối tượng => arr, str
//  * 4. while - lặp khi điều kiện đúng
//  * 5. do/while - lặp ít nhất 1 lần, sau đó
//  *    lặp khi điền kiện đúng
//  */

// // 1. For loop
// for (var i = 1; i <= 1000; i++) {
//    console.log(i); // 1-1000
// }

// var myArray = [
//    'JavaScript',
//    'PHP',
//    'Java',
//    'Node',
//    'Python'
// ];
// var arrLength = myArray.length;

// for (var i = 0; i < arrLength; i++) {
//    console.log(myArray[i]); //'JavaScript', 'PHP', 'Java', 'Node', 'Python'
// }

// // 2. For/in

// var myInfo = {
//    name: 'Huu Nguyen',
//    age: 18,
//    address: 'HCM'
// };

// for (var key in myInfo) {
//    console.log(myInfo[key]); // Huu Nguyen, 18, HCM
// }

// var languages = [
//    'JavaScript',
//    'PHP',
//    'Ruby',
//    'Node',
//    'Python'
// ]

// for (var key in languages) {
//    console.log(languages[key]);
// }

// // 3. For/of loop

// // var languages = [
// //    'JavaScript',
// //    'PHP',
// //    'Java',
// //    'Node',
// //    'Python'
// // ]
// // for (var value of languages) {
// //    console.log(value); // 'JavaScript', 'PHP', 'Java', 'Node', 'Python'
// // }

// var myInfo = {
//    name: 'Huu',
//    age: 18,
// }
// for (var value of Object.keys(myInfo)) {
//    console.log(myInfo[value]); // Huu, 18
// }
// for (var value of Object.values(myInfo)) {
//    console.log(value); // Huu, 18
// }

// // while loop

// var myArray = [
//    'Javascript',
//    'PHP',
//    'Ruby'
// ]

// var i = 0;
// while (i < 1000) {
//    i++;
//    console.log(i);// 1-1000
// }

// while (i < myArray.length) {
//    console.log(myArray[i]);// javascript, php, ruby
// }

/**
 *  do/while loop
 */

// var i = 0;
// var isSuccess = false;

// do {
//    // code
//    i++;
//    console.log('nạp thẻ lần ' + i);
//    // success
//    if (true) {
//       isSuccess = true;
//    }
// } while (isSuccess && i < 3);

/**
 *  Break & continue in Loop
*/

// for (var i = 0; i < 10; i++) {
//    console.log(i); //1-10

//    // if (i >= 5) {
//    //    break;
//    // }
//    // console.log(i);// 1-5

//    if (i % 2 !== 0) {
//       continue;
//    }
//    console.log(i);// bỏ lẻ
// }

/**
 * Vòng lặp lồng nhau - Nested loop
 */

// var myArray = [
//    [1, 2],
//    [3, 4],
//    [5, 6]
// ]

// for (var i = 0; i < myArray.length; i++) {
//    // console.log(myArray[i]); //  [1, 2], [3, 4], [5, 6]
//    for (var j = 0; j < myArray[i].length; j++) {
//       console.log(myArray[i][j]);// 1,2,3,4,5,6
//    }
// }

//-------------------------------------------------------------------

/*
   Array methods: tất cả phương thức đều phải trả 1 cái call back
      forEach()
      every()
      some()
      find()
      filter()
      map()
      reduce()
*/

// var courses = [
//    {
//       id: 1,
//       name: 'Javascript',
//       coin: 250
//    },
//    {
//       id: 2,
//       name: 'HTML, CSS',
//       coin: 0
//    },
//    {
//       id: 3,
//       name: 'Ruby',
//       coin: 0
//    },
//    {
//       id: 4,
//       name: 'PHP',
//       coin: 400
//    },
//    {
//       id: 5,
//       name: 'Reactjs',
//       coin: 500
//    },
//    {
//       id: 6,
//       name: 'Reactjs',
//       coin: 500
//    },
// ]
/*
    forEach nhan vao 1 call back & 2 tham so
*/
// courses.forEach(function (course, index) {
//    console.log(index, course);
// }); // call back

/*
    every giong nhu filter dung de duyet mang,
   can thoai mang tat ca moi return true, do no tra ve dang boolean
*/

// var isFree = courses.every(function (course, index) {
//    return course.coin === 0;
// });
// console.log(isFree);// false

/*
   some duyet mang chi can co 1 phan tu thoai man no se return kq
   nguoc lai voi every
*/

// courses.some(function (course, index) {
//    console.log(index, course);
// });

/*
   find, tim kiem phan tu trong mang nhung no chi tim 1 phan tu duy nhat
   neu nhu trong mang do co nhiu phan tu giong nhau
*/
// var courses = course.find(function (course, index) {
//    return course.coin === 'Ruby';
// });

// console.log(course);// { id: 3, name: 'Ruby', coin: 0 }

// filter, khác với find, filter có thể tìm nhiều phần tử giống nhau
// var courses = course.filter(function (course, index) {
//    return course.coin === 'Reactjs';
// });
// console.log(course);

/*
   map, nhận vào cho mình 1 tham số
   phải tạo 1 biến để hứng giá trị mảng mới,
   nó giống như chạy vòng lặp, nó sẽ chạy qua từng giá trị
*/


// function courseHandler(course) {
//    return {
//       id: course.id,
//       name: `Khóa học: ${course.name}`,
//       coin: course.coin,
//       coinText: `Giá: ${course.coin}`
//    }
// }
// var newCourse = courses.map(courseHandler)

// console.log(newCourse);

/*
   Reduce
   nhận vào 2 đối số truyền vào, 1 là func, 2 initialValue
*/

// biến lưu trữ
// var totalCoin = 0;

// lặp qua các phần tử
// for (var course of courses) {
// thực hiện lưu trữ
//    totalCoin += course.coin;
// }
// console.log(totalCoin);

// cách 1:
// accumulator là biến lưu trữ
// var totalCoin = courses.reduce((a, b) =>
//    a + b.coin, 0
// );

// console.log(totalCoin);

// cách 2:
// 0 là giá trị khởi tạo ban đầu
// var totalCoin = courses.reduce((total, course) => {
//    return total + course.coin
// }, 0) // initial value

// console.log(totaCoin);

// cách 3:
// var numbers = [250, 0, 0, 400, 500, 500];

// var totalCoin = numbers.reduce((total, number) => {
//    return total + number
// }, 0)

// console.log(totalCoin);

/*
   bài tập Reduce Flat - "làm phẳng"
   mảng từ Depth array - "Mảng sâu"
*/

// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
// concat là mảng nối
// var flatArray = depthArray.reduce((flatOutput, depthItem) => {
// return flatOutput.concat(depthItem)
// }, [])

// console.log(flatArray);//[1, 2, 3, 4, 5, 6, 7, 8, 9]

// lấy ra các kháo học đưa vào 1 mảng mới

// var topics = [
//    {
//       topic: "Front-end",
//       courses: [
//          {
//             id: 1,
//             title: "HTML, CSS"
//          },
//          {
//             id: 2,
//             title: "JavaScript"
//          }
//       ]
//    },
//    {
//       topic: "Back-end",
//       courses: [
//          {
//             id: 1,
//             title: "PHP"
//          },
//          {
//             id: 2,
//             title: "NodeJS"
//          }
//       ]
//    }
// ]

// var newCourses = topics.reduce((courses, topic) => {
//    return courses.concat(topic.courses);
// }, [])

// console.log(newCourses)

// var htmls = newCourses.map((course) => {
//    return `
//    <div>
//          <h2>${course.title}</h2>
//          <p>ID: ${course.title}</p>
//    </div>
//    `
// })

// console.log(htmls.join(''));

//--------------------------------------------------------------
/*
   includes method
*/
// var title = 'Responsive web design';
// console.log(title.includes('web'));

// console.log(Date.prototype.includes);

// var courses = ['javascript', 'PHP', 'Node']

// console.log(courses.includes('Ruby'));


//-----------------------------------------------------------------

/*
   Math object:
      - Math.PI trả về số PI 3.141592653589793

      - Math.round() làm tròn số gần nhất,
         vd: 1.2 => 1; 1.8 => 2; 1.5 => 2 nó sẽ ưu tiên làm tròn trên

      - Math.abs() giá trị tuyệt đối
         vd: 4 => 4; -4 => 4 được hiểu là làm cho số âm thành dương

      - Math.ceil() làm tròn lên
         vd: 4.1 => 5

      - Math.floor() làm tròn xuống
         vd: 4.9 => 4

      - Math.random() sẽ trả về số thập phân ngẫu nhiên => 0.8641408673426292
         console.log(Math.min(-100, 1, 90, 50, 40));
      - Math.min() trả về số bé nhất trong phương thức
      - Math.max() ngược lại với min
*/

// var random = Math.floor(Math.random() * 6)
// var bonus = [
//    '10 coin', '20 coin', '30 coin', '40 coin', '50 coin', '60 coin',
// ]
// console.log(bonus[random]);

//-----------------------------------------------------------------

/*
   Call back?

   là hàm (func) được truyền qua đối số
   khi gọi hàm khác

   1. là hàm
   2. Được truyền qua đối số
*/

// function myFunction(param) {
//    // console.log(param);

//    if (typeof param === 'function') {
//       param('Học lập trình!')
//    }
// }

// function myCallback(value) {
//    console.log('Value: ', value);
// }
// // myCallback(123)
// myFunction(myCallback)

/*
   3. Được gọi lại (trong hàm nhận đối số)
*/
// Cách định nghĩa phương thức mới
// Array.prototype.map2 = (callback) => {
//    var output = [], arrLength = this.length

//    for (var i = 0; i < arrLength; ++i) {
//       var result = callback(this[i], i)
//       output.push(result)
//    }
//    return output;
// }
// var courses = [
//    'Javascript',
//    'PHP',
//    'Ruby'
// ]

// var htmls = courses.map2((course) => {
//    return `<h2>${course}</h2>`
// })
// console.log(htmls.join(''));
// var htmls = courses.map((course) => {
//    return `<h2>${course}</h2>`
// })
// console.log(htmls.join(''));

//----------------------------------------------------------------
/*
   Empty element of array

   % forEach, find, filter, some, every, reduce
*/

// 1. forEach

// Array.prototype.forEach2 = (callback) => {
//    for (var index in this) {
//       console.log('index: ', index);
//    }
// }
// var courses = [
//    'Javascript',
//    'PHP',
//    'Ruby'
// ]
// // courses.length = 1000

// courses.forEach2((course, index, array) => {
//    console.log(course, index, array);
// })

//--------------------------------------------

/**
 * forEach, find, filter, some, every, reduce
 */

// 1.filter
// Array.prototype.filter2 = function (callback) {
//    var output = []
//    for (var index in this) {
//       if (this.hasOwnProperty(index)) {
//          var result = callback(this[index], index, this)
//          if (result) {
//             output.push(this[index])
//          }
//       }
//    }
//    return output
// }

// var courses = [
//    {
//       name: 'javascript',
//       coin: 680
//    },
//    {
//       name: 'PHP',
//       coin: 860
//    },
//    {
//       name: 'Ruby',
//       coin: 980
//    }
// ]
// var filterCourses = courses.filter2(function (course, index, array) {
//    return course.coin > 700
// })

// console.log(filterCourses);

/**
 *    2.some => boolean
 */
// Array.prototype.some2 = function (callback) {
//    for (var index in this) {
//       if (this.hasOwnProperty(index)) {
//          if (callback(this[index], index, this)) {
//             output = true
//             break;
//          }
//       }
//    }
//    return false
// }

// var courses = [
//    {
//       name: 'javascript',
//       coin: 680,
//       isFinish: true
//    },
//    {
//       name: 'PHP',
//       coin: 860,
//       isFinish: false,
//    },
//    {
//       name: 'Ruby',
//       coin: 980,
//       isFinish: false
//    }
// ]

// var result = courses.some2(function (course, index, array) {
//    return course.isFinish;
// })

// console.log(result);

/**
 *    every: true / false
 */

// Array.prototype.every2 = function (callback) {
//    var output = true
//    for (var index in this) {
//       if (this.hasOwnProperty(index)) {
//          var result = callback(this[index], index, this);
//          if (!result) {
//             output = false
//             break;
//          }
//       }
//    }
//    return output
// }
// var courses = [
//    {
//       name: 'javascript',
//       coin: 680,
//       isFinish: true
//    },
//    {
//       name: 'PHP',
//       coin: 860,
//       isFinish: false,
//    },
//    {
//       name: 'Ruby',
//       coin: 980,
//       isFinish: false
//    }
// ]

// var result = courses.every2(function (course, index, array) {
//    return course.isFinish;
// })
// console.log(result);

/**
 * Đệ quy
 */
// var array = ["a", "b", "c", "d", "a", "b", "c"];

// console.log([...(new Set(array))]);

// 1. xác định được điểm dừng
// 2. logic handle => tạo ra điểm dừng

// function countDown(num) {
//    if (num > 0) {
//       console.log(num);
//       return countDown(num - 1)
//    }
//    return num
// }

// countDown(10)

// function loop(start, end, cb) {
//    if (start >= end) {
//       cb(start)
//       return loop(start + 1, end, cb)
//    }
// }

// var array = ['javascript', 'PHP', 'Node']
// loop(0, array.length - 1, function (index) {
//    console.log(array[index]);
// })

/**
 * Tính giai thừa
 *  - 3 * 2 * 1 =
 *  6
 * */

// function giaiThua(number) {
//    // var output = 1;
//    // for (var i = number; i > 0; i--) {
//    //    output = output * i;
//    // }
//    // return output
//    if (number >= 0) {
//       return number * giaiThua(number - 1)
//    }
//    return 1;
// }

// console.log(giaiThua(6)); // 0

/**
 * HTML DOM
 * có 3 thanh phần:
 * 1. Element // tất cả các tag trong html đều là element: ID, class, tag,
 * 2. Attribute // là tất cả các thuộc tính. vd: id, title, class...
 * 3. Text // chính là value truyền vào
*/
//-------------------------------------------------------------------

// Javascript: Browser | Server (Nodejs)

// Application programming interface (API)
// Browser: HTMl => DOM =>  DOM API

/**
 * 1. getElementById // dạng số ít, và chỉ 1 đối tượng thôi
 * 2. getElementByClassName
 * 3. getElementByTagName
 * 4. querySelector // dạng số ít, và chỉ 1 đối tượng thôi
 * 5. querySelctorAll
 *
 * 6. HTML collection
 *
 * 7. document.write
 */
// var headings =
//    document.querySelctorAll('.heading');

// for (var i = 0; i < headings.length; i++) {
//    console.log(headings[i]);
// }

// var headingElement =
//    document.querySelector("h1")

// console.log(headingElement);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * DOM events
 *
 * 1. Input / select
 * 2. Key up / down
 */
// var inputValue;

// var inputElement =
//    document.querySelector('input[type="checkbox"]')
// inputElement.onchange = function (e) {
//    console.log(e.target.checked);
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * DOM events
 *    1. prevenDefault
 *    2.stopProparation
 */

// var aElement =
//    document.links;

// for (var i = 0; i < aElement.length; ++i) {
//    aElement[i].onclick = function (e) {
//       if (!e.target.href.startsWith('https://f8.edu.vn')) {
//          e.preventDefault()
//       }
//    }
// };

// var ulElement = document.querySelector('ul');
// ulElement.onmousedown = function (e) {
//    e.preventDefault();
// }
// ulElement.onclick =
//    function (e) {
//       console.log(e.target);
//    }

// document.querySelector('div').onclick =
//    function () {
//       console.log('DIV');
//    }

// document.querySelector('button').onclick =
//    function (e) {
//       e.stopPropagation()
//       console.log('Click me!');
//    }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * 1. Event listener
 * 2. JSON
 * 3. Fetch
 * 4. DOM location
 * 5. Local storage
 * 6. Session storage
 * 7. Coding convention
 * 8. Best Practices
 * 9. Mistakes
 * 10. Performance
 *
 * 1. Xử lý nhiều việc khi 1 event xảy ra
 * 2. Lắng nghe / Hủy bỏ lắng nghe
 */

// var btn = document.getElementById('btn')

// btn.onclick = function () {
//    // Viec 1
//    console.log('Viec 1');
//    // Viec 2
//    console.log('Viec 2');
//    // Viec 3
//    alert('Viec 3');
// }

// thêm 1 sự kiện lắng nghe
// btn.addEventListener('click', function (e) {
//    console.log(Math.random());
// })

// function viec1() {
//    console.log('Viec 1');
// }

// btn.addEventListener('click', viec1)

// setTimeout(function () {
//    btn.removeEventListener('click', viec1)
// }, 3000)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. JSON - là 1 kiểu định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, String, Boolean, Null, Array, Object

// thao tác mã hóa / giải mã
// Encode / decode
// Stringify: Từ JS types => JSON
// Parse: Từ JSON => JS types

// var json = '["JavaScript", "Node"]'
// var json = '{"name":"Son Dang", "age":18}'

// var a = '1';
// console.log(JON.parse(json));

// console.log(JSON.stringify({
//    name: 'Huu',
//    age: 22,
//    test: function () { }
// }));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. Promise
//    - Sync
//    - Async
//    - Nỗi đau
//    - Lý thuyết, cách hoạt động
//    - Thực hành, ví dụ

// Sync / Async
// dùng callback để giải quyết Async nhưng
// nó sẽ bị 1 tình trạng gọi là callback hell
// chúng ta sẽ dùng Promise để giải quyết callback hell

// 1. new Promise
// 2. Excutor

// nếu ko xử lý resolve, reject thì nó sẽ xảy ra tình trạng
// Memory leak - rò rỉ & lãng phí bộ nhớ

// Promise có 3 trạng thái:
//    1. Pendding
//    2. Fulfilled
//    3. Rejected
// var promise = new Promise(
//    // Excutor
//    function (resolve, reject) {
//       // logic
//       // Thành công: resolve()
//       // Thất bại: reject()

//       // Fake call API
//       resolve({
//          id: 1,
//          name: 'JavaScript'
//       });
//    }
// )

// promise
//    .then(function (courses) {
//       console.log(courses)
//    })
//    .catch(function () {
//       console.log('Failure!')
//    })
//    .finally(function () {
//       console.log('Done!   ')
//    })

// function sleep(ms) {
//    return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//    })
// }

// sleep(1000)
//    .then(function () {
//       console.log(1);
//       return sleep(1000)
//    })
//    .then(function () {
//       console.log(2)
//       return sleep(1000)
//    })
//    .then(function () {
//       console.log(3)
//       return sleep(1000)
//    })
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all

// var promise = new Promise(function (resolve, reject) {
//    resolve('Successfully!')
// })

// promise
//    .then(function (result) {
//       console.log('result: ' + result);
//    })

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ES6 lần thứ N
// 1. Var / Let, Const: Scope( phạm vi truy cập), Hoisting
// 2. Const / Var, Let: Assignment

// Code block: if else, loop, {},...
// giống nhau là cả 3 điều có thể tạo ra biến & gan giá trị cho nó
// khác nhau là phạm vi(scope)
// {
//    var course = 'Javascript basic!'
// }
// console.log(course); // Javascript basic!
// {
//    let course = 'Javascript basic!'
//    {
//       {
//          console.log(course); // err
//       }
//    }
// }
// Hoisting dùng var sẽ bị & nó sẽ ko đúng theo logic thông thường cho lắm
// thay thế nó thì sẽ dùng let, const để ko bị hoisting

// let và var khi sử dụng biến gán giá trị mà trên đường thực thi
// nó có 1 biến thay thế biến trước đó thì nó sẽ lấy giá trị mới nhất
// còn const thì ko được nó sẽ vi phạm Assignment vì const là khai báo unique
// var a = 1;
// a = 100
// console.log(a); // 100

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// default parameters values

// function logger(log = "default values!") {
//    console.log(log);
// }
// logger()

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Destructuring
// var arr = ['Javascript', 'PHP', 'Node']
// var a = arr[0]
// var b = arr[1]
// var c = arr[2]
// var [a, b, c] = arr
// var [a, , c] = arr
// var [a, ...rest] = arr

// console.log(a, b, c); // 'Javascript', 'PHP', 'Node'
// console.log(a, c); // 'Javascript', 'Node'
// console.log(rest);// ['PHP', 'Node']

// var course = {
//    name: 'Javascript',
//    price: 1000,
//    image: 'img-address'
// };
// var { name, ...rest } = course
// console.log(name); // Javascript
// console.log(rest); // {price: 1000, image: img-address}

// Spread
// function logger(...params) {
//    console.log(params);
// }
// tương tự như concat thì Spread có thể nối mảng lại như sau:
// var arr1 = ['Javascript', 'PHP', 'Node']
// var arr2 = ['TyperScript', 'React', 'Ruby']
// var arr3 = [...arr1, ...arr2]
// có thể lấy theo thứ tự hoặc muốn lấy mảng nào trước thì đặt nó đứng trước
// console.log(arr3);

// var obj1 = {
//    name: 'Javascript',
// }
// var obj2 = {
//    price: 1000,
// }
// var obj3 = {
//    ...arr1,
//    ...arr2
// }

// console.log(obj3); // {   name: 'Javascript',  price: 1000,}

// var defaultConfig = {
//    api: 'https://domain-trang-khoa-hoc',
//    apiVersion: "v1",
//    other: 'other'
// }
// var exerciseConfig = {
//    ...defaultConfig,
//    api: 'https://domain-trang-bai-tap',
// }
// console.log(exerciseConfig);

// var arr = ['javascript', 'PHP', 'Node']

// function logger(...rest) {
//    for (var i = 0; i < rest.length; i++) {
//       console.log(rest[i]);
//    }
// }
// console.log(...arr);
// định nghĩa lại lần nữa là dùng Rest params là dùng chung với cả thằng
// Destructuring bằng cách sử dụng là chúng ta định nghĩa ra tham số
// Spread là khi chúng ta dùng đối số để định nghĩa ra biến, và định nghĩa nó 