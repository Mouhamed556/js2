//task 1 : reverse string
// str = "Hello" => "olleH"
// newStr = ""
// i=4 => "o" ==> newStr = newStr+ "o" = "o"
// i=3 => "l" ==> newStr = newStr+ "l" = "ol"
// i=2 => "l" ==> newStr = newStr + "l" = "oll"
// i=1 => "e" ==> newStr = newStr + "e" = "olle"
// i=0 => "H" ==> newStr = newStr + "H" = "olleH"

function reverseStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}
console.log(reverseStr("radar"));

// task 2 : number of characters :
// str = "welcome" =>
function charNbr(str) {
  return str.length;
}

// console.log(charNbr("Welcome"));

// task 3 : capitalize sentence:
// str = "he is a fighter"  ==> split

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.substr(1);
}

// console.log(capitalizeFirstLetter(""));

// let str ="he is a fighter" => strArr= ["he", "is", "a", "fighter"]
// split : str.split(" ")
// let m =""
//m= m + strArr[0][0].toUpperCase() + strArr[0].substr(1) + " "
// m = m + strArr[1][0].toUpperCase() + strArr[1].substr(1)
// m = m + strArr[2][0].toUpperCase() + strArr[2].substr(1)
// m = m + strArr[3][0].toUpperCase() + strArr[3].substr(1)

function capitalizeFirstWord(str) {
  let strArr = str.split(" ");
  let m = "";
  for (const i in strArr) {
    m = m + strArr[i][0].toUpperCase() + strArr[i].substr(1) + " ";
  }
  return m;
}

 console.log(capitalizeFirstWord("he is a fighter"));
 console.log(capitalizeFirstWord("we are the champions"));

function maxMin(arr) {
  let min = arr[0];
  let max = arr[0];
  for (const element of arr) {
    if (element < min) {
      min = element;
    }
    if (element > max) {
      max = element;
    }
  }
  return [min, max];
}

 console.log(maxMin([10, 12, 1, 5, 0]));

 function totalSum(arr) {
  let sum = 0;

  for (const element of arr) {
    sum += element;
  }
  return sum;
}
console.log(totalSum([10, 20, 30, 40]));

function filterOutNumbers(arr) {
  let tab = [];
  for (const element of arr) {
    if (element > 10) {
      tab.push(element);
    }
  }
  return tab;
}

console.log(filterOutNumbers([-10, 10, 11, 2, 5, 50]));

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  let x = 1;
  let i = 1;
  while (i <= n) {
    x *= i;
    i++;
  }
  return x;
}

console.log(factorial(3));

function isPrime(n) {
  let r = 0;
  if (n == 0) {
    return "not defined";
  }
  if (n === 1) {
    return false;
  }

  for (let i = 1; i <= n; i++) {
    if (n % i !== 0) {
      continue;
    }
    r = r+i;
  }
  return r === n+1;
}

// console.log(isPrime(5));

// let tab= [0,1]
// n=1 => tab= [0,1,1] ==> tab[0]+tab[1]
// n=2 => [0,1,1] => [0,1,1,2] ==> tab.push(tab[0]+tab[1]), tab.push(tab[1]+tab[2])
// n=3 => [0,1,1,2,3] =>tab.push(tab[0]+tab[1]), tab.push(tab[1]+tab[2]), tab.push(tab[2]+tab[3])
 tab[i+1]= tab[i-1] + tab[i]

function fibonacciSequence(n) {
    let tab = [0, 1];
    for (let i = 1; i < n; i++) {
      tab[i + 1] = tab[i - 1] + tab[i];
    }
    return tab;
  }
  console.log(fibonacciSequence(5));
  Réduire
  
  
  
  
  
  
  
  Réagir
  
  Répondre
  
  
  
  
  
  
  
  
  