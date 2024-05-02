// 1
// function sum(x, y) {
//   return x + y;
// }
// console.log(3, 2);
// console.log(-3, -6);
// console.log(-3, -6);
// console.log(7, 3);

// 2
// function toSeconds(minutes) {
//   return minutes * 60;
// }

// console.log(toSeconds(5));
// console.log(toSeconds(3));
// console.log(toSeconds(2));

// 3
// function nextInteger(int) {
//   return int + 1;
// }

// console.log(nextInteger(0));
// console.log(nextInteger(9));
// console.log(nextInteger(-3));

// 4
// function uchburchakYuzi(asos, balandlik) {
//   var yuzi = (asos * balandlik) / 2;
//   return yuzi;
// }

// console.log(uchburchakYuzi(3, 2));
// console.log(uchburchakYuzi(7, 4));
// console.log(uchburchakYuzi(10, 10));

// 5
// function ageToDays(age) {
//   return age * 365;
// }

// console.log(ageToDays(65));

// console.log(ageToDays(0));

// console.log(ageToDays(20));

// 6
// function kub(x) {
//   return x ** 3;
// }

// console.log(kub(3));

// console.log(kub(5));

// console.log(kub(10));

// 7
// function firstElement(son) {
//   // Massiv bo'sh bo'lsa null qaytaramiz
//   if (son.length === 0) {
//     return null;
//   }
//   // Massivning birinchi elementini qaytarish
//   return son[0];
// }

// console.log(firstElement([1, 2, 3]));

// console.log(firstElement([80, 5, 100]));

// console.log(firstElement([-500, 0, 50]));

// 8
// function power(x, y) {
//     return x * y;
//   }

//   console.log(power(230, 10));

//   console.log(power(110, 3));

//   console.log(power(480, 20));

//9
// function hourToSeconds(hour) {
//     return hour * 3600;
//   }

//   console.log(hourToSeconds(2));
//   console.log(hourToSeconds(10));

//   console.log(hourToSeconds(24));

// //10
// function uchinchiTomon(tomon1, tomon2) {
//   return tomon1 + tomon2 - 1;
// }

// console.log(uchinchiTomon(8, 10));

// console.log(uchinchiTomon(5, 7));

// console.log(uchinchiTomon(9, 2));

//11
// function qoldiq(son1, son2) {
//   return son1 % son2;
// }

// console.log(qoldiq(1, 3));

// console.log(qoldiq(3, 4));

// console.log(qoldiq(-9, 45));

// console.log(qoldiq(5, 5));

//12
// function turtburchakYuzi(boyi, eni) {
//     return boyi * eni;
//   }

//   console.log(turtburchakYuzi(6, 7));

//   console.log(turtburchakYuzi(20, 10));

//   console.log(turtburchakYuzi(2, 9));

//13
// function stringQoshish(a) {
//     return "something " + a;
//   }

//   console.log(stringQoshish("salom"));

//   console.log(stringQoshish("Nabiyev"));

//   console.log(stringQoshish("Ahror"));

//14
// function kvadrat(n) {
//   return n * n;
// }

// console.log(kvadrat(5));

// console.log(kvadrat(9));

// console.log(kvadrat(100));

//15
// function noldan(raqam) {
//   return raqam <= 0;
// }

// console.log(noldan(5));

// console.log(noldan(0));

// console.log(noldan(-2));

//16
// function ichkiBurchaklar(n) {
//   return (n - 2) * 180;
// }

// console.log(ichkiBurchaklar(3));

// console.log(ichkiBurchaklar(4));

// console.log(ichkiBurchaklar(6));

//17
// function ochkolar(x, y) {
//     return (x * 3) + (y * 5);
//   }

//   console.log(ochkolar(1, 1));

//   console.log(ochkolar(7, 5));

//   console.log(ochkolar(38, 8));

//18
// function nameString(name) {
//   return name + "Edabit";
// }

// console.log(nameString("Mubashir"));

// console.log(nameString("Matt"));

// console.log(nameString("javaScript"));

//19
// function kichik100dan(x, y) {
//     return (x + y) < 100;
//   }

//   console.log(kichik100dan(22, 15));

//   console.log(kichik100dan(83, 34));

//   console.log(kichik100dan(3, 77));

//20
// function printArray(n) {
//   var result = [];
//   for (var i = 1; i <= n; i++) {
//     result.push(i);
//   }
//   return result;
// }

// console.log(printArray(1));

// console.log(printArray(3));

// console.log(printArray(6));

//21
// function oyoqlar(tovuq, qoy, sigir) {
//   var tovuqOyoqi = 2;
//   var qoyOyoqi = 4;
//   var sigirOyoqi = 4;

//   var totalOyoq = tovuq * tovuqOyoqi + qoy * qoyOyoqi + sigir * sigirOyoqi;

//   return totalOyoq;
// }

// console.log(oyoqlar(2, 3, 5));

// console.log(oyoqlar(1, 2, 3));

// console.log(oyoqlar(5, 2, 8));

//22
// function and(x, y) {
//     return x && y;
//   }

//   console.log(and(true, false));

//   console.log(and(true, true));

//   console.log(and(false, true));

//   console.log(and(false, false));

//23
// function tengMi(x, y) {
//   return x === y;
// }

// console.log(tengMi(4, 8));

// console.log(tengMi(2, 2));

// console.log(tengMi(2, "2"));

//24
// function futbolOchko(yutishlar, duranglar, maglubiyatlar) {
//    let yutishOchko = 3 * yutishlar;
//    let durangOchko = 1 * duranglar;

//    let totalOchko = yutishOchko + durangOchko;

//     return totalOchko;
//   }

//   console.log(futbolOchko(3, 4, 2)); // ➞ 13

//   console.log(futbolOchko(5, 0, 2)); // ➞ 15

//   console.log(futbolOchko(0, 0, 1)); // ➞ 0

//25
// function sekundlar(soat, minut) {
//   var soatSekund = soat * 3600;

//   var minutSekund = minut * 60;

//   var totalSekund = soatSekund + minutSekund;

//   return totalSekund;
// }

// console.log(sekundlar(1, 3)); // ➞ 3780

// console.log(sekundlar(2, 0)); // ➞ 7200

// console.log(sekundlar(0, 0)); // ➞ 0

//26
// function fun(n) {
//   return n % 7 === 0 && n % 4 !== 0;
// }

// console.log(fun(4)); // ➞ false

// console.log(fun(9)); // ➞ false

// console.log(fun(7)); // ➞ true

//27
// function tengMi(x, y) {
//   return typeof x === typeof y && x === y;
// }

// console.log(tengMi(1, true)); // ➞ false

// console.log(tengMi(0, "0")); // ➞ false

// console.log(tengMi(1, 1)); // ➞ true

//28
// function booleanToString(bool) {
//     return bool.toString();
//   }

//   console.log(booleanToString(true)); // ➞ "true"

//   console.log(booleanToString(false)); // ➞ "false"

//29
// const arrowFunc = (val) => val;

// console.log(arrowFunc(3)); // ➞ 3

// console.log(arrowFunc("3")); // ➞ "3"

// console.log(arrowFunc(true)); // ➞ true

//30
// function frameSoni(minut, frame) {
//     return minut * 60 * frame;
// }

// console.log(frameSoni(1, 1)); // ➞ 60
// console.log(frameSoni(10, 1)); // ➞ 600
// console.log(frameSoni(10, 25)); // ➞ 15000

//31
// function calc(str) {
//     return eval(str);
// }

// console.log(calc("23+4"));     // ➞ 27
// console.log(calc("45-15"));    // ➞ 30
// console.log(calc("13+2-5*2")); // ➞ 5

//32
// function teng10(a, b) {
//     return (a === 10 || b === 10 || a + b === 10);
// }

// console.log(teng10(9, 10)); // ➞ true
// console.log(teng10(9, 9));   // ➞ false
// console.log(teng10(1, 9));   // ➞ true

//33
// function litrMasofa(km) {
//   return 10 * km;
// }

// console.log(litrMasofa(15)); //➞ 150

// console.log(litrMasofa(23.5)); //➞ 235

// console.log(litrMasofa(3)); //➞ 100

//34
// function fun(a, b) {
//     return Math.max(a, b);
// }

// console.log( fun(3, 7)) // ➞ 7

// console.log( fun(-1, 0)) // ➞ 0

// console.log(fun(1000, 400)) //➞ 1000

//35
// function arr(x, y) {
//     return [x, y];
// }

// console.log(arr(1, 2)) //➞ [1, 2]

// console.log( arr(51, 21)) //➞ [51, 21]

// console.log(arr(512124, 215)) //➞ [512124, 215]

//36
// function tengStrings(str1, str2) {
//     const count1 = str1.length;
//     const count2 = str2.length;

//     return count1 === count2;
// }

// console.log( tengStrings("AB", "CD")) //➞ true

// console.log( tengStrings("ABC", "DE")) //➞ false

// console.log( tengStrings("hello", "edabit")) //➞ false

//37
// function boshStr(str) {
//   return str.length === 0;
// }

// console.log(boshStr("")); // true
// console.log(boshStr(" ")); // false
// console.log(boshStr("a")); // false

//38
// function bolinsin5(son) {
//   return son % 5 === 0;
// }

// console.log(bolinsin5(5)); // true
// console.log(bolinsin5(-55)); // true
// console.log(bolinsin5(37)); // false

//39
// function bolinsin100(son) {
//   return son % 100 === 0;
// }

// console.log(bolinsin100(1)); // false
// console.log(bolinsin100(1000)); // true
// console.log(bolinsin100(100)); // true

//40
// function uzunlik(str) {
//   if (str === "") {
//     return 0;
//   } else {
//     return 1 + uzunlik(str.slice(1));
//   }
// }

// console.log(uzunlik("apple")); // 5
// console.log(uzunlik("make")); // 4
// console.log(uzunlik("a")); // 1
// console.log(uzunlik("")); // 0
// console.log(uzunlik("  ")); // 2

//41
// function bolinsin(x, y) {
//   if (x % y === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(bolinsin(98, 7)); // ➞ true
// console.log(bolinsin(85, 4)); // ➞ false

//42
// function raqam(str) {
//     return parseInt(str);
// }

// console.log(raqam("6"));      // ➞ 6
// console.log(raqam("1000"));   // ➞ 1000
// console.log(raqam("12"));     // ➞ 12

//43
// function tortYuzi(a, b) {
//   if (a <= 0 || b <= 0) {
//     return -1;
//   } else {
//     return a * b;
//   }
// }

// console.log(tortYuzi(3, 4)); // ➞ 12
// console.log(tortYuzi(10, 11)); // ➞ 110
// console.log(tortYuzi(-1, 5)); // ➞ -1
// console.log(tortYuzi(0, 2)); // ➞ -1

//44
// function ismFam(ism, familiya) {
//   return familiya + ", " + ism;
// }

// console.log(ismFam("First", "Last")); // ➞ "Last, First"
// console.log(ismFam("John", "Doe")); // ➞ "Doe, John"
// console.log(ismFam("Mary", "Jane")); // ➞ "Jane, Mary"

//45
// function bug(bool) {
//   return bool ? "sad days" : "it's a good day";
// }

// console.log(bug(true)); // ➞ "sad days"
// console.log(bug(false)); // ➞ "it's a good day"

//46
// function tushirMassiv(arr, tushirishSoni) {
//   return arr.slice(tushirishSoni);
// }

// console.log(tushirMassiv([1, 2, 3], 1)); // ➞ [2, 3]
// console.log(tushirMassiv([1, 2, 3], 2)); // ➞ [3]
// console.log(tushirMassiv([1, 2, 3], 5)); // ➞ []
// console.log(tushirMassiv([1, 2, 3], 0)); // ➞ [1, 2, 3]

//47
// function ovozlar(ovozObj) {
//   return ovozObj.upvotes - ovozObj.downvotes;
// }

// console.log(ovozlar({ upvotes: 13, downvotes: 0 })); // ➞ 13
// console.log(ovozlar({ upvotes: 2, downvotes: 33 })); // ➞ -31
// console.log(ovozlar({ upvotes: 132, downvotes: 132 })); // ➞ 0

//48
// function negativ(son) {
//   return son < 0 ? son : -son;
// }

// console.log(negativ(4)); // ➞ -4
// console.log(negativ(15)); // ➞ -15
// console.log(negativ(-4)); // ➞ -4
// console.log(negativ(0)); // ➞ 0


