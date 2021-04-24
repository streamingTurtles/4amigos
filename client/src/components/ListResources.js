import React from "react";

export default function ListResources (props){
  
       
        const resourceList = props.resourceList.map(resource => {
            return (
                <a style={{color:`${props.currentColor}`}}href={resource.link} target="_blank" class="list-group-item list-group-item-action ">{resource.displayName}</a>    
            )
                    
                
        })
        return (
            <div className="list-group mb-3">
                <a  style ={{backgroundColor:"#6d77ff",color:"white",fontSize:"22px"}}href="#" class="list-group-item list-group-item-action">{props.title}</a>

                {resourceList}
            </div>
        )
}