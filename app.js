//UI elements
let reference_text = document.getElementById("text1").value;

     check_string =  document.getElementById("text2").value,

    output_para = document.getElementById("para_result");



 

//Event listeners

document.getElementById('text-input').addEventListener('submit',compareStrings);

function compareStrings(e){
    

result_div=document.getElementsByClassName('para');
if(reference_text===check_string)
{
    console.log(typeof result_div);
    result_div.innerHTML="<p>yayyyy</p>";
}


e.preventDefault();
}