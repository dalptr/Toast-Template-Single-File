# Toast.js Documentation

## Introduction

`toast.js` is a JavaScript module designed to create and display customizable toast notifications on a web page. Toast notifications are unobtrusive, brief messages that appear temporarily and provide users with essential information or feedback. This module offers an easy way to create and manage toast notifications with various styles and types.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Usage](#usage)
3. [Customization](#customization)
4. [Icon Types](#icon-types)
5. [Function: `toast`](#function-toast)
6. [CSS Styles](#css-styles)
7. [Conclusion](#conclusion)

## Getting Started

To use `toast.js`, follow these steps:

1. Include the `toast.js` script in your HTML file.
2. Ensure that you have a `<div>` element with the ID `toast-container` where the toast notifications will be placed.
3. Call the `toast()` function to display toast notifications.

## Usage

To display a toast notification, call the `toast()` function with the desired parameters. Here's the basic syntax:

```javascript
toast({
    title: "Toast Title",
    message: "This is the message content of the toast.",
    type: "success", // Choose from "success", "info", "warning", or "error"
    duration: 3000,  // Duration in milliseconds (default: 3000)
});

## Customization

The appearance of the toast notifications can be customized using CSS. The default styles are defined in the styles constant within the script. You can modify these styles to match your design preferences.
