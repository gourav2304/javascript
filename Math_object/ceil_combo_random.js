
//random Integer
//get a random value in decimal number between 0 to 0.99 and 
//save it to in variable
// var decimal = Math.random() * 10;
//roundup the value og decimal
// var rounded = Math.ceil(decimal);
// log the value rouned into console
// console.log(rounded);


 
//   var str = "Hello";
// str.match("jello");
// let counter = 3;
// function example() {
//  console.log(counter);
//     counter = counter-1;
//     if(counter === 0) return;
//     example();
// }

// // Task 1: Build a function-based console log message generator
// function consoleStyler(color,background,fontsize,text) {
//     var message = "%c", text;
//     var style = `color: ${color};`
//     style += `background: ${background};`
//     style += `font-size: ${fontsize};`
//     console.log(message, color);
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size: 50px";
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%ccongrates on the title!`, fontStyle);
//     } else {
//         console.log(message, style);
//     }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// celebrateStyler('birthday');

// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate() {
//     consoleStyler(color, background, fontSize, txt);  
//     celebrateStyler(reason);
// }
// styleAndCelebrate('ef7c8e','fae8e0', '30px', 'You made it!', 'champions')

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    // Create the message variable
    let message = "%c" + txt;

    // Create the style variable
    let style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;

    // Log the styled message
    console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    // Create the fontStyle variable
    let fontStyle = "color: tomato; font-size: 50px";

    // Conditional messages based on the reason
    if (reason === "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason === "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(`%c${reason}`, fontStyle);
    }
}

// Task 3: Run both functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}

// Running the styleAndCelebrate function
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');

