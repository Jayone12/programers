// 문제
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 
// 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

function solution(n, t) {
  // 시간당 두배기 때문에 시간에 2를 거듭제곱을 한수 세균 마리수를 곱한다.
    return n * (2 ** t)
}

// Math.pow를 사용한 풀이
function solution(n, t) {
    return n*Math.pow(2,t);
}

// Math.pow(base, exponent)
// base는 밑값이고 exponent는 주어진 밑 값을 주어진 지수 값으로 거듭제곱한 숫자 값이다.
