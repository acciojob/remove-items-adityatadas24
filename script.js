//your JS code here. If required.
function removeSelectedColor() {
    
      var colorSelects = document.getElementById("colorSelect");
      
    
      var selectedIndex = colorSelects.selectedIndex;
      
     
     

        colorSelects.remove(selectedIndex);
   
    }