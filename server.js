// DEPENDENCIE 
const app = require("./app.js")

// CONFIGRAION
require("dotenv").config();
const PORT = process.env.PORT;

// Listgning 
app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}`);
})