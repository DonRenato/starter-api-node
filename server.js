const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
mongoose.connect('mongodb+srv://deploy:deploy@cluster0-eeixp.mongodb.net/test?retryWrites=true&w=majority', 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
requireDir('./src/models');



//Rotas
app.use('/api', require('./src/routes'));

app.listen(3000);