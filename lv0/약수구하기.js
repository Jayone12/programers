// 문제
// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    let answer = []
    // n의 수 만큼 반복문 실행
    for(let i = 1; i <=n; i++){
    // n의 값을 i로 나누었을 때 0이 나온다면 빈 배열에 push한다.
        !(n % i) && answer.push(i)
    }
    return answer
}
