// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var num = N.toString(2).split("");
    console.log(num);
    var temp = 0;
    var result = 0;
    num.forEach(current => {
        if(current === '0') {
            temp++
        } else {
            if (temp > result) {
                result = temp;
                temp = 0;
                }
            };
        })
          return result;
}
