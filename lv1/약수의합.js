// 문제
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, 
// solution을 완성해주세요.

function solution(n) {
  // 반환할 결과 값
    let result = 0;
  // n의 수만큼 반복문 실행
    for(let i = 0; i <= n; i++){
      // n을 i로 나눴을 때 딱 떨어지는 값만 result에 더해준다.
        if(n % i === 0) result += i
    }
    return result;
}
