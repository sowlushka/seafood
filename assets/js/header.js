window.addEventListener("resize", logoResize);


function logoResize()
//Контроль позиции логотипа при изменении ширины элемента
{

    var maxWidth=getComputedStyle(document.documentElement).getPropertyValue('--body-container-max-width').replace(/[\D]+/g, '');
    var currLogoWidth=document.getElementById('header').offsetWidth;


    if(currLogoWidth<maxWidth)
    {
        document.getElementById('logo').style="left: calc( 50vw - var(--body-container-width) / 2 + var(--header-logo-left));"
    }
    else
    {
        document.getElementById('logo').style="left: calc( 50vw - var(--body-container-max-width) / 2 + var(--header-logo-left));"
    }





    /*
    var maxWidth=getComputedStyle(document.documentElement).getPropertyValue('--body-container-max-width').replace(/[\D]+/g, '');
    var currLogoWidth=document.getElementById('header').offsetWidth;
    if(currLogoWidth<maxWidth)
    {
        getComputedStyle(document.documentElement).setProperty('--header-width-current', currLogoWidth+'px');
    }
    else
    {
        getComputedStyle(document.documentElement).setProperty('--header-width-current', maxWidth+'px');
    }
    */
}