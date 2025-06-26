/*

function runtype(value) {
    if (value > 0) {
        console.log(`${value} is a positive number`);
    } else if (value === 0) {
        console.log(`It's a zero: ${value}`);
    } else {
        console.log(`${value} is a negative number`);
    }
}
//print the result of the function
runtype(10); // You can change this value to test different cas*/

function launchBrowser(browserType) {
    if(browserType === "Chrome") {
        console.log(`Launching ${browserType} browser`);
    }
    else{
        console.log(`Not Chrome : Launching ${browserType} browser`);
    }
}
launchBrowser("Edge"); 

let test = null
console.log(typeof test); // Output: object


