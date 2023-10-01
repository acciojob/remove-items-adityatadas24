//your JS code here. If required.
function removeSelectedColor() {
    
      var colorSelects = document.getElementById("colorSelect");
      
    
      var selectedIndex = colorSelects.selectedIndex;
      
     
      if (selectedIndex !== -1) {

        colorSelects.remove(selectedIndex);
      }
    }