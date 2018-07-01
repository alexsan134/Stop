
//Author AlexSantos
//All rights reserved


document.querySelector("#send").addEventListener("click", send);
function send(){
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
    if(ic.charAt(icLgt - 1) == "s" || ic.charAt(icLgt - 1) == "x" || ic.charAt(icLgt - 1) == "z"){
        ic = ic+"es";
    }
    else if((ic.charAt(icLgt - 1) == "s" && ic.charAt(icLgt - 2) == "s") || (ic.charAt(icLgt - 2) == "s" && ic.charAt(icLgt - 1) == "h") || (ic.charAt(icLgt - 2) == "c" && ic.charAt(icLgt - 1) == "h")){
        ic = ic+"es";
    }
    else if( (ic.charAt(icLgt - 2) == "f") && (ic.charAt(icLgt - 1) == "e") ) {
        var rep = replaceAt(ic, icLgt - 2, "v");
        ic = rep+"s";
    }
    else if( ic.charAt(icLgt - 1) == "f"){
        var rep = replaceAt(ic,icLgt -1, "v");
        ic = rep+"es";
    }
    else if(ic.charAt(icLgt - 1) == "y"){
        var rep = includeArray(ic.charAt(icLgt - 2), vocals);
        if(rep == false){
            var reps = replaceAt(ic,icLgt -1, "ies");
            ic = reps;
        }else{
            ic = ic + "s";
        }
    }
    else if(ic.charAt(icLgt - 1 ) == "o"){
        ic = ic + "es";
    }
    else{
        ic = ic + "s";
    }


    document.querySelector("#ls").innerHTML = ic;
    
}