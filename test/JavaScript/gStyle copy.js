/* ================================================= */

/* === WHY?
    To provide an informaive overview of Cities and Countries in Europe (expanded in future to include the World) tthrough Google Map Markers.
    Map Marker -- 'click' --> Tool-tip -- 'click' Overview Button --> Overview Modal || 'click Statistics Button' --> Graphs...


=== WHAT?
    Google Maps API - Bill Traversy @ Traversy Media: https://www.youtube.com/watch?v=Zxf1mnP5zcw and Code Institute Walkthrough by Matt Rudge.
    Added several Locations/Markers with iconImage, and Content ("tool-tips").

    OpenWeather API - Shanjah Raj: https://www.youtube.com/watch?v=GXrDEA3SIOQ&t=472s and OpenWeather API Doc: https://openweathermap.org/api/one-call-api?gclid=Cj0KCQjws_r0BRCwARIsAMxfDRiC6VCy8j0Jlfc27LsuhT9RbEdMJu3T0d9Z12oRrBRMFemuwWGUKIMaAj5DEALw_wcB
    Using Lat Lon from marker.position Object converted to String, formatted, and converted to an Array used by the fetch-then-catch Promise.

    D3 API - get city and counyr population data from a Firebase Firesore (noSQL DB) to display it in the JS Modals.

=== HOW?
    HTML: Create the navigation elements with relevant classes and id's, to be referenced by CSS and modified via JS.
    CSS: Style the Google Maps navigation elements, .gm-style... classes.
    JS: Create and call custom functions, ZoomControl, MapType Control, and FullScreenControl.
*/

// Set 2 HTML constants used by the Markers Tool-Tip: OpenWeather API, and 2 Buttons.
const weatherInfo = `<div class="weather" id="weather"></div>`;
const toolTipButtons = `<br><div class="modalActions"><button class="button" id="buttonOver">Overview</button><button class="buttton" id="buttonStats">Statistics</button></div>`;

let markersArray = [
    {
        coords: home,
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
    }/* ,
        {
            coords: { lat: 54.5973, lng: -5.9301 },
            content: `<p>Belfast, Northern Ireland: 54.5973° N, 5.9301° W</p>${weatherInfo} ${toolTipButtons}`,
            name: "Belfast, Northern Ireland",
            overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
            d3: `<div class="d3" id="d3"></div>`
        },
        {
            coords: { lat: 51.4816, lng: -3.1791 },
            content: `<p>Cardiff, Wales: 51.4816° N, 3.1791° W</p>${weatherInfo} ${toolTipButtons}`,
            name: "Cardiff, Wales",
            overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
            d3: `<div class="d3" id="d3"></div>`
        },
        {
            coords: { lat: 55.9533, lng: -3.1883 },
            content: `<p>Edinburg, Scotland: 55.9533° N, 3.1883° W</p>${weatherInfo} ${toolTipButtons}`,
            name: "Edinburgh, Scotland",
            overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
            d3: `<div class="d3" id="d3"></div>`
        },
        {
            coords: { lat: 1.3521, lng: 103.8198 },
            content: `<p>Singapore, Singapore: 1.3521° N, 103.8198° E</p>${weatherInfo} ${toolTipButtons}`,
            name: "Singapore, Singapore",
            overview: `<div class="flag" id="flag"></div><div class="overview" id="overview"></div>`,
            d3: `<div class="d3" id="d3"></div>`
        } */,
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
        content: `<p>Skopje, Republic of Macedonia: 41.9981° N, 21.4254° E</p>${weatherInfo} ${toolTipButtons}`,
        name: "Skopje, Republic of Macedonia",
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

function initMap() {
    let home = { lat: 53.274346, lng: -6.348835 }; // My home coords for centering the map, and for marking my home
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: home,
        disableDefaultUI: true,
    }); // Create a new Map and centers on My Home (Firhouse, Dublin, Ireland).

    /* To ensure the correct loading of Google Maps.
    To avoid an "Uncaught (in promise) pd {message: "initMap is not a function", name: "InvalidValueError"...}"
    This only works with the 'async' attribute ADDED, and the 'defer' attribute REMOVED from maps.googleapis.com... JS Script.
    */
    // google.maps.event.addDomListener(window, "load", initMap);

    // If browser supports geolocation, and the user accepts reading of location, then the map is centered on their current location. Otherwise My Home (Firhouse, Dublin, Ireland) is used.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let pos = { lat: position.coords.latitude, lng: position.coords.longitude };
            map.setCenter(pos);
        }, () => {
            handleLocationError(true, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map.getCenter());
    }

    function handleLocationError(browserHasGeolocation, pos) {
        map.setCenter(home);
    }


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

        // Check for separate icon for this marker (see if iconImage exists)
        if (props.iconImage) {
            // Set iconImage
            marker.setIcon(props.iconImage);
        }

        // Check for Content for "tool-tip"
        if (props.content) {
            // Set Content for each Marker
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener("click", () => {
                infoWindow.open(map, marker);

                let markerString = String(marker.position); // Convert marker.position Object to String to manipulate the lat and lon for the OpenWeather API call.
                markerString = markerString.replace(/[() ]/g, "");  // Remove whitespace and parenthesis () from markerString: (lat, lon).
                /* markerString = markerString.split(" ").join(""); // Remove whitespace in middle of markerString: lat, lon. */
                markerStringArray = markerString.split(","); // Split the String into an Array to provide the OpenWeather API call correctly formatted lat and lon.

                /* console.log(markerString, markerStringArray); */

                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${markerStringArray[0]}&lon=${markerStringArray[1]}&units=metric&appid=4788a47d724b35cf9cc4e281a1893b4c`)
                    .then(response => response.json())
                    .then(data => {
                        let tempValue = parseInt(data["main"]["temp"]);
                        let descValue = data["weather"][0]["description"];
                        let airPressure = data["main"]["pressure"];
                        let nameValue = data["name"];

                        /* console.log(tempValue, descValue, nameValue); */
                        if (document.getElementById("weather")) {
                            /* Together with CSS Styling this creates a linear background effect. */
                            document.querySelector(".gm-style-iw-d").className = "";
                            document.querySelector(".gm-style-iw-c").style = "padding: 12px";

                            let weatherID = document.getElementById("weather").id = "weather" + nameValue;
                            let buttonIDOver = document.getElementById("buttonOver").id = "buttonOver" + nameValue;
                            let buttonIDStats = document.getElementById("buttonStats").id = "buttonStats" + nameValue;
                            document.getElementById(buttonIDOver).className = "button"; // "Q & D Fix" to ensure the buttons are styled correctly.
                            document.getElementById(buttonIDStats).className = "button"; // "Q & D Fix" to ensure the buttons are styled correctly.
                            configureButtonEventHandlers(buttonIDOver, buttonIDStats);
                            //overviewButton(buttonIDOver);
                            //statisticsButton(buttonIDStats);
                            document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue + `, ` + airPressure + ` hPa`;
                        } else {
                            let weatherID = "weather" + nameValue;
                            document.querySelector(".gm-style-iw-d").className = "";
                            document.querySelector(".gm-style-iw-c").style = "padding: 12px";
                            document.getElementById(weatherID).innerHTML = tempValue + `° Celsius, ` + descValue + `, ` + airPressure + ` hPa`;
                            // Update weather data dynamically after each "Mouseover" on Map Marker.
                        }
                    })
                    .catch(err => console.log(err));

                setTimeout(() => {
                    infoWindow.close(map, marker);
                }, 3000);
            });

            /* Added a timeout to give the user enough time to notice and click on the buttons */
            /* marker.addListener("mouseout", () => {
                setTimeout(() => {
                    infoWindow.close(map, marker);
                }, 3000);
            }); */
        };


        // let fetchCountry = (country) => {
        //     fetch(`https://restcountries.eu/rest/v2/all`)
        //     // fetch(`https://restcountries.eu/rest/v2/name/${country}`) // This is a lot slower than getting all countries?! = CACHING!!
        //         .then(response => response.json())
        //         .then(data => {
        //             const findCountryObject = data.find(data => data.name === country);

        //             console.log("Fetch: ", country);
        //             let languages = "";

        //             for (let i = 0; i < findCountryObject["languages"].length; i++) {
        //                 if (i === (findCountryObject["languages"].length-1)) {
        //                     languages += `${findCountryObject["languages"][i]["name"]}.`;
        //                 } else {
        //                     languages += `${findCountryObject["languages"][i]["name"]}, `;
        //                 }
        //                 // languages += `${findCountryObject["languages"][i]["name"]} `;
        //             }

        //             let currencies = "";

        //             for (let i = 0; i < findCountryObject["currencies"].length; i++) {
        //                 if (i === (findCountryObject["currencies"].length-1)) {
        //                     currencies += `${findCountryObject["currencies"][i]["name"]}.`;    
        //                 } else {
        //                     currencies += `${findCountryObject["currencies"][i]["name"]}, `;
        //                 }
        //                 // currencies += `${findCountryObject["currencies"][i]["name"]} `;
        //             }

        //             document.querySelector("#flag").innerHTML = `<img src="${findCountryObject["flag"]}" width="150" style="border:2px solid black"></a>`;
        //             document.querySelector("#overview").innerHTML = `<p>Native Name: "${findCountryObject["nativeName"]}" => ${findCountryObject["name"]} --> ${findCountryObject["subregion"]} --> ${findCountryObject["region"]}</p>
        //         <p>Language(s): ${languages} - Currencie(s): ${currencies} - Calling Code: +${findCountryObject["callingCodes"][0]}</p>`;
        //         }
        //         )
        //         .catch(err => console.log(err));
        // };

        // let fetchCountry = (country) => {
        //     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        //         .then(response => response.json())
        //         .then(data => {
        //             // const findCountryObject = data.find(data => data.name === country);
        //             const findCountryObject = data[0];

        //             console.log("Fetch: ", country);
        //             let languages = "";

        //             for (let i = 0; i < findCountryObject["languages"].length; i++) {
        //                 if (i === (findCountryObject["languages"].length - 1)) {
        //                     languages += `${findCountryObject["languages"][i]["name"]}.`;
        //                 } else {
        //                     languages += `${findCountryObject["languages"][i]["name"]}, `;
        //                 }
        //                 // languages += `${findCountryObject["languages"][i]["name"]} `;
        //             }

        //             let currencies = "";

        //             for (let i = 0; i < findCountryObject["currencies"].length; i++) {
        //                 if (i === (findCountryObject["currencies"].length - 1)) {
        //                     currencies += `${findCountryObject["currencies"][i]["name"]}.`;
        //                 } else {
        //                     currencies += `${findCountryObject["currencies"][i]["name"]}, `;
        //                 }
        //                 // currencies += `${findCountryObject["currencies"][i]["name"]} `;
        //             }

        //             document.querySelector("#flag").innerHTML = `<img src="${findCountryObject["flag"]}" width="150" style="border:2px solid black"></a>`;
        //             document.querySelector("#overview").innerHTML = `<p>Native Name: "${findCountryObject["nativeName"]}" => ${findCountryObject["name"]} --> ${findCountryObject["subregion"]} --> ${findCountryObject["region"]}</p>
        //         <p>Language(s): ${languages} - Currencie(s): ${currencies} - Calling Code: +${findCountryObject["callingCodes"][0]}</p>`;
        //         }
        //         )
        //         .catch(err => console.log(err));
        // };

        let findCountryObject = {};

        let displayCountry = (country) => {

            /* switch (country) {
                case "England":
                    country = "United Kingdom of Great Britain and Northern Ireland";
                    break;
                case "Czechia":
                    country = "Czech Republic";
                    break;
                case "Wales":
                    country = "...";
                    break;
                case "Scotland":
                    country = "...";
                    break;
                case "Northern Ireland":
                    country = "...";
                    break;
                default:
                    break;
            } */

            console.log("Fetch: ", country);
            let languages = "";

            for (let i = 0; i < findCountryObject["languages"].length; i++) {
                if (i === (findCountryObject["languages"].length - 1)) {
                    languages += `${findCountryObject["languages"][i]["name"]}.`;
                } else {
                    languages += `${findCountryObject["languages"][i]["name"]}, `;
                }
                // languages += `${findCountryObject["languages"][i]["name"]} `;
            }

            let currencies = "";

            for (let i = 0; i < findCountryObject["currencies"].length; i++) {
                if (i === (findCountryObject["currencies"].length - 1)) {
                    currencies += `${findCountryObject["currencies"][i]["name"]}.`;
                } else {
                    currencies += `${findCountryObject["currencies"][i]["name"]}, `;
                }
                // currencies += `${findCountryObject["currencies"][i]["name"]} `;
            }

            document.querySelector("#flag").innerHTML = `<img src="${findCountryObject["flag"]}" width="150" style="border:2px solid black"></a>`;
            document.querySelector("#overview").innerHTML = `<p>Native Name: "${findCountryObject["nativeName"]}" => ${findCountryObject["name"]} --> ${findCountryObject["subregion"]} --> ${findCountryObject["region"]}</p>
                <p>Language(s): ${languages} - Currencie(s): ${currencies} - Calling Code: +${findCountryObject["callingCodes"][0]}</p>`;
        };

        let doStuff = (message) => {
            console.log(message);
        };

        let fetchCountry = (country) => {
            console.log(Object.keys(findCountryObject).length);
            if ((Object.keys(findCountryObject).length) === 0) {
                fetch(`https://restcountries.eu/rest/v2/all`)
                    .then(data => data.json())
                    .then(data => {
                        findCountryObject = data.find(data => data.name === country);
                        console.log(findCountryObject);
                        doStuff("Fetch from fetchCountry()");
                        displayCountry(country);
                    })
            } else {
                console.log(findCountryObject);
                doStuff("Local from fetchCountry()");
                displayCountry(country);
            };
        };


        let displayStats = (country) => {

            /* switch (country) {
                case "England":
                    country = "United Kingdom of Great Britain and Northern Ireland";
                    break;
                case "Czechia":
                    country = "Czech Republic";
                    break;
                case "Wales":
                    country = "...";
                    break;
                case "Scotland":
                    country = "...";
                    break;
                case "Northern Ireland":
                    country = "...";
                    break;
                default:
                    break;
            } */

            console.log("Fetch displayStats: ", country);
            let borders = "";

            for (let i = 0; i < findCountryObject["borders"].length; i++) {
                if (i === (findCountryObject["borders"].length - 1)) {
                    borders += `${findCountryObject["borders"][i]}.`;
                } else {
                    borders += `${findCountryObject["borders"][i]}, `;
                }
                // languages += `${findCountryObject["languages"][i]["name"]} `;
            }
            document.querySelector("#d3").innerHTML = `<p>Population: "${findCountryObject["population"]}", Area: ${findCountryObject["area"]} km<sup>2</sup></p>
                <p>Bordering Countrie(s): ${borders}</p><p>Gini Coefficient: ${findCountryObject["gini"]}, this is a measurement of inequality. The lower the better (< 35).</p>`;
        };

        let fetchStats = (country) => {
            console.log(Object.keys(findCountryObject).length);
            if ((Object.keys(findCountryObject).length) === 0) {
                fetch(`https://restcountries.eu/rest/v2/all`)
                    .then(data => data.json())
                    .then(data => {
                        findCountryObject = data.find(data => data.name === country);
                        console.log(findCountryObject);
                        doStuff("Fetch from fetchStats()");
                        displayStats(country);
                    })
            } else {
                console.log(findCountryObject);
                doStuff("Local from fetchStats()");
                displayStats(country);
            };
        };

        /* === WHY?
            To allow the client/end-user to click on buttons for further details to better understand the city/town (Overview), as well as relevant statistics about the place (Statistics).
    
        === WHAT?
            D3 API - Graphs in Scalable Vector Graphics: https://github.com/d3/d3#installing
    
        === HOW?
            HTML: Create the navigation elements with relevant classes and id's, to be referenced by CSS and modified via JS.
            CSS: Style the Google Maps navigation elements, .gm-style... classes.
            JS: Create and call custom functions, ZoomControl, MapType Control, and FullScreenControl.
        */

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
                let cityArray = marker.name.split(", "); // Parse City name to fetchCountry(cityArray[1]) parameter to access Country Data.
                fetchCountry(cityArray[1]);
                // console.log("Clicked on Overview Button", buttonIDOver);
                console.log("Overview Button:  ", cityArray[1]);
            }
            buttonOverview.addEventListener("click", overviewModalHandler);

            const statisticsModalHandler = () => {
                toggleBackdrop();
                toggleModal();
                document.getElementById("modal-content").innerHTML = `<h4>Statistics: ${marker.name}</h4><div class="canvas"></div><div>${marker.d3}`;
                let cityArray = marker.name.split(", "); // Parse City name to d3Stats(cityArray[0]) parameter to access relevant Firebase Firestore Collection and Documents
                //d3Stats(cityArray[0], 200, 200, "M", "rgb(61, 148, 246)");
                d3Stats(cityArray[0], 200, 200, "M", "rgb(0, 0, 0)");
                fetchStats(cityArray[1]);
                // console.log("Clicked on Statistics Button", buttonIDStats);
            }
            buttonStats.addEventListener("click", statisticsModalHandler);
        };

        /* // Footer: About Modal
        let footerAboutIconClick = document.getElementById("fa-exclamation");

        const faAboutHandler = () => {
            toggleBackdrop();
            toggleModal();
            // document.getElementById("add-modal").style.background = "rgb(196, 224, 255)";
            document.getElementById("modal-content").innerHTML =
                `<div><image src="/assets/images/MarkerTTModal.png" height="150" align="left" style="margin: 0px 10px 0px 0px"</><p> Please hover over the Goggle Map Markers, view the information, and click on the buttons for further details.</p>
                <p>If you accepted the browser's request to gelocate you, then this is  your map centre. Othwerwise it's the centre of my Universe in Firhouse, Dublin, Ireland.</p></div>`;
        }
        footerAboutIconClick.addEventListener("click", faAboutHandler);

        // Footer: API Modal
        let footerAPIIconClick = document.getElementById("fa-file-code-o");

        const faAPIHandler = () => {
            toggleBackdrop();
            toggleModal();
            // document.getElementById("add-modal").style.background = "rgb(196, 224, 255)";
            document.getElementById("modal-content").innerHTML =
                `<div><span><i class="fa fa-file-code-o" id="fa-file-code-o"></i></span><span><a href="https://developers.google.com/maps/documentation/javascript/tutorial" target="_target">Google Maps JavaScript API Description - to create the map and markers.</a></span></div>
            <div><span><i class="fa fa-file-code-o" id="fa-file-code-o"></i></span><span><a href="https://openweathermap.org/api/one-call-api" target="_target">OpenWeather API Description - adding real-time weather information to the marker tool-tips.</a></span></div>
            <div><span><i class="fa fa-file-code-o" id="fa-file-code-o"></i></span><span><a href="https://github.com/d3/d3/blob/master/API.md" target="_target">D3 API Description - to display dynamic graphs and statistics.</a></span></div>
            <div><span><i class="fa fa-file-code-o" id="fa-file-code-o"></i></span><span><a href="https://www.emailjs.com/" target="_target">EmailJS API Description - to enjoy user feedback to improve the website.</a></span></div>
            <div><span><i class="fa fa-file-code-o" id="fa-file-code-o"></i></span><span><a href="https://firebase.google.com/" target="_target">"Built with Firebase &reg;" - to store and retrieve D3 and City data.</a></span></div>`;
        }
        footerAPIIconClick.addEventListener("click", faAPIHandler);

        // Footer: Code Snippets Modal
        let footerCodeSnippetsIconClick = document.getElementById("fa-code");

        const faCodeSnippetsHandler = () => {
            toggleBackdrop();
            toggleModal();
            // document.getElementById("add-modal").style.background = "rgb(196, 224, 255)";
            document.getElementById("modal-content").innerHTML =
                `<div><span><i class="fa fa-code" id="fa-code"></i></span><span><a href="https://codeinstitute.net/" target="_target">Google Maps API - Code Institute walkthrough by Matt Rudge.</a></span></div>
            <div><span><i class="fa fa-code" id="fa-code"></i></span><span><a href="https://youtu.be/Zxf1mnP5zcw" target="_target">Google Maps API - Bill Traversy @ Traversy Media.</a></span></div>
            <div><span><i class="fa fa-code" id="fa-code"></i></span><span><a href="https://youtu.be/GXrDEA3SIOQ" target="_target">OpenWeather API - OpenWeather API JavaScript example and walkthrough by Shanjah Raj.</a></span></div>
            <div><span><i class="fa fa-code" id="fa-code"></i></span><span><a href="https://www.udemy.com/course/build-data-uis-with-d3-firebase/" target="_target">Udemy Course on D3 & Firebase by Shaun Pelling.</a></span></div>
            <div><span><i class="fa fa-code" id="fa-code"></i></span><span><a href="https://www.udemy.com/course-dashboard-redirect/?course_id=2508942" target="_target">Udemy Course on JavaScript the Complete Guide 2020 by Maximilian Schwarzmüller.</a></span></div>`;
        }
        footerCodeSnippetsIconClick.addEventListener("click", faCodeSnippetsHandler);

        // Footer: Contact Form Modal
        let footerContactFormIconClick = document.getElementById("fa-envelope-o");

        const faContactFormHandler = () => {
            toggleBackdrop();
            toggleModal();
            // document.getElementById("add-modal").style.background = "rgb(196, 224, 255)";
            document.getElementById("modal-content").innerHTML =
                `<div class="center-form">
                <h4>Please get in touch!</h4>
                    <form onsubmit="return sendMail(this);">
                        <div><input type="text" name="name" class="form-control" id="fullname" placeholder="Name" required/><div>
                        <div><input type="text" name="emailaddress" class="form-control" id="emailaddress" placeholder="Email: name@domain.com" required/></div>
                        <span><textarea rows="3" cols="35" name="feedback" class="form-control" id="feedback" placeholder="Your comments and thoughts." required></textarea></span>
                        <div><button type="submit" value="send" class="button" id="contactsubmit">Send Feedback</button></div>
                    </form>
                </div>`;
        }
        footerContactFormIconClick.addEventListener("click", faContactFormHandler);

        // Footer: Contact Modal
        let footerContactIconClick = document.getElementById("fa-user");

        const faContactHandler = () => {
            toggleBackdrop();
            toggleModal();
            // document.getElementById("add-modal").style.background = "rgb(196, 224, 255)";
            document.getElementById("modal-content").innerHTML =
                `<p>Please hover over the Goggle Map Markers, view the information, and click on the buttons for further details.</p>
                <p>If you accepted the browser's request to gelocate you, then this is  your map centre. Othwerwise it's the centre of my Universe in Firhouse, Dublin, Ireland.</p>`;
        }
        footerContactIconClick.addEventListener("click", faContactHandler); */

        /* // Close Modal Button
        let closeButton = document.getElementById("close");

        const closeButtonHandler = () => {
            toggleModal();
            toggleBackdrop();
            document.getElementById("add-modal").style.background = "white"; // Resetting the background modal colour to white.
        }
        closeButton.addEventListener("click", closeButtonHandler); */


        document.getElementById("close").onclick = () => { closeModal() };

        const closeModal = () => {
            toggleModal();
            toggleBackdrop();
        }
    }

    /* JSON returned from OpenWeather API Call for { lat: 53.274346, lng: -6.348835 } (Firhouse, Dublin, Ireland)
    https://api.openweathermap.org/data/2.5/weather?lat=53.274346&lon=-6.348835&units=metric&appid=4788a47d724b35cf9cc4e281a1893b4c

        {
            "coord": {
                "lon": -6.35, "lat": 53.27
            },
            "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d" }],
            "base": "stations",
            "main": {
                "temp": 13.61,
                "feels_like": 9.16,
                "temp_min": 12.78,
                "temp_max": 14,
                "pressure": 1020,
                "humidity": 54
            },
            "visibility": 10000, "wind": {
                "speed": 4.6,
                "deg": 80
            },
            "clouds": {
                "all": 13
            }, "dt": 1587489390, "sys": {
                "type": 1,
                "id": 1568,
                "country": "IE",
                "sunrise": 1587445893,
                "sunset": 1587497767
            },
            "timezone": 3600,
            "id": 3315276,
            "name": "Firhouse",
            "cod": 200
        }
    */

    // Calling Google Maps Navigational Controls for customisation of controls in Prod: mapControl.js, Dev/Test: gMaps.js
    initZoomControl(map);
    initMapTypeControl(map);
    initFullscreenControl(map);
}