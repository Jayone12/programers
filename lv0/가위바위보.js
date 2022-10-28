// 문제
// 가위는 2 바위는 0 보는 5로 표현합니다. 
// 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, 
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.

// 2를 이기려면 0
// 0을 이기려면 5
// 5를 이기려면 2
// 가위 2 바위 0 보 5
// 이기는 걸로 문자열 만들기

function solution(rsp) {
  // 반환할 정답 변수
  let result = ""
  // 전달 받은 매개변수를 배열화
  rsp = [...rsp]
  // 매개변수의 값을 반복하며 비교한다.
  rsp.forEach((v, i) => {
    // 매개변수 배열의 값이 2일 경우 result에 0을 삽입한다.
    if(v === "2"){
      result += "0"
    // 매개변수 배열의 값이 0일 경우 result에 5을 삽입한다.
    } else if(rsp[i] === "0"){
      result += "5"
    // 매개변수 배열의 값이 5일 경우 result에 2을 삽입한다.
    } else if(rsp[i] === "5"){
      result += "2"
    }
  })
  // 결과값을 반환한다.
  return result
}

// 다른 사람 풀이
function solution(rsp) {
  // 가위바위보를 객체화 하여 이기고 지는 값을 key, value 형태로 객체화
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}
