// 문제
// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
function solution(numbers) {
  // 먼저 배열을 크기를 작은 순으로 정렬한다.
    numbers.sort((a, b) => a -b);
  // 배열의 앞에서 2개 곱한 값과 끝 2개의 값을 곱한 값 중 큰 값을 구한다.
    return Math.max(
        (numbers[0] * numbers[1]),
        (numbers[numbers.length-1] * numbers[numbers.length-2])
    )
}

// 다른 사람 풀이
function solution(numbers) {
    var answer = [];
  // 2중 반복문을 사용하여 각 수를 한번씩 곱한 값을 구한다.
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
          // 곱한 값을 answer에 push한다.
            answer.push(numbers[i] * numbers[j]);
        }
    }
  // push한 값들 중 큰 값을 구한다.
    return Math.max(...answer);
}
