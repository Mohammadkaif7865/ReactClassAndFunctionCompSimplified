import ClassComponent from "./classComponent";
// import FunctionComponent from "./functionComponent";
// import { useState } from "react";
import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "abc",
      address: "none",
      salary: "------",
      email: "abc@gmail.com",
    };
  }
  render() {
    return (
      <div className="App">
        <ClassComponent
          name={this.state.name}
          address={this.state.address}
          salary={this.state.salary}
          email={this.state.email}
        ></ClassComponent>
        {/* <FunctionComponent name={this.state.name} address={this.state.address} salary={this.state.salary} email={this.state.email}></FunctionComponent> */}
        <button
          onClick={() => {
            this.setState({
              name: "Monu",
              address: "Delhi",
              salary: "234554",
              email: "monu@gmail.com",
            });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

// function App() {
//   const [name,setName] = useState("abc");
//   const [email,setEmail] = useState("abc@gmail.com");
//   const [address,setState] = useState("None");
//   const [salary,setSalary] = useState("-----");
//   return (
//     <div className="App">
//        {/* <ClassComponent name={name}></ClassComponent> */}
//        <FunctionComponent name={name} email={email} address={address} salary={salary}></FunctionComponent>
//        <button onClick={()=>{setName("Monu");setState("Delhi");setSalary("320000");setEmail("monu@gmail.com")}} >Lets see</button>
//     </div>
//   );
// }

export default App;
