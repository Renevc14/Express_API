const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./database');
const sequelize = require('./database/config');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const User = require('./models/user');
const Task = require('./models/task');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await connectDB();
    try {
        await sequelize.sync({ force: true });
        console.log('Database & tables created!');
    } catch (error) {
        console.error('Error synchronizing the database:', error);
    }
    console.log(`Server is running on port ${PORT}`);
});
