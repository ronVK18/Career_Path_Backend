const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./database/dbconnection');

const Coursesroute=require('./routes/managecoursesroutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/courses',Coursesroute);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
