# STRING Methods: Real-World Tasks

Welcome to the **STRING-METHODS-REAL-WORLD-TASK** repository! This project helps JavaScript learners practice string methods through practical, real-world scenarios. Starting with `length.js`, each file focuses on specific string methods or properties, providing exercises that mimic everyday coding challenges.

The goal is hands-on practice:
- Read the task descriptions.
- Implement the solutions in your own code.
- Test with the provided examples.
- Consider edge cases (e.g., empty strings, special characters).

For JavaScript string basics, check the [MDN String documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String).

## Setup
1. Clone the repo: `git clone https://github.com/FuncMode/STRING-METHODS-REAL-WORLD-TASK.git`
2. Open the files in your editor (VS Code recommended).
3. Run JS files in Node.js: `node length.js` (or use browser console for quick tests).
4. For each task, implement the functions, uncomment tests, and run to verify.

Contributions welcome! Add tasks or new method files (e.g., `trim.js`, `replace.js`).

---

## length.js: Practicing Core String Methods (with Length Integration)

The `length` property counts characters in a string—key for validation and manipulation. This file's tasks build on it while introducing related methods like `trim()`, `slice()`, and more. Tasks are designed for real-world apps (e.g., forms, validators). Implement without peeking at examples; focus on creative use of methods, including `length` where it fits naturally.

### Real-World Tasks
Extracted and adapted for practice. Each task uses `length` alongside other basics. Write functions for each, then test.

#### Task 1: User Profile Formatter (Basic Methods)
**Scenario**: You have a user full name: `" juan dela cruz "`. Clean it up before displaying in the UI.

**Goals**:
- Remove extra spaces from the start and end.
- Convert every letter to uppercase.
- Check if it contains the surname “cruz”.

**Expected Output**:
```
"JUAN DELA CRUZ"
Contains 'cruz'? true
```

**Hints**: Use `trim()`, `toUpperCase()`, `includes()`. Bonus: Use `length` to log the cleaned name's character count.

**Example Tests**:
```javascript
const userFullName = " juan dela cruz ";
console.log(formatUserProfile(userFullName)); // Should output as above
```

#### Task 2: Product Code Checker
**Scenario**: You have a product code: `"PRD-0456-XY"`. Process it for inventory display.

**Goals**:
- Extract only the numeric part.
- Replace “PRD” with “PRODUCT”.
- Display the total length of the final string.

**Expected Output**:
```
"PRODUCT-0456-XY"
Numeric part: "0456"
Length: 14
```

**Hints**: Use `replace()`, `slice()`, `length`. Find the numeric section by slicing between dashes.

**Example Tests**:
```javascript
const productCode = "PRD-0456-XY";
console.log(checkProductCode(productCode)); // Should output as above
```

#### Task 3: Email Validator
**Scenario**: User email input: `"example_user@GMAIL.COM"`. Normalize and validate for signup.

**Goals**:
- Convert the entire email to lowercase.
- Check if it starts with “example”.
- Check if it ends with “@gmail.com”.

**Expected Output**:
```
Lowercase Email: "example_user@gmail.com"
Starts with 'example'? true
Ends with '@gmail.com'? true
```

**Hints**: Use `toLowerCase()`, `startsWith()`, `endsWith()`. Bonus: Use `length` to ensure it's at least 10 characters post-validation.

**Example Tests**:
```javascript
const email = "example_user@GMAIL.COM";
console.log(validateEmail(email)); // Should output as above
```

#### Task 4: Message Word Counter
**Scenario**: A chat message: `"Hello there, welcome to JavaScript practice!"`. Analyze for UI feedback.

**Goals**:
- Split the message into words.
- Show the word count.
- Display the first and last word.

**Expected Output**:
```
Words: ["Hello", "there,", "welcome", "to", "JavaScript", "practice!"]
Word count: 6
First word: "Hello"
Last word: "practice!"
```

**Hints**: Use `split()`, `length` (on the array), `at()` (for first/last). Note: `split(' ')` handles spaces.

**Example Tests**:
```javascript
const message = "Hello there, welcome to JavaScript practice!";
console.log(countMessageWords(message)); // Should output as above
```

#### Task 5: Secret Censor
**Scenario**: User comment: `"This product is bad and awful!"`. Censor profanity for a family-friendly site.

**Goals**:
- Replace “bad” and “awful” with “***”.

**Expected Output**:
```
"This product is *** and ***!"
```

**Hints**: Use `replaceAll()`. Chain for multiple words. Bonus: Use `length` to check if the censored version is longer/shorter.

**Example Tests**:
```javascript
const comment = "This product is bad and awful!";
console.log(censorComment(comment)); // Should output as above
```

#### Task 6: Username Generator
**Scenario**: Full name: `"Maria Clara"`. Generate a unique username for account creation.

**Goals**:
- Take the first 3 letters of the first name.
- Take the last 2 letters of the last name.
- Append a random number (e.g., "42").

**Expected Output**:
```
Generated Username: "Marra42"
```

**Hints**: Use `slice()`, `concat()` (or `+`). Split the name first with `split(' ')`.

**Example Tests**:
```javascript
const fullName = "Maria Clara";
console.log(generateUsername(fullName, 42)); // Should output as above
```

### Solutions & Discussion
- Implement in `length.js` and compare with any provided examples.
- Common pitfalls: `length` is a property (no `()`); `split()` includes punctuation—use regex for cleaner splits if extending.
- Extend: In Task 6, use `length` to dynamically choose slice points based on name size.
- Edge cases: Empty inputs (`""`), all spaces, non-English characters.

---

## Next Files
- `slice.js`: Advanced extraction tasks.
- `replace.js`: Dynamic text substitution.
- More methods coming soon!

## License
MIT License. Fork, practice, and share your solutions in issues.

Happy coding! 🚀
