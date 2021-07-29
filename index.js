// 1. Even character

function evenCharacter(str) {
  if (typeof str !== "string") return "error input bukan string";
  if (!str.length) return "";
  let genap = "";
  for (let i = 0; i < str.length; i++) {
    if ([i + 1] % 2 === 0) {
      genap += str[i];
    }
  }
  return genap;
}

console.log(evenCharacter("pratama"));
console.log(evenCharacter("hellohello"));
console.log(evenCharacter("hello hello hello"));
console.log(evenCharacter(""));
console.log(evenCharacter(1234));

// 2. Count Word

function countWord(str) {
  if (typeof str !== "string") return "error input bukan string";
  if (!str.length) return 0;
  // console.log(typeof str !== "string");
  // if (typeof str !== "string") console.log("error input bukan string");
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === " " && str[i] !== " ") {
      count++;
    }
    if (i === str.length - 1 && str[i] !== " ") {
      count++;
    }
  }
  return count;
}

console.log(countWord("pratama"));
console.log(countWord("hellohello"));
console.log(countWord("hello hello hello"));
console.log(countWord(""));
console.log(countWord(1234));

// 3. Count Vowel And Consonant

function vowelAndConsonant(str) {
  // cek apabila input bukan string (error handling)
  // cek apabaila input adalah string kosong (error handling)
  if (typeof str !== "string") return "error input bukan string";
  if (!str.length) return "jumlah vokal : 0 , jumlah konsonan 0";
  // buat variable vokal dan konsonan dengan nilai awal kosong
  let vokal = 0;
  let konsonan = 0;
  // looping pada string
  for (let i = 0; i < str.length; i++) {
    // cek apabila string[i] ketemu huruf vokal maka vokal++
    if (
      str[i] === "a" ||
      str[i] === "i" ||
      str[i] === "u" ||
      str[i] === "e" ||
      str[i] === "o"
    ) {
      vokal++;
      // cek apabila string[i] ketemu huruf konsonan maka konsonan++
    } else {
      konsonan++;
    }
  }
  return `jumlah vokal : ${vokal} , jumlah konsonan : ${konsonan}`;
}

console.log(vowelAndConsonant("pratama"));
console.log(vowelAndConsonant("hellohello"));
console.log(vowelAndConsonant(""));
console.log(vowelAndConsonant(1234));

// 4. reverse word

function reverseWord(str) {
  if (!str.length) {
    return "";
  } else {
    let output = "";
    for (let i = str.length - 1; i >= 0; i--) {
      output += str[i];
    }
    return output;
  }
}

console.log(reverseWord("hello"));
console.log(reverseWord(""));
console.log(reverseWord("world!"));
console.log(reverseWord("asikasikasik"));

// 5. palindrome

function isPalindrome(str) {
  let output = "";
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  if (str.length === 1) {
    return false;
  } else if (str === output) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("katak"));
console.log(isPalindrome("o"));
console.log(isPalindrome("kasur"));

// 6. Exchange coin

function exchangeCoin(n) {
  let pecahanCoin = [1000, 500, 200, 100, 50, 20, 10, 5, 1];
  let coin = "";
  for (let i = 0; i < pecahanCoin.length; i++) {
    let coinPecahan = pecahanCoin[i];
    while (n >= coinPecahan) {
      coin += `${coinPecahan}, `;
      n -= coinPecahan;
    }
  }
  return coin;
}

console.log(exchangeCoin(1752));
console.log(exchangeCoin(879));
console.log(exchangeCoin(50));
console.log(exchangeCoin(0));
console.log(exchangeCoin(5000));

// 7. Asteriks loop

let input = 5;

for (let i = 0; i < input; i++) {
  let output = "";
  for (let j = 0; j <= i; j++) {
    output += "*";
  }
  console.log(output);
}

// 8. Pyramid loop

function pyramid(n) {
  // looping input(n)
  for (let i = 1; i <= n; i++) {
    // deklarasi varibel kosong untuk penampung
    let result = "";
    // reverse looping untuk spasi
    for (let j = n; j >= i; j--) {
      result += " ";
    }
    // looping untuk bintang sebelah kiri
    for (let k = 0; k < i; k++) {
      result += "*";
    }
    // looping untuk bintang sebelah kanan
    for (let l = 1; l < i; l++) {
      result += "*";
    }
    console.log(result);
  }
}
pyramid(5);
pyramid(3);
pyramid(10);
