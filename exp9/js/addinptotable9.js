/* Lab:exp_9_Precise Traversing in a Duct using Pitot Tube
	 File name: addinptotable9.js
   Author:Prakriti Dhang
*/

var distance, velp, avgvel, otable;
var arr=[];
var tabrowindex=0;
var nofob ;
var rows,x;
var countt=0;
var countaddt;

function addresult(){
  
  document.getElementById('obvtable9').style.display="block";
    distance = document.getElementById('mpnod').value;
     
    velp = document.getElementById('velpread').value;
      
      avgvel = document.getElementById('avgvread').value;
  
   
 otable= document.getElementById('obtable9');
arr[0]=obsnt;
 arr[1] =distance;
 arr[2] =velp;
 arr[3]=avgvel;

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 4; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
  
   
  /* clear the input area of askania and inclined; */
  document.getElementById('mpnod').value='';
  document.getElementById('velpread').value='';
  document.getElementById('avgvread').value='';
  document.getElementById('obbtn').disabled=true;
  document.getElementById('msbtn').disabled=false; 
   
    
    
  /*document.getElementById('mpnod').readOnly =true;
     
   document.getElementById('velpread').readOnly =true;
      
      document.getElementById('avgvread').readOnly =true;*/
 
      
  

    /* scroll down */
    document.body.scrollBy(0,400);
    document.documentElement.scrollBy(0,400);

    rows = otable.rows;
    for (i = 1; i < (rows.length ); i++) {
     
      x = rows[i].getElementsByTagName("td")[0];
     
      if (Number(x.innerHTML) == 11) {
          document.getElementById('graphd').style.display="block";
          document.getElementById('msbtn').disabled=true; 
          
      }
      else  {
          document.getElementById('graphd').style.display="none";
         
        }
    }
   
  
  document.getElementById('graphd').display=block;


}

    

    

       
       
       
      


