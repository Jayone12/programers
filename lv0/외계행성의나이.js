// 문제
// 우주여행을 하던 머쓱이는 엔진 고장으로 PROGRAMMERS-962 행성에 불시착하게 됐습니다. 
// 입국심사에서 나이를 말해야 하는데, PROGRAMMERS-962 행성에서는 나이를 알파벳으로 말하고 있습니다. 
// a는 0, b는 1, c는 2, ..., j는 9입니다. 
// 예를 들어 23살은 cd, 51살은 fb로 표현합니다. 
// 나이 age가 매개변수로 주어질 때 PROGRAMMER-962식 나이를 return하도록 solution 함수를 완성해주세요.

function solution(age) {
    return (age+"").split("").map(v => String.fromCharCode(97+Number(v))).join("")
}

// String.fromCharCode()
// UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환한다.
// UTF-16 코드 유닛인 숫자 뭉치. 가능한 값의 범위는 0부터 65535(0xFFFF)까지입니다. 
// 0xFFFF를 초과하는 값은 잘립니다. 유효성 검사는 하지 않습니다.
