// 문제
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

function solution(phone_number) {
  // 인자로 받은 전화번호를 배열로 생성한다.
  let arr = [...phone_number]
  // 전화번호 뒷자리 4자리를 뺀 나머지 수만큼 *인 배열을 만든다.
  let star = Array(arr.length -4).fill("*")
  // *의 배열들과 전화번호 뒤 4자리를 합친 후 문자열로 반환한다.
  return star.concat(arr.slice(-4)).join("")
}

// 다른 사람 풀이
// 정규식 사용 풀이
function hide_numbers(s) {
  // 정규식을 사용하여 뒤 4자리르 제외한 숫자를 찾은 후 *로 변경한다.
  return s.replace(/\d(?=\d{4})/g, "*");
}

// repeat을 사용한 풀이
function hide_numbers(s){
  // repeat을 사용하여 *을 인자의 수에서 -4를 뺸 만큼 생성한 후 인자로 받은 숫자 뒤에서 4자리를 잘라내어 합친다.
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}

// 다른 풀이
// 문자열 n 을 배열로 바꾸고, 배열의 첫번째부터 마지막에서 4번째 전 배열크기만큼 * 로 채워라. 이 후에 join 하여 string으로 반환하라
const solution = n => [...n].fill("*",0,n.length-4).join("")
