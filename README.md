# FCM ADMIN
#### APIs to send Push Notifications using Firebase, NodeJS, ExpressJS

<br />

## `Firebase`
#### Make Project on Firebase
#### In Firebase console, go to Cloud Messaging then navigate to project settings
#### Under 'Firebase Admin SDK', Download the json file.

<br />

## `Mongo DB`
#### Create and setup a new cluster on MongoDB

<br />

## `Node JS`
#### Clone the repository and use the command `npm install` to install all the required packages.
#### Paste the downloaded json file from firebase to the project root folder and mention the file in .gitignore
#### Copy and paste the mongo DB connection string in .env file with name 'DB_CONNECT'

<br />

## `Endpoints`
#### `http://localhost:3000/notification/register` : This will register FCM Token generated from the device. NOTE - Every device has unique FCM Token
#### `http://localhost:3000/notification/send` : This post API takes four parameters which are title, body, imageUrl, tokens to send notification.

<br />

## `Commands`
#### Use `node index.js` or `nodemon index.js` if you're using nodemon to run this project.
