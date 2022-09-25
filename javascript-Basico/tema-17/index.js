let marker, map;

function initMap() {
    // console.log("Inicializando mapa")
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }
    const listaposiciones=[
        {lat: -25.363,lng: 131.044},
        {lat: -22.363,lng: 130.044},
        {lat: -15.363,lng: 129.044}
    ];
   

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })
    listaposiciones.forEach(valores =>{
           
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: valores
        })


        marker = new google.maps.Marker({
            position: valores,
            map,
            title: "Posición Inicial"
        })
    });
  
    marker.setPosition(nuevaPos)

 

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })
    // Obtener la geolocalización
    // marker.setPosition({ lat, lng })
    geoPosiciona()
}

function geoPosiciona() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    } else {
        alert("Tu navegador no admite geolocalización")
    }
}

function centraMapa(position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error) {
    console.log("Se ha producido un error y lo hemos gestionado")
    console.error(error)
}