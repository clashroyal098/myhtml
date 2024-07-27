ReactDOM.render(
    <div>
        <Header/>
        <Intro/>
        <div class="exp">
        <Experience 
        image="swim.png"
        rating={5.0}
        review=" (6)"
        text="Life lessons with Katie Zaferes"
        price={136}
        />
        <Experience 
        image="wed.png"
        rating={5.0}
        review=" (30)"
        text="Learn wedding photography"
        price={125}
        />
        <Experience 
        image="cycle.png"
        rating={4.8}
        review=" (2)"
        text="Group Mountain Biking"
        price={50}
        /></div>
    </div>, document.getElementById("root"));
function Header(){
    return(
        <div className="container">
            <div className="container-card">
          <header>
             <img src="airbnb 1logo.png"></img>
          </header>
            </div>
        </div>
)}
function Intro(){
    return(
        <div className="container">
            <img src="Group 77fields.png" alt=""></img>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by<br></br>
                 one-of-a-kind hosts—all without leaving<br></br>
                  home.
            </p>
        </div>
    )
}
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