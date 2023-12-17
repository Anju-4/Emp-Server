const jsonServer = require('json-server')
const empServer = jsonServer.create()
const middlware = jsonServer.defaults()
const router = jsonServer.router("db.json")
const PORT = 3000 || process.env.PORT

empServer.use(middlware)
empServer.use(router)

empServer.listen(PORT,()=>{
    console.log(`Employee Portal Server started at port:${PORT}`);
})