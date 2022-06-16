const bodyParser = require('body-parser')
const exp = require('express')
const path = require('path')
const pp = exp ()

pp.use(exp.json())
pp.use(bodyParser.urlencoded({extended:true}))


pp.get('/',(req,res,next)=>{
    res.send("hello")
}) 
//when the path is add
pp.get('/add',(req,res,next)=>{
    res.sendFile(path.join (__dirname,'new.html'))
})
//data that entered by the user
 pp.post('/add',(req,res,next)=>{
     console.log(req.body)
     data = req.body;
     res.redirect("/view")
 })

 pp.get('/view',(req,res,next)=>{
     let html = "";
     html += creatdiv("Name",data["input1"])
     html += creatdiv("radio1",data["radio1"])
     html += creatdiv("checkbox1",data["checkbox1"])
     html += creatdiv("selectedValue",data["selectedValue"])
     html += creatdiv("textArea",data["textArea"])
      res.send(html)
})

    function creatdiv(label,data){
        return "<div>" + label + " : " + data + "</div>"
    }

    pp.get('/error',(req,res,next)=>{
res.send(error())
    })

    pp.use((req,res,next)=>{
        res.status(404)
        res.sendFile(path.join(__dirname,'404.html'))

    })
    pp.use((error,req,res,next)=>{
        res.status(500)
        res.sendFile(path.join(__dirname,'errro.html'))

    })


 let data ={}


pp.listen(300,()=>{console.log("this is the server")})