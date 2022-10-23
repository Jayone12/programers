// 문제
// 문자열 str1, str2가 매개변수로 주어집니다. 
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// str1에서 str2와 동일한 문자가 있으면 1 아니면 2를 반환한다.
const solution = (str1, str2) => str1.indexOf(str2) !== -1 ? 1 : 2

// indexOf는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환한다.


// includes를 사용한 풀이

function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}

// includes는 문자열에 다른 문자열이 포함되어 있는지 확인하여 boolean 형태로 반환한다.
