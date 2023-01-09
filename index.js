// function saveLead(){
//     console.log("clicked")
// }

// // they both same

// let inputBtn=document.getElementById("input-btn")

// inputBtn.addEventListener("click",function(){
//     console.log("hahaha")
// })

let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")

//get the leads from local storage
const leadsFromLocal=JSON.parse(localStorage.getItem("myLeads"))
//check if leadsFromlocal are true
if(leadsFromLocal){
    myLeads=leadsFromLocal
    render(myLeads)
}

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
function render(leads)
{
    let listItems=""
    for(var i=0;i<leads.length;i++){
    // console.log(myLeads[i])
    // listItems+="<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
    listItems+=
    `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
    </li>
    `
    ulEl.innerHTML=listItems
}

    // this will create list, but <li>...</li> also gets printed
    // ulEl.textContent+="<li>"+myLeads[i]+"</li>"

    //it considers li as html element and ignores the li in printing the output
    // ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"


    //another way
    ///1. create element 2. set text content 3.append to ul
    //  const lists=document.createElement("li")
    // lists.textContent=myLeads[i]
    // ulEl.append(lists)

}

deleteBtn.addEventListener("dblclick",function(){
localStorage.clear()
myLeads=[]
//to refresh the dom not working dky, should work, maybe the browser
render(myLeads) 
}
)
//console.log(leadsFromLocal)

inputBtn.addEventListener("click",function()
{
    // console.log("hahaha")
    // myLeads.push("www.google.com")
    // console.log(myLeads)
    // myLeads.push(document.getElementById("input-el").value)
    myLeads.push(inputEl.value)
    inputEl.value=""
    //save the myLeads to local storage
   // myLeads=JSON.stringify(myLeads)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    
    //to verify that its svaed
    console.log(localStorage.getItem("myLeads"))
    // console.log(myLeads)
})

