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

})