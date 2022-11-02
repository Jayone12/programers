// 문제
// 자연수 n이 매개변수로 주어집니다. 
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 
// 답이 항상 존재함은 증명될 수 있습니다.

function solution(n) {
  // n만큼 반복한다.
    for(let i = 1; i <= n; i++){
  // 수 1부터 증가하면서 n을 나눈 나머지 값을 확인하며 나머지가 1일 때, 값을 return 한다.
        if(n % i === 1) return i
    }
}
