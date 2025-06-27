// Using if-else statements to check the browser type and launch the browser

function launchBrowser(browserType) {
    if (browserType === "Chrome") {
        console.log(`Launching ${browserType} browser`);
    }
    else {
        console.log(`Its not the Chrome : Launching ${browserType} browser`);
    }
}
launchBrowser("Edge");



// Function to run tests based on the type of test
// Using switch statement to determine the type of test to run
function runTest(testType) {
    switch (testType) {
        case "Smoke":
            console.log(`Perform ${testType} tests`);
            break;
        case "Sanity":
            console.log(`Perform ${testType} tests`);
            break;
        case "Regression":
            console.log(`Perform ${testType} tests`);
            break;
        default:
            console.log(`Perform ${testType} tests`);
    }
}
runTest("End to End");

