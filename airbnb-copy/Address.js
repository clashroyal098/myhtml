export default 
function Address(props){
    return(
    <>
    <div className="Address">
      <ul>
        <li><b>Name : </b> {props.name}</li>
        <li><b>Location : </b> {props.location} </li>
        <li><b>Ward : </b> {props.ward} </li>
      </ul>
    </div>
    </>
    )
}