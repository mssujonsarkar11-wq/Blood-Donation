import { db } from "./firebase.js";

import {
collection,
addDoc,
getDocs,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.showPage=function(page){

document.querySelectorAll(".page").forEach(p=>{
p.style.display="none"
})

document.getElementById(page).style.display="block"

}

window.toggleDark=function(){
document.body.classList.toggle("dark")
}

window.onload=function(){
showPage("home")
loadDonors()
loadRequests()
loadHospitals()
loadBanks()
loadLeaderboard()
loadChat()
}

async function addDonor(){

const name=document.getElementById("donorName").value
const blood=document.getElementById("donorBlood").value
const district=document.getElementById("donorDistrict").value

await addDoc(collection(db,"Donors"),{
name,blood,district,donations:0
})

loadDonors()

}

async function loadDonors(){

const snap=await getDocs(collection(db,"Donors"))

let html=""

snap.forEach(doc=>{

const d=doc.data()

html+=`<div class="card">
<b>${d.name}</b><br>
Blood: ${d.blood}<br>
District: ${d.district}
</div>`

})

document.getElementById("donorList").innerHTML=html

}

async function postRequest(){

const patient=document.getElementById("patient").value
const blood=document.getElementById("blood").value
const hospital=document.getElementById("hospital").value

await addDoc(collection(db,"Requests"),{
patient,blood,hospital
})

loadRequests()

}

async function loadRequests(){

const snap=await getDocs(collection(db,"Requests"))

let html=""

snap.forEach(doc=>{
const r=doc.data()

html+=`<div class="card">
${r.patient} needs ${r.blood} at ${r.hospital}
</div>`
})

document.getElementById("requestList").innerHTML=html

}

function loadHospitals(){

const hospitals=["Dhaka Medical","Square","Apollo"]

let html=""

hospitals.forEach(h=>{
html+=`<div class="card">${h}</div>`
})

document.getElementById("hospitalList").innerHTML=html

}

function loadBanks(){

const banks=["Red Crescent","Quantum","Sandhani"]

let html=""

banks.forEach(b=>{
html+=`<div class="card">${b}</div>`
})

document.getElementById("bloodbankList").innerHTML=html

}

async function loadLeaderboard(){

const snap=await getDocs(collection(db,"Donors"))

let donors=[]

snap.forEach(doc=>{
donors.push(doc.data())
})

donors.sort((a,b)=>b.donations-a.donations)

let html=""

donors.forEach((d,i)=>{
html+=`<div class="card">#${i+1} ${d.name}</div>`
})

document.getElementById("leaderList").innerHTML=html

}

function loadChat(){

const chatRef=collection(db,"Chat")

onSnapshot(chatRef,(snap)=>{

let html=""

snap.forEach(doc=>{
html+=`<div class="card">${doc.data().text}</div>`
})

document.getElementById("messages").innerHTML=html

})

}

window.sendMessage=async function(){

const text=document.getElementById("msg").value

await addDoc(collection(db,"Chat"),{text})

}
