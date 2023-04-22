'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-01-21T17:01:17.194Z',
    '2022-01-24T23:36:17.929Z',
    '2022-01-25T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-06-25T18:49:59.371Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const alphas = ['a', 'b', 'c', 'd', 'f', 'h'];

// accounts.forEach(item => {
//   console.log(item.movements);
// });
// numbers.shift();
// const newArr = numbers.concat(alphas, accounts);
// console.log(numbers.indexOf(6));
// accounts.splice(2, 1);
// console.log(numbers.reverse());

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const find1 = movements.findIndex(function (mov, ind, arr) {
//   console.log(mov, ind, arr);
//   return mov > 1000;
// });

// console.log(find1);

// let a = 0;
// for (let x of movements) {
//   if (x > a) {
//     a = x;
//   }
// }
// console.log(a);
// const balance = movements.reduce(function (acc, cur) {
//   console.log(acc, cur);
//   return acc + cur;
// }, 0);
// console.log(balance);

// const filterMov = movements.filter(function (item) {
//   return item >= 100;
// });
// console.log(filterMov);
// const name1 = 'Steven Thomas Williams';
// const nameArr = name1.split(' ');
// console.log(nameArr);
// const nameArrMod = nameArr.map(function (item) {
//   return item.slice(0, 1);
// });
// console.log(nameArrMod.join('').toLowerCase());
// const movementsUSD = movements.map(function (value) {
//   return Math.trunc(value * 1.1);
// });

// console.log(movementsUSD);

// currencies.forEach(function (value, key) {
//   console.log(`${key} : ${value}`);
// });

// let totalBalance = 0;
// movements.forEach(function (move, index) {
//   if (move > 0) {
//     console.log(`movement ${index + 1} : ${move} dollar is deposited`);
//   } else {
//     console.log(`movement ${index + 1} : ${move} dollar is withdrawed`);
//   }
//   totalBalance += move;
// });
// console.log(totalBalance);

// const val = account3.movements.every(function (mov, ind, arr) {
//   return mov > 0;
// });
// console.log(val);

// const arr = accounts;
//   .map(function (mov) {
//     return mov.movements;
//   })
//   .flat()
//   .reduce(function (acc, curr) {
//     return acc + curr;
//   });
// console.log(arr);

// const arr2 = accounts
//   .flatMap(function (mov) {
//     return mov.movements;
//   })
//   .reduce(function (acc, curr) {
//     return acc + curr;
//   });
// console.log(arr2);
// const owners = accounts.map(function (acc) {
//   return acc.owner;
// });
// console.log(owners.sort());

// console.log(
//   movements.sort(function (a, b) {
//     return a - b;
//   })
// );
// const x = new Array(7);
// x.fill(1);
// console.log(x);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const depositsSum = accounts
//   .flatMap(function (mov) {
//     return mov.movements;
//   })
//   .filter(function (mov) {
//     return mov > 0;
//   })
//   .reduce(function (acc, cur) {
//     return acc + cur;
//   });
// console.log(depositsSum);
// const deposits1000 = accounts
//   .flatMap(function (mov) {
//     return mov.movements;
//   })
//   .filter(function (mov) {
//     return mov >= 1000;
//   }).length;
// console.log(deposits1000);

// const deposits10001 = accounts
//   .flatMap(function (mov) {
//     return mov.movements;
//   })
//   .reduce(function (acc, cur) {
//     return (acc = cur >= 1000 ? acc + 1 : acc);
//   }, 0);
// console.log(deposits10001);

// const sum = accounts
//   .flatMap(function (mov) {
//     return mov.movements;
//   })
//   .reduce(
//     function (acc, cur) {
//       // cur > 0 ? (acc.deposits += cur) : (acc.withdrwas += cur);
//       acc[cur > 0 ? 'deposits' : 'withdraws'] += cur;
//       return acc;
//     },
//     { deposits: 0, withdraws: 0 }
//   );
// console.log(sum);

// const titleCase = function (str) {
//   const exceptions = ['and', 'or', 'a', 'an', 'is', 'to'];
//   const mod = str
//     .toLowerCase()
//     .split(' ')
//     .map(function (letter) {
//       return exceptions.includes(letter)
//         ? letter
//         : letter[0].toUpperCase() + letter.slice(1);
//     })
//     .join(' ');
//   console.log(mod);
// };
// titleCase('this is a nice stRING');
// titleCase(
//   'hello my name is moutaz ali and iam 31 years old and iam a pharmacist'
// );
// const now = new Date();
// const yesterday = new Date(2022, 0, 26, 9, 40);
// console.log((now - yesterday) / (24 * 60 * 60 * 1000));
// labelDate.textContent = now.toLocaleDateString();
// const num = '12345678.34';
// const num1 = 12345678.34;
// const formatted = new Intl.NumberFormat('en-US').format(num);
// const formatted2 = new Intl.NumberFormat('en-US').format(num1);
// console.log(formatted);
// console.log(formatted2);

// setInterval(() => {
//   const now = new Date();
//   console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
// }, 1000);

/////////////////////////////////////////////////
// SECTION-START formatting the dates
const formatDates = function (date, locale) {
  const calcDays = function (date1, date2) {
    return Math.round(Math.abs(date1 - date2) / (24 * 60 * 60 * 1000));
  };
  const days = calcDays(new Date(), date);
  if (days === 0) return 'TODAY';
  if (days === 1) return 'yesterday';
  if (days <= 7) return `${days} days ago`;
  else {
    // const year = date.getFullYear();
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const hours = `${date.getHours()}`.padStart(2, 0);
    // const minutes = `${date.getMinutes()}`.padStart(2, 0);
    return new Intl.DateTimeFormat(locale).format(date);
  }
};
// SECTION-END
// SECTION-START FORMATTING NUMBERS
const formarNumbers = function (value, locale, curr) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: curr,
  }).format(value);
};
// SECTION-END
// SECTION-START setting the timer
let time;
const startLogOut = function () {
  const tick = () => {
    let min = `${Math.trunc(time / 60)}`.padStart(2, 0);

    let sec = `${time % 60}`.padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }

    time--;
  };
  time = 120;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
// SECTION-END

// SECTION-START movements
const addMovement = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  movs.forEach(function (item, index) {
    const type = item > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[index]);

    const displayDate = formatDates(date, acc.locale);

    const formattedMov = formarNumbers(item, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${formattedMov}</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// addMovement(account1.movements);
// SECTION-END
// SECTION-START CRREATING USERNAMES
const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (item) {
        return item[0];
      })
      .join('');
  });
};
createUsername(accounts);
// SECTION-END
// SECTION-START adding total balance
const calcPrintBalance = function (acc) {
  const balance = acc.movements.reduce(function (acc, cur) {
    return acc + cur;
  });
  labelBalance.textContent = formarNumbers(balance, acc.locale, acc.currency);
};
// calcPrintBalance(account1.movements);
// SECTION-END
// SECTION-START calculating deposits,withdraws and interest rate
const calcAll = function (acc) {
  // calculating deposits
  const deposits = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, cur) {
      return acc + cur;
    }, 0);
  labelSumIn.textContent = formarNumbers(deposits, acc.locale, acc.currency);
  // calculating withdrawals
  const withdraws = Math.abs(
    acc.movements
      .filter(function (mov) {
        return mov < 0;
      })
      .reduce(function (acc, cur) {
        return acc + cur;
      }, 0)
  );
  labelSumOut.textContent = formarNumbers(withdraws, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (mov) {
      return (mov * acc.interestRate) / 100;
    })
    .filter(function (mov) {
      return mov > 1;
    })
    .reduce(function (acc, cur) {
      return acc + cur;
    });
  labelSumInterest.textContent = formarNumbers(
    interest,
    acc.locale,
    acc.currency
  );
};
// calcMovements(account1.movements);
// SECTION-END
// SECTION-START LOGIN
let currentAccount, timer;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(function (acc) {
    return acc.userName === inputLoginUsername.value;
  });
  if (currentAccount.pin === Number(inputLoginPin.value)) {
    // wellcoming message
    labelWelcome.textContent = `wellcome back, ${currentAccount.owner.slice(
      0,
      currentAccount.owner.indexOf(' ')
    )}`;
    // clearing the inputs value
    inputLoginUsername.value = inputLoginPin.value = '';

    // start log out timer
    if (timer) clearInterval(timer);
    timer = startLogOut();

    // bluring from the input login pin
    inputLoginPin.blur();

    // terning on the opacity
    containerApp.style.opacity = 100;

    // create date of login in
    const now = new Date();
    const options = {
      minute: 'numeric',
      hour: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekday: 'long',
    };
    // const year = now.getFullYear();
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const hours = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // adding the movements to the UI
    addMovement(currentAccount);

    // caluclating the total balance
    calcPrintBalance(currentAccount);

    // calculating deposits, withdraws and interest rate
    calcAll(currentAccount);
  }
});
// SECTION-END
// SECTION-START CALCULATING TRANSFERS

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const user = accounts.find(function (acc) {
    return acc.userName === inputTransferTo.value;
  });
  const amount = Number(inputTransferAmount.value);
  currentAccount.balance = currentAccount.movements.reduce(function (acc, cur) {
    return acc + cur;
  });
  if (
    currentAccount.balance > 0 &&
    amount <= currentAccount.balance &&
    amount > 0 &&
    user &&
    currentAccount !== user
  ) {
    user.movements.push(amount);
    user.movementsDates.push(new Date().toISOString());
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    addMovement(currentAccount);
    calcPrintBalance(currentAccount);
    calcAll(currentAccount);
  } else if (!user) {
    alert('invalid user');
  } else if (amount <= 0) {
    alert('amount must be a positive number');
  } else if (amount > currentAccount.balance) {
    alert('amount must br less than or equal to your total balance');
  }
  if (currentAccount === user) {
    alert("you can't transfer to yourself");
  }
  inputTransferAmount.blur();
  inputTransferAmount.value = inputTransferTo.value = '';
  time = time + 120;
});
// SECTION-END
// SECTION-START CALCULATING LOANS

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      addMovement(currentAccount);
      calcPrintBalance(currentAccount);
      calcAll(currentAccount);
      time = time + 120;
    }, 3000);
    inputLoanAmount.blur();
    inputLoanAmount.value = '';
  }
});
// SECTION-END
// SECTION-START DELETING ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  const user = accounts.find(function (acc) {
    return acc.userName === inputCloseUsername.value;
  });
  const ind = accounts.findIndex(function (ind) {
    return ind === user;
  });
  if (
    currentAccount === user &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    accounts.splice(ind, 1);
    containerApp.style.opacity = 0;
    inputCloseUsername.value = inputClosePin.value = '';
  }
});
// SECTION-END

// SECTION-START
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  addMovement(currentAccount, !sorted);
  sorted = !sorted;
});
// SECTION-END
