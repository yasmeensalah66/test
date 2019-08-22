var nam=document.getElementById("inp1");
var email=document.getElementById("inp2");
var message=document.getElementById("inp3");
var button=document.getElementById("btn1");
var arr;

if(localStorage.getItem("array")==null)
{
   arr=[];
}
else
   {
       
   arr=JSON.parse(localStorage.getItem("array"));
       
   }




button.onclick=function()
    {
        first();
     clearform();
    alert("done");
   
    }





function first()
{
    var x= {name:nam.value,
             email:email.value,
           message:message.value,
           }
   
    
        arr.push(x);
    localStorage.setItem("array",JSON.stringify(arr));
}


function clearform()
{
    var inputs=document.getElementsByClassName("form-control");
    
    for(i=0;i<inputs.length;i++)
        {
            inputs[i].value="";
        }
}



