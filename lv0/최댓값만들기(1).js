// 문제
// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  // 배열을 높은 순으로 정렬한다.
    numbers.sort((a,b) => b-a)
  // 거기서 첫번째와 두번째의 값을 곱한다.
    return numbers[0] * numbers[1]
}
