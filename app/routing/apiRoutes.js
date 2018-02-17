// Load required dependencies & Data
let path = require('path');
let friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {

    // Total list of friend entries
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // Add new friend entry
    app.post('/api/friends', function(req, res) {
       
        // Capture the user input object
        let userInput = req.body;
        let userResponses = userInput.scores;

        // Compute best friend match
        let matchName = '';
        let matchImage = '';
        // let totalDifference = 10000; // Make the initial value big for comparison
       
        let totalDifference = 0;
        // Examine all existing friends in the list
        for (var i = 0; i < friends.length; i++) {
            totalDifference += Math.abs(parseInt(friends[0].scores) - parseInt(userResponses));

            // Compute differenes for each question
            let difference = 0;
            for (var j = 0; j < userResponses.length; j++) {
                difference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userResponses[j]));
            }

            // If lowest difference, record the friend match
            if (difference <= totalDifference) {
                totalDifference = difference;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
            else{
                matchName = "Sorry, No Match Found";
            }
        }

        // Add new user
        friends.push(userInput);

        // Send appropriate response
        res.append('Content-Type', 'application/json');
        res.json({
            status: 'OK',
            matchName: matchName,
            matchImage: matchImage
        });
        
    });
};