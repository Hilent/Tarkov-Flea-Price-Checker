let searchBar = document.getElementById("searchBar");
let result = document.getElementById("result");
let inputs = document.getElementsByTagName("input");
let chosenTypes = [];

async function search(){
    result.innerHTML = "";
    
    if(searchBar.value.length < 3){
        result.innerHTML += "Please enter at least 4 characters."
        return;
    }

    let item = null;
    item = await requestItem(searchBar.value);
    
    for(let i = 0;i<item.length;i++){      
        if(!isItemInChosenTypes(item[i])) continue;
        
        let info = "";

        info += "<a href='" + item[i].wikiLink + "'>  <img src='" + item[i].iconLink + "'></a>" + "<br>";
        info += item[i].name + "<br>";
        info += "Base Price: " + item[i].basePrice + "₽<br>";
        info += "Lowest price in 24 hours: " + item[i].low24hPrice + "₽<br>";
        info += "Highest price in 24 hours: " + item[i].high24hPrice + "₽<br><br><br>";
        
        result.innerHTML += "<div>" + info + "</div>";
    }
}

function isItemInChosenTypes(item){
    for(let i=0; i<chosenTypes.length;i++){
        if(item.types.includes(chosenTypes[i])) return true;
    }
    return false;
}

function onCheckboxClick(){
    let checkbox = event.target;

    if(checkbox.checked){
        chosenTypes.push(checkbox.id);
    }
    else{
        chosenTypes.splice(chosenTypes.indexOf(checkbox.id),1);
    }
}

function selectAllTypes(){
    for(let i=0; i<inputs.length;i++){
        if(inputs[i].type == "checkbox"){
            inputs[i].checked = true;
            chosenTypes.push(inputs[i].id);
        }
    }
}

function deselectAllTypes(){
    for(let i=0; i<inputs.length;i++){
        if(inputs[i].type == "checkbox"){
            inputs[i].checked = false;
        }
    }

    chosenTypes = [];
}