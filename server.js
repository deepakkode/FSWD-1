const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());




app.get('/', (req , res) =>{
   res.send('Hello world')
});

app.post("/signup", (req, res) => {
   const { username, email, password, dateofbirth } = req.body;

    
if (!username) {
   res.send("username cannot be empty");
} else if (!email) {
   res.send("email cannot be empty");
} else if (password.length < 8 || password.length >= 16) {
   res.send("password should be greater than 8 and less than 16");
} else {
   res.send("Signup successful");
}
});

app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
 