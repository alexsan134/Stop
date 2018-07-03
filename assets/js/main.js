
//Author AlexSantos
//All rights reserved
'use strict'
const translate = require('google-translate-api');
document.querySelector(".sendS").addEventListener("click", send);
document.querySelector("#sing").addEventListener("keyup", (event) =>{
    event.preventDefault();
    var inpt = document.querySelector("#sing").value;
    inpt = inpt.replace(/[^A-Za-z]/g, '');
    document.querySelector("#sing").value = inpt;
    if(event.keyCode == 13){
        send();
    }
});
setTimeout(() =>{
    document.getElementById("shadow").style.opacity = "0";
}, 1000);
setTimeout(() =>{
    document.getElementById("shadow").style.display = "none";
}, 1800);

function send(){
    document.querySelector("#lblSing").innerHTML = "Your noun here:";
    document.querySelector("#cs").innerHTML = "Converted to:";
    var data = document.querySelector("#sing").value;
    intelIcons(data);
}

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function includeArray(str, array){
    var resp;
    for(var e = 0; e < array.length;e++){
      if(str == array[e]){
        resp = true;
        return resp;
        }else{
        resp = false;
        return resp;
        }
    }
}

function intelIcons(name){
    var toAdd;
    var icon = document.createElement("i");
    var ic = name.toLowerCase();
    var icLgt = ic.length; 
    var vocals = ['a', 'e', 'i','o', 'u'];
    var bfIc = ic.charAt(icLgt - 2);

    //Convert to Singular
    //irregular
    if(ic == "alga"){
        ic = "algae";
    }else if(ic == "alumna"){
        ic = "alummnae";
    }else if(ic == "alumnus"){
        ic = "alumni";
    }else if(ic == "antenna"){
        ic = "antennas";
    }else if(ic == "apparatus"){
        ic = "apparatuses";
    }else if(ic == "apendix"){
        ic = "apendices";
    }else if(ic == "bison"){
        ic = "bison";
    }else if(ic == "buffalo"){
        ic = "buffalo";
    }else if(ic == "bus"){
        ic = "buses";
    }else if(ic == "boreau"){
        ic = "boreaus";
    }else if(ic == "child"){
        ic = "children";
    }else if(ic == "corps"){
        ic = "corps";
    }else if(ic == "corpus"){
        ic = "corpora";
    }else if(ic == "datum"){
        ic = "data";
    }else if(ic == "deer"){
        ic = "deer";
    }else if(ic == "die"){
        ic = "dice";
    }else if(ic == "fish"){
        ic = "fish";
    }else if(ic == "focus"){
        ic = "focuses";
    }else if(ic == "foot"){
        ic = "feet";
    }else if(ic == "genus"){
        ic = "genera";
    }else if(ic == "goose"){
        ic = "geese";
    }else if(ic == "hoof"){
        ic = "hooves";
    }else if(ic == "hypothesis"){
        ic = "hypotheses";
    }else if(ic == "index"){
        ic = "indices";
    }else if(ic == "matrix"){
        ic = "matrices";
    }else if(ic == "means"){
        ic = "means";
    }else if(ic == "means"){
        ic = "means";
    }else if(ic == "moose"){
        ic = "moose";
    }else if(ic == "nebula"){
        ic = "nebulae";
    }else if(ic == "ox"){
        ic = "oxen";
    }else if(ic == "person"){
        ic = "people";
    }else if(ic == "scarf"){
        ic = "scarfs";
    }else if(ic == "scissors"){
        ic = "scissors";
    }else if(ic == "species"){
        ic = "species";
    }else if(ic == "that"){
        ic = "those";
    }else if(ic == "this"){
        ic = "these";
    }else if(ic == "tooth"){
        ic = "teeth";
    }else if(ic == "vertebra"){
        ic = "vertebrae";
    }else if(ic == "vita"){
        ic = "vitae";
    }else if(ic == "zero"){
        ic = "zeros";
    }else if(ic == "house"){
        ic = "houses";
    }else if(ic == "salmon"){
        ic = "salmon";
    }else if(ic == "sheep"){
        ic = "sheep";
    }else if(ic == "trout"){
        ic = "trout";
    }else if(ic == "cod"){
        ic = "cod";
    }else if(ic == "squid"){
        ic = "squid";
    }else if(ic == "monkfish"){
        ic = "monkfish";
    }else if(ic == "rice"){
        ic = "rice";
    }else if(ic == "water"){
        ic = "water";
    }else if(ic == "pasta"){
        ic = "pasta";
    }else if(ic == "bread"){
        ic = "bread";
    }else if(ic == "toast"){
        ic = "toast";
    }else if(ic == "aircraft"){
        ic = "aircraft";
    }
    //rules exeptions
    else if(ic == "photo" || ic == "piano" || ic == "halo" || ic == "turkey" || ic == "chimney" || ic == "casino" || ic == "kangaroo" || ic == "ratio" || ic == "patio" || ic == "pistachio" || ic == "stomach" || ic == "epoch"){
        ic = ic + "s";
    }

    //rules
    else if(ic == ""){
        ic = "Noun in Plural";
    }
    else if( ( (ic.charAt(icLgt - 1) == "s" || ic.charAt(icLgt - 1) == "x" || ic.charAt(icLgt - 1) == "z")) && (ic.charAt(icLgt - 2) != "u" && ic.charAt(icLgt - 2) != "i") ){
        ic = ic+"es";
        console.log("1");
    }
    else if(((ic.charAt(icLgt - 1) == "s" && ic.charAt(icLgt - 2) == "s") || (ic.charAt(icLgt - 2) == "s" && ic.charAt(icLgt - 1) == "h") || (ic.charAt(icLgt - 2) == "c" && ic.charAt(icLgt - 1) == "h")) && (ic.charAt(icLgt - 2) != "u" && ic.charAt(icLgt - 2) != "i")){
        ic = ic+"es";
        console.log("2");
    }
    else if( (ic.charAt(icLgt - 2) == "f") && (ic.charAt(icLgt - 1) == "e") ) {
        var rep = replaceAt(ic, icLgt - 2, "v");
        ic = rep+"s";
        console.log("3");
    }
    else if( ic.charAt(icLgt - 1) == "f"){
        var reps = includeArray(ic.charAt(icLgt - 2), vocals);
        var preps = includeArray(ic.charAt(icLgt - 3), vocals);
        if(reps != false || preps != false){
            ic = ic + "s";
        }else{
        var rep = replaceAt(ic,icLgt -1, "v");
        ic = rep+"es";
        }
        console.log("4");
    }
    else if(ic.charAt(icLgt - 1) == "y"){
        var rep = includeArray(ic.charAt(icLgt - 2), vocals);
        if(rep == false){
            var reps = replaceAt(ic,icLgt -1, "ies");
            ic = reps;
        }else{
            ic = ic + "s";
        }
        console.log("5");
    }
    else if(ic.charAt(icLgt - 1 ) == "o"){
        ic = ic + "es";
        console.log("6");
    }
    else if(ic.charAt(icLgt - 2 ) == "u" && ic.charAt(icLgt - 1 ) == "s"){
        var preps = replaceAt(ic,icLgt - 2, "i");
        var reps = replaceAt(preps, preps.length -1, "");
        ic = reps;
        console.log("7");
    }
    else if(ic.charAt(icLgt - 2 ) == "i" && ic.charAt(icLgt - 1 ) == "s"){
        var reps = replaceAt(ic,icLgt - 2, "e");
        ic = reps;
        console.log("8");
    }
    else if(ic.charAt(icLgt - 2 ) == "o" && ic.charAt(icLgt - 1 ) == "n"){
        var preps = replaceAt(ic,icLgt - 2, "");
        var reps = replaceAt(preps,preps.length - 1, "a");
        ic = reps;
        console.log("9");
    }
    else if(ic.charAt(icLgt - 1 ) == "m"){
        var preps = replaceAt(ic,icLgt - 2, "");
        var reps = replaceAt(preps,preps.length - 1, "a");
        ic = reps;
        console.log("10");
    }
    else if(ic.charAt(icLgt - 3 ) == "m" && ic.charAt(icLgt - 2 ) == "a" && ic.charAt(icLgt - 1 ) == "n"){
        var reps = replaceAt(ic,icLgt - 2, "e");
        ic = reps;
        console.log("11");
    }
    else if(ic.charAt(icLgt - 4 ) == "o" && ic.charAt(icLgt - 3 ) == "u" && ic.charAt(icLgt - 2 ) == "s" && ic.charAt(icLgt - 1 ) == "e"){
        var preprepreps = replaceAt(ic,icLgt - 4, "i");
        var prepreps = replaceAt(preprepreps,preprepreps.length - 3, "c");
        var preps = replaceAt(prepreps,prepreps.length - 2, "e");
        var reps = replaceAt(preps,preps.length - 1, "");
        ic = reps;
        console.log("12");
    }
    else if(ic.charAt(icLgt - 3 ) == "e" && ic.charAt(icLgt - 2 ) == "a" && ic.charAt(icLgt - 1 ) == "u"){
        ic = ic + "x";
        console.log("13");
    }
    else if(ic.includes("oo") == true){
        var rest = ic.replace("oo","ee");
        ic = rest;
        console.log("14");
    }
    else{
        ic = ic + "s";
    }

    document.querySelector("#ls").innerHTML = ic;
    
}

document.querySelector("#translate").addEventListener("click", trans);
 
function trans(){
    send();
    var inpts = document.querySelector("#sing").value; 
    var lblInput = "Your noun here:";
    var convert = "Converted to:";
    var lbl = document.querySelector("#ls").textContent; 
    var plHolder = "Your Noun in Singular";

    translate(inpts, {to: 'es'}).then(res => {
    document.querySelector("#sing").value = res.text;
        }).catch(err => {
            console.error(err);
        });

    translate(lblInput, {to: 'es'}).then(res => {
        document.querySelector("#lblSing").innerHTML = res.text;
        }).catch(err => {
            console.error(err);
        });
    translate(convert, {to: 'es'}).then(res => {
    document.querySelector("#cs").innerHTML = res.text;
    }).catch(err => {
                console.error(err);
    });
    translate(lbl, {to: 'es'}).then(res => {
    document.querySelector("#ls").innerHTML = res.text;
    }).catch(err => {
     console.error(err);
        });
    translate(plHolder, {to: 'es'}).then(res => {
        document.querySelector("#sing").placeholder = res.text;
        }).catch(err => {
        console.error(err);
    });
}


