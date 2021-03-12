const challengeFunction = function(cell1, cell2){
    let firstLetter = cell1.split("")[0]
    let firsttNumber = cell1.split("")[1]
    let secondLetter = cell2.split("")[0]
    let secondNumber = cell2.split("")[1]
    const letterArray= ["A","B","C","D","E","F","G","H"]
    let movimientos1= letterArray.indexOf(firstLetter)-letterArray.indexOf(secondLetter)
    let movimientos2= firsttNumber-secondNumber
    let mov = movimientos1+movimientos2
    return mov%2==0 
}
module.exports = challengeFunction
