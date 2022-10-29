// 문제
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제풀 정답
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : -1
}

// 상세 풀이
function solution(n) {
  // n의 제곱근을 구한 후 정수인지 판별한다.
  if(Number.isInteger(Math.sqrt(n))){
    // n의 제곱근이 정수라면 제곱근에 +1 해준 후 다시 제곱해준다.
    return (Math.sqrt(n) + 1)** 2
  } else {
    // n의 제곱근이 정수가 아니라면 -1을 리턴한다.
    return -1
  }
}
