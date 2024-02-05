const express = require ("express")
const path = require('path')
const hbs = require('hbs')
const geocode = require('../../weather.app/utils/getweather.js')

const forecaste = require('../../weather.app/utils/forecast.js')
app = express()
console.log(path.join(__dirname ,'../public'))
console.log(__filename)
const staticFiles = path.join(__dirname ,'../public') 
const viewsPath = path.join(__dirname ,'../templates/views') 
const partialspath= path.join(__dirname ,'../templates/partials') 

app.set('view engine', 'hbs')
app.set('views',viewsPath)  // this is to bet set if template folder is not named views
hbs.registerPartials(partialspath)
app.use(express.static(path.join(__dirname ,'../public')))

app.get('',(re,res) =>{
    res.render("index",{ title: 'this tile',
        body: 'this body'})
        
})

app.get('/help',(re,res) =>{
    res.render("help",{ title: 'this tile',
        body: 'this body'})
        
})

app.get('/help',(re,res) =>{
    res.send("<h1>Help</h1>")
})
app.get('/help/*',(re,res) =>{
    res.send("help articel not found ")
})
app.get('/weather',(re,res) =>{
    const location = re.query.location
    console.log(location)
    geocode(location,(erorr,data) => {
          if(erorr)
          {
           return res.send({erorr})

          }
         
        lat1 = data.lat
        long1 = data.long
    /*      return res.send({
            longitude:long1 
        })*/
       
        forecaste(lat1,long1,(error,data) =>{
                return res.send({data})

        })

       })

      


      
})

app.get('/products',(re,res) =>{

    if(!re.query.search){

        res.send({
            error:"please provide a search parmater"
          })
      

    }

    res.send({
      products: []
  
    })
})
/*
app.get('*',(re,res) =>{
    res.send("My 404 page")
       
})
*/


app.listen(8098,() => {

    console.log("hey ji")
    
})