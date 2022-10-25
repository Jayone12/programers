// 문제
// 정수 num과 k가 매개변수로 주어질 때, 
// num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(num, k) {
  // num의 값을 문자열로 변경한 다음 배열로 만든 후 k값으로 indexOf를 사용하여 index번호를 찾는다.
  const arr = [...num.toString()].indexOf(k.toString())
  return arr === -1 ? arr : arr+1;
}
