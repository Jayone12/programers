// 문제
// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, num1, num2) {
  // 문자열을 배열로 변경한다.
  const arr = [...my_string]
  // 배열에서 인덱스에 있는 값을 교체한다.
  arr.splice(num1, 1, my_string[num2])
  arr.splice(num2, 1, my_string[num1])
  return arr.join("")
}

// 다른 사람 풀이
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}
