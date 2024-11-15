# Dynamic Items Project

This project is a simple web application built with **Node.js**, **Express**, and **EJS**. It allows users to dynamically generate a list of items based on the quantity provided. For each generated item, a card is created and displayed with a title, description, and an image. A loading effect is shown while the images are being loaded.

## Features

- Dynamically generate a list of items.
- Add cards for each item with a title, description, and image.
- Display a "Loading..." message while the images are being loaded.

## Technologies Used

- **Node.js** - JavaScript runtime environment on the server side.
- **Express** - Web framework for Node.js used to build the API.
- **EJS** - Template engine used to render dynamic HTML on the server.

## Prerequisites

- **Node.js** and **npm** installed on your machine.

If you don’t have Node.js installed, you can download it from [here](https://nodejs.org/).

## Installation

Follow the steps below to set up the development environment and run the project locally.

1. Clone this repository to your machine:

   ```bash
   git clone https://github.com/your-username/dynamic-items.git


2. Navigate to the project folder:

  cd dynamic-items

3. Install the project dependencies:

  npm install

## Project Structure
The project has the following folder structure:

   ```
  dynamic-items/
  │
  ├── public/                 # Static files (CSS, images, etc.)
  ├── views/                  # EJS files for HTML rendering
  │   ├── index.ejs           # Main page template
  ├── node_modules/           # Node.js dependencies
  ├── app.js                  # Main Express server file
  ├── package.json            # Dependencies and scripts
  └── README.md               # This file
  ```

public/: Contains static files like CSS for styling the page.
views/: Contains EJS templates that will be rendered on the server.
app.js: The configuration of the Express server.

## Running the Project
Start the server by running the command:

  ```
  npm start
  ```
The server will start on port 3000 (by default). You can access it in your browser at:

  ```
  http://localhost:3000
  ```

On the page, enter a number in the quantity field and click "Update Items" to dynamically generate the item cards.
