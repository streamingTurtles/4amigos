import React from "react";
import Draggable from 'react-draggable';

const style = {
    content:{
        margin: 50,
        padding:30,
        width:300,
        borderStyle:'outset'

    }
}

class Projects extends React.Component {

    render() {
      return (
        <Draggable bounds="parent">
  <div style={style.content}>
Projects
  </div>
      </Draggable>
    );
  }
}

export default Projects;