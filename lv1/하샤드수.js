// 문제
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// x를 문자열로 변경하여 배열화 한뒤 reduce를 사용하여 각 숫자를 더한다.
// 더한 값으로 x를 나눴을 떄
// 정수 여부를 판단하여 리턴한다.
function solution(x) {
  return Number.isInteger(x / [...x.toString()].map(Number).reduce((acc, cur) => acc + cur, 0))
}


// 상세 풀이
function solution(x) {
  // x를 문자열로 변환 후 배열화
  const arr = [...x.toString()]
  // 배열을 map으로 사용해 숫자열로 변경 후 각 배열의 값을 합한다.
  const sum = arr.map(Number).reduce((acc, cur) => acc + cur, 0)
  // Number.isInteger() 사용하여 정수 여부 판단
  return Number.isInteger(sum)
}
