export default function Student(props){
    console.log(props);
    return(
        <div className="App">
            <h2>Name : {props.name}</h2>
            <h2>Email : {props.email}</h2>
            <h2>Salary : {props.salary}</h2>
            <h2>Address : {props.address}</h2>
        </div>
    )
}