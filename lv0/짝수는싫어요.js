// 문제
// 정수 n이 매개변수로 주어질 때, 
// n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    let result = [];
  // 반복문은 n의 수만큼 한다.
    for(let i =1; i <= n; i++){
      // 값이 짝수가 아니면 result에 push 한다.
        if(i % 2 === 1)
            result.push(i)
    }
    return result
}
