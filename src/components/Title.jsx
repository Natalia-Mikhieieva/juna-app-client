import React from "react";

export default function Title(props) {
  const styles = {
    title: {
      backgroundColor: "white",
      width: "100%",
      height: "80px",
      display: "flex",
      alignItems: "center ",
      justifyContent: "left",
      padding: "0 0 0 50px ",
    },
  };
  return (
    <div className="title" style={styles.title}>
      <h5>{props.text} </h5>
    </div>
  );
}
