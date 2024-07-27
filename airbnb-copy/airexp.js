export default
function Experience(props){
    return(
        <div className="container-hob">
            <img src={props.image} alt="swim"/>
            <div className="content">
              <span><i class="fa-solid fa-star color"></i></span>
              <span>{props.rating}</span>
              <span>{props.review} . USA </span><br/>
              <div class>{props.text}</div>
              <span><b>From ${props.price}</b> / person</span>
            </div>
        </div>
    )
  }