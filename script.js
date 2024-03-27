// https://api.weatherapi.com/v1/current.json?key=00ef5bb40bf2475882352312242703&q=Mumbai&aqi=no

// let target='Delhi'
// const fetchResults = async () =>{

//     let url='https://api.weatherapi.com/v1/current.json?key=00ef5bb40bf2475882352312242703&q=Mumbai&aqi=no';
//     const res=await fetch(url)
//     const data= await res.json()
//     console.log(data)
// }
// fetchResults(target)

const tempField= document.querySelector(".temp");
const locationField= document.querySelector(".time_location p");
const dateField= document.querySelector(".date p");
const weatherField= document.querySelector(".condition p");
//const picField=document.querySelector(".picture p")
const searchField= document.querySelector(".search_area");
const form= document.querySelector("form")

form.addEventListener('submit',searchForLocation)
let target = 'Kolkata'

const fetchResults = async (targetLocation) =>{
    let url = `https://api.weatherapi.com/v1/current.json?key=00ef5bb40bf2475882352312242703&q=${targetLocation}&aqi=no`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    let locationName=data.location.name
    let time=data.location.localtime
    let temp=data.current.temp_c
    let condition=data.current.condition.text
   // let pic=data.current.condition.icon

    updateDetails(temp,locationName,time,condition)
}

function updateDetails(temp,locationName,time,condition)
{
    let splitDate= time.split(' ')[0]
    let splitTime= time.split(' ')[1]
    let currentDay= getDayName(new Date(splitDate).getDay())
    tempField.innerText = temp
    locationField.innerText=locationName
    dateField.innerText=`${splitDate} ${currentDay} ${splitTime}`
    weatherField.innerText=condition
    //picField.innerText=pic
    
}
function getDayName(number)
{
    switch(number){
        case 0: return 'Sunday'
        case 1: return 'Monday'
        case 2: return 'Tuesday'
        case 3: return 'Wednesday'
        case 4: return 'Thursday'
        case 5: return 'Friday'
        case 6: return 'Saturday'
    }
}

function searchForLocation(e){
    e.preventDefault()
    target = searchField.value
    fetchResults(target)
}
fetchResults(target)
