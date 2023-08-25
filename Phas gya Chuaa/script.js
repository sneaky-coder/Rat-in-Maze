let level1 = [
    [1,0,1,0],
    [1,0,1,1],
    [1,1,1,0],
    [0,0,1,1]
]
let level2= [
    [1,0,1,1,1,0],
    [1,1,0,0,0,1],
    [0,1,1,0,1,1],
    [1,1,1,1,1,1],
    [1,0,0,1,0,1],
    [1,0,1,1,1,1]
]
let level3=[
    [1,1,1,0,0,1,1,0],
    [1,1,1,1,1,1,0,1],
    [0,1,1,0,1,1,0,1],
    [0,1,1,0,1,0,1,0],
    [1,0,1,0,1,1,1,0],
    [1,1,1,1,0,1,1,0],
    [1,0,1,0,1,1,1,0],
    [0,1,1,0,0,1,1,1]
]

let level4= [
    [1,1,1,1,1,1,0,1,1,1],
    [1,0,1,0,0,1,0,1,0,0],
    [1,0,1,1,0,1,0,1,1,1],
    [1,1,0,1,0,1,1,0,0,1],
    [0,1,0,1,0,0,1,1,0,1],
    [1,1,0,1,1,1,0,1,1,1],
    [1,0,0,0,0,1,0,0,0,0],
    [1,1,1,1,0,1,0,1,1,1],
    [0,0,0,1,0,1,0,1,0,1],
    [1,1,1,1,0,1,1,1,0,1]
]

let level5=[
    [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0],
    [0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0],
    [0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0],
    [0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0],
    [0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0],
    [0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0],
    [0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0],
    [0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0],
    [0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0],
    [0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0],
    [0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0],
    [0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1]
]

let mazearray = level1;
let Level = document.getElementById("levelselect");
Level.addEventListener("change",function(){
    let level = Level.value;    
    console.log(level);
    if(level ==1) {mazearray= level1;}
    if(level ==2) {mazearray= level2;}
    if(level ==3) {mazearray= level3;}
    if(level ==4) {mazearray= level4;}
    if(level ==5) {mazearray= level5;}

    maze.innerHTML='<img src="rat.png" id="rat" alt="rat" width="50px" height="50px">  <img src="cheese.png" id="cheese" alt="cheese"  width="50px" height="50px">'
        
    createMaze();
})

let maze = document.getElementById("maze-container");
let rat = document.getElementById("rat");
let cheese = document.getElementById("cheese");

function setRatPosition(x,y){
    rat.style.left = y+ "px";
    rat.style.top = x+"px";
}
function setCheessePosition(x,y){
    cheese.style.right = y+"px";
    cheese.style.bottom= x+"px";
}

function createMaze(){
    for(let i =0; i<mazearray.length;i++){
        let row = document.createElement("div");
        row.classList.add("row");

        for(let j=0;j<mazearray[i].length;j++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            
            if(mazearray[i][j] == 0) cell.classList.add("wall");

            if(i==0 && j==0)mazearray[i][j]=2;

            row.appendChild(cell);
        }
        maze.appendChild(row);

    }
}

function getRatPosition(){
    let position = [-1,-1];
    for(let i=0;i<mazearray.length;i++){
        for(let j=0;j<mazearray[i].length;j++){
            if(mazearray[i][j]==2){
                position[0] = i;
                position[1] = j;
            }
        }
    }
    return position;
}

document.addEventListener("keydown", function(q){
    let rat = document.getElementById("rat");
    let cheese = document.getElementById("cheese");
    let ratleft = rat.offsetLeft;
    let rattop = rat.offsetTop;
    let cheeseleft = cheese.offsetLeft;
    let cheesetop = cheese.offsetTop;

    let ratposition = getRatPosition();

    if(q.key == "ArrowRight" || q.key == "d"){
        if(ratleft <(mazearray.length - 1)*50){
            if(mazearray[ratposition[0]][ratposition[1]+1] ==1){
                ratleft += 50;
            rat.style.left = ratleft +"px";
            
            mazearray[ratposition[0]][ratposition[1]] = 1;
            mazearray[ratposition[0]][ratposition[1]+1] =2;
            console.log(mazearray);
            }
        }
    }
    if(q.key == "ArrowLeft" || q.key == "a"){
        if(ratleft >0){
            if(mazearray[ratposition[0]][ratposition[1]-1] ==1){
                ratleft -= 50;
                rat.style.left = ratleft +"px";

                mazearray[ratposition[0]][ratposition[1]]=1;
                mazearray[ratposition[0]][ratposition[1]-1] =2;
                console.log(mazearray);
            }
        }
       
    }
    if(q.key == "ArrowUp"|| q.key == "w"){
        if(rattop>0){
            if(mazearray[ratposition[0]-1][ratposition[1]]==1){
                rattop -= 50;
                rat.style.top = rattop +"px";

                mazearray[ratposition[0]][ratposition[1]]=1;
                mazearray[ratposition[0]-1][ratposition[1]]=2;

            }
        }
       
    }
    if(q.key == "ArrowDown"|| q.key == "s"){
        if(rattop <(mazearray.length-1)*50){
            if(mazearray[ratposition[0]+1][ratposition[1]]==1){
                rattop += 50;
                rat.style.top = rattop +"px";
        
                mazearray[ratposition[0]][ratposition[1]]=1;
                mazearray[ratposition[0]+1][ratposition[1]]=2;
            }
        }
       
    }

    if(ratleft == cheeseleft && rattop == cheesetop){
        alert("You Won!!!")
    }
})
