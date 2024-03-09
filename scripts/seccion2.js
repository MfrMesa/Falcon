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
function desplegarContenedorWeather(){
    let $desplegable = document.getElementById("desplegableWeather");
   
    if($desplegable.style.display=="none"){
        $desplegable.style.display="block";
    }else{
        $desplegable.style.display="none";
    }
}


function apiCall(lat, lon){
    let url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=700ced70a8c9741db00d107274333a57";
    fetch(url)
    .then((res)=>{
        console.log(res);
        return res.json();
    })
    .then(res =>{
        introducirEnHtml(res)
    })
    .catch(err=>console.log(err));
}

function introducirEnHtml(data){
    console.log(data);
    let contenedor = document.getElementById("ciudadNombreContenedorWeather");
    let imagencontenedor =document.getElementById("imagenWeather");
    //Nombre Localizacion
    let elemento= document.createElement("h3");
    elemento.className="tituloNombreCiudad";
    elemento.innerText=data.name;
    contenedor.appendChild(elemento);
    //Estado de la localizacion
    elemento = document.createElement("p");
    elemento.className="estadoWeather";
    elemento.innerText=data.weather[0].main;
    //Imagen de sol o nubes
    let img = document.createElement("img");
    img.className = "imagenWeather";
    if(data.weather[0].main=="Clear"){
        img.src="img/descarga.png";

    }else{
        img.src="img/weather.6da58429.jpg";
    }
    imagencontenedor.appendChild(img);
    contenedor.appendChild(elemento);
    //Precipitaciones
    elemento = document.createElement("p");
    elemento.className="precipitacionWeather";
    elemento.innerText="Precipitation: "+data.main.humidity+"%";
    contenedor.appendChild(elemento);
    //temperaturaNormal
    contenedor= document.getElementById("tempertaturaContenedorWeather");
    elemento = document.createElement("p");
    elemento.innerText=Math.round(data.main.temp-273,15)+"º";
    elemento.className="tempWeather";
    contenedor.appendChild(elemento);
    elemento= document.createElement("p");
    elemento.className="temperaturaMinMax";
    elemento.innerText=Math.round(data.main.temp_max-273,15)+"º / "+Math.round(data.main.temp_min-273,15)+"º";
    contenedor.appendChild(elemento);
}

try{
    getLocalizacion();
}catch(error){
    console.log(error);
}


