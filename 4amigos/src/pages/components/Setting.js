import React from "react";


const style = {
    content:{
        margin: 50,
        padding:30,
        width:300,
        borderStyle:'outset'

    }
}

class Setting extends React.Component {

    render(props) {
      return (
       
  <div style={style.content}>
  <input type="file"  accept="image/*" name="image" onChange={props.onChange}></input>
  <input type="submit"></input>
  </div>
      
    );
  }
}

export default Setting;