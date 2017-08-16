const express = require('express');
const bodyParser = require('body-parser');
const mc = require(__dirname + '/controllers/messages_controller.js');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'));

const apiURL = "/api/messages";
app.get(apiURL, mc.read);
app.post(apiURL, mc.create);
app.put(`${apiURL}/:id`, mc.update);
app.delete(`${apiURL}/:id`, mc.delete);



const port = 3001;
app.listen(port, ()=> {console.log(`Its lit on port ${port} fam`)});