function showDescription() {
    var element = document.getElementById("description-image");
    element.classList.add("show")
}

function hideImageDescription() {
    var element = document.getElementById("description-image");
    element.classList.remove("show")
}

function addDescription() {
    var element = document.getElementById("description-text");
    element.classList.add("show")
}

function hideDescription() {
    var element = document.getElementById("description-text");
    element.classList.remove("show")
}

function myMap() {
    const pnj = { lat: -6.371764, lng: 106.823781 }

    var map = new google.maps.Map(
        document.getElementById("googleMap"),
        {
            zoom: 10,
            center: pnj,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false,
            fullscreenControl: false,
        }
    );

    const marker = new google.maps.Marker({
        position: pnj,
        map: map, 
        animation:google.maps.Animation.BOUNCE,
        title: "Here",
    })

    marker.addListener("click", () => {
        showDescription();
    });

    marker.setMap(map);
}