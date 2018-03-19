# Friend Finder Application

## Description

*Friend Finder* implements friend matching based on the user's responses to a ten question survey. 
<img src="./app/public/images/1.jpg" alt="Friend App" height="500">


The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). 
<img src="./app/public/images/2.jpg" alt="Friend App" height="500">


When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.
<img src="./app/public/images/3.jpg" alt="Friend App" height="500">


*Friend Finder* application is meant to simulate a simple dating app. The application is implemented using a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/) server on the back end and the [Bootstrap](http://getbootstrap.com/docs/4.0/getting-started/introduction/) CSS framework on the front end.

\app\public\images

## Demo
	
*Friend Finder* is deployed to Heroku. Please check it out [here](https://mw-friend-finder.herokuapp.com/).

## Installation

To install the application follow the instructions below:

	git clone https://github.com/miguelaw/FriendFinder.git
	cd FriendFinder
	npm install
	
## Running Locally

To run the application locally and access it in your browser, first set the `PORT` environment variable to the value of your choice. An example is shown below.

	var PORT = process.env.PORT || 3000;
	
After the `PORT` environment variable has been set, run the Node.js application with the command below.

	node server.js
	
The application will now be running locally on `PORT`, in this case that is port 3000. You can then access it locally from your browser at the URL `localhost:PORT`, in this case `localhost:3000`.