// Access all the information 
const sbtn = document.getElementById("sbtn");
const widthElement = document.getElementById("width");
const heightElement = document.getElementById("height");
const srtxElement = document.getElementById("inpt_strt_x");
const srtyElement = document.getElementById("inpt_strt_y");
const endxElement = document.getElementById("inpt_end_x");
const endyElement = document.getElementById("inpt_end_y");
const tbl = document.getElementById("tbl");
//Declaring these variables
let width_val;
let height_val;
let srtx_val;
let srty_val;
let endx_val;
let endy_val;
let NodesGrid = [];



let grid = null;

sbtn.addEventListener('click',function(){
    //Obtains all values
    width_val = widthElement.value; 
    height_val = heightElement.value; 
    srtx_val = srtxElement.value;
    srty_val = srtyElement.value;
    endx_val = endxElement.value;
    endy_val = endyElement.value;
    grid = new Grid(height_val, width_val,srtx_val,srtx_val,endx_val,endy_val );

    
});
class Node{
    constructor (type, td){
        this.type=type
        this.td=td
        console.log(td);
        //tblData[strty][strtx].style.backgroundColor="green";
        //tblData.style.backgroundColor="green";
    }
    //function to find the neigbors 
    
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
            NodesGrid.push([]);
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
               NodesGrid[i].push(new Node("regular",tile));
            };
        };

        //Colorinig the starting
        let start = NodesGrid[starty][startx];
        console.log(start);
        start.td.style.backgroundColor="green";
        let goal = NodesGrid[endy][endx];
        console.log(goal);
        goal.td.style.backgroundColor="red";
        
        //tile.addEventListener('click', function(){
        //td.style.backgroundColor="black";})
        


        //tile.style.color = "green"

    }
};
//Create walls
//td.addEventListener('click')
//function to find the neigbors 
function neigbors(){
    //find the neighbors. 
}



 //const output = new Grid(height_val, width_val, 3);
//const output = new Grid(height_val, width_val, 3);

//q.push(o), q.shift()-> returns 0 
