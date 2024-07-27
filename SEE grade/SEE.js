document.getElementById("calc").addEventListener("click", function(){
    const x = document.getElementById("percent").value;
    let grade, msg;
    switch (true) {
        case x>=90:
            grade = "A+";
            msg= "oustanding";
            break;
            
        case x>=80:
            grade = "A";
            msg= "excellent";
            break;
            
        case x>=70:
            grade = "B+";
            msg= "very good";
            break;
            
        case x>=60:
            grade = "B";
            msg= "good";
            break;
            
        case x>=50:
            grade = "C+";
            msg= "statisfactory";
            break;

        case x>=40:
            grade = "C";
            msg= "acceptable";
            break;

        case x>=35:
            grade = "D+";
            msg= "basic";
            break;

        case x < 35:
            grade = "NG";
            msg= "failed";
            break;

    }
    alert("Congratulations, you have secured grade : " + grade + " which is "+ msg);
})