function game(num) {
  if (num > 0 && !num % 3) {
    return true;
  } else {
    return false;
  }
}

function game2(num) {
  if (num > 0 && num % 3 === 0) {
    if (num % 9 === 0) {
      console.log('박수 두번!');
    } else {
      console.log('박수 한번~');
    }
  } else {
    console.log('탈락!!');
  }
}

function test(a, b) {
  if (a < 40 || b < 40) {
    console.log('불합격!');
  } else if (a + b >= 120) {
    console.log('합격이용!');
  } else {
    console.log('불합격');
  }
}

function game3(num) {
  let lastNum = Number(num.toString().slice(num.toString().length - 1));
  if (lastNum === 3 || lastNum === 6 || lastNum === 9) {
    console.log('박수!!!!!!');
  } else {
    console.log('탈락!');
  }
}

function test2(a, b) {
  if (a < 0 || a > 100 || b < 0 || b > 100) {
    console.log('ㅈㄹㅡㅡ');
  } else if (a < 40 || b < 40) {
    console.log('불합격!');
  } else if (a + b >= 120) {
    console.log('합격이용오오오옹!');
  } else {
    console.log('불합격');
  }
}

let age = 29;
const area = 'incheon';

function A(money) {
  let result = money;
  if (money < 50000 && count !== 2) {
    let first = result + result * 0.15;
    let seconds = first + first * 0.15;
    result = seconds;
  } else if (money >= 50000 && count !== 2) {
    let first = result + result * 0.2;
    let seconds = first + first * 0.2;
    result = seconds;
  }
  return result;
}

function miliSeconds(m, s) {
  let seconds = m * 60 + s;
  return seconds * 1000;
}

function vat(a, b) {
  let money = parseInt(a.toFixed());
  if (b) {
    return money - money * 0.1 - 1.5;
  }
  return money - money * 0.1;
}
