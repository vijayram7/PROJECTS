let button = document.getElementById("button")
let sno = 1
button.addEventListener("click",function(){
    let body = document.getElementById("body")
    let row  = document.createElement("tr")
    body.appendChild(row)
    
    let td1 = document.createElement("td")
    row.appendChild(td1)

    td1.textContent = sno

    let td2 = document.createElement("td")
    row.appendChild(td2)
    let data1 = document.getElementById("cname").value
    td2.textContent = data1

    let td3 = document.createElement("td")
    row.appendChild(td3)
    let data2 = document.getElementById("cbike").value
    td3.textContent = data2

    let td4 = document.createElement("td")
    row.appendChild(td4)
    let data3 = document.getElementById("in").value
    td4.textContent = data3

    let td5 = document.createElement("td")
    row.appendChild(td5)
    let data4 = document.getElementById("out").value
    td5.textContent = data4
    // console.log(data4)




    let td6 = document.createElement("td")
    row.appendChild(td6)

    //time to date
    let date1 = new Date(`1970-01-01T${data3}:00Z`);
    let date2 = new Date(`1970-01-01T${data4}:00Z`);

    //difference in millisecond

    let difference = Math.abs(date2 - date1)
    console.log(difference)

    //hours
    let hours = Math.floor(difference/(1000 * 60 * 60));
    let mins = Math.floor((difference%(1000 * 60 * 60)) / (1000*60))

    console.log(hours)
    console.log(mins)

    //amount
    let amount = (hours * 30) 

    td6.textContent = amount + (mins > 0 ? 30:0)

    let td7 = document.createElement("td")
    row.appendChild(td7)
    td7.textContent = `${hours}hr:${mins}mins`

    sno++

    // data1 = "";
    // data2 = "";
    // data3 = "";
    // data4 = "";
    document.getElementById("cname").value = "";
    document.getElementById("cbike").value = "";
    document.getElementById("out").value = "";
    document.getElementById("in").value = "";


   



})

let cname = document.getElementById("cname")
cname.addEventListener("focusout",function(){
    let cname = document.getElementById("cname").value 
    let p1 = document.getElementById("p1")
    if(cname === ""){
        p1.textContent = "Enter a valid Name!"
    }
    else if(!isNaN(cname)){
        p1.textContent = "Enter a valid Name!"
    }
    else{   
        p1.textContent = "";
    }
})
