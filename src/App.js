// import ClassComponent from "./classComponent";
import FunctionComponent from "./functionComponent";
import { useState } from "react";
// import React,{Component} from "react";
import './App.css';
// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       name: "Monu"
//     }        
//   }
//   render() {
//     return (
//       <div className="App">
//         {/* <ClassComponent name={this.state.name}></ClassComponent> */}
//         <FunctionComponent name={this.state.name}></FunctionComponent>
//         <button onClick={()=>{this.setState({name:"Sonu"})}}>Change Name</button>
//       </div>
//     )
//   }
// }

function App() {
  const [name,setState] = useState("Monu");
  return (
    <div className="App">
       {/* <ClassComponent name={name}></ClassComponent> */}
       <FunctionComponent name={name}></FunctionComponent>
       <button onClick={()=>{setState("Sonu")}} >change name</button>
    </div>
  );
}

export default App;
