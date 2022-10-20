//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

const solution = (n) => {
  // 결과값의 초기셋팅
    let result = 0;
  // n수 만큼 반복문 실행
    for(let i =0; i <= n; i++){
      // i가 2로 나누었을 때 0이면 짝수이므로 짝수를 result에 더한다.
        if(i % 2 === 0) {
            result += i
        }
    }
    return result
}
