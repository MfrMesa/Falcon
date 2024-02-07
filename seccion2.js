function getLocalizacion(){
    navigator.geolocation.getCurrentPosition((solve)=>{
        guardarCoordenadas(solve);
    })
        
}

function guardarCoordenadas(men){
    let lat=men.coords.latitude;
    let lon = men.coords.longitude;
    apiCall(lat, lon);
}

function apiCall(lat, lon){
    let url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=700ced70a8c9741db00d107274333a57";
    fetch(url)
    .then((res)=>res.json())
    .then(res =>{
        introducirEnHtml(res)
    })
    .catch(err=>console.log(err));
}

function introducirEnHtml(data){
    console.log(data);
    let contenedor = document.getElementById("ciudadNombreContenedorWeather");
    let elemento= document.createElement("h3");
    elemento.innerText=data.name;
    contenedor.appendChild(elemento);
    elemento = document.createElement("p");
    elemento.innerText=data.weather[0].main;
    contenedor.appendChild(elemento);
    elemento = document.createElement("p");
    elemento.innerText="Precipitation: "+data.main.humidity+"%";
    contenedor.appendChild(elemento);
    

}


getLocalizacion();