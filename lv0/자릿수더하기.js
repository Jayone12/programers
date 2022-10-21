// 문제
// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

const solution = n => {
  let answer = 0;
  //  n을 문자얄로 타입 전환 후 배열화 한 뒤 반복문으로 각 수를 더한다.
  n.toString().split("").forEach(v => answer += Number(v));
  return answer;
}
