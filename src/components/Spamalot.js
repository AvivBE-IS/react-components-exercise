import Spam from "./Spam";
import React, { Component } from "react";

const Spamalot = () => {
  // Create an array with 500 elements and map it to Spam components
  const spamList = Array.from({ length: 500 }, (_, i) => <Spam key={i} />);

  return <div>{spamList}</div>;
};

export default Spamalot;
