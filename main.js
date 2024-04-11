// exercise 1
const rps = (p1, p2) => {
  if (
    (p1 === 'rock' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'paper' && p2 === 'rock')
  ) {
    return 'Player 1 won!';
  } else if (
    (p2 === 'rock' && p1 === 'scissors') ||
    (p2 === 'scissors' && p1 === 'paper') ||
    (p2 === 'paper' && p1 === 'rock')
  ) {
    return 'Player 2 won!';
  } else {
    return 'Draw!';
  }
};

//exercise 2
function well(x) {
  let result = '';
  let goodOnes = 0;

  x.forEach((el) => {
    if (el === 'good') goodOnes += 1;
  });

  if (goodOnes === 1 || goodOnes === 2) {
    result = 'Publish!';
  } else if (goodOnes > 2) {
    result = 'I smell a series!';
  } else {
    result = 'Fail!';
  }
  return result;
}

//exercise 3
function smash(words) {
  if (words.length === 1) {
    return words[0];
  } else {
    return words.join(' ');
  }
}

//exercise 4
function sumMix(x) {
  let tot = 0;
  if (x.length === 0) {
    return 0;
  } else {
    x.forEach((el) => {
      if (typeof el === 'number') {
        tot += el;
      } else {
        tot += parseInt(el);
      }
    });
  }
  return tot;
}

//exercise 5
function feast(beast, dish) {
  let first = beast[0] + beast[beast.length - 1];
  let last = dish[0] + dish[dish.length - 1];
  return first === last;
}

//exercise 6
const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
};

//exercise 7
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

//exercise 8
function hoopCount(n) {
  if (n < 10) {
    return 'Keep at it until you get it';
  } else {
    return 'Great, now move on to tricks';
  }
}

//exercise 9
function between(a, b) {
  let nums = [];
  for (i = a; i <= b; i++) {
    nums.push(i);
  }
  return nums;
}

//exercise 10
function rentalCarCost(d) {
  let total = 0;
  if (d >= 3 && d < 7) {
    tot = d * 40 - 20;
  } else if (d >= 7) {
    tot = d * 40 - 50;
  } else {
    tot = d * 40;
  }
  return total;
}
