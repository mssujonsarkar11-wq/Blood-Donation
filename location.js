const locations = {

Dhaka:{
Gazipur:{
Kaliakair:{
Fulbaria:["Ward 1","Ward 2"],
Chapair:["Ward 1","Ward 2"]
}
},
Narsingdi:{
Belabo:{
Patuli:["Ward 1","Ward 2"]
}
}
},

Sylhet:{
Sylhet:{
Beanibazar:{
Mathiura:["Ward 1","Ward 2"]
}
}
}

}

function loadDistricts(){

let division=document.getElementById("division").value
let districtSelect=document.getElementById("district")

districtSelect.innerHTML=""

Object.keys(locations[division]).forEach(d=>{

let opt=document.createElement("option")
opt.text=d
opt.value=d
districtSelect.add(opt)

})

}

function loadUpazila(){

let division=division.value
let district=district.value

let upazilaSelect=document.getElementById("upazila")
upazilaSelect.innerHTML=""

Object.keys(locations[division][district]).forEach(u=>{

let opt=document.createElement("option")
opt.text=u
opt.value=u
upazilaSelect.add(opt)

})

}

function loadUnion(){

let division=division.value
let district=district.value
let upazila=upazila.value

let unionSelect=document.getElementById("union")
unionSelect.innerHTML=""

Object.keys(locations[division][district][upazila]).forEach(u=>{

let opt=document.createElement("option")
opt.text=u
opt.value=u
unionSelect.add(opt)

})

}

function loadWard(){

let division=division.value
let district=district.value
let upazila=upazila.value
let union=union.value

let wardSelect=document.getElementById("ward")
wardSelect.innerHTML=""

locations[division][district][upazila][union].forEach(w=>{

let opt=document.createElement("option")
opt.text=w
opt.value=w
wardSelect.add(opt)

})

}
