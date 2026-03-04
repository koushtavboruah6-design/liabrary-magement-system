const express = require('express');




const app = express();




const PORT = 3000;


app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Welcome to the Library Management System');
});

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found');
}); 



app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});