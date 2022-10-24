// 문제
// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

function solution(price) {
    let result = 0;
    if(price >= 500000) {
        result = price * 0.8
    } else if( price >= 300000){
        result = price * 0.9
    } else if(price >= 100000){
        result = price * 0.95
    } else {
        result = price    
    }
    
    return parseInt(result)
}
