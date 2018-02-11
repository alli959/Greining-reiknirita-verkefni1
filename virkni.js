


function game(array){
    document.close();
    var message = document.createElement("h2");
    var input = document.createElement("input");
    var table = document.createElement("table");
    table = makeTableHTML(board);
    document.write(table);
    document.body.appendChild(input);
    input.onchange = function(){
        if(input.value == 1){
            if(turn){
                var k = playerMove(board, 'P1');
                if(typeof(k) != "string"){
                    turn = !turn
                }
                game(k);
            }
            else{
                var k = computerMove(board, 'C1');
                if(typeof(k) != "string"){
                    turn = !turn
                }
                game(k);
            }
        }
        if(input.value == 2){
            if(turn){
                var k = playerMove(board, 'P2');
                if(typeof(k) != "string"){
                    turn = !turn
                }
                game(k);
            }
            else{
                var k = computerMove(board, 'C2');
                if(typeof(k) != "string"){
                    turn = !turn
                }
                game(k);
            }
        }
        if(input.value == 3){
            if(turn){
                var k = playerMove(board, 'P3');
                if(typeof(k) != "string"){
                    turn = !turn
                }
                game(k);
            }
            else{
                var k = computerMove(board, 'C3');
                if(typeof(k) != "string"){
                    turn = !turn
                }
                game(k);
            }
        }
    }
}
    
var turn = true;






function makeTableHTML(myArray) {
    var result = "<table border=1>";
    for(var i=0; i<myArray.length; i++) {
        result += "<tr>";
        for(var j=0; j<myArray[i].length; j++){
            result += "<td>"+myArray[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table>";
    
    return result;
}

var board = [
    [null,'C1','C2','C3', null],
    ['P1',null, null, null, null],
    ['P2',null, null, null, null],
    ['P3',null, null, null, null],
    [null,null, null, null, null]
];




function indexFinder(arr, value){
    for(var i = 0; i<arr.length-1; i++){
        var x = board[i].indexOf(value)
        if(x === 4) break;
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



function computerMove(arr, value){
    var valuePosition = indexFinder(arr,value);
    if(typeof(valuePosition) === "string"){
        return valuePosition;
    }
    if(arr[valuePosition[0]+1][valuePosition[1]] != null){
        if(arr[valuePosition[0]+2][valuePosition[1]] != null){
            return "wrong move!";
        }
        else{
            arr[valuePosition[0]+2][valuePosition[1]] = value;
            arr[valuePosition[0]][valuePosition[1]] = null;
        }
    }

    else{
        arr[valuePosition[0]+1][valuePosition[1]] = value;
        arr[valuePosition[0]][valuePosition[1]] = null;
    }
    return arr;
}





game(board);
