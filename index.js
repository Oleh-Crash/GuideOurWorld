$(document).ready(function(){
   
  //function to display time in warszaw
  function timeDisplay() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = " ";
   
    if(hours >= 12){
      hours = hours - 12;
      meridiem = "pm";
    }
    else{
      meridiem = "am";
    }
    if(hours === 0){
      hours = 12;
    }
    if(hours < 10){
        hours = "0" + hours;
      }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    
    var clockDiv = document.getElementById('clock');
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  }
  
  timeDisplay();
  setInterval(timeDisplay, 1000);
  

  
  //function to display time in london
  function newYorkTimeDisplay(offset) {
    var currentTime = new Date();  
    currentTime.setHours(currentTime.getHours()+offset); 
        
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = " ";
   
    if(hours >= 12){
      hours = hours - 12;
      meridiem = "pm";
    }
    else{
      meridiem = "am";
    }
    if(hours === 0){
      hours = 12;
    }
    if(hours < 10){
        hours = "0" + hours;
      }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    
    var newYorkDiv = document.getElementById('clocklondon');      
    newYorkDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem; 
  }
     
  newYorkTimeDisplay(+3);
  setInterval(newYorkTimeDisplay, 1000, -1); 
  

//function to display time in (EST) dubai
  function londonTimeDisplay(offset) {
    var currentTime = new Date();  
    currentTime.setHours(currentTime.getHours()+offset); 
        
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = " ";
   
    if(hours >= 12){
      hours = hours - 12;
      meridiem = "pm";
    }
    else{
      meridiem = "am";
    }
    if(hours === 0){
      hours = 12;
    }
    if(hours < 10){
        hours = "0" + hours;
      }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    
    var londonkDiv = document.getElementById('clockdubai');      
    londonkDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem; 
  }
     
  londonTimeDisplay(+3);
  setInterval(londonTimeDisplay, 1000, +2); 
  

 //function to display time in berlin
  function berlinDisplay() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = " ";
   
    if(hours >= 12){
      hours = hours - 12;
      meridiem = "pm";
    }
    else{
      meridiem = "am";
    }
    if(hours === 0){
      hours = 12;
    }
    if(hours < 10){
        hours = "0" + hours;
      }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    
    var berlinDiv = document.getElementById('clockberlin');
    berlinDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  }
  
  berlinDisplay();
  setInterval(berlinDisplay, 1000);

});
