// let str = 'practice'
// let num = "2"
// console.log('hello'.length);
// console.log(str.charAt(0));
// console.log(str.concat(" " + "demo"));
// console.log(str.at(-1));
// console.log(str[0]);
// console.log(str.slice(1, 2));
// console.log(str.slice(str.length - 1))
// console.log(str.substring(0, 1));
// console.log(str.substr(0, 2));
// console.log(num.padStart(3, "2"));

// console.log(str.repeat(3))
// console.log(str.replace('pra', 'kupal'));
// console.log(str.split(""));
// console.log(str.indexOf('c', 4));

// let text = "Please locate locate";

// console.log(text.lastIndexOf('locate', 1));
// console.log(text.search('locate'));

// let text = "The rain in Spain";

// for (let t of text.match(/ain/g)) {
//     console.log(t);
// }


/* 
🔹 Task 1: User Profile Formatter (Basic Methods)
Scenario:

Meron kang userFullName = " juan dela cruz ".
Gusto mo siyang ayusin bago ipakita sa UI.

Goals:

Alisin ang extra spaces sa unahan at dulo.

Gawing uppercase ang bawat letra.

I-check kung may apelyido na “cruz”.

Expected Output:
"JUAN DELA CRUZ"
Contains 'cruz'? true
*/

// let userFullName = " juan dela cruz ";

// function userProfileFormatter(userFullName) {
//     let userFullname = userFullName.trim().toUpperCase();
//     console.log(`"${userFullname}"`);
//     return userFullname.includes('cruz'.toUpperCase()) ? `Contains 'cruz' true` : '';;
// }

// console.log(userProfileFormatter(userFullName));


/* 
🔹 Task 2: Product Code Checker
Scenario:

Meron kang product code: "PRD-0456-XY".
Gusto mong:

Kuhanin lang ang numeric part.

Palitan ang “PRD” ng “PRODUCT”.

I-display ang total length ng final string.

Expected Output:
"PRODUCT-0456-XY"
Numeric part: "0456"
Length: 14
*/

// let code = "PRD-0456-XY";

// function productCodeChecker(productCode) {
//     const replace = productCode.replace('PRD', 'PRODUCT');
//     const hasNumeric = productCode.match(/\d/g).join("");
//     const codeLength = replace.length - 1;
//     return `
//     "${replace}"
//     Numeric part: "${hasNumeric}"
//     Length: ${codeLength}
//     `
// }

// console.log(productCodeChecker(code));

// console.log("PRODUCT-0456-XY".length);


/* 
🔹 Task 3: Email Validator
Scenario:

Meron kang email input ng user: "example_user@GMAIL.COM".
Gusto mong:

I-convert lahat sa lowercase.

I-check kung nagsisimula sa “example”.

I-check kung nagtatapos sa “@gmail.com”.

Expected Output:
Lowercase Email: "example_user@gmail.com"
Starts with 'example'? true
Ends with '@gmail.com'? true
*/

// const user = "example_user@GMAIL.COM";

// function emailValidator(userEmail) {
//     const lowercase = userEmail.toLowerCase();
//     const isStart = lowercase.startsWith('example');
//     const isEnd = lowercase.endsWith('@gmail.com');

//     return `
//     LowerCase Email: "${lowercase}"
//     Starts with 'example' ? ${isStart}
//     Ends with '@gnail.com' ? ${isEnd}
//     `;
// }

// const output = emailValidator(user);
// console.log(output)


/* 
🔹 Task 4: Message Word Counter
Scenario:

Meron kang message:
"Hello there, welcome to JavaScript practice!"
Gusto mong:

Hatiin ang message per word.

Ipakita kung ilang words meron.

Ipakita ang unang at huling word.

Expected Output:
Words: ["Hello", "there,", "welcome", "to", "JavaScript", "practice!"]
Word count: 6
First word: "Hello"
Last word: "practice!"
*/

// const textMessage = "Hello there, welcome to JavaScript practice!";

// function messageWordCounter(text) {
//     const words = text.split(' ');
//     const wordCount = words.length;
//     const firstWord = words[0];
//     const lastWord = words[words.length - 1];
//     return `
//     Words: ${words.join(' ')}
//     Word count: ${wordCount}
//     First word: "${firstWord}"
//     Last word: "${lastWord}"
//     `;
// }

// const output = messageWordCounter(textMessage);
// console.log(output);

/* 
🔹 Task 5: Secret Censor
Scenario:

May user comment:
"This product is bad and awful!"
Gusto mong i-censor ang words na “bad” at “awful” at palitan ng “***”.

Expected Output:
"This product is *** and ***!"
*/

// const commet = "This product is bad and awful!";
// const badWords  = ['bad', 'awful!'];

// function secretCensor(userComment) {
//     let censored = userComment;

//     for (let word of badWords) {
//         censored = censored.replaceAll(word, '*'.repeat(word.length));
//     }
//     return censored;
// }

// const output = secretCensor(commet);
// console.log(output);

/* 
🔹 Task 6: Username Generator
Scenario:

May full name: "Maria Clara".
Gusto mong gumawa ng username base sa:

First 3 letters ng first name.

Last 2 letters ng last name.

At idagdag ang random number (kunwari "42").

Expected Output:
Generated Username: "Marra42"
*/

// const fullName = "Maria Clara"

// function userNameGenerator(username) {
//     const first = username.slice(0, 3);
//     const last = username.slice(-2);
//     return `Generated UserName: ${first.concat(last).concat(42)}`;
// }

// const output = userNameGenerator(fullName);
// console.log(output);