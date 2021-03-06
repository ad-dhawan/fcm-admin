# FCM ADMIN
#### APIs to send Push Notifications using Firebase, NodeJS, ExpressJS
##### Additionally Todo APIs for a todo application

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
#### `/notification/register` : This will register FCM Token generated from the device. NOTE - Every device has unique FCM Token
#### `/notification/send` : This post API takes four parameters which are title, body, imageUrl, tokens to send notification.
#### `/notification/get_tokens` : This get API returns all the tokens stored in the database.
#### `/notification/scheduled_notification` : This API takes same parameters as /notification/send with one additional parameter 'date'. It takes UNIX or ISO time formats.

<br />

##### `/todo/create`
##### `/todo/get_all`
##### `/todo/update/:id`
##### `/todo/get/:type`
##### `/todo/delete/:id`
##### `/todo/edit/:id`
##### `/todo/create_note`
##### `/todo/get_notes`
##### `/todo/delete_note/:id`
##### `/todo/edit_note/:id`

<br />

## `Commands`
#### Use `node index.js` or `nodemon index.js` if you're using nodemon to run this project.
