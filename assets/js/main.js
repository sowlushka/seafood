/*Текстовая константа. Запрос прайса через мессенджер: Здравствуйте. Вышлите, пожалуйста, прайс на продукцию "Еда Морей".*/
const messText="%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5.%0A%D0%92%D1%8B%D1%88%D0%BB%D0%B8%D1%82%D0%B5%2C%20%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0%2C%20%D0%BF%D1%80%D0%B0%D0%B9%D1%81%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D1%8E%20%22%D0%95%D0%B4%D0%B0%20%D0%9C%D0%BE%D1%80%D0%B5%D0%B9%22";

var messForm=document.getElementById('form-callback');
messForm.innerHTML=messForm.innerHTML.replaceAll('$priceMessText', messText);
