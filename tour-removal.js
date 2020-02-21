$("#removal-rome").on('click', ()=>{  

    rx = 0;
    ry = 0;
    rz = 0;
  	$("#adults-numb-rome").val("0");
  	$("#children-numb-rome").val("0");
  	$("#kids-numb-rome").val("0");
    $("#passengers-total-rome").val(" Adults: "+rx+" children: "+ry+" Kids: "+rz); 
    rpr = (rx*0)+(ry*0)+(rz*0);
    $("#price-rome").val("Total Price:"+"€"+rpr); 
  
    document.querySelector('.rome-totalprice').innerHTML = "Total: "+"€"+rpr;
  });
