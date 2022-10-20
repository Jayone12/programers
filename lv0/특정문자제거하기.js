// 문제
// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 1. 문자열을 split을 사용하여 각 문자를 배엻화 한다.
// 2. 배열화한 문자를 filter를 사용하여 일치하지 않는 문자만 추출한다.
// 3. 추출한 문자의 배열을 join을 통해 문자열로 변경한다.
const solution = (my_string, letter) => my_string.split("").filter(str => str !== letter).join("")


// 다른 사람의 풀이
function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}

// split은 매개변수에 지정된 문자로 원본 끊어야 할 부분을 배열화 한다.
// 이때 letter를 넣을 경우 해당 문자로 배열을 끊기 때문에
// [my_string, letter]로 나뉘는데 이때 letter 부분은 ""로 된다.
