import * as express from 'express'

const port = process.env.PORT || 3000
const app = express()

app.listen(port, ()=>{
    console.log('listening on port: ' + port);
})
app.get("/users", (req, res)=>{
    res.json({
        users:[]
    })
})
app.post("/users", (req, res)=>{
    res.status(201).json({
        "message": "ok",
        "id":1234
    })
})
app.get("/users/:id/product", (req, res)=>{
    res.json({
        products:[]
    })
})
