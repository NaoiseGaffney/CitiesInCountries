/*
The "Why?", "What?", and "How?" of this code is fully documented here: https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Code%20Documentation%20and%20Walkthrough.md
*/

const weatherInfo = `<div class="weather" id="weather"></div>`;
const toolTipButtons = `<br><div class="modalActions"><button class="button" id="buttonOver">Overview</button><button class="buttton" id="buttonStats">Statistics</button></div>`;

/*
The markersArray[] is an expansion of the one provided by the Code Institute mini-project walkthrough by Matt Rudge @ Code Institute.
*/
let markersArray = [
    {
        coords: { lat: 53.274346, lng: -6.348835 },
        content: `<p>Dublin, Ireland: 53.3498° N, 6.2603° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Dublin, Ireland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 51.5074, lng: 0.1278 },
        content: `<p>London, United Kingdom of Great Britain and Northern Ireland: 51.5074° N, 0.1278°</p>${weatherInfo} ${toolTipButtons}`,
        name: "London, United Kingdom of Great Britain and Northern Ireland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 59.3293, lng: 18.0686 },
        content: `<p>Stockholm, Sweden: 59.3293° N, 18.0686° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Stockholm, Sweden",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 59.9139, lng: 10.7522 },
        content: `<p>Oslo, Norway: 59.9139° N, 10.7522° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Oslo, Norway",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 55.6761, lng: 12.5683 },
        content: `<p>Copenhagen, Denmark: 55.6761° N, 12.5683° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Copenhagen, Denmark",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 60.1699, lng: 24.9384 },
        content: `<p>Helsinki, Finland: 60.1699° N, 24.9384° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Helsinki, Finland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 59.4370, lng: 24.7536 },
        content: `<p>Tallinn, Estonia: 59.4370° N, 24.7536° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Tallinn, Estonia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 56.9496, lng: 24.1052 },
        content: `<p>Riga, Latvia: 56.9496° N, 24.1052° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Riga, Latvia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 54.6872, lng: 25.2797 },
        content: `<p>Vilnius, Lithuania: 54.6872° N, 25.2797° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Vilnius, Lithuania",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 52.2297, lng: 21.0122 },
        content: `<p>Warsaw, Poland: 52.2297° N, 21.0122° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Warsaw, Poland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 50.0755, lng: 14.4378 },
        content: `<p>Prague, Czech Republic: 50.0755° N, 14.4378° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Prague, Czech Republic",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 64.1466, lng: -21.9426 },
        content: `<p>Reykjavik, Iceland: 64.1466° N, 21.9426° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Reykjavik, Iceland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 48.8566, lng: 2.3522 },
        content: `<p>Paris, France: 48.8566° N, 2.3522° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Paris, France",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 50.8503, lng: 4.3517 },
        content: `<p>Brussels, Belgium: 50.8503° N, 4.3517° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Brussels, Belgium",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 40.4168, lng: -3.7038 },
        content: `<p>Madrid, Spain: 40.4168° N, 3.7038° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Madrid, Spain",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 38.7223, lng: -9.1393 },
        content: `<p>Lisbon, Portugal: 38.7223° N, 9.1393° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Lisbon, Portugal",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.9028, lng: 12.4964 },
        content: `<p>Rome, Italy: 41.9028° N, 12.4964° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Rome, Italy",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 46.9480, lng: 7.4474 },
        content: `<p>Bern, Switzerland: 46.9480° N, 7.4474° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Bern, Switzerland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 47.1660, lng: 9.5554 },
        content: `<p>Liechtenstein, Liechtenstein: 47.1660° N, 9.5554° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Liechtenstein, Liechtenstein",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 49.8153, lng: 6.1296 },
        content: `<p>Luxembourg, Luxembourg: 49.8153° N, 6.1296° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Luxembourg, Luxembourg",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 43.9424, lng: 12.4578 },
        content: `<p>San Marino, San Marino: 43.9424° N, 12.4578° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "San Marino, San Marino",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.5063, lng: 1.5218 },
        content: `<p>Andorra la Vella, Andorra: 42.5063° N, 1.5218° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Andorra, Andorra",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 43.7384, lng: 7.4246 },
        content: `<p>Monaco, Monaco: 43.7384° N, 7.4246° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Monaco, Monaco",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.9029, lng: 12.4534 },
        content: `<p>Vatican City, Holy See: 41.9029° N, 12.4534° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Vatican City, Holy See",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 52.3667, lng: 4.8945 },
        content: `<p>Amsterdam, Netherlands: 52.3667° N, 4.8945° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Amsterdam, Netherlands",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 52.5200, lng: 13.4050 },
        content: `<p>Berlin, Germany: 52.5200° N, 13.4050° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Berlin, Germany",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 48.2082, lng: 16.3738 },
        content: `<p>Vienna, Austria: 48.2082° N, 16.3738° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Vienna, Austria",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 46.0569, lng: 14.5058 },
        content: `<p>Ljubljana, Slovenia: 46.0569° N, 14.5058° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Ljubljana, Slovenia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 45.8150, lng: 15.9819 },
        content: `<p>Zagreb, Croatia: 45.8150° N, 15.9819° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Zagreb, Croatia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 43.8563, lng: 18.4131 },
        content: `<p>Sarajevo, Bosnia and Herzegovina: 43.8563° N, 18.4131° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Sarajevo, Bosnia and Herzegovina",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.4304, lng: 19.2594 },
        content: `<p>Podgorica, Montenegro: 42.4304° N, 19.2594° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Podgorica, Montenegro",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.9981, lng: 21.4254 },
        content: `<p>Skopje, Macedonia (the former Yugoslav Republic of): 41.9981° N, 21.4254° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Skopje, Macedonia (the former Yugoslav Republic of)",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.3275, lng: 19.8187 },
        content: `<p>Tirana, Albania: 41.3275° N, 19.8187° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Tirana, Albania",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 37.9838, lng: 23.7275 },
        content: `<p>Athens, Greece: 37.9838° N, 23.7275° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Athens, Greece",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.6977, lng: 23.3219 },
        content: `<p>Sofia, Bulgaria: 42.6977° N, 23.3219° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Sofia, Bulgaria",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 44.4268, lng: 26.1025 },
        content: `<p>Bucharest, Romania: 44.4268° N, 26.1025° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Bucharest, Romania",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 39.9334, lng: 32.8597 },
        content: `<p>Ankara, Turkey: 39.9334° N, 32.8597° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Ankara, Turkey",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 47.4979, lng: 19.0402 },
        content: `<p>Budapest, Hungary: 47.4979° N, 19.0402° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Budapest, Hungary",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 48.1486, lng: 17.1077 },
        content: `<p>Bratislava, Slovakia: 48.1486° N, 17.1077° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Bratislava, Slovakia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 47.0105, lng: 28.8638 },
        content: `<p>Chisinau, Moldova (Republic of): 47.0105° N, 28.8638° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Chisinau, Moldova (Republic of)",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 50.4501, lng: 30.5234 },
        content: `<p>Kyiv, Ukraine: 50.4501° N, 30.5234° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Kyiv, Ukraine",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 55.7558, lng: 37.6173 },
        content: `<p>Moscow, Russian Federation: 55.7558° N, 37.6173° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Moscow, Russian Federation",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 35.8989, lng: 14.5146 },
        content: `<p>Valletta, Malta: 35.8989° N, 14.5146° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Valletta, Malta",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 42.6629, lng: 21.1655 },
        content: `<p>Prishtina,  Kosovo: 42.6629° N, 21.1655° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Prishtina,  Kosovo",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 51.1605, lng: 71.4704 },
        content: `<p>Nur-Sultan, Kazakhstan: 51.1605° N, 71.4704° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Nur-Sultan, Kazakhstan",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 41.7151, lng: 44.8271 },
        content: `<p>Tbilisi, Georgia: 41.7151° N, 44.8271° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Tbilisi, Georgia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 35.1856, lng: 33.3823 },
        content: `<p>Nicosia, Cyprus: 35.1856° N, 33.3823° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Nicosia, Cyprus",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 53.9006, lng: 27.5590 },
        content: `<p>Minsk, Belarus: 53.9006° N, 27.5590° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Minsk, Belarus",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 40.4093, lng: 49.8671 },
        content: `<p>Baku, Azerbaijan: 40.4093° N, 49.8671° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Baku, Azerbaijan",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 40.1872, lng: 44.5152 },
        content: `<p>Yerevan, Armenia: 40.1872° N, 44.5152° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Yerevan, Armenia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 44.7866, lng: 20.4489 },
        content: `<p>Belgrade, Serbia: 44.7866° N, 20.4489° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Belgrade, Serbia",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    },
    {
        coords: { lat: 64.1814, lng: -51.6941 },
        content: `<p>Nuuk, Greenland: 64.1814° N, 51.6941° W</p>${weatherInfo} ${toolTipButtons}`,
        name: "Nuuk, Greenland",
        overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
        d3: `<div class="d3" id="d3"></div>`
    }
];

/*
To finally resolve the occasional "Uncaught..." error common to loading Google Maps, I control the loading of the <script></script> before initMap().
Courtesy of "Prof3ssorSt3v3": https://gist.github.com/prof3ssorSt3v3/e0e07e0fd0b293d043d4ff2504fc847b.
*/
let script = document.createElement("script");
document.addEventListener("DOMContentLoaded", () => {
    document.head.appendChild(script);
    script.addEventListener("load", () => {
        initMap();
    });
});
script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDKoKXKgFfLTb9SNLk0QEq1FmnNJD3hSg`;

/*
The main Google Map initMap function, from the Google Map JavaScript API documentation.
https://developers.google.com/maps/documentation/javascript/tutorial

Based on walkthroughs of the Google Map API by Matt Rudge @ Code Institute and Bill Traversy @ Traversy Media.
*/
function initMap() {
    let home = { lat: 53.274346, lng: -6.348835 };
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: home,
        disableDefaultUI: true,
        backgroundColor: "none",
    });

    getCurrentLocation(map, home);

    for (let i = 0; i < markersArray.length; i++) {
        addMarker(markersArray[i]);
    }
    
    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            iconImage: props.iconImage,
            content: props.content,
            name: props.name,
            overview: props.overview,
            d3: props.d3
        });

        if (props.iconImage) {
            marker.setIcon(props.iconImage);
        }

        if (props.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener("click", () => {

                let markerString = String(marker.position);
                markerString = markerString.replace(/[() ]/g, "");
                markerStringArray = markerString.split(",");

                /*
                The fetch() calls the OpenWeather API for the current weather information.
                Courtesy of Shanjah Raj: https://youtu.be/GXrDEA3SIOQ
                */
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${markerStringArray[0]}&lon=${markerStringArray[1]}&units=metric&appid=4788a47d724b35cf9cc4e281a1893b4c`)
                    .then(response => response.json())
                    .then(data => {
                        let tempValue = parseInt(data.main.temp);
                        let descValue = data.weather[0].description;
                        let airPressure = data.main.pressure;
                        let nameValue = data.name;

                        document.querySelector(".gm-style-iw-d").className = "";
                        document.querySelector(".gm-style-iw-c").style = "padding: 12px";

                        if (document.getElementById("weather")) {
                            let weatherID = document.getElementById("weather").id = "weather" + nameValue;
                            let buttonIDOver = document.getElementById("buttonOver").id = "buttonOver" + nameValue;
                            let buttonIDStats = document.getElementById("buttonStats").id = "buttonStats" + nameValue;
                            document.getElementById(buttonIDOver).className = "button";
                            document.getElementById(buttonIDStats).className = "button";
                            configureButtonEventHandlers(buttonIDOver, buttonIDStats);
                            document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue + `, ` + airPressure + ` hPa`;
                        } else {
                            let weatherID = "weather" + nameValue;
                            document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue + `, ` + airPressure + ` hPa`;
                        }
                    })
                    .catch(err => console.log(err));

                setTimeout(() => {
                    infoWindow.close(map, marker);
                }, 3000);
                infoWindow.open(map, marker);
            });
        }

        let findCountryObject = {};

        let displayCountry = () => {
            let languages = "";

            for (let i = 0; i < findCountryObject.languages.length; i++) {
                if (i === (findCountryObject.languages.length - 1)) {
                    languages += `${findCountryObject.languages[i].name}.`;
                } else {
                    languages += `${findCountryObject.languages[i].name}, `;
                }
            }

            let currencies = "";

            for (let i = 0; i < findCountryObject.currencies.length; i++) {
                if (i === (findCountryObject.currencies.length - 1)) {
                    currencies += `${findCountryObject.currencies[i].name}.`;
                } else {
                    currencies += `${findCountryObject.currencies[i].name}, `;
                }
            }

            document.querySelector("#flag").innerHTML = `<img src="${findCountryObject.flag}" width="150" style="border:2px solid black"></a>`;
            document.querySelector("#overview").innerHTML = `<p>Native Name: "${findCountryObject.nativeName}" => ${findCountryObject.name} --> ${findCountryObject.subregion} --> ${findCountryObject.region}</p>
                <p>Language(s): ${languages} - Currency/Currencies: ${currencies} - Calling Code: +${findCountryObject.callingCodes[0]}</p>`;
        };

        let fetchCountry = (country, functionCall) => {
            if ((Object.keys(findCountryObject).length) === 0) {
                fetch(`https://restcountries.eu/rest/v2/all`)
                    .then(data => data.json())
                    .then(data => {
                        findCountryObject = data.find(data => data.name === country);
                        functionCall();
                    }).catch(err => console.log(err));
            } else {
                functionCall();
            }
        };


        let displayStats = () => {
            let borders = "";

            for (let i = 0; i < findCountryObject.borders.length; i++) {
                if (i === (findCountryObject.borders.length - 1)) {
                    borders += `${findCountryObject.borders[i]}.`;
                } else {
                    borders += `${findCountryObject.borders[i]}, `;
                }
            }

            if (findCountryObject.gini === null) {
                findCountryObject.gini = "None";
            }
            findCountryObject.population = findCountryObject.population.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
            findCountryObject.area = findCountryObject.area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

            document.querySelector("#d3").innerHTML = `<p>Population: "${findCountryObject.population}", Area: ${findCountryObject.area} km<sup>2</sup></p>
                <p>Bordering Country/Countries: ${borders}</p><p>Gini Coefficient: ${findCountryObject.gini}, this is a measurement of inequality. The lower the better (< 35).</p>`;
        };


        const backdrop = document.getElementById("backdrop");

        const toggleBackdrop = () => {
            backdrop.classList.toggle("visible");
        };

        const addModal = document.getElementById("add-modal");

        const toggleModal = () => {
            addModal.classList.toggle("visible");
        };

        let configureButtonEventHandlers = (buttonIDOver, buttonIDStats) => {
            let buttonOverview = document.getElementById(buttonIDOver);
            let buttonStats = document.getElementById(buttonIDStats);

            const overviewModalHandler = () => {
                toggleBackdrop();
                toggleModal();
                document.getElementById("modal-content").innerHTML = `<h4>Overview: ${marker.name}</h4> ${marker.overview}`;
                let cityArray = marker.name.split(", ");
                fetchCountry(cityArray[1], displayCountry);
            };
            buttonOverview.addEventListener("click", overviewModalHandler);

            const statisticsModalHandler = () => {
                toggleBackdrop();
                toggleModal();
                document.getElementById("modal-content").innerHTML = `<h4>Statistics: ${marker.name}</h4><div class="canvas"></div><div>${marker.d3}`;
                let cityArray = marker.name.split(", ");
                d3Stats(cityArray[0], 200, 200, "M", "rgb(0, 0, 0)");
                fetchCountry(cityArray[1], displayStats);
            };
            buttonStats.addEventListener("click", statisticsModalHandler);
        };

        document.getElementById("close").onclick = () => { closeModal(); };

        const closeModal = () => {
            toggleModal();
            toggleBackdrop();
        };
    }

    /*
    The 2 Google Map Navigational Control functions linked to the website buttons from the Google Map JavaScript API documentation.
    */
    initZoomControl(map);
    initMapTypeControl(map);
}

const getCurrentLocation = (map, home) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let pos = { lat: position.coords.latitude, lng: position.coords.longitude };
            map.setCenter(pos);
        }, () => {
            handleLocationError();
        });
    }
    else {
        handleLocationError();
    }
    const handleLocationError = () => {
        map.setCenter(home);
    };
};