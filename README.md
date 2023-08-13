Toast.js Documentation
Introduction
toast.js is a JavaScript module designed to create and display customizable toast notifications on a web page. Toast notifications are unobtrusive, brief messages that appear temporarily and provide users with essential information or feedback. This module offers an easy way to create and manage toast notifications with various styles and types.

Table of Contents
Getting Started
Usage
Customization
Icon Types
Function: toast
CSS Styles
Getting Started
To use toast.js, follow these steps:

Include the toast.js script in your HTML file.
Ensure that you have a <div> element with the ID toast-container where the toast notifications will be placed.
Call the toast() function to display toast notifications.
Usage
To display a toast notification, call the toast() function with the desired parameters. Here's the basic syntax:

javascript
Copy code
toast({
    title: "Toast Title",
    message: "This is the message content of the toast.",
    type: "success", // Choose from "success", "info", "warning", or "error"
    duration: 3000,  // Duration in milliseconds (default: 3000)
});
Customization
The appearance of the toast notifications can be customized using CSS. The default styles are defined in the styles constant within the script. You can modify these styles to match your design preferences.

Icon Types
Toast notifications can have different icons based on their types:

Success: Checkmark icon
Info: Information icon
Warning: Exclamation icon
Error: Exclamation icon
Function: toast
Parameters
title (optional): The title of the toast notification.
message (optional): The message content of the toast notification.
type (optional): The type of the toast notification. Available options: "success", "info", "warning", "error" (default: "info").
duration (optional): The duration in milliseconds that the toast notification will be visible (default: 3000).
Behavior
The toast notification slides in from the left and fades out after the specified duration.
Users can click the close icon to dismiss the toast notification manually.
CSS Styles
The CSS styles for the toast notifications are defined within the styles constant in the script. You can modify these styles to achieve the desired appearance.

Conclusion
toast.js simplifies the process of creating and displaying toast notifications in a web application. By following the provided documentation, you can seamlessly integrate this module into your projects and enhance user experience with informative and visually appealing notifications.

Feel free to integrate the toast.js script into your web application and customize it according to your needs. If you have any further questions or need assistance, don't hesitate to ask.
