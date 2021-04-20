import React from "react";

const style = {
  content: {
    margin: 50,
    padding: 30,
    width: 300,
    borderStyle: "outset",
  },
  img:{
    display: "none"
  }
};

function Setting(props) {
  return (
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
  );
}

export default Setting;
