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
  const [name,setName] = useState("abc");
  const [email,setEmail] = useState("abc@gmail.com");
  const [state,setState] = useState("None");
  const [salary,setSalary] = useState("-----");
  return (
    <div className="App">
       {/* <ClassComponent name={name}></ClassComponent> */}
       <FunctionComponent name={name} email={email} state={state} salary={salary}></FunctionComponent>
       <button onClick={()=>{setName("Monu");setState("Delhi");setSalary("320000");setEmail("monu@gmail.com")}} >Lets see</button>
    </div>
  );
}

export default App;
