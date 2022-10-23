// 문제
// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 
// 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 
// 정수 배열 array가 매개변수로 주어질 때, 
// 중앙값을 return 하도록 solution 함수를 완성해보세요.

const solution = (array) => {
  // 베얄을 작은 순으로 정렬한다.
  array.sort((a,b) => a - b)
  // 베열의 길이를 반으로 나눈 뒤 Math.floor를 사용하여 내림하여 반환한다.
  return array[Math.floor(array.length / 2)]
}
