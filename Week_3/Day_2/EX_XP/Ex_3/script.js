let allBoldItems = "";

function getBold_items() {
    let p_get = document.getElementsByTagName('p')[0];
    for (i = 0; i < p_get.length; i++) {
        let strong_words = document.querySelectorAll('strong').textContent;
        console.log(strong_words);

        allBoldItems += i;
    }
    
    
}

getBold_items();