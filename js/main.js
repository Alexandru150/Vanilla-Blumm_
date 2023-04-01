// $("#menu").click(function() {
//     document.getElementById("nav").style.height = "100%";
//     document.getElementById("nav").style.opacity = "1";
//     document.getElementById("nav").style.pointerEvents = "auto";
//   });

function tema_i(){
    document.getElementById("tort_center").style.display ="flex";
    document.getElementById("biscuiti_center").style.display="none";
    document.getElementById("turte-dulci").style.display ="none";
}

function tema_e(){
    document.getElementById("tort_center").style.display ="none";
    document.getElementById("biscuiti_center").style.display ="flex";
    document.getElementById("turte-dulci").style.display ="none";
}

function tema_f(){
    document.getElementById("tort_center").style.display ="none";
    document.getElementById("biscuiti_center").style.display ="none";
    document.getElementById("turte-dulci").style.display ="flex";
}
function openContact(){
    document.getElementById("container")
}

var date = {
    nume: document.getElementById("nume").value,
    email: document.getElementById("email").value,
    mesaj: document.getElementById("mesaj").value
};
emailjs.init("axZli0JrcNuhqDehP");
function send() {
    let f=document.getElementById("form");
    if (f.checkValidity() == false) {
        f.reportValidity();
        return;
    }
}
emailjs.send("service_kjvz6pm", "template_j7bf6fs", date)
.then(function(raspuns){
    alert("Mesajul a fost trimis cu Succes!")
    f.reset(x);
}, function(error){
    alert("Eroare la transmitere.Va rugam incercati mai tarziu.")
})

