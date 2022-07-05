export default function Student(props){
    console.log(props);
    return(
        <div className="App">
            <h2>Name : {props.name}</h2>
        </div>
    )
}