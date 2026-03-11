function loadFeed(){

const feed=document.getElementById("feed")

if(!feed) return

feed.innerHTML=""

requests.forEach(r=>{

let div=document.createElement("div")
div.className="card"

if(r.urgency==="Emergency") div.classList.add("emergency")

div.innerHTML=`
<b>${r.patient}</b><br>
Blood: ${r.blood}<br>
Hospital: ${r.hospital}<br>
Contact: ${r.contact}
`

feed.appendChild(div)

})

}

function searchDonor(){

let blood=document.getElementById("bloodSearch").value

let result=document.getElementById("results")

result.innerHTML=""

let res=donors.filter(d=>d.blood===blood)

res.forEach(d=>{

let div=document.createElement("div")
div.className="card donor-card"

div.innerHTML=`
<div>
<b>${d.name}</b><br>
Blood: ${d.blood}
</div>

<div>
<a href="tel:${d.phone}">📞</a>
<a href="https://wa.me/${d.phone}">💬</a>
</div>
`

result.appendChild(div)

})

}

function loadLeaderboard(){

const list=document.getElementById("leaderboard")

if(!list) return

donors.sort((a,b)=>b.donations-a.donations)

donors.forEach(d=>{

let li=document.createElement("li")

li.innerText=d.name+" - "+d.donations+" donations"

list.appendChild(li)

})

}

window.onload=()=>{

loadFeed()
loadLeaderboard()

}
