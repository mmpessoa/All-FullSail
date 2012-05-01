Project 4 requirements:

Project 4 is all about string manipulation. This activity is here to provide the video and web link references that you'll need to complete your project. Refer to the Project 4 activity for details on the different string manipulation functions you need to implement.
I would encourage you to build out stub functions for your project, and then fill them in as you watch the video and do your research on strings. A stub function is just the shell of a function that has the correct name and arguments and a dummy return value:

var makeSandwich = function (bread, meat, toppings) {
    // TODO: Fill in working code here that builds a sandwich
    return { };
}

These stub functions may seem silly, but doing them beforehand helps you get a better idea of everything you'll need to do to finish the project. This will help you manage your time more effectively. Also, the stub functions work, they just don't work correctly. This means you can write code around them, and then come back and fill in the details later:

var pbj = makeSandwich("white", "peanut butter", ["grape jelly"]);
// pbj is an object that will eventually do something useful


Some of the functions you'll need to implement for Project 4 are math-related. Refer to the Project 4 activity for details. This activity is here to provide you with the video and web link resources for your research.
As with the String Manipulation activity, you are encouraged to stub out your math functions for your project before you begin serious coding.

Your project should be written in the form of a library that uses the Revealing Module Pattern discussed in the Week 3 Public and Private activity. This means that a stub version of your project might look something like this:

var ninjaLibrary = function () {
    // TODO: add some private variables here
    var throwingStars, toeShoes;
    // TODO: add some private methods here
    var signal = function (message) {};
    // TODO: reveal the public methods here
    return {
        "signal" : signal
    };
};

This would allow you to use Ninja-related functionality anywhere in your code:

var ninjaLib = ninjaLibrary();
ninjaLib.signal("This is a message");

It will be easiest to write and submit a single library for your project, but you may split your code into at most 3 libraries of related methods if you so choose.


-=-=-=-=-=-

This assignment, like the last one, is in 3 parts: JavaScript code, Google Drawing flowchart, and Git repository.
JavaScript code

This part of the assignment works the same as the previous three assignments, but this time without a story or theme. Instead, you're building a library: a collection of functions that you can reuse for future assignments. In the Visual Frameworks course you're going to find yourself doing the same repetitive tasks over and over. The code you write for this assignment will help to alleviate some of that repetition.

The code next month will involve quite a bit of string, number, and array manipulation. For this assignment you're going to build some utility functions to solve some common problems:

String

Does a string follow a 123-456-7890 pattern like a phone number?

Does a string follow an aaa@bbb.ccc pattern like an email address?

Is the string a URL? (Does it start with http: or https:?)

Title-case a string (split into words, then uppercase the first letter of each word)

Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

Number

Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10

Fuzzy-match a number: is the number above or below a number within a certain percent?

Find the number of hours or days difference between two dates.

Given a string version of a number such as "42", return the value as an actual Number, such as 42.

Array

Find the smallest value in an array that is greater than a given number.

Find the total value of just the numbers in an array, even if some of the items are not numbers.

Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].

======
There are twelve functions listed above. Build a library that implements any six of those twelve.
=======

Google Drawing Flowchart

You will use the Google Docs Drawing web app to create flowcharts that represent your library. You should have one flowchart per function. Some functions will be simpler than others, but each flowchart should explain how the function works to someone who cannot see your code.
This part of the assignment is graded on how well your flowchart matches your code, its logic, and its correct use of the flowchart symbols.

Git Repository

This assignment will be tracked using Git. You'll need to have the presence of mind to work in small chunks, save often, and work with Git each step of the way.

Make-Up Option

You may use this assignment to make up some of what you lost on points for the first three assignments:
Implement all twelve functions above. At least ten of them should work correctly, but any that do not work should at least have a solid effort in them. If you don't get at least this far, none of the rest of this list applies.
Comment the sections of your code that show that you know how to do whatever you lost points for on a previous assignment. If you don't have an explicit comment you won't get credit. For example, if you lost points for not including a nested loop in Deliverable 3, include a comment that says something like:

// MAKEUP: nested loops, deliverable 3
For each fixed instance you may earn up to ¾ or 75% of the points you lost for that item. So if you lost 8 points for an item on the previous assignment, you can get 6 of them back.
Your fixed code must work! There is no partial credit per item. In the above example, it's 6 points or nothing.