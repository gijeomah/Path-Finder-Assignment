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




sbtn.addEventListener('click',function(){
    //Obtains all values
    width_val = widthElement.value; 
    height_val = heightElement.value; 
    srtx_val = srtxElement.value;
    srty_val = srtyElement.value;
    endx_val = endxElement.value;
    endy_val = endyElement.value;
    let output = new Grid(height_val, width_val,srtx_val,srtx_val );

    
});
class Node{
    constructor(type, tblData)
    this.type=type;
    this.tblData=tblData;
    
}

class Grid{
    constructor(height, width, strtx, strty){
        ///code
        this.height=height;
        this.width=width;
        this.strtx=strtx;
        this.strty=strty;
       // node=node;

        let NodesGrid =[];
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
               row.appendChild(tile);
               NodesGrid[i].push(new Node("regular",tile);
            };
        };
        //let goal = NodesGrid[srty_val][srtx_val];
        //goal.style.backgroundColor="green";
        //tile.style.color = "green"

    }




    
};
 //const output = new Grid(height_val, width_val, 3);
//const output = new Grid(height_val, width_val, 3);

//q.push(o), q.shift()-> returns 0 
