// Access all the information 
const sbtn = document.getElementById("sbtn");
const widthElement = document.getElementById("width");
const heightElement = document.getElementById("height");
const srtxElement = document.getElementById("inpt_strt_x");
const srtyElement = document.getElementById("inpt_strt_y");
const endxElement = document.getElementById("inpt_end_x");
const endyElement = document.getElementById("inpt_end_y");
const tbl = document.getElementById("tbl");


sbtn.addEventListener('click',function(){
    //Obtains all values
    width_val = widthElement.value; 
    height_val = heightElement.value; 
    srtx_val = srtxElement.value;
    srty_val = srtyElement.value;
    endx_val = endxElement.value;
    endy_val = endyElement.value;
    
});

class Grid{
    constructor(height, width,node){
        ///code
        height=height;
        width=width;
        node=node;
        let NodesGrid =[];
        for (let i = 0; i<=height; i++){
            NodesGrid.push([]);
           let row=document.createElement(tr);
            tbl.appendChild(row);
            for (let i = 0; i<= width; i++){
                NodesGrid[i].push(node);
               let tile=document.createElement(td);
               row.appendChild(tile);
            };
        };
    };
    
};
Grid(height_val, width_val, 3);
//q.push(o), q.shift()-> returns 0 