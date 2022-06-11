function student(name,age,residence,degree){
    console.log(name)
    console.log(age)
    console.log(residence)
    console.log(degree)
    return degree;
}
student("Asaba Doreen",21,"first","Bachelor of Commerce");

function algorithmAssessment(score){
    var testScore = score;
    console.log(testScore);
    let total = 500;
    let average = (score/100)*total;
    let finalMark = total-average;
    console.log(finalMark);
    return finalMark;
}

