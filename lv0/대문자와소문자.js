// 문제
// 문자열 my_string이 매개변수로 주어질 때, 
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let result = "";
  // for...of를 사용하여 문자열의 값을 반복하면서 대문자인지 소문자인지 비교한 후 서로 교체하여 result에 할당한다.
  for(let x of my_string) x === x.toUpperCase() ? result += x.toLowerCase() : result += x.toUpperCase()
  return result;
}
