// 문제
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

function solution(n) {
    return [...n.toString()].reverse().map(Number)
}

// 다른 사람 풀이
function solution(n) {
    var arr = [];

  // do...while 문을 사용하여 n이 0보다 작으면 중지
    do {
      // n을 10으로 나눈 나머지가 n의 한자리수가 되므로 수를 배열에 넣는다.
        arr.push(n%10);
      // n의 값에서 자리수 하나씩 제거한다.
        n = Math.floor(n/10);
      // n을 10으로 나눴을 때 0이 나오면 반복 중지
    } while (n>0);

    return arr;
}
