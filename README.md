
<h1 align="center" id="title">Blog App</h1>
This is a Blog Post App created for a company. In this app bassically you can use CRUD Operations, you can also Search the post or sort the post according to posted date.


## 🛠 Built with 

Technologies used in the project:


![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB)

![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&amp;logo=redux&amp;logoColor=white)

![Bootstrap](https://img.shields.io/badge/Bootstrap-319795?style=for-the-badge&amp;logo=Bootstrap&amp;logoColor=white)

![Node-JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&amp;logo=nodedotjs&amp;logoColor=white)

![Express-JS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&amp;logo=express&amp;logoColor=white)

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white)



## 💻 Screenshots

**BLOG Page:**
![Home Page](https://user-images.githubusercontent.com/49484642/214049412-b62130c6-f19b-449f-9b22-43a99cf41774.png)




## ✨ Features 

- Live previews
- Fullscreen mode
- Cross platform


## 🚀 Demo

**Front-end deployed URL:**

https://shopqmart.vercel.app/
<br/>
https://singular-sundae-186837.netlify.app/

**Back-end deployed URL:**

https://splendid-bear-cap.cyclic.app/

##  📁 Folder structure
#### `Frontend` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up our pages
    - #### `pages` - These represent a unique page on the website i.e. Home or About. 
    - #### `redux` - It consists of store, reducer, action and actiontypes and is responsible for global state management of our app.
    - #### `App.js` - This is what renders all of our browser routes and different pages
    - #### `index.js` - This is what renders the react app by rendering App.js.
- #### `package.json` - Defines npm behaviors and packages for the client
#### `Backend` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `middlewares` - This holds all our middlewares used in our application
- #### `models` - This holds all of our data models or business logic
- #### `routes/controllers` - This holds all of our HTTP to URL path associations for each unique url
- #### `index.js` - An entry file for our Node JS application
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!
# Installation

Clone the project
```bash
git clone https://github.com/SCjadhav21/Project_ShopQ_Mart.git
```
## Client-side usage

Go to the project directory

```bash
$ cd frontend          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run start        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
```
## Server-side usage

**Environment Variables:-**

To run this project, you will need to add the following environment variables to your .env file

```
port                    // the port on which the server will run
mongoDbUrl              // your mongoDB URI to connect to the mongoDB atlas
key                     // key which will be JWT secret key 
```

**Start**

```bash
$ cd backend            // go to server folder
$ npm i                 // npm install packages
$ npm run server        // run it locally
```
## ✍ Authors 

- [@Gurjazz18](https://github.com/Gurjazz18)
- [@sbj1198](https://github.com/sbj1198)
- [@SCjadhav21](https://www.github.com/SCjadhav21)
- [@CodexPuneet](https://www.github.com/CodexPuneet)
- [@Harshank11](https://github.com/Harshank11)

##
This project was built during our construct week at Masai School. It was built by a team of 5 developers and executed in 6 days.
       
