import React from "react"
import ListResources from "./ListResources"
import resources from "../resources"
var colors=["red","blue","green","orange"]
function HomeSignUp(){
    console.log (resources)
    return (
        <div>
            <h1>Home</h1>
            <div className ="container-fluid">
                <div className = "row">
                    <div className = "col-md-2"></div>
                    <div className = "col-md-8"></div>
                    <div className = "col-md-2">
                        {resources.map((resource,index) => {
                            console.log(resource)
                            return (
                            <ListResources currentColor={colors[index]} resourceList={resource.resources} title={resource.title}/>
                        )})}
                
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomeSignUp;