/* Lab:exp_9_Precise Traversing in a Duct using Pitot Tube
	 File name: mainexp9.js
   Author:Prakriti Dhang
*/
var obcount;
var count = 0;
var canvasc=10; /* inclned canvas count  */
var countbtnclk; /* count measure button click */
var obsnt;

function showpanel(){
    document.getElementById('btninst9').disabled=false;
    document.getElementById('obsno').style.display="block";
    document.getElementById('yesbtn').disabled=true;
}

function exitexp(){
   window.close();
}

function noexitexp(){
    $("#yesbtn").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
}



function clckmes() {
    obcount = document.getElementById('inpob').value;
    
    count++;
    countbtnclk=count;
   
   
    if(countbtnclk==1){   
      obsnt = '1';
    //distance='0.026D'
   document.getElementById('msbtn').innerHTML="2nd point";
   document.getElementById("mpnod").value="0.026D";
     document.getElementById("velpread").value='12.672';
   document.getElementById("avgvread").value='4.757';
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 235;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, centerY-canvasc);   
    
    
    ctx.lineTo(2, 240);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
    document.getElementById('obbtn').disabled=false;
    }

    if(countbtnclk==2){   
      obsnt = '2';
        document.getElementById('msbtn').innerHTML="3rd point"
        document.getElementById("mpnod").value="0.082D";
     document.getElementById("velpread").value='13.850';
    document.getElementById("avgvread").value='4.973';
         /* Inclined manometer reading*/
         var c = document.getElementById("myCanvas");
         var ctx = c.getContext("2d");
         let centerX = 2, centerY = 235;
         ctx.strokeStyle = 'red';
         ctx.lineWidth = 5;
         ctx.beginPath();
         
         ctx.moveTo(centerX, centerY-canvasc);   
         
         
         ctx.lineTo(2, 240);
         ctx.stroke();
         document.getElementById('msbtn').disabled=true;
         document.getElementById('obbtn').disabled=false;
         }

         if(countbtnclk==3){   
            obsnt = '3';
            document.getElementById('msbtn').innerHTML="4th point"
            document.getElementById("mpnod").value="0.146D";
     document.getElementById("velpread").value='14.405';
    document.getElementById("avgvread").value='5.072';
             /* Inclined manometer reading*/
             var c = document.getElementById("myCanvas");
             var ctx = c.getContext("2d");
             let centerX = 2, centerY = 235;
             ctx.strokeStyle = 'red';
             ctx.lineWidth = 5;
             ctx.beginPath();
             
             ctx.moveTo(centerX, centerY-canvasc);   
             
             
             ctx.lineTo(2, 240);
             ctx.stroke();
             document.getElementById('msbtn').disabled=true;
             document.getElementById('obbtn').disabled=false;
             }

             if(countbtnclk==4){   
               obsnt = '4';
                document.getElementById('msbtn').innerHTML="5th point"
                document.getElementById("mpnod").value="0.226D";
                document.getElementById("velpread").value='17.215';
               document.getElementById("avgvread").value='5.545';
                 /* Inclined manometer reading*/
                 var c = document.getElementById("myCanvas");
                 var ctx = c.getContext("2d");
                 let centerX = 2, centerY = 235;
                 ctx.strokeStyle = 'red';
                 ctx.lineWidth = 5;
                 ctx.beginPath();
                 
                 ctx.moveTo(centerX, centerY-canvasc);   
                 
                 
                 ctx.lineTo(2, 240);
                 ctx.stroke();
                 document.getElementById('msbtn').disabled=true;
                 document.getElementById('obbtn').disabled=false;
                 }



                 if(countbtnclk==5){   
                  obsnt = '5';
                    document.getElementById('msbtn').innerHTML="6th point"
                    document.getElementById("mpnod").value="0.342D";
                    document.getElementById("velpread").value='14.405';
                   document.getElementById("avgvread").value='5.072';
                     /* Inclined manometer reading*/
                     var c = document.getElementById("myCanvas");
                     var ctx = c.getContext("2d");
                     let centerX = 2, centerY = 235;
                     ctx.strokeStyle = 'red';
                     ctx.lineWidth = 5;
                     ctx.beginPath();
                     
                     ctx.moveTo(centerX, centerY-canvasc);   
                     
                     
                     ctx.lineTo(2, 240);
                     ctx.stroke();
                     document.getElementById('msbtn').disabled=true;
                     document.getElementById('obbtn').disabled=false;
                     }


                     if(countbtnclk==6){   
                        obsnt = '6';
                        document.getElementById('msbtn').innerHTML="7th point"
                        document.getElementById("mpnod").value="0.428D";
                        document.getElementById("velpread").value='14.405';
                       document.getElementById("avgvread").value='5.072';
                         /* Inclined manometer reading*/
                         var c = document.getElementById("myCanvas");
                         var ctx = c.getContext("2d");
                         let centerX = 2, centerY = 235;
                         ctx.strokeStyle = 'red';
                         ctx.lineWidth = 5;
                         ctx.beginPath();
                         
                         ctx.moveTo(centerX, centerY-canvasc);   
                         
                         
                         ctx.lineTo(2, 240);
                         ctx.stroke();
                         document.getElementById('msbtn').disabled=true;
                         document.getElementById('obbtn').disabled=false;
                         }
                         if(countbtnclk==7){   
                           obsnt = '7';
                            document.getElementById('msbtn').innerHTML="8th point"
                            document.getElementById("mpnod").value="0.500D";
                            document.getElementById("velpread").value='18.463';
                           document.getElementById("avgvread").value='5.742';
                             /* Inclined manometer reading*/
                             var c = document.getElementById("myCanvas");
                             var ctx = c.getContext("2d");
                             let centerX = 2, centerY = 235;
                             ctx.strokeStyle = 'red';
                             ctx.lineWidth = 5;
                             ctx.beginPath();
                             
                             ctx.moveTo(centerX, centerY-canvasc);   
                             
                             
                             ctx.lineTo(2, 240);
                             ctx.stroke();
                             document.getElementById('msbtn').disabled=true;
                             document.getElementById('obbtn').disabled=false;
                             }
   


                             if(countbtnclk==8){   
                              obsnt = '8';
                                document.getElementById('msbtn').innerHTML="9th point"
                                document.getElementById("mpnod").value="0.774D";
                                document.getElementById("velpread").value='14.405';
                               document.getElementById("avgvread").value='5.072';
                                 /* Inclined manometer reading*/
                                 var c = document.getElementById("myCanvas");
                                 var ctx = c.getContext("2d");
                                 let centerX = 2, centerY = 235;
                                 ctx.strokeStyle = 'red';
                                 ctx.lineWidth = 5;
                                 ctx.beginPath();
                                 
                                 ctx.moveTo(centerX, centerY-canvasc);   
                                 
                                 
                                 ctx.lineTo(2, 240);
                                 ctx.stroke();
                                 document.getElementById('msbtn').disabled=true;
                                 document.getElementById('obbtn').disabled=false;
                                 }

                                 if(countbtnclk==9){   
                                    obsnt = '9';
                                    document.getElementById('msbtn').innerHTML="10th point"
                                    document.getElementById("mpnod").value="0.854D";
                                    document.getElementById("velpread").value='14.405';
                                   document.getElementById("avgvread").value='5.072';
                                     /* Inclined manometer reading*/
                                     var c = document.getElementById("myCanvas");
                                     var ctx = c.getContext("2d");
                                     let centerX = 2, centerY = 235;
                                     ctx.strokeStyle = 'red';
                                     ctx.lineWidth = 5;
                                     ctx.beginPath();
                                     
                                     ctx.moveTo(centerX, centerY-canvasc);   
                                     
                                     
                                     ctx.lineTo(2, 240);
                                     ctx.stroke();
                                     document.getElementById('msbtn').disabled=true;
                                     document.getElementById('obbtn').disabled=false;
                                     }



                                     if(countbtnclk==10){   
                                       obsnt = '10';
                                        document.getElementById('msbtn').innerHTML="11th point"
                                        document.getElementById("mpnod").value="0.919D";
                                        document.getElementById("velpread").value='14.405';
                                       document.getElementById("avgvread").value='5.072';
                                         /* Inclined manometer reading*/
                                         var c = document.getElementById("myCanvas");
                                         var ctx = c.getContext("2d");
                                         let centerX = 2, centerY = 235;
                                         ctx.strokeStyle = 'red';
                                         ctx.lineWidth = 5;
                                         ctx.beginPath();
                                         
                                         ctx.moveTo(centerX, centerY-canvasc);   
                                         
                                         
                                         ctx.lineTo(2, 240);
                                         ctx.stroke();
                                         document.getElementById('msbtn').disabled=true;
                                         document.getElementById('obbtn').disabled=false;
                                         }

                                         if(countbtnclk==11){   
                                          obsnt = '11';
                                            document.getElementById('msbtn').innerHTML="11th point"
                                            document.getElementById("mpnod").value="0.975D";
                                        document.getElementById("velpread").value='12.267';
                                       document.getElementById("avgvread").value='4.680';
                                             /* Inclined manometer reading*/
                                             var c = document.getElementById("myCanvas");
                                             var ctx = c.getContext("2d");
                                             let centerX = 2, centerY = 235;
                                             ctx.strokeStyle = 'red';
                                             ctx.lineWidth = 5;
                                             ctx.beginPath();
                                             
                                             ctx.moveTo(centerX, centerY-canvasc);   
                                             
                                             
                                             ctx.lineTo(2, 240);
                                             ctx.stroke();
                                             document.getElementById('msbtn').disabled=true;
                                             document.getElementById('obbtn').disabled=false;
                                             }

canvasc+=7;


 
}
    