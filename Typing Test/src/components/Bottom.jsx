import React from "react";
import Progress from "./Progress"; 
function Bottom(props){
    var display = {

        //display: 'flex',
        //flexDirection: 'row'
        //background-color: DodgerBlue;


    };
    return (
    <div>
        <div style={display}>
       <h4>Accuracy</h4>
       <Progress
           a={props.accu}
       />
        
        </div>
        <div style={display}>
        <h4>Words per minute(WPM)</h4>
        <Progress
           a={props.wpm}
       />
        </div>
    </div>
    );
}
export default Bottom;