// 문제
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n){
    return [...n.toString()].map(Number).reduce((acc, cur) => acc + cur)
}

// 풀이 해석
function solution(n){
  // n값을 문자열로 변환 후 배열로 만든다.
  const arr = [...n.toString()]
  // arr배열의 값을 숫자로 변경한 후 reduce를 사용하여 각 값을 더해주고 그 결과값을 반환한다.
  return arr.map(Number).reduce((acc, cur) => acc + cur)
}
