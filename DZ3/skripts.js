let userName = prompt('Привет! Как Вас зовут?', 'имя');

    function showMessage() {
        let message = (`Привет, ${userName}!`);
        alert(message);
    }
        showMessage();