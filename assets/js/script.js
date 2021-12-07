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

})