// 문제
// 정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때,
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numbers, num1, num2) {
    return numbers.slice(num1,num2+1)
}

// slice는 배열의 begin과 end까지 대한 얕은 복사본을 새로운 배열 객체로 반환한다.

// arr.slice(begin, end)
// begin은 추출 시작점에 대한 인덱스를 의미
// end는 추출을 종료할 인덱스로 end 인덱스를 제외하고 추출한다.
