// 문제
// 정수 배열 array가 매개변수로 주어질 때, 
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

const solution = array => {
  let answer = [];
  // 반복문으로 배열의 길이 만큼 반복을 한다.
  for (let i = 0; i < array.length; i++) {
    // 이중 반복문을 쓴다.
    array.forEach((num, v) => {
      // 각 배열의 값을 배열의 각 값과 비교한다.
      if (array[i] < num) {
        // 빈 배열의 0번째 인덱스로 큰수를 담고
        answer[0] = num;
        // 큰수의 인덱스를 빈 배열의 1번째 인덱스에 담는다.
        answer[1] = v;
      }
    });
  }
  return answer;
}


// 다른 사람의 풀이
function solution(array) {
  // 배열에서 큰 수를 찾아 max 변수에 할당한다.
    let max = Math.max(...array);
  // max의 값과 max의 인덱스를 찾아 배열로 반환한다.
    return [max, array.indexOf(max)];
}
