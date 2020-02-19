<script>
  // Rome Tour ************************
	let rx = 0;
  let ry = 0;
  let rz = 0;
  let rp = rx+ry+rz;
  let rpr = 0;
  // Adults
	$("#Adultsbut-up-rome").on('click', ()=>{  
    // increment & set new value 
  	$("#adults-numb-rome").val( ++rx );
	});

	$("#Adultsbut-down-rome").on('click', ()=>{  	
    // decrement & set new value 
    if(rx > 0){
  		$("#adults-numb-rome").val( --rx );
    }
	});
  // 
  //Children ------------------
  $("#Childrenbut-up-rome").on('click', ()=>{  
    //  
  	$("#children-numb-rome").val( ++ry );
	});

	$("#Childrenbut-down-rome").on('click', ()=>{  	
    // 
    if(ry > 0){
  		$("#children-numb-rome").val( --ry );
    }
	});
  
  //Kids ------------------
  $("#Kidsbut-up-rome").on('click', ()=>{  
    //  
  	$("#kids-numb-rome").val( ++rz );
	});

	$("#Kidsbut-down-rome").on('click', ()=>{  	
    // 
    if(rz > 0){
  		$("#kids-numb-rome").val( --rz );
    }
	});
  
  

  $('.cobutton').click(function(){
  $("#passengers-total-rome").val(" Adults: "+rx+" children: "+ry+" Kids: "+rz); 
  });
  
  $('.cobutton').click(function(){
  rpr = (rx*85)+(ry*65)+(rz*40);
  $("#price-rome").val("Total Price:"+"€"+rpr); 
  
  document.querySelector('.rome-totalprice').innerHTML = "Total: "+"€"+rpr;

  });
  
    // number refreshing  problemfix XXXXXXXXXX
    $("#adults-numb-rome").change(function(){
  	// convert input value to number
  	const num1 = Number($(this).val());
    // if it's a number
  	if(num1){
    	// assign its value to x
    	rx = num1;
    }
  });
  $("#children-numb-rome").change(function(){
  	// convert input value to number
  	const num2 = Number($(this).val());
    // if it's a number
  	if(num2){
    	// assign its value to x
    	ry = num2;
    }
  });
  
 $("#kids-numb-rome").change(function(){
  	// convert input value to number
  	const num3 = Number($(this).val());
    // if it's a number
  	if(num3){
    	// assign its value to x
    	rz = num3;
    }
  });

  //end of tour passengers
  // on input value change
</script>

<script>
  // CapeTown Tour ************************
	let cx = 0;
  let cy = 0;
  let cz = 0;
  let cp = cx+cy+cz;
  let cpr = 0;
  // Adults
	$("#Adultsbut-up-capetown").on('click', ()=>{  
    // increment & set new value 
  	$("#adults-numb-capetown").val( ++cx );
	});

	$("#Adultsbut-down-capetown").on('click', ()=>{  	
    // decrement & set new value 
    if(cx > 0){
  		$("#adults-numb-capetown").val( --cx );
    }
	});
  // 
  //Children ------------------
  $("#Childrenbut-up-capetown").on('click', ()=>{  
    //  
  	$("#children-numb-capetown").val( ++cy );
	});

	$("#Childrenbut-down-capetown").on('click', ()=>{  	
    // 
    if(cy > 0){
  		$("#children-numb-capetown").val( --cy );
    }
	});
  
  //Kids ------------------
  $("#Kidsbut-up-capetown").on('click', ()=>{  
    //  
  	$("#kids-numb-capetown").val( ++cz );
	});

	$("#Kidsbut-down-capetown").on('click', ()=>{  	
    // 
    if(cz > 0){
  		$("#kids-numb-capetown").val( --cz );
    }
	});
  
  

  $('.cobutton').click(function(){
  $("#passengers-total-capetown").val(" Adults: "+cx+" children: "+cy+" Kids: "+cz); 
  });
  
  $('.cobutton').click(function(){
  cpr = (cx*85)+(cy*65)+(cz*40);
  $("#price-capetown").val("Total Price:"+"€"+cpr); 
  
  document.querySelector('.capetown-totalprice').innerHTML = "Total: "+"€"+cpr;

  });
  
    // number refreshing  problemfix XXXXXXXXXX
    $("#adults-numb-capetown").change(function(){
  	// convert input value to number
  	const num1 = Number($(this).val());
    // if it's a number
  	if(num1){
    	// assign its value to x
    	cx = num1;
    }
  });
  $("#children-numb-capetown").change(function(){
  	// convert input value to number
  	const num2 = Number($(this).val());
    // if it's a number
  	if(num2){
    	// assign its value to x
    	cy = num2;
    }
  });
  
 $("#kids-numb-capetown").change(function(){
  	// convert input value to number
  	const num3 = Number($(this).val());
    // if it's a number
  	if(num3){
    	// assign its value to x
    	cz = num3;
    }
  });

  //end of tour passengers
  // on input value change
</script>

<script>
  // Vatican Tour ************************
	let vx = 0;
  let vy = 0;
  let vz = 0;
  let vp = vx+vy+vz;
  let vpr = 0;
  // Adults
	$("#Adultsbut-up-vatican").on('click', ()=>{  
    // increment & set new value 
  	$("#adults-numb-vatican").val( ++vx );
	});

	$("#Adultsbut-down-vatican").on('click', ()=>{  	
    // decrement & set new value 
    if(vx > 0){
  		$("#adults-numb-vatican").val( --vx );
    }
	});
  // 
  //Children ------------------
  $("#Childrenbut-up-vatican").on('click', ()=>{  
    //  
  	$("#children-numb-vatican").val( ++vy );
	});

	$("#Childrenbut-down-vatican").on('click', ()=>{  	
    // 
    if(vy > 0){
  		$("#children-numb-vatican").val( --vy );
    }
	});
  
  //Kids ------------------
  $("#Kidsbut-up-vatican").on('click', ()=>{  
    //  
  	$("#kids-numb-vatican").val( ++vz );
	});

	$("#Kidsbut-down-vatican").on('click', ()=>{  	
    // 
    if(vz > 0){
  		$("#kids-numb-vatican").val( --vz );
    }
	});
  
  

  $('.cobutton').click(function(){
  $("#passengers-total-vatican").val(" Adults: "+vx+" children: "+vy+" Kids: "+vz); 
  });
  
  $('.cobutton').click(function(){
  vpr = (vx*85)+(vy*65)+(vz*40);
  $("#price-vatican").val("Total Price:"+"€"+vpr); 
  
  document.querySelector('.vatican-totalprice').innerHTML = "Total: "+"€"+vpr;

  });
  
    // number refreshing  problemfix XXXXXXXXXX
    $("#adults-numb-vatican").change(function(){
  	// convert input value to number
  	const num1 = Number($(this).val());
    // if it's a number
  	if(num1){
    	// assign its value to x
    	vx = num1;
    }
  });
  $("#children-numb-vatican").change(function(){
  	// convert input value to number
  	const num2 = Number($(this).val());
    // if it's a number
  	if(num2){
    	// assign its value to x
    	vy = num2;
    }
  });
  
 $("#kids-numb-vatican").change(function(){
  	// convert input value to number
  	const num3 = Number($(this).val());
    // if it's a number
  	if(num3){
    	// assign its value to x
    	vz = num3;
    }
  });

  //end of tour passengers
  // on input value change
</script>


<script>
  $('.cobutton').click(function(){
  let totalp = 1;
  totalp = (cpr)+(rpr)+(vpr);
  $("#Total-price").val("Total Price:"+"€"+totalp); 
  document.querySelector('.total-price').innerHTML = "Total: "+"€"+totalp;
  
  $("#totalnumber").val(totalp); 
 
  
  });
    
//5555555555555555555555555555555
</script>
