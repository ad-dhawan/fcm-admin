# FCM ADMIN
#### APIs to send Push Notifications using Firebase, NodeJS, ExpressJS

<br />

## `Firebase`
#### Make Project on Firebase
#### In Firebase console, go to Cloud Messaging then navigate to project settings
#### Under 'Firebase Admin SDK' Download the json file.

<br />

## `Node JS`
#### Create an empty folder and open it in your code editor
#### Use command `npm init -y` , this will make a package.json file in the folder
#### Use command `npm i express body-parser firebase-admin` to install all the required packages for this project
#### Paste the downloaded json file from firebase to the project root folder

<br />

## `Endpoints`
#### `http://localhost:3000/register` : This will register FCM Token generated from the device. NOTE - Every device has unique FCM Token
#### `http://localhost:3000/notification` : This post API takes three parameters which are title, body, imageUrl to send notification associated with the token array.

<br />

## `Commands`
#### Use `node index.js` or `nodemon index.js` if you're using nodemon to run this project.
