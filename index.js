


const express = require("express")
const port = 3000;
const app = express();


app.get('/', (req, res) => {
    console.log("this is node js and express.js ");
    res.send("this is node js and express js  ");
});
app.post('/createuser', (req, res) => {
    console.log("user created are success");
    res.send('user created are success');
});

app.put('/updateuser', (req, res) => {
    console.log("user update are success");
    res.send('user update success');
});

app.head('/retreiveuser', (req, res) => {
    console.log("user retreived are success");
    res.send('user retreived are success');

});
app.delete('/removeuser', (req, res) => {
    console.log("user removed  are success");
    res.send('user removed  are success');

});

//listening the server
app.listen(port, () => {

    console.log(`the server is running at localhost:${port}`);
});