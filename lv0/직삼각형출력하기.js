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
