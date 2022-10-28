// 문제
// 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 
// 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 
// 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.


// 먼저 가로에 들어갈 갯수를 구하고
// 세로에 들어갈 갯수를 구한다음
// 높이만큼 들어갈 개수를 구해서
// 각각 곱하면 된다.

function solution(box, n) {
  // 반환할 결과 변수 선언
  let result = 1;
  // 매개변수 box 배열 수 만큼 반복문 실행
  box.forEach(v => {
    // 각 값에 n을 나누고 가장 낮은 정수로 나타낸 다음 반복하여 result의 값에 곱한다.
    result *= Math.floor(v/n)
  })
  return result
}

// 다른 풀이
function solution(box, n) {
  const [a, b, c] = box;
  return Math.floor(a/n) * Math.floor(b/n) * Math.floor(c/n)
}
