function vacationFall(city, state,region){
  this.myFavoritePlace = city;
   this.myFavoriteState = state;
  this.myFavoriteRegion = region;
  this.message=function(){
    document.getElementById("showValue").innerHTML = `My favorite place for vacation is ${city} in ${state} and I really enjoy the ${region} more than anything.` 
    
  }
  
}


let vacationSpotFall = new vacationFall ("Gatlinburg","Tennessee","Mountains");
vacationSpotFall.message();


