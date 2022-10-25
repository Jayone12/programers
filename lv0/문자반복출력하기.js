// 문제
// 문자열 my_string과 정수 n이 매개변수로 주어질 때, 
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

const solution = (my_string, n) => my_string.split("").map(str => Array(n).fill(str).join("")).join("")

// my_string 문자열을 split로 배열화 한 다음
// map을 사용하여 배열의 각 값을 n번 만큼 반복한 배열을 만든 다음 join으로 문자열로 변경한다.
// 배열화 하였던 my_string을 join을 사용하여 문자열로 합친다.


// 다른 사람의 풀이
function solution(my_string, n) {
  // my_string을 spread로 배열에 담은 후 repeat을 사용하여 n 만큼 반복한다.
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}

// repeat(count)
// 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.
