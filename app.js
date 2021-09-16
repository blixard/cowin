// curl -X GET "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021" -H "accept: application/json" -H "Accept-Language: hi_IN"
// 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=753001&date=17-09-2021'

var flag = false

fetchStatus = ()=>{
    var pinAndDate = window.location.href.split('?')[1];
    var pin = pinAndDate.split('&')[0].split('=')[1];
    var date = pinAndDate.split('&')[1].split('=')[1];
    ymd = date.split('-');
    dateProper = ymd[2] +"-" + ymd[1] + '-' + ymd[0] 

    console.log(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${dateProper}`)
    var link = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${dateProper}`
    fetch(link)
    .then(response => response.json())
    .then(data =>{
        console.log("fetched")
        console.log(data)
        data.centers.forEach(element => {
            console.log(element.sessions)
            arr = element.sessions
            element.sessions.forEach(item =>{
                console.log(item.available_capacity)
                document.getElementById("res").innerHTML = "available : " + item.available_capacity;
                if(item.available_capacity>1 && item.min_age_limit == 18 ){
                    alert("new vaccines")
                    document.getElementById("res").innerHTML = "available : " + item.available_capacity + " age:" +item.min_age_limit;
                    console.log(item.available_capacity + " " +item.min_age_limit )
                }
            })
        });

    } );
    
}


window.addEventListener('load', function () {
    // Your document is loaded.
    var fetchInterval = 10000; // 5 seconds.
  
    // Invoke the request every 5 seconds.

    setInterval(fetchStatus, fetchInterval);    
  });
