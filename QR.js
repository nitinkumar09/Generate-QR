let qrImage = document.getElementById("qrImage");
let imgBox = document.getElementById("imgBox");
let qrText = document.getElementById("qrText");

function generateQR() {

if(qrText.value === "")
{
    alert("some thing went wrong .")
   qrText.classList.add('error');
   setTimeout(()=>{
    qrText.classList.remove('error');
   },1000);
}
else{
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=40x40&data="+ qrText.value;
imgBox.classList.add("show-img");
}
}
 function RefreshPage(){
    if(confirm("are you sure , you want to Refresh page ? "))
    location.reload();
 }