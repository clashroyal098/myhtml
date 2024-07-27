document.getElementById("open").addEventListener("click", function() {
    document.getElementById("menu").classList.add("visible");
    document.querySelector(".overlay").classList.add("active");
});

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("visible");
    document.querySelector(".overlay").classList.remove("active");
});
document.querySelector(".overlay").addEventListener("click", function(){
    document.querySelector("#menu").classList.remove("visible");
  document.querySelector(".overlay").classList.remove("active")
})