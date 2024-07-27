ReactDOM.render(
    <div>
        <Header/>
        <Main
         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7uRmbULBLuYyFd--rc9fIwIfrS2wjU7WOw&s"
         country="JAPAN"
         view="https://www.google.com/maps/place/Mount+Fuji/@35.3591523,138.7273611,15z/data=!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
         place="Mount Fuji"
         date1="12 Jan, "
         date2="24 Jan, "
         about="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
          />
          <Main
           image="https://ychef.files.bbci.co.uk/1280x720/p0gp95cq.jpg"
           country="AUSTRALIA"
           view="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567799,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu"
           place="Sydney Opera House"
           date1="27 May, "
           date2=" 8 Jun, "
           about="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            />
            <Main
             image="https://cdn.sanity.io/images/4aans0in/production/6455427d271934711138955086edffe6587e8552-1440x1440.jpg"
             country="NORWAY"
             view="https://www.google.com/maps/place/Geirangerfjord/@62.1049045,6.9922378,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu"
             place="Geirangerfjord"
             date1="01 Oct, "
             date2="18 Nov, "
             about="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
              />
    </div>,document.getElementById("root"));

function Header(){
    return(
    <div className="container-fluid">
        <div className="head">
        <header>
            <span><i class="fa-solid fa-earth icon"></i></span>my travel journal
        </header>
        </div>
    </div>
    );
}
function Main(props){
    return(
        <div>
        <div className="container">
            <img src={props.image} target="_blank"alt=""></img>
            <section>
                <span><i class="fa-solid fa-location-dot red"></i></span>
                <span className="country"><b>{props.country}</b></span>
                <span >
                    <a href={props.view} target="_blank" className="view">View on Google Maps
                    </a>
                </span>
                <div className="place">
                    <h1>
                        {props.place}
                    </h1>
                </div>
                <div className="date">{props.date1} 2021 - {props.date2}  2021</div>
                <p> {props.about} </p>
            </section>
        </div>
        <hr/>
        </div>
    )
}