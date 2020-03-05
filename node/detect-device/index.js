const express = require('express');
const device = require('express-device');
const app = express();

app.use(device.capture());
device.enableDeviceHelpers(app);

app.get('/', (req, res) => {
    res.json({
        message: `Hola ${req.device.type}`,
        device: req.device,
    });
});

app.listen(3000, ()=> {
    console.log('Server on port 3000');
});