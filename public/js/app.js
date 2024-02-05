

console.log("clinet side javascript")

const weatherForm= document.querySelector('form')
const search = document.querySelector('input')
const para1 =document.querySelector("#id1")
const para2 = document.querySelector("#id2")
//para1.textContent="hey there"
weatherForm.addEventListener('submit', (e) => {
e.preventDefault()
console.log(search.value)
fetch("http://localhost:8098/weather?location="+search.value).then((response) => {
   response.json().then((data) => {
      if(data.error){
      console.log(data.error)

      }
      else{

       // const dataJSON =data.toString()
      //  data = JSON.parse(dataJSON)
       data = JSON.stringify(data)
        console.log(data)
        para1.textContent=search.value
        para2.textContent=data
      //  console.log(data.forecast)

      }
   })


})

})

