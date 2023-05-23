// Date and Time objects

// JavaScript Date objects represent a single moment in time in a 
// platform-independent format. Date objects contain a Number 
// that represents milliseconds since 1 January 1970 UTC.

// 👉 Creating Date Objects
// There are 4 ways to create a new date object:

// new Date()

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// it takes 7 arguments

// new Date(milliseconds)
// we cannot avoid month section 

// new Date(date string)


// new Date() 🙋‍♂️
// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());

// console.log(Date.now());

// let currDate = new Date(2018, 11, 24, 20, 33, 30, 0);  // Month argument is mandotary
// console.log(currDate.toLocaleString());

// var d = new Date("12 13, 2024 11:13:00");
// console.log(d);

// let d = new Date(1681125510289);
// console.log(d.toLocaleString());

// let d = new Date(0);
// console.log(d)


//👉 Dates Method

// const curDate = new Date();

// // how to get the indivisual date 
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth()); // 0-11 jan to dec
// console.log(curDate.getDate());
// console.log(curDate.getDay());


// how to set the indivisual date 

// console.log(curDate.setFullYear(2022));
// // The setFullYear() method can optionally set month and day
// console.log(curDate.setFullYear(2022, 10, 5));
// let setmonth = curDate.setMonth(10); // 0-11 jan to dec
// console.log(setmonth);
// console.log(curDate.setDate(5));
// console.log(curDate.toLocaleString());


//👉 Time Methods

// const curTime = new Date();

// how to get the indivisual Time 

// console.log(curTime.getTime());
// // The getTime() method returns the number of milliseconds 
// since January 1, 1970
// console.log(curTime.getHours());
// // The getHours() method returns the hours of a date as a 
// number (0-23)
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());






// // how to set the indivisual Time 

let curTime = new Date();

// console.log(curTime.setTime());
console.log(curTime.setHours(5));
console.log(curTime.setMinutes(5));
console.log(curTime.setSeconds(5));
console.log(curTime.setMilliseconds(5));







// // Practice Time 
// new Date().toLocaleTimeString(); // 11:18:48 AM
// //---
// new Date().toLocaleDateString(); // 11/16/2015
// //---
// new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM