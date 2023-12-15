const cities =  {
    "New York": ["New York City", "Albany", "Buffalo"],
    "California": ["Los Angeles", "San Diego", "San Francisco"],
    "Texas": ["Houston", "San Antonio", "Austin"]
}
const neighborhoods = {
    "New York City": ["Harlem", "Flatbush", "Astoria"],
    "Albany": ["Washington Park", "Pine Hills", "Sheridan Hollow"],
    "Buffalo": ["Elmwood", "Allentown", "Larkinville"],
    "Los Angeles": ["Hollywood", "Venice", "Chinatown"],
    "San Diego": ["Gaslamp", "Mission Beach", "Pacific Beach"],
    "San Francisco": ["Financial District", "North Beach", "Mission District"],
    "Houston": ["Downtown Houston", "Museum District", "River Oaks"],
    "San Antonio": ["Mission del Lago", "Woodlawn Lake", "St. Mary's Strip"],
    "Austin": ["Downtown Austin", "Zilker", "East Riverside"]
}

function showCities() {
    var selectedState = document.getElementById("options").value;
    var selectedCity = document.getElementById("cities");
    var formAppear = document.getElementById("cityForm");
    formAppear.style.display = "block";
    if(selectedState == 0)
    {
        removeCities(selectedCity);
        for(let i = 0; i < 3; i++)
        {
            
            let option = cities["New York"][i];
            let element = document.createElement("option");
            element.textContent = option;
            element.value = option;
            selectedCity.appendChild(element);
            
        }
    }
    console.log(selectedState);
    if(selectedState == 1)
    {
        removeCities(selectedCity);
        for(let i = 0; i < 3; i++)
        {
            
            let option = cities["California"][i];
            let element = document.createElement("option");
            element.textContent = option;
            element.value = option;
            selectedCity.appendChild(element);
        }
    }
    if(selectedState == 2)
    {
        removeCities(selectedCity);
        for(let i = 0; i < 3; i++)
        {
            
            let option = cities["Texas"][i];
            let element = document.createElement("option");
            element.textContent = option;
            element.value = option;
            selectedCity.appendChild(element);
        }
    }

} 

function showNeighborhoods() {
    var selectedCity = document.getElementById("cities").value;
    var selectedNeighborhood = document.getElementById("neighborhoods");
    var formAppear = document.getElementById("neighborhoodForm");
    formAppear.style.display = "block";
    console.log(selectedCity);
    
    if(selectedCity == "New York City"){
        removeNeighborhoods(selectedNeighborhood);
        for(let i = 0; i < 3; i++)
        {
            
            let option = neighborhoods["New York City"][i];
                let element = document.createElement("option");
                element.textContent = option;
                element.value = option;
                selectedNeighborhood.appendChild(element);
        }

    }

    if(selectedCity == "Albany"){
        removeNeighborhoods(selectedNeighborhood);
        for(let i = 0; i < 3; i++)
        {
            
            let option = neighborhoods["Albany"][i];
                let element = document.createElement("option");
                element.textContent = option;
                element.value = option;
                selectedNeighborhood.appendChild(element);
        }
    }

    if(selectedCity == "Buffalo"){
        removeNeighborhoods(selectedNeighborhood);
        for(let i = 0; i < 3; i++)
        {
            
            let option = neighborhoods["Buffalo"][i];
                let element = document.createElement("option");
                element.textContent = option;
                element.value = option;
                selectedNeighborhood.appendChild(element);
        }
    }

    if(selectedCity == "Los Angeles"){
        removeNeighborhoods(selectedNeighborhood);
        for(let i = 0; i < 3; i++)
        {
            
            let option = neighborhoods["Los Angeles"][i];
                let element = document.createElement("option");
                element.textContent = option;
                element.value = option;
                selectedNeighborhood.appendChild(element);
        }
    }

    if(selectedCity == "San Diego"){
        removeNeighborhoods(selectedNeighborhood);
        for(let i = 0; i < 3; i++)
        {
            
            let option = neighborhoods["San Diego"][i];
                let element = document.createElement("option");
                element.textContent = option;
                element.value = option;
                selectedNeighborhood.appendChild(element);
        }
    }

    if(selectedCity == "San Francisco"){
        removeNeighborhoods(selectedNeighborhood);
        for(let i = 0; i < 3; i++)
        {
            
            let option = neighborhoods["San Francisco"][i];
                let element = document.createElement("option");
                element.textContent = option;
                element.value = option;
                selectedNeighborhood.appendChild(element);
        }
    }

    if(selectedCity == "Houston"){
        removeNeighborhoods(selectedNeighborhood);
        for(let i = 0; i < 3; i++)
        {
            
            let option = neighborhoods["Houston"][i];
                let element = document.createElement("option");
                element.textContent = option;
                element.value = option;
                selectedNeighborhood.appendChild(element);
        }
    }

    if(selectedCity == "San Antonio"){
        removeNeighborhoods(selectedNeighborhood);
        for(let i = 0; i < 3; i++)
        {
            
            let option = neighborhoods["San Antonio"][i];
                let element = document.createElement("option");
                element.textContent = option;
                element.value = option;
                selectedNeighborhood.appendChild(element);
        }
    }

    if(selectedCity == "Austin"){
        console.log(selectedNeighborhood);
        removeNeighborhoods(selectedNeighborhood);
        for(let i = 0; i < 3; i++)
        {
            
            let option = neighborhoods["Austin"][i];
                let element = document.createElement("option");
                element.textContent = option;
                element.value = option;
                selectedNeighborhood.appendChild(element);
        }
    }
}
function removeCities(selectedCity) {
    var i, L = selectedCity.options.length - 1;
    for(i = L; i >= 0; i--)
    {
        selectedCity.remove(i);
    }
}

function removeNeighborhoods(selectedNeighborhood)
{
    var i,L = selectedNeighborhood.options.length - 1;
    for(i = L; i >= 0; i--)
    {
        selectedNeighborhood.remove(i);
    }
}



