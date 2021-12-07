$(document).ready(function () {

    // declare variables
    var inputVal;
    var today = new Date();
    var d = String(today.getDate()).padStart(2, '0');
    var dd = String(today.getDay()).padStart(1, '0');
    var m = String(today.getMonth() + 1).padStart(2, '0');

    // months and days array
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // fetch results once
    fetchResults('mumbai');

    // fetch results function
    async function fetchResults(i) {
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${i}&appid=4b9ffb45e1734ffac3f5a513794a0f0d`
        var data = await fetch(url).then(res => res.json()).catch(e => e)
        displayWeather(data)
    }

    // get image function
    function getImage(img) {
        if (img == 'Rain') return './assets/Images/images/icons/icon-14.svg'
        if (img == 'Broken Clouds') return './assets/Images/images/icons/icon-3.svg'
        if (img == 'Clouds') return './assets/Images/images/icons/icon-5.svg'
        if (img == 'Sunny') return './assets/Images/images/icons/icon-2.svg'
        if (img == 'Clear') return './assets/Images/images/icons/icon-1.svg'
        if (img == 'Mist' || img == 'Smoke' || img == 'Haze') return './assets/Images/images/icons/icon-7.svg'
        if (img == "Drizzle") return './assets/Images/images/icons/icon-13.svg'
        return './assets/Images/images/icons/icon-1.svg';
    }

    // display weather details
    function displayWeather(data) {
        if(data.name) {
            // if data found
            var content =  `
            <section class="city">
                <div class="wrapper">
                    <div class="city-head">
                        <span>${days[dd]}</span>
                        <span>${d + ' ' + months[m-1]}</span>
                    </div>
                    <div class="city-body">
                        <p>${data.name}</p>
                        <span>
                            <h2>${Math.round(data.main.temp - 274)}&deg;C</h2>
                            <figure><img src="${getImage(data.weather[0].main)}"></figure>
                        </span>
                        <ul>
                            <li><img src="./assets/Images/images/icon-umberella.png" alt="Umbrella Icon"> ${data.main.humidity}% </li>
                            <li><img src="./assets/Images/images/icon-wind.png" alt="Wind Icon"> ${Math.round(data.wind.speed * 1.6)}km/h </li>
                            <li><img src="./assets/Images/images/icon-compass.png" alt="Compass Icon"> ${data.wind.deg}&deg;</li>
                        </ul>
                    </div>
                </div>
            </section>
            `;
            
            $('.city').hide()
            $(content).insertAfter('.banner')
        } else {
            // if data not found
            var content = `
            <section class="city">
                <div class="wrapper">
                    <div class="city-head">
                        <span>${days[dd]}</span>
                        <span>${d + ' ' + months[m-1]}</span>
                    </div>
                    <div class="city-body">
                        <p class="sorry">Sorry! No such results found.</p>
                    </div>
                </div>
            </section>
            `;

            $('.city').hide()
            $(content).insertAfter('.banner')
        }
    }

    // responsive navbar functionality
    $('#menu').click((e) => {
        e.preventDefault()

        $('#menu').toggleClass('active');
        $('nav').toggleClass('showMenu');
        $('body, html').toggleClass('hidden');
    })

})