/*Скрипты, обслуживающие работу формы уведомления об обратном звноке*/
var request = new XMLHttpRequest();


function showCallbackForm() {
    /*Показываем форму на экране*/
    document.getElementById("background-modal").classList.add("background-display");
    document.getElementById("form-callback").classList.add("background-display");
    return true;
}

document.getElementById("btn-close").onclick = function () {
    /*Удаляем форму с экрана*/
    document.getElementById("background-modal").classList.remove("background-display");
    document.getElementById("form-callback").classList.remove("background-display");
    return true;
}

