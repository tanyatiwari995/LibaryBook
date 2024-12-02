// Library Book Tracker
// Initialize an empty array to store the book titles and their statuses
let books = [];
let statuses = [];
// Prompt the user to input the number of books
let numberOfBooks = prompt("How many books do you want to track?");
numberOfBooks = Number(numberOfBooks);
// Use a for loop to collect book titles and initialize their statuses
for (let i = 0; i < numberOfBooks; i++) {
let bookTitle = prompt("Enter the title of book " + (i + 1) + ":");
books[i] = bookTitle;
statuses[i] = "Available"; // All books start as available
}
// Display the list of books and their statuses
console.log("Library Book Tracker:");
for (let i = 0; i < numberOfBooks; i++) {
console.log(books[i] + ": " + statuses[i]);
}
// Ask the user if they want to borrow or return a book
let action = prompt("Do you want to borrow or return a book(borrow/return/exit)");
// Use a while loop to handle borrow/return actions until the user chooses to
exit
while (action !== "exit") {
let bookTitle = prompt("Enter the title of the book:");
let found = false;
// Use a for loop to find the book and update its status
for (let i = 0; i < numberOfBooks; i++) {
if (books[i] === bookTitle) {
found = true;
if (action === "borrow" && statuses[i] === "Available") {
statuses[i] = "Borrowed";
console.log(bookTitle + " has been borrowed.");
} else if (action === "return" && statuses[i] === "Borrowed") {
statuses[i] = "Available";

console.log(bookTitle + " has been returned.");
} else {
console.log("Invalid action or the book is already in the desired state.");
}
break; // Exit the for loop once the book is found
}
}
if (!found) {
console.log("Book not found.");
}
// Display the updated list of books and their statuses
console.log("Updated Library Book Tracker:");
for (let i = 0; i < numberOfBooks; i++) {
console.log(books[i] + ": " + statuses[i]);
}
// Ask the user if they want to perform another action or exit
action = prompt("Do you want to borrow or return another book?(borrow/return/exit)");
}
// Using a do-while loop to print the final status of all books
let index = 0;
console.log("Final Library Book Tracker:");
do {
console.log(books[index] + ": " + statuses[index]);
index++;
} 
while (index < numberOfBooks);


//Detailed Steps
// 1. Initialize Arrays:
// ○ Create two empty arrays named books and statuses.
// 2. Prompt for Number of Books:
// ○ Use prompt to ask the user how many books they want to track.
// ○ Convert the user's input to a number using Number().
// 3. Collect Book Titles and Initialize Statuses:

// ○ Use a for loop to iterate from 0 to numberOfBooks - 1.
// ○ Inside the loop, use prompt to ask the user for each book title.
// ○ Store each book title in the books array and set the corresponding status to
// "Available" in the statuses array.

// 4. Display Initial List of Books:
// ○ Use a for loop to iterate through the books array.
// ○ Print each book title and its corresponding status from the statuses array.
// 5. Borrow or Return Books:
// ○ Use prompt to ask the user if they want to borrow or return a book.
// ○ Use a while loop to keep prompting the user until they choose to exit.
// ○ Inside the loop, use prompt to ask the user for the book title they want to borrow
// or return.
// ○ Use a for loop to search for the book title in the books array.
// ○ If the book is found, use conditional statements to update its status based on the
// action (borrow or return).
// ○ Use break to exit the for loop once the book is found and updated.
// ○ If the book is not found, print an appropriate message.
// 6. Update and Display Book Statuses:
// ○ After each action, use a for loop to display the updated list of books and their
// statuses.

// 7. Final Display Using do-while Loop:
// ○ Use a do-while loop to print the final status of all books after the user chooses
// to exit.
// ○ Initialize an index variable to 0.
// ○ Inside the do-while loop, print each book title and its status.
// ○ Increment the index variable and continue the loop until all books are displayed.



// Library Book Tracker
// Problem Statement
// Objective
// Create a "Library Book Tracker" application using JavaScript to reinforce your understanding of
// loops, including for, while, and do-while loops, as well as break and continue statements.
// Additionally, you will explore the use of switch statements with and without break, and with
// return. Your task is to build a program that helps manage a small library's book inventory. The
// program will allow the user to enter book titles, mark books as borrowed or returned, and
// display the status of each book. This project will help you apply loops and control statements in
// a practical scenario, ensuring you grasp how to use these constructs effectively in your
// JavaScript programs.
// Instructions
// 1. Initialize Arrays:
// ○ Create two empty arrays, books and statuses, to store book titles and their
// statuses respectively.
// 2. Prompt for Number of Books:
// ○ Prompt the user to input the number of books they want to track and convert the
// input to a number.

// 3. Collect Book Titles and Initialize Statuses:
// ○ Use a for loop to prompt the user for each book title and initialize their status to
// "Available".

// 4. Display Initial List of Books:
// ○ Use a for loop to display the list of books and their initial statuses.
// 5. Borrow or Return Books:
// ○ Prompt the user to choose an action (borrow, return, or exit).
// ○ Use a while loop to handle the borrow/return actions until the user chooses to
// exit.
// ○ Inside the loop, prompt the user for the book title and use a for loop to find the
// book and update its status.
// ○ Use break to exit the loop once the book is found and updated.
// ○ Display an appropriate message if the book is not found.
// 6. Update and Display Book Statuses:
// ○ Display the updated list of books and their statuses after each action.
// 7. Final Display Using do-while Loop:
// ○ Use a do-while loop to print the final status of all books once the user exits.


