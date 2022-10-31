// 문제
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
// s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 
// 다르면 False를 return 하는 solution를 완성하세요. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
// 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// match()로 했을 경우에는 매개변수에 "p", "y"가 없을 경우 아래와 같은 에러 발생
// object null is not iterable (cannot read property Symbol(Symbol.iterator))
// 즉 만약 match()로 했을 때 정규식 표현과 일치한 데이터가 없다면 null을 반환한다고 이해
// matchAll()은 null을 반환하지 않고 빈 배열을 반환하므로 비교가 가능하여 사용

function solution(s){
  return [...s.matchAll(/p/gi)].length === [...s.matchAll(/y/gi)].length
}

// 다른 사람 풀이
function solution(s){
  // s의 문자열을 전부 대문자로 변경한 뒤 각각 P, Y를 제거한 배열의 개수로 비교를 한다.
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}
