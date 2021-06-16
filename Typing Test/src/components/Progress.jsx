import React,{ Component } from "react";
import SemiCircleProgressBar from "react-progressbar-semicircle";
  
function Progress(props){

  
    
    return(
        <div >
            <SemiCircleProgressBar   percentage={props.a} showPercentValue stroke="blue" />
        </div>
        
        
    );

}
export default Progress;