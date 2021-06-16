import React, { useState } from "react";
import Bottom from "./Bottom";
const text = 'aasm';
var oldTime;

var tt=0;
function Top() {
    const [isdisable,setdisable] = useState(false);

function Func(props){
    //console.log(props.ind);
    if ((props.ind+1)===text.length) {
        var finalTime=new Date();
        console.log(tt);
        var wood=tt/((finalTime.getSeconds()-oldTime.getSeconds()));
        console.log(wood);
                setdisable(true);    
        return <Bottom
            accu = {props.accu}
            wpm={Math.round(wood/60)}
         />;}

    return <div></div>

}
    const [c, setState] = useState(0);
    const [xx, setState2] = useState( 0);
   // var tt=0;    
    function highlight() {
        
        if (c===0){
            console.log(c);
       oldTime=new Date();
        }
        var value = document.getElementById("in").value;

  
            
            var letters = document.getElementById("pa");
            //console.log(letters);
            var i = 0;
            var txt='';     
            tt=0;
            for (i; i <= c; i++) {
                if (value[i] !== text[i]) {
                   txt += '<span style="color:red">' + text[i] + '</span>';
                }
                else{
                    txt += '<span style="color:blue">' + text[i] + '</span>';
                    tt++;


                }
            }
                
            txt+= '<span id="cursor">' + text[c+1] + '</span>';    
            txt+=text.substr(c+2);
            letters.innerHTML=txt;
            setState2((tt/(c+1))*100  );


           
        setState(c + 1);



    }

    var display = {
        paddingTop: '20px',
        paddingBottom: '20px',
        paddingLeft: '10px',
        paddingRight: '10px',
        fontSize: '30px',
        color: 'rgba(0,0,0,0.3)'



    };
    return ( < div style = {display} >

        <div id='to'>
       <label id = 'pa' htmlFor ="in"  > Lorem Ipd more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </label> 
       </div>
        <div id='bo'>
        <input type = "text"   id = "in"  onInput = { highlight } disabled={isdisable} />
        <Func
            ind = {c}
            accu = {Math.round(xx)}
            wpm = '1'
        />    
       </div>
        </div>
    );
}
export default Top;