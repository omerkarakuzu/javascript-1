


let isim = prompt("İsminizi Giriniz");
if(isim.length == 0 ){
    window.alert("Lütfen İsim giriniz.");
    location.reload();
}

else{
    


let myName = document.querySelector("#myName")
myName.innerHTML = isim;
myName.classList.add('text1');

function showTime() {
    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    const d = new Date();
    let day = weekday[d.getDay()];
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let zaman = `${hour}:${minutes}:${seconds} ${day} ` 

    document.getElementById("myClock").innerText = zaman;
    document.getElementById("myClock").textContent = zaman ;

    setTimeout(showTime, 1000);

}
showTime();
}