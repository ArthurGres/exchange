let currency = ['usd', 'eur'];
let exchange = [42, 40];


while (true) {
    let choice = prompt('1. Курс валют; 2. Обмен валюты 3. Выход');
    
    if (choice == '1') {
        exchangeRates();
    } else if (choice == '2') {
        currencyExchange();
    } else if (choice == '3') {
        userExit();
        break;
    }
}

function exchangeRates() {
    for (let i = 0; i < exchange.length; i ++) {
        alert(`${currency[i]} ${exchange[i]} грн`);
    }
}

function currencyExchange() {
    let enteredСurrency = (prompt('Выберите валюту для обмена: usd или eur').toLowerCase());
    enteredСurrency = enteredСurrency.trim();
    if (enteredСurrency == currency [0]){
        let usdСurrency = Number(prompt('Сума, которую вы желаете обменять: ' + enteredСurrency));
        if (usdСurrency >= 1){
            let usdSumm = usdСurrency/exchange[0];
            alert('Вы получите: ' + usdSumm + currency [0]);
        } else  {
           alert('Введите суму больше 0');
        }
    } else if (enteredСurrency == currency [1]) {
        let eurСurrency = Number(prompt('Сума, которую вы желаете обменять: ' + enteredСurrency));
        if (eurСurrency >= 1){
            let eurSumm = eurСurrency/exchange[1];
            alert('Вы получите: ' + eurSumm + currency [1]);
        } else  {
            alert('Введите суму больше 0');
         }
    } else {
        alert( enteredСurrency + ' Неверный ввод!!! Выберите usd или eur');
     }
}

function userExit() {
    alert('Выход');
}