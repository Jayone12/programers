// 문제
// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers, direction) {
    direction === "right" ? numbers.unshift(numbers.pop()) : numbers.push(numbers.shift())
    return numbers
}

// pop()는 배열의 마지막 요소를 제거하고 제거된 요소를 반환한다.
// shift()는 배열의 첫 번째 요소를 제거하고 제거된 요소를 반환한다.
// unshift()는 새로운 요소를 배열 맨 앞에 추가하고 새로운 길이를 반환한다.
// push()는 새로운 요소를 배열 맨 뒤에 추가하고 새로운 길이를 반환한다.
