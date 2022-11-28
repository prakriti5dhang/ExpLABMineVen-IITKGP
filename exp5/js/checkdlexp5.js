/* Lab:exp_5_Theory of Fan Rating Test
	 File name: checkdlxp5.js
   Author:Prakriti Dhang
*/

var diad, lend;
function checkm(){
    diad= document.getElementById('diam').value;
    lend=document.getElementById('len').value;
    
 if((0.50 < diad || diad > 0.55) && (4.00 < lend || lend > 4.20)){
   document.getElementById("contldevice1").style.display="block";
   document.getElementById('calbtn').disabled=true;
  document.getElementById("obsanem").style.display="block";
  document.getElementById('diam').readOnly=true;
  document.getElementById('len').readOnly=true;
 }

else if(diad=="" && lend ==""){
    document.getElementById("checkobsn").style.display = "block";
      document.getElementById("checkobsn").classList.add("show");
      document.getElementById("alertmsg").innerHTML="You cannot keep empty. Enter diameter value between 0.50 and 0.55; length value between 4.00 and 4.20";
}

else if(diad==""){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="You cannot keep empty. Enter duct's diameter value between 0.50 and 0.55";
}

else if(lend==""){
    document.getElementById("checkobsn").style.display = "block";
      document.getElementById("checkobsn").classList.add("show");
      document.getElementById("alertmsg").innerHTML="You cannot keep empty. Enter duct's length value between 4.00 and 4.20";
}

 else if(diad<=0.50){
    document.getElementById("checkobsn").style.display = "block";
    document.getElementById("checkobsn").classList.add("show");
    document.getElementById("alertmsg").innerHTML="Enter duct's diameter should be greater than 0.50";
}

 else if(diad>=0.55){
    document.getElementById("checkobsn").style.display = "block";
      document.getElementById("checkobsn").classList.add("show");
      document.getElementById("alertmsg").innerHTML=" Enter duct's diameter should be less than 0.55";
}

else if(lend<=4.00){
    document.getElementById("checkobsn").style.display = "block";
      document.getElementById("checkobsn").classList.add("show");
      document.getElementById("alertmsg").innerHTML=" Enter duct's length should be greater than 4.00";
}

 else if(lend>=4.20){
    document.getElementById("checkobsn").style.display = "block";
      document.getElementById("checkobsn").classList.add("show");
      document.getElementById("alertmsg").innerHTML=" Enter duct's length should be less than 4.20";
}



 else{
    document.getElementById("checkobsn").style.display = "block";
 }
 }

 function alertmsg(){
    document.getElementById('obsanem').style.display='none';
    document.getElementById("checkobsn").style.display = "none";
    document.getElementById("checkobsn").classList.remove("show");
    document.getElementById('obbtn').disabled=false;
    
}