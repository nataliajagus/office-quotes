

$( document ).ready(function() {


    const button = document.createElement("button");
    button.innerHTML = "Random quote";

    let quoteArea = document.querySelector("#quote");
    let quoteName = document.querySelector("#name");

    console.log(quoteArea);

    $('.quote').append(button);

    $('.main').hide();
    $('.main').slideDown(1000);
    

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

    	if (xhr.readyState === 4 && xhr.status === 200) {
    		let quotes = JSON.parse(xhr.responseText);

    		button.onclick = function() {
                var randomNumber = Math.floor(Math.random() * (quotes.length));
    			quoteArea.innerText = '„' + quotes[randomNumber].quote + '"' + ' - ' + quotes[randomNumber].name;

    		}

    	}

    }

    xhr.open('GET', 'js/quotes.json');

    xhr.send();


});