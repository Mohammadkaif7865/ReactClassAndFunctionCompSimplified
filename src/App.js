import ClassComponent from "./classComponent";
// import { useState } from "react";
import React,{Component} from "react";
import './App.css';
class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "Monu"
    }        
  }
  render() {
    return (
      <div className="App">
        <ClassComponent name={this.state.name}></ClassComponent>
        <button onClick={()=>{this.setState({name:"sonu"})}}>Change Name</button>
      </div>
    )
  }
}

// function App() {
//   const [name,setState] = useState("Monu");
//   return (
//     <div className="App">
//        <ClassComponent name={name}></ClassComponent>
//        <button onClick={()=>{setState("Sonu")}} >change name</button>
//     </div>
//   );
// }

export default App;
