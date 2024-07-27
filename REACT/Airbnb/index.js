
ReactDOM.render(
    <div>
      <h1 align="center">Contact Book</h1>
      <Cards fullname="Ram Bahadur" ward={10} loaction="Kathmandu"/> 
      <Cards fullname="Shyam Khatiwada" ward={20} loaction="Lalitpur"/> 
      <Cards fullname="Bhole Iyar" ward={30} loaction="Bhaktapur"/> 

    </div>
,document.getElementById("root")
)
function Cards(qq){
    return(
        <div className="card">
            <b>Name : </b>{qq.fullname}<br/>
            <b>Wards : </b>{qq.ward}<br/>
            <b>Location : </b> {qq.loaction}
        </div>    
    )
}