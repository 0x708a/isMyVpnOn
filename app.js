const check = document.querySelector(".check");
var lat;
var long;

check.addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=36ccb235bf4c461d94b9694de585c01c`)
            .then(
                function(response) {
                    if (response.status !== 200) {
                        document.getElementById("results").innerHTML = "An Error Occured";
                        return;
                    }

                    response.json().then(function(data) {
                        console.log(data)
                        document.getElementById("results").innerHTML = data.results[0].formatted;
                    })
                }
            )
            .catch(function(err) {
                console.log(err)
            })

    } else {
        document.getElementById("results").innerHTML = "browser does not support the navigator api"
    }

})

function showPosition(position) {
    document.getElementById("results").innerHTML = position;
    lat = position.coords.latitude;
    lon = position.coords.latitude;
}