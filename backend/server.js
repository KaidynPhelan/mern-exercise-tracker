const express = require ('express');
const cors = require ('cors');

// Connecting to database
const mongoose = require ('mongoose');


require ('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connecting to the database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// connecting routes to server
const exercisesRouter = require('./routes/exercise');
const usersRouter = require('./routes/users');

app.use('/exercise', exercisesRouter);
app.use('/users', usersRouter);




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});