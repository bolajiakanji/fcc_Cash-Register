let cash = document.getElementById("cash");
let purchaseButton = document.getElementById("purchase-btn");
let changeDue = document.getElementById("change-due");
  let price = 3.26;
  let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]

function checkCashRegister(price, cash, cid) {
  let cidSum = cid.reduce((sum, value) => {
    return sum + value[1] * 1000;
  }, 0);
  let changeCash = (cash - price) * 1000;

  let arr = [[], [], [], [], [], [], [], [], []];
  for (let a = 0; a <= cid[0][1] * 1000; a += 10) {
    arr[0].push(a);
  }
  for (let a = 0; a <= cid[1][1] * 1000; a += 50) {
    arr[1].push(a);
  }
  for (let a = 0; a <= cid[2][1] * 1000; a += 100) {
    arr[2].push(a);
  }
  for (let a = 0; a <= cid[3][1] * 1000; a += 250) {
    arr[3].push(a);
  }
  for (let a = 0; a <= cid[4][1] * 1000; a += 1000) {
    arr[4].push(a);
  }
  for (let a = 0; a <= cid[5][1] * 1000; a += 5000) {
    arr[5].push(a);
  }
  for (let a = 0; a <= cid[6][1] * 1000; a += 10000) {
    arr[6].push(a);
  }
  for (let a = 0; a <= cid[7][1] * 1000; a += 20000) {
    arr[7].push(a);
  }
  for (let a = 0; a <= cid[8][1] * 1000; a += 100000) {
    arr[8].push(a);
  }
  let guru = [];
  let answer;
  if (cidSum === changeCash) {
   let gh= cid.filter(value => value[1] !== 0)
   let hy = gh.map(value => value[0] + ":" +" $" + value[1])
let uy=hy.join()
      answer = "status:"+ " CLOSED " + uy ;
  } else if (6) {
    let ans = [];

    let rarr = arr.reverse();
    rarr.reduce((init, ele) => {
      let big = Math.max.apply(
        null,
        ele.filter((as) => as <= init)
      );
      ans.push(big);
      let mod = big % init;

      return init - big;
    }, changeCash);
    let cidc = cid.reverse();
    let open = ans
      .map((elem) => {
        if (elem !== 0) {
          return [cidc[ans.indexOf(elem)][0], elem / 1000];
        }
      })
      .filter((eth) => eth !== undefined);
    if (
      open != [] &&
      cidSum > changeCash &&
      open.reduce((sum, e3) => sum + e3[1], 0) >= changeCash / 1000
    ) {
        
        console.log(open)
        let bn = open.map(value => value[0] + ":" +" $" + value[1])
        let cv=bn.join()
        answer = "status:"+ " OPEN " + cv ;

    } else {
      answer = `status: INSUFFICIENT_FUNDS`
      
    }

    //le sopen=open[0].filter(e1=>e1 !=== undefined)
    guru.push(open);
  }
  return answer;
}
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
purchaseButton.onclick = () =>{
    if (cash.value == price) {
        console.log(cash.value)

        changeDue.innerHTML = "No change due - customer paid with exact cash"
}else if (cash.value < price) {
    console.log(price)
    alert("Customer does not have enough money to purchase the item")
}else {
    changeDue.innerHTML=checkCashRegister(price,cash.value, cid);
console.log(cash.value)
}}
