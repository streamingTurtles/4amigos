import React, { useEffect, useState } from "react";
import axios from "axios";
// import GitRepo from "./GitRepo";
// import
// import Draggable from "react-draggable";
// import GitRepo from "./GitRepo";
// import
import { motion } from "framer-motion";
import "./BlogNotesAll.css";
const style = {
  content: {
    width: 700,
    height: 500,
    borderStyle: "outset",
    overflow: "scroll",
    background: "rgb(255,255,255,0.8)",
  },
};
function BlogNotesAll() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("/notes")
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => {
        console.log(jsonRes);
        setNotes(jsonRes);
      });
  }, []);

  return (
    // <Draggable bounds="parent">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      drag
      dragConstraints={{
        top: -1000,
        left: -1000,
        right: 1000,
        bottom: 1000,
      }}
      className="container"
      style={style.content}
    >
      <h1
        className="allNotes-title text-center"
        // style={{ position: "sticky", top: "0px", backgroundColor: "white" }}
      >
        The Board{" "}
      </h1>
      <hr></hr>

      {notes.reverse().map((note) => (
        <div key={note._id}>
          <div>
            <h2 className="text-capitalize">{note.title}</h2>
          </div>
          <div>
            <p className="notes">{note.githubusername}</p>
          </div>
          <div>
            <p className="notes">{note.repoName}</p>
          </div>
          <div id="description">
            <p className="text-capitalize">{note.content}</p>
          </div>
          <button
            className="delete-btn"
            onClick={() => {
              axios({
                method: "delete",
                url: `/notes/delete/${note._id}`,
              }).then((res) => {
                console.log(res);
                fetch("/notes")
                  .then((res) => {
                    console.log(res);
                    if (res.ok) {
                      return res.json();
                    }
                  })
                  .then((jsonRes) => {
                    console.log(jsonRes);
                    setNotes(jsonRes);
                  });
              });
            }}
          >
            Delete
          </button>
          <hr></hr>
        </div>
      ))}
    </motion.div>
    // </Draggable>
  );
}

export default BlogNotesAll;
