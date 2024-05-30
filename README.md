# Frontend Mentor - Age Calculator App Solution

This repository contains a solution to the [Age Calculator App challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges aim to improve coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Preview](#preview)
  - [Links](#links)
- [JavaScript Code](#javascript-code)
  - [File Structure](#file-structure)
  - [Functions](#functions)
  - [Constants](#constants)
- [CSS Styling](#css-styling)
  - [Variables](#variables)
  - [Selectors](#selectors)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid, e.g., 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Preview

![Solution Preview](./assets/images/127.0.0.1_5500_%20(1).png)

### Links

- Solution URL: (https://github.com/AnoshaSohail/Age-Calculator.git)
- Live Site URL: ( https://javascript-practice-projectss.github.io/age-calculator/)

## JavaScript Code

### File Structure

The JavaScript code is contained in the `app.js` file. It is responsible for handling form submissions, validating input, and calculating the user's age based on the provided date.

### Functions

- `validateInput(input)`: Validates individual input fields.
- `validate()`: Validates all input fields and returns a boolean indicating whether the form is valid.
- `calculateAge()`: Calculates the user's age based on the provided date.
- `handleSubmit(e)`: Handles form submissions, triggers validation, and age calculation.

### Constants

- `MAX_MONTH`: Constant representing the maximum month value (12).
- `MAX_DAY`: Constant representing the maximum day value (31).

## CSS Styling

The styling is done using SCSS, with variables for color and layout configurations. The styles aim for a clean and responsive design.

### Variables

- `$primary-color`: Main color used throughout the application.
- `$error-color`: Color used for indicating validation errors.
- `$light-gray`: Background color for a light gray theme.
- `$dark-gray`: Darker gray used for labels and text.
- `$black`: Black color for text.

### Selectors

The CSS selectors are organized to style form inputs, buttons, and the overall layout. Media queries ensure responsive design for various screen sizes.

## Author

- Frontend Mentor - [@AnoshaSohail](https://www.frontendmentor.io/profile/AnoshaSohail)
- Twitter - [@AnoshaSohail135](https://twitter.com/AnoshaSohail135)
