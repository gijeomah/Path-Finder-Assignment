// Access all the information 
const sbtn = document.getElementById("sbtn");
const widthElement = document.getElementById("width");
const heightElement = document.getElementById("height");
const srtxElement = document.getElementById("inpt_strt_x");
const srtyElement = document.getElementById("inpt_strt_y");
const endxElement = document.getElementById("inpt_end_x");
const endyElement = document.getElementById("inpt_end_y");
const tbl = document.getElementById("tbl");
const clrbtn = document.getElementById("clrbtn");
//Declaring these variables
let width_val;
let height_val;
let srtx_val;
let srty_val;
let endx_val;
let endy_val;
let NodesGrid = [];
let neigh;
let que = [];
let visited = [];


let grid = null;

sbtn.addEventListener('click',function(){
    tbl.innerHTML = "";

    //Obtains all values
    width_val = widthElement.value; 
    height_val = heightElement.value; 
    srtx_val = srtxElement.value;
    srty_val = srtyElement.value;
    endx_val = endxElement.value;
    endy_val = endyElement.value;
    grid = new Grid(height_val, width_val,srtx_val,srtx_val,endx_val,endy_val );
    grid.neighbors();
    console.log(grid)

    // add start to queue
    // while (que.length!=0){
        //curr=  deque
        // loop over the children of the current node
        // if visted, continue
        // else if goal break
        // else if wall, contiinue. 
        // else
        // add child to the queue
    //}
    let curr;
    que.push(grid.start);
    let hitGoal = false;
    while(que.length!=0 && !hitGoal){
        curr = que.shift();
        for(let child of curr.children){

            if (visited.includes(child)){
                continue;
            }
            else if (child.td == grid.goal.td){
                hitGoal = true;
                break;
            }
            else if (child.td.style.backgroundColor == "black"){
                continue;
            }
            else{
                que.push(child);
                visited.push(child);
            }
        }
    }

    for (let node of visited){
        if (node.td.style.backgroundColor != "green")
        {
        node.td.style.backgroundColor = "lightgreen";
        }
    }

    
});

//clear btn
clrbtn.addEventListener('click',function(){
    //Obtains all values
    
    
    //grid = new Grid(null);


    
});
class Node{
    constructor (td){
        this.td=td
        console.log(td);
        this.children=[];
    }
} 



class Grid{
    constructor(height, width, startx, starty,endx,endy){
        ///code
        this.height=height;
        this.width=width;
        this.startx=startx;
        this.starty=starty;
        this.endx=endx;
        this.endy=endy;
       // node=node;
        this.NodesGrid = [];
        console.log('idkkk')
        for (let i = 0; i<height; i++){
            this.NodesGrid.push([]);
            console.log("i");
            let row=document.createElement('tr');
            tbl.appendChild(row);
            for (let j = 0; j< width; j++){
                console.log("j");
                //let node = 
               let tile=document.createElement('td');
               //Create walls
               tile.addEventListener('click',function(){tile.style.backgroundColor="black"});
               row.appendChild(tile);
               this.NodesGrid[i].push(new Node(tile));
               //this.NodesGrid[i].push(new Node(wall,tile));
            };
        };

        //Colorinig the starting
        this.start = this.NodesGrid[starty][startx];
        // console.log(start);
        this.start.td.style.backgroundColor="green";
        this.goal = this.NodesGrid[endy][endx];
        // console.log(goal);
        this.goal.td.style.backgroundColor="red";
        
        //tile.addEventListener('click', function(){
        //td.style.backgroundColor="black";})
        


        //tile.style.color = "green"

    }
    //function to find the neigbors 
    neighbors(){
        //find the neighbors. 
        for (let i=0; i<this.NodesGrid.length; i++){
            console.log("testing");
            for (let j=0; j<this.NodesGrid[i].length; j++)
                {
                console.log("neighbors");
                if ((i-1) >= 0){
                    this.NodesGrid[i][j].children.push(this.NodesGrid[i-1][j]);
                };
                 if((j-1)>=0){
                    this.NodesGrid[i][j].children.push(this.NodesGrid[i][j-1]);
                };
                if((i+1)<this.height){
                    this.NodesGrid[i][j].children.push(this.NodesGrid[i+1][j]);
                };
                if((j+1)<this.width){
                    this.NodesGrid[i][j].children.push(this.NodesGrid[i][j+1]);
                };
            };
        }
    };
};

//Create walls
//td.addEventListener('click')



 //const output = new Grid(height_val, width_val, 3);
//const output = new Grid(height_val, width_val, 3);

//q.push(o), q.shift()-> returns 0 
