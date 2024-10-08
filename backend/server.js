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
    const id = users.length + 1;
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

app.listen(port, () =>{
    console.log("Ok");
});