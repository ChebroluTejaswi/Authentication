## User authentication and authorization application
A project to demonstrate authentication through the use of a simple and attractive Login and Registration form.

## Built with 🛠️
<p>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img height="30" src="https://github.com/tomchen/stack-icons/raw/master/logos/bootstrap.svg"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"></code>
<code><img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png"></code>
</p>

## About the project
I used four levels of security:<br>
<b>Level 1:</b> Login access is restricted only to authenticated users.<br>
<b>Level 2:</b> Encrypted the password before storing it in the database using the moongoose-encryption package (AES encryption technique is used).<br>
To ensure that the secret key is not publicly displayed, it should be stored in the.env file.<br>
<b>Level 3:</b> Rather than encrypting the password, the Hash technique is used here. Hashing increases the security of our data because reversing the generated hash is nearly impossible.<br>
<b>Level 4:</b> When two identical words are passed to a hash function, the same hash code is generated.<br> As a result, I used the salting technique to ensure that two users have different hash codes even if they have the same password.

## Pre-requisites for installation
The data will be stored in Mongo DB (local storage/ Cloud Atlas).<br>
If you want to use local storage then you must first install MongoDB Shell on your laptop/computer before proceeding. The Mongo server should be running while this app is running.<br>
If you want to use cloud service of mongodb, then create an account in atlas and create a cluster.

## Installation
This repository can be downloaded as a zip file or cloned. Launch it in your preferred editor (my choice: VS Code). Proceed to the terminal and follow the steps outlined below.
NOTE: This project has the most recent version (i.e level 4 implementation). Look at my commit history to see how I implemented levels 1, 2, and 3.

> To initialize node
```shell
npm init
```
> To install required modules
```shell
npm install 
```
> Run the app.py file
```shell
node app.js
```
<b>Open the link in browser</b>
host:localhost port:3000 (http://localhost:3000/)

<p style="text-align: center">Made with &#9829;</p>