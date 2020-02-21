    cx = 0;
    cy = 0;
    cz = 0;
  	$("#adults-numb-capetown").val("0");
  	$("#children-numb-capetown").val("0");
  	$("#kids-numb-capetown").val("0");
    $("#passengers-total-capetown").val(" Adults: "+cx+" children: "+cy+" Kids: "+cz); 
    cpr = (cx*0)+(cy*0)+(cz*0);
    $("#price-capetown").val("Total Price:"+"€"+cpr); 
  
    document.querySelector('.capetown-totalprice').innerHTML = "Total: "+"€"+cpr;  //end of tour passengers
