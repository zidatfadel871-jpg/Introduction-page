// تشغيل الصوت تلقائياً عند فتح الصفحة
window.addEventListener("load", function() {
    var audio = document.getElementById("audio");
    audio.play().catch(function(){
        console.log("المتصفح منع التشغيل التلقائي، تأكد من السماح بالصوت.");
    });
});