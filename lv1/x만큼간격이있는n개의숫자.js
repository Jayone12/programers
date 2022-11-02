// 문제
// 함수 solution은 정수 x와 자연수 n을 입력 받아, 
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
  // 반환할 결과값
    let result = []
  // n만큼 반복한다.
    for(let i = 1; i <= n; i++){
  // x에 증가하는 i값을 곱하여 result 배열에 넣는다.
        result.push(x * i)
    }
    return result
}


// 다른 사람 풀이
function solution(x, n) {
  // Array.fill를 사용하여 동일한 값이 n개 들어간 배열을 생성한다.
  // 헤딩 베열을 map으로 index를 증가시키면서 각 값을 곱하여 새 배열로 반환한다.
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
