var x = 0;
var d = new Date();
var month = d.getMonth();

$.getJSON('https://ipapi.co/json/', function(data){
    var lat = data.latitude;
    var la = lat.toString();
    var long = data.longitude;
    var lo = long.toString();
    
    $(document).ready(function(){
        var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+la+'&lon='+lo+'&appid=b4b59dbda6d20444f03541c1bf8001fd';
        $.getJSON(api, function(data){
            var c = Math.round((data.main.temp) - 273.15);
            var f = c + 32;
            if(c<=0){
                document.querySelector('p').innerHTML = "Bundle up. It's cold out there!";
                document.body.style.backgroundColor = "#244e59";
            }else if(c>0||c<=8){
                if(month===8 || month===9 || month===10){
                    document.querySelector('p').innerHTML = "It's fall so get those scarves and sweaters out!";
                    document.body.style.backgroundColor = "#B93A32";
                }else if(month===2||month===3||month===4){
                    document.querySelector('p').innerHTML = "It's spring. Enjoy it while it lasts!";
                    document.body.style.backgroundColor = "#88B04B";
                }else{
                    document.querySelector('p').innerHTML = "It's a bit chilly so bundle up!";
                    document.body.style.backgroundColor = "#98DDDE";
                }
            }else if(c>8||c<=17){
                if(month===8 || month===9 || month===10){
                    document.querySelector('p').innerHTML = "It might be fall but it's real nice out today!";
                    document.body.style.backgroundColor = "#B93A32";
                }else if(month===2||month===3||month===4){
                    document.querySelector('p').innerHTML = "Goodbye Winter! Hello Spring.";
                    document.body.style.backgroundColor = "#88B04B";
                }else{
                    document.querySelector('p').innerHTML = "It's nice summer day. Enjoy it!";
                    document.body.style.backgroundColor = "#00cccc";
                }
            }else{
                document.querySelector('p').innerHTML = "It's a sweltering summer day."
                document.body.style.backgroundColor = "#00cccc";
            }
            
            document.querySelector('h1').innerHTML = c+"<sup>°C</sup>";
            document.getElementById("button").onclick = function() {
                if(x==0){
                    document.querySelector('h1').innerHTML = f+"<sup>°F</sup>";
                    x++;
                }else if(x>0){
                    document.querySelector('h1').innerHTML = c+"<sup>°C</sup>";
                    x--;
                }
            };  
        });
    });
    
});