const express = require('express');
const menuRoutes = require('./routes/menu-routes');

const app = express();

app.use('/api/menu', menuRoutes);

app.listen(2000, () => {
    console.log('Servidor corriendo en el puerto 2000');
});
