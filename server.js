require("dotenv").config();
const cors = require("cors");
const express = require("express");
const stripeRoutes = require("./routes/stripeRoutes");
const productRoutes = require("./routes/productRoutes");
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/stripe', stripeRoutes);
app.use('/api/products', productRoutes);
app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


