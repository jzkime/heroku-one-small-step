const server = require('./api/server');
const PORT = process.env.PORT || 9000; // dynamically configured PORT

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

// example of how environment variables can be referenced in the code
// let option = process.env.OPTION;
// console.log(`you chose option ${option}`)