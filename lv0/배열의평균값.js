const solution = (numbers) => {
    let result = 0;
    numbers.forEach(number => {
        result += number 
    })
    return result / numbers.length
}


// reduce를 사용한 풀이
const solution = (numbers) => numbers.reduce((acc, cur) => acc + cur) / numbers.length
