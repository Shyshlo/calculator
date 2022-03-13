function insert (num) {
    document.form.textview.value = document.form.textview.value + num;
    //Таким кодом мы выбираем тег input и внуть записываем значение..
}
//Далее нужно прописать 3 ф-ции: очистка - делаем пустую строку; удаление и равенство

function clean () {
    document.form.textview.value ='';
    //вызов этой ф-ции добавим в HTML onclick
}

function back() {
    //добавляем переменную, в к-й есть все данные поля
    //Берем переменную и от нее получаем подстроку(от первого до последнего символа)
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
    
    // в итоге кнопка назад удалет по одному символу
    //onclick пишем в HTML
}

//И последнее прописываем ф-цию для кнопки = к=я будет считать результат

function equal () {
    var exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
        //eval ф-ция приимает на себя строку и высчитывает рез-т
    }
}