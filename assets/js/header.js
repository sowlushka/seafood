window.addEventListener("resize", logoResize);

logoResize();//Инициализация положения логотипа в макете после загрузки

function logoResize()
//Контроль позиции логотипа при изменении ширины элемента
{

    var maxWidth=getComputedStyle(document.documentElement).getPropertyValue('--body-container-max-width').replace(/[\D]+/g, '');
    var currLogoWidth=document.getElementById('header').offsetWidth;


    if(currLogoWidth<maxWidth)
    {
        //Стиль для положения логотипа, когда меняется ширина заголовка
        document.getElementById('logo').style="left: calc( 50vw - var(--body-container-width) / 2 + var(--header-logo-left));"
    }
    else
    {
        //Стиль для положения логотипа, когда ширина заголовка фиксирована и варьируется ширина полей
        document.getElementById('logo').style="left: calc( 50vw - var(--body-container-max-width) / 2 + var(--header-logo-left));"
    }

}