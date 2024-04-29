let searchBar = document.getElementById("searchBar");
let result = document.getElementById("result");

let chosenTypes = [];

async function search(){
    result.innerHTML = "";

    let item = null;
    item = await requestItem(searchBar.value);
    
    for(let i = 0;i<item.length;i++){      
        if(!isItemInChosenTypes(item[i])) continue;
        
        let info = "";

        info += "<img src='" + item[i].iconLink + "'" + "<br>";
        info += item[i].name + "<br>";
        info += "Base Price: " + item[i].basePrice + "₽<br>";
        info += "Lowest price in 24 hours: " + item[i].low24hPrice + "₽<br>";
        info += "Highest price in 24 hours: " + item[i].high24hPrice + "₽<br>";

        result.innerHTML += "<div style='display:flex; justify-content: left;'>" + info + "</div>";
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