// 문제
// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(s1, s2) {
    let answer = 0;
  // s1의 배열을 반복하면서 s2의 배열과 비교한다.
  // 비교하면서 같은 값이 있다면 answer의 숫자를 증가시킨다.
    s1.forEach(v => {
        s2.forEach(x => {
            v === x && answer++
        })
    })
    return answer;
}

// filter와 includes를 사용한 풀이
function solution(s1, s2) {
    return s1.filter((x) => s2.includes(x)).length
}
