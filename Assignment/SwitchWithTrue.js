
function stdscore(mark) {
    console.log(`The Student Score is ${mark}`);

    switch (true) {
        case mark >= 90:
            console.log("Grade: A");
            break;
        case mark >= 80 && mark < 90:
            console.log("Grade: B");
            break;
        case mark >= 70 && mark < 80:
            console.log("Grade: C");
            break;
        case mark >= 60 && mark < 70:
            console.log("Grade: D");
            break;
        case mark >= 50 && mark < 60:
            console.log("Grade: E");
            break;
        default:
            console.log("Grade: Fail");
    }
}
stdscore(66); // Change this value to test different cases


