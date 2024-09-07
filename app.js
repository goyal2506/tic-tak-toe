let current = "X";
let turn = document.querySelector("#turn");
let winner = document.querySelector("#winner");
let arr = Array(9).fill(null);
function checkwinner(){
    if(
        (arr[0]) != null && arr[0]==arr[1] && arr[1]==arr[2] ||
        (arr[3]) != null && arr[3]==arr[4] && arr[4]==arr[5] ||
        (arr[6]) != null && arr[6]==arr[7] && arr[7]==arr[8] ||
        (arr[0]) != null && arr[0]==arr[3] && arr[3]==arr[6] ||
        (arr[1]) != null && arr[1]==arr[4] && arr[4]==arr[7] ||
        (arr[2]) != null && arr[2]==arr[5] && arr[5]==arr[8] ||
        (arr[0]) != null && arr[0]==arr[4] && arr[4]==arr[8] ||
        (arr[2]) != null && arr[2]==arr[4] && arr[4]==arr[6] 
    ){
        winner.innerHTML=(`${current} is the winner `);
        return;
    }if(!arr.some((e) => e ===null)){
        winner.innerText="no winner";
        return;
    }
}
function start(el){
    const id = Number(el.id);
    if(arr[id]!==null) return;
    arr[id] = current;
    checkwinner();
    if(current=="X"){
        current="O"
    }
    else{
        current="X"
    }
    turn.innerText=current;
    el.innerText= arr[id];
    

}