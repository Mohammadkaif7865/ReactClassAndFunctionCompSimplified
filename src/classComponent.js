import React,{ Component} from 'react';
export default class Student extends Component {
 
    render(){
        console.log(this.props);//we cannot console directly inside the class component we have define it inside the function of class component
        return(
         <>
           <h2>Name : {this.props.name}</h2>
            <h2>Email : {this.props.email}</h2>
            <h2>Salary : {this.props.salary}</h2>
            <h2>Address : {this.props.address}</h2>
         </>
        )
    }
  }