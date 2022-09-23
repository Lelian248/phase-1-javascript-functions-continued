// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

saturdayFun();
saturdayFun("skatinig")

const mondayWork =function(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

mondayWork();
mondayWork("meeting")

function wrapAdjective(symbol="*"){
    return function(string){
        return`You are ${symbol}${string}${symbol}!`
    }
}

console.log(wrapAdjective("%")("a dedicated programmer"));
console.log(wrapAdjective("||")("a dedicated programmer"));