# The http server for my-ideas project
## Steps for developers
### Step 1
* Created GIT repo at [GitHub](https://github.com/tsharon-byte/my-ideas-server) and cloned it
* `npm init -y` to create npm setup
* `npm i -D prettier` to have prettier formatting on save
* add "start":"node server.js" to package.json file. Will be used for deployment on heroku
* created "server.js" file with a simple http server
* created ".gitignore" file to ignore .idea and node_modules directories
### Step 2
Create just simple http server and deployed to heroku
* `heroku create my-ideas-server`
* `git push heroku`

The following links are now used to run the http server
* [locally](http://localhost:3000)
* [heroku](https://my-ideas-server.herokuapp.com/)

### Step 3
Add Model for user authorization
* `npm i -D mongoose`
* `npm i -D express`
* `npm i -D nodemon`
fill in "models", "routes" and "controllers" folders