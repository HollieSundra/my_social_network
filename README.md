# My Social Network

A social media API with NoSQL Database.

## Table of Contents [TOC]

1. Description
2. Technologies Used
3. Instructions on Installation
4. Usage
5. Demo
6. Contributions


## Descrition

This project is a social media API for a startup that uses a NoSQL database to handle large amounts of unstructured data. The API allows users to create, read, update, and delete their account information, their thoughts, and their reactions to other user's thoughts. It also allows users to add and remove friends from their friend list.


## Technologies Used

Node.js
Express.js
MongoDB
Mongoose


## Instructions on Installation

To install the neccessary dependencies, run the following command:

 npm install

 ## Usage

 To start the server and sync the Mongoose models to the MongoDB database, run the following command:

 npm start

 To test the API routes, you can use a tool like Insomnia. The API has the following routes:

User Routes
GET /api/users: Returns an array of all users.
GET /api/users/:userId: Returns the user with the specified ID.
POST /api/users: Creates a new user with the specified information.
PUT /api/users/:userId: Updates the user with the specified ID with the new information.
DELETE /api/users/:userId: Deletes the user with the specified ID.

Thought Routes
GET /api/thoughts: Returns an array of all thoughts.
GET /api/thoughts/:thoughtId: Returns the thought with the specified ID.
POST /api/thoughts: Creates a new thought with the specified information.
PUT /api/thoughts/:thoughtId: Updates the thought with the specified ID with the new information.
DELETE /api/thoughts/:thoughtId: Deletes the thought with the specified ID.

Reaction Routes
POST /api/thoughts/:thoughtId/reactions: Creates a new reaction to the thought with the specified ID.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Deletes the reaction with the specified ID from the thought with the specified ID.

Friend Routes
POST /api/users/:userId/friends: Adds the user with the specified ID to the friend list of the user with the specified ID.
DELETE /api/users/:userId/friends/:friendId: Removes the user with the specified ID from the friend list of the user with the specified ID.

## Demo



[Social Network.webm](https://user-images.githubusercontent.com/106099150/230760217-4156a418-28a9-4e37-b5c8-f9b8f0319fbb.webm)


## Contributing

Week 18 mini project was used as starter code. 

https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose
