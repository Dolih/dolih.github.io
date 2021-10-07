

let films = [
    { text: 'Довод', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png', inf: 'После теракта в киевском оперном театре агент ЦРУ объединяется с британской разведкой, чтобы противостоять русскому олигарху, который сколотил состояние на торговле оружием. Для этого агенты используют инверсию времени — технологию будущего, позволяющую времени идти вспять.', href:'https://www.kinopoisk.ru/film/938643/' },
    { text: 'Титаник', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png', inf: 'В первом и последнем плавании шикарного «Титаника» встречаются двое. Пассажир нижней палубы Джек выиграл билет в карты, а богатая наследница Роза отправляется в Америку, чтобы выйти замуж по расчёту. Чувства молодых людей только успевают расцвести, и даже не классовые различия создадут испытания влюблённым, а айсберг, вставший на пути считавшегося непотопляемым лайнера.', href:'https://www.kinopoisk.ru/film/938643/' },
    { text: 'Список Шиндлера', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png', inf: 'Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.', href:'https://www.kinopoisk.ru/film/938643/' },
    { text: 'Джентельмены', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png', inf: 'Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.', href:'https://www.kinopoisk.ru/film/938643/' },

];
function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random()*arr.length)
    return arr[randIndex];
}

let button_film = document.querySelector('.btn');
let card_text_film = document.querySelector('.card-text');
let card_image_film = document.querySelector('.card-image');
let card_inf_film = document.querySelector('.inf-text')
let link_film = document.querySelector('.link-film')

button_film.addEventListener('click', function (){
    let randomElement = getRandomElement(films);
    smoothly (card_text_film, 'textContent', randomElement.text);
    smoothly (card_image_film, 'src', randomElement.image);
    smoothly (card_inf_film, 'textContent', randomElement.inf);


    if (randomElement.inf.length > 250) {
        card_inf_film.style.fontSize = '18px';
    } else {
        card_inf_film.style.fontSize = '22px';
    }
});


