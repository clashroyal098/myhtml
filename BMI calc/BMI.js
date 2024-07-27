document.getElementById("BMI").addEventListener("click", function(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    alert("value of weight is " + weight + " and value of height is " + height);
    var BMI = weight / (height * height);
    alert("your BMI is " + BMI);
})
if(BMI < 18.5){
    alert("underweighted");
}
if(25> BMI > 18.5){
    alert("normal weigthed");
}
if(25 < BMI < 30){
    alert("overweighted");
}
if(BMI >30){
    alert("obese");
}