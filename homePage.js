let user_id=sessionStorage.getItem("user");
let name1=document.querySelector(".name");
fetch(`https://66ea7db455ad32cda47915a6.mockapi.io/exam/users/${user_id}`, {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(user => {
   
      name1.append(user.name);
     
  
    // Do something with the list of tasks
  }).catch(error => {
    // handle error
  });

 function weather(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=4b92b88c8c1537c168c460771516e132", {
        // method: 'GET',
        // headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) { 

            return res.json();
          
        }
        // handle error
      }).then(resp => {
       
          document.querySelector('h1').append(resp.weather[0].main );
         
      
        // Do something with the list of tasks
      }).catch(error => {
        console.log(error);
        // handle error
      });
    
  }
  weather();

  function getAdhan(){
    fetch(" https://aladhan.com/prayer-times-api#london", {
        // method: 'GET',
        // headers: {'content-type':'application/json'},
      }).then(res => {
        if (res.ok) { 

            return res.json();
          
        }
        // handle error
      }).then(resp => {
       
          console.log(resp)
         
      
        // Do something with the list of tasks
      }).catch(error => {
        console.log(error);
        // handle error
      });
   
  }
  getAdhan();