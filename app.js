function initPixor(){

console.log("PIXOR ENGINE V1.2");

if(typeof widgets !== "undefined"){

console.log("Widgets Loaded");

widgets.forEach(widget=>{

console.log(
widget.id,
widget.type
);

});

}

}

document.addEventListener(
"DOMContentLoaded",
initPixor
);
