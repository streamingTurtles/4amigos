import React from "react";
import Draggable from 'react-draggable';

function Resources() {
    return (
        <Draggable bounds="parent">
            <div className='container'>
        <h1>Full Stack Resources</h1>
    </div>
    </Draggable>
    )
}

export default Resources;