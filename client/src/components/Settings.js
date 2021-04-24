import React from "react";
import Draggable from 'react-draggable';


const style = {
  content: {
    margin: 50,
    padding: 30,
    width: 300,
    borderStyle: "outset",
    background:"rgb(255,255,255,0.8)"
  },
  img:{
    display: "none"
  }
};

function Setting(props) {
  return (
    <Draggable bounds="parent">
    <div style={style.content}>
    <p>Setting</p>
     <form>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={props.onChange}
      />
      </form>
    </div>
    </Draggable>
  );
}

export default Setting;
