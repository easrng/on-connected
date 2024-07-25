// @ts-check
import "./index.js";
const onConnected = document.createElement("on-connected");
onConnected.fn = () => {
  console.log("connected 1", new Error().stack);
  return () => {
    console.log("disconnected 1", new Error().stack);
  };
};
document.body.appendChild(onConnected);
onConnected.remove();
const doc = new DOMParser().parseFromString("", "text/html");
doc.body.append(onConnected);
onConnected.fn = () => {
  console.log("connected 2", new Error().stack);
  return () => {
    console.log("disconnected 2", new Error().stack);
  };
};
document.body.appendChild(onConnected);
