# Password Generator

GO HERE: [active link to site](http://127.0.0.1:5500/index.html) 

The URL for the active site was somehow changed while using devTools. I didn't know how to fix it. The link below will take you to the GitHub repo page. 

## Description

This is the third assignment from the UConn Coding Bootcamp curriculum which combines our working knowledge of the first two week's topics (Git, Terminal, HTML, CSS, GitHub, GitHub Pages, GitLab, Web Accessibility, and Bootstrap) with the third week's topic: JavaScript.

For this assignment we were to build a password generator by modifying some starter code. 


## Goals 

1. An application that an employee can use to generate a random password. 

2. The application will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code.

3. The application will have a clean and polished user interface that is responsive.


## Instructions

Our instructions were based of the following User Story:

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

Our application had to meet the following criteria: 

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 **characters** and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/orspecial characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

#### Translation

- Employee needs a new secure password.
- When "Generate Password" button is clicked, the user will be asked several questions regarding password criteria.
- When asked about a password length, the user must choose a password length that's a minimum of 8 characters and uses no more than 128 characters.
- When asked what character types the user would like to include in his/her/their new password, the user will choose the following: lowercase, uppercase, numbers, and symbols. 
- After the user has answered all of the questions/prompts, the user's answers/choices/selections should be validated/confirmed. In order to move on to the next step, at least one of the four character types (lowercase, uppercase, numbers, and/or symbols) needs to be selected.
- After all questions/prompts have been answered, a password with the user's specifications will be generated.
- When the password has been generated, the newly created password will be displayed in an alert window or will be written on the page. 


### Definitions

The goals can be further understood by the following definitions:

*Password Generator*: a software program or device that takes input from a random number generator and automatically generates a password.

*Password:*: a memorized secret, typically a string of characters, usually used to confirm the identity of a user.

*Browser:*: a software application that lets you visit web pages on the Internet.

*Dynamically updated*: pertains to upgrading programs while they are running. ... These compilers preserve the semantics of the original program, but instrument either the source code or object code to produce a dynamically updateable program.

*JavaScript*: a programming language that conforms to the ECMAScript specification.

*Responsive*: relating to a webpage design that changes automatically according to the size of the screen on which it is viewed. 

*Prompt(s)*: The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page.

*Characters*: any letter, number, space, punctuation mark, or symbol that can be typed on a computer. 
*Character Types*: examples of characters include letters, numerical digits, common punctuation marks (such as "." or "-"), and whitespace.

*Special characters*: a character that is not an alphabetic or numeric character. Punctuation marks and other symbols are examples of special characters.

*Input*: refers to any information, or data, that is sent to a computer for processing. Once the data has been entered into the computer it can be processed and whatever instruction that was commanded, can be carried out.

*Validate(d)*: a set of actions used to check the compliance of any element with its purpose and functions. Data validation is the process of ensuring that user input is clean, correct, and useful. Most often, the purpose of data validation is to ensure correct user input.

*Alert*: The alert() method displays an alert box with a specified message and an OK button. An alert box is often used if you want to make sure information comes through to the user.

*Pseudocode*: a plain language description of the steps in an algorithm or another system. Pseudocode often uses structural conventions of a normal programming language, but is intended for human reading rather than machine reading.

*Conditions*: if/then/else --a specifed block of code to be executed, if a specified condition is true. Use else to specify a block of code to be executed, if the same condition is false.


## Developer

For my password generator I focused on pseudocode to help break down the code into manageable blocks to identify where "the magic happens," aka JavaScript...easier said than done.

[Password Generator Github](https://dsmooke.github.io/password-generator/)

## Mock-Up

The following image shows the web application's appearance and functionality: 

![Application Demo](/Users/Dana/Coding-Bootcamp/GitHub/projects/hw3_password-generator/password-generator/assets/screenshot-generator.png)