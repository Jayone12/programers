// 문제
// "*"의 높이와 너비를 1이라고 했을 때, 
// "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 
// 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let result = ""
    // 입력값 만큼 반복문 실행
    for(let i = 0; i < input[0]; i++) {
      // 반복할때마다 "*"를 추가한다.
        result += "*"
        console.log(result)
    }
});

// 다른사람 풀이
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (let i = 1; i <= +input[0]; i++) {
        // repeat을 사용하며 *의 개수를 증가시킨다.
        console.log('*'.repeat(i));
    }
});
