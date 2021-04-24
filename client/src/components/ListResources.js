import React from "react";
import Draggable from 'react-draggable'

export default function ListResources (props){
  
        const resourceList = props.resourceList.map(resource => {
            return (
                <div>
                <a style={{color:`${props.currentColor}`}}href={resource.link} target="_blank" class="list-group-item list-group-item-action ">{resource.displayName}</a>    
                </div>
            )                       
        })
        return (    
            
            <div className="list-group mb-3">
                <p  style ={{backgroundColor:"blue",color:"white",fontSize:"22px"}} class="list-group-item list-group-item-action">{props.title}</p>
                {resourceList}
            </div>
        )
}

// return (

//    <div className="list-group mb-3">
//    <a style={{color:`${props.currentColor}`}}href={resource.link} target="_blank" class="list-group-item list-group-item-action ">{resource.displayName}</a>    
//     <a  style ={{backgroundColor:"blue",color:"white",fontSize:"22px"}}href="#" class="list-group-item list-group-item-action">{props.title}</a>
//     {resourceList}
//     </div>
    
// )                       
// })  
// }