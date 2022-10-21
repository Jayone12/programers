// 문제
// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

const solution = num_list => {
    let answer = [0, 0]
    num_list.forEach(num => {
      // 배열의 수만큼 반복하여 값을 2로 나누었을 때 삼항 연산자를 사용하여 각 배열 카운트
        num % 2 ?  answer[1]++ : answer[0]++
    })
    return answer
}


// 다른 사람의 풀이 중 색다른 풀이
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}
