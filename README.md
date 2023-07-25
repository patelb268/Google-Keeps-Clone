# Google-Keeps-Clone

https://github.com/patelb268/Google-Keeps-Clone/assets/109325051/7d0bdeef-dd3a-499f-8ec9-d15777b22873

<img width="924" alt="GKC" src="https://github.com/patelb268/Google-Keeps-Clone/assets/109325051/dec5f154-1847-4f04-ba28-65dff78ab285">

This is a Google Keep clone web application built using ReactJS, NodeJS, and MongoDB. It allows users to create and manage notes, just like the popular Google Keep app.

## Features

- Create a new note with a title and content.
- View and edit existing notes.
- Delete notes.
- Automatically saves notes in real-time.
- User-friendly interface.

## Frontend

The frontend is built using ReactJS and includes the following libraries and hooks:

  ### Libraries used:

- [react-toastify](https://github.com/fkhadra/react-toastify): Used to display notifications and toasts to the user for various actions and events.

  ### Hooks used:

- `useEffect`: Used to perform side effects in functional components, like fetching data from the backend or subscribing to events.

- `useRef`: Used to create a reference to an element or value that persists across renders. It's often used to interact with DOM elements directly.

- `useState`: Used to manage state in functional components, allowing the components to update and render based on changes in the state.

## Backend

The backend is built using NodeJS and Express, and it includes a Router for handling different routes and API endpoints.

### Libraries used:

- [Express](https://expressjs.com/): Used as the web application framework to handle routing, middleware, and request-response handling.


## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- MongoDB: [https://www.mongodb.com/](https://www.mongodb.com/)

## Getting Started

### Start the API Server

1. Clone the repository:

        git clone https://github.com/patelb268/Google-Keeps-Clone.git
        cd Google-Keeps-Clone
   
2. Install server dependencies:

        cd keeper-backend
        npm install

3. Create `.env` file and update the MONGO_URI

        MONGO_URI = `enter your MongoDB connection string`

4. Start the server:

        npm start

### Start the FrontEnd
1. Install dependencies:

        cd ../keeper-frontend
        npm install
2. Start the client:

        npm start

## Contributing
If you'd like to contribute to this project, you can follow these steps:

- Fork the repository.
- Create a new branch with a descriptive name (git checkout -b feature/my-new-feature).
- Make your changes and commit them (git commit -m 'Add some feature').
- Push the branch to your forked repository (git push origin feature/my-new-feature).
- Create a pull request detailing your changes and their benefits.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
This project was inspired by Google Keep and serves as a learning exercise in building full-stack web applications.
Thanks to the developers of React Toastify for their awesome library.

