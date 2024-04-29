let searchBar = document.getElementById("searchBar");
let result = document.getElementById("result");

async function search(){
    result.innerHTML = "";

    let item = null;
    item = await requestItem(searchBar.value);

    console.log(item);

    for(let i = 0;i<item.length;i++){
        let info = "";

        info += "<img src='" + item[i].iconLink + "'" + "<br>";
        info += item[i].name + "<br>";
        info += "Base Price: " + item[i].basePrice + "₽<br>";
        info += "Lowest price in 24 hours: " + item[i].low24hPrice + "₽<br>";
        info += "Highest price in 24 hours: " + item[i].high24hPrice + "₽<br>";


        result.innerHTML += "<div style='display:flex; justify-content: left;'>" + info + "</div>";
    }
}