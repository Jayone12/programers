// 문제
// 문자열 my_string이 매개변수로 주어집니다. 
// my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  // 문자열에서 영문을 삭제
  const num = my_string.replace(/[A-Za-z]/g, "")
  // 문자열을 spread를 사용하여 배열로 변경
  const arr = [...num]
  // 배열의 값을 숫자로 변경
  const numArr = arr.map(Number)
  // 각 배열의 값을 reduce를 사용하여 값을 더한다.
  return numArr.reduce((acc, cur) => acc+ cur, 0)
}

// 한줄 요약
function solution(my_string) {
  return [...my_string.replace(/[A-Za-z]/g, "")].map(Number).reduce((acc, cur) => acc+ cur, 0)
}

// match를 사용한 풀이
function solution(my_string) {
  // match를 사용하여 숫자를 검색한 후 reduce를 사용하여 더한다.
    return my_string.match(/[0-9]/g).reduce((a,b) => parseInt(a)+parseInt(b));
}

// match()
// 문자열이 정규식과 매치되는 부분을 검색하고 결과를 array로 반환한다.
