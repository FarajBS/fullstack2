import express from "express";

const app = express();
app.use(express.json());
const port = 3001;

// Blog //

const users = []

// Get //
app.get("/blog", (req, res) => {
    res.json(users);
});
//=== Get ===//

// Post //
app.post("/blog", (req, res) => {
    const id        = users.length + 1;
    const name      = req.body.name;
    const title     = req.body.title;
    const content   = req.body.content;
    const client    = {name, title, content};
    
    users.push(client);
    res.json(client);
});
//=== Post ===//

// Patch //
app.patch("/blog/:id", (req, res) => {
    const userid = parseInt(req.params.id);

    const {name, title, content}    = req.body;
    const us                        = users[userid];
    us.name                         = name;
    us.title                        = title;
    us.content                      = content;

    // users.push(us);
    res.json(us);
})
//=== Patch ===//

// Delete //
app.delete("/blog/:id", (req, res) => {
    const userId    = parseInt(req.params.id);
    const userIndex     = users.findIndex(user => user.id === userId);


    users.splice(userIndex, 1);
    res.json(users);
});
//=== Delete ===//\

// Blog //

// ============================================================================================================================================ //
// ============================================================================================================================================ //
// ============================================================================================================================================ //
// ============================================================================================================================================ //
// ============================================================================================================================================ //
// ============================================================================================================================================ //

// Sign And Login //

// Login
app.post('/signIn', (req, res) => {

    const email     = req.body.email;
    const password  = req.body.password;

    if (!email || !password) {
        res.send("Email and password are required");
    };

    const user = users.find(user => user.email == email);


    res.json(userId = user.id);
});

// SignUp
app.post("/signUp", (req, res) => {

    const username      = req.body.username;
    const email         = req.body.email;
    const password      = req.body.password;



    if (username.length > 5 && /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email)  && password.length > 8) {
        res.send("Successful registration")
    }


    const newUser = {
        id: users.length + 1,
        username,
        email,
        password
    };


    users.push(newUser);


    res.json(userId = newUser.id);
});

// Sign And Login //


app.listen(port, () =>{
    console.log("Ok");
});