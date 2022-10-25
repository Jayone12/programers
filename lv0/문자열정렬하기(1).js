// 문제
// 문자열 my_string이 매개변수로 주어질 때, 
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

function solution(my_string) {
  // 문자열에서 숫자만 찾는다.
  // 숫자만 찾아서 생성된 배열을 map을 통해 전부 숫자타입으로 변경
  // 숫자를 낮은 순서로 정렬한다.
   return my_string.match(/\d/g,"").map(Number).sort((a,b)=> a-b)
}
