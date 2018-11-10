const Gallery = require('./Gallery.js');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const sample = require('./sampleData.js');


// *** IMPORTANT *** Please follow the steps on generating sampleData
// step1: Run 'npm run generateSampleData' script in terminal to generate sampleData
// step2: Add 'module.exports = ' to the generated file 

const sampleData = sample;

const insertDb = () => {
	Gallery.create(sampleData)
		.then(() => console.log('sample data inserted into Database'))
    .then(() => mongoose.connection.close())
    .then(() => {
			if ( fs.existsSync( path.join(__dirname, 'sampleData.js') ) ) {
				fs.unlink(path.join(__dirname, 'sampleData.js'), (err) => {
					if (err) throw err;
					console.log('sampleData.js was deleted');
			  });
			}	
    })
    .catch(err => console.log('error: ', err));
};

insertDb();