var board = [
    [null,'C1','C2','C3', null],
    ['P1',null, null, null, null],
    ['P2',null, null, null, null],
    ['P3',null, null, null, null],
    [null,null, null, null, null]
];




function indexFinder(arr, value){
    for(var i = 0; i<arr.length-1; i++){
        console.log(arr.length);
        var x = board[i].indexOf(value)
        console.log(x);
        if(x != -1){
            return[i,x];
        }
    }
    return "already at the end";
}


function playerMove(arr, value){
    var valuePosition = indexFinder(arr,value);
    if(typeof(valuePosition) === "string"){
        return valuePosition;
    }
    if(valuePosition[0] === 3){
        arr[valuePosition[0]][valuePosition[1]+1] = value;
        arr[valuePosition[0]][valuePosition[1]] = null;
    }
    if(arr[valuePosition[0]][valuePosition[1]+1] != null){
        if(arr[valuePosition[0]][valuePosition[1]+2] != null){
            return "wrong move!";
        }
        else{
            arr[valuePosition[0]][valuePosition[1]+2] = value;
            arr[valuePosition[0]][valuePosition[1]] = null;
        }
    }

    else{
        arr[valuePosition[0]][valuePosition[1]+1] = value;
        arr[valuePosition[0]][valuePosition[1]] = null;
    }
    return arr;
}

console.log(playerMove(board,'P1'))
console.log(playerMove(board,'P1'))
console.log(playerMove(board,'P1'))
console.log(playerMove(board,'P1'))
console.log(playerMove(board,'P1'))



