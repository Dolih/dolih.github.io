
var header = $('.menu'),
    scrollPrev = 0;

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 75 && scrolled > scrollPrev ) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});

let films = [
    { text: 'Довод', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png', inf: 'После теракта в киевском оперном театре агент ЦРУ объединяется с британской разведкой, чтобы противостоять русскому олигарху, который сколотил состояние на торговле оружием. Для этого агенты используют инверсию времени — технологию будущего, позволяющую времени идти вспять.' },
    { text: 'Титаник', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png', inf: 'В первом и последнем плавании шикарного «Титаника» встречаются двое. Пассажир нижней палубы Джек выиграл билет в карты, а богатая наследница Роза отправляется в Америку, чтобы выйти замуж по расчёту. Чувства молодых людей только успевают расцвести, и даже не классовые различия создадут испытания влюблённым, а айсберг, вставший на пути считавшегося непотопляемым лайнера.' },
    { text: 'Список Шиндлера', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png', inf: 'Фильм рассказывает реальную историю загадочного Оскара Шиндлера, члена нацистской партии, преуспевающего фабриканта, спасшего во время Второй мировой войны почти 1200 евреев.' },
    { text: 'Джентельменов', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png', inf: 'Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.' },
];

let serials = [
    { text: 'Игру Престолов', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png', inf: 'К концу подходит время благоденствия, и лето, длившееся почти десятилетие, угасает. Вокруг средоточия власти Семи королевств, Железного трона, зреет заговор, и в это непростое время король решает искать поддержки у друга юности Эддарда Старка. В мире, где все — от короля до наемника — рвутся к власти, плетут интриги и готовы вонзить нож в спину, есть место и благородству, состраданию и любви. Между тем, никто не замечает пробуждение тьмы из легенд далеко на Севере — и лишь Стена защищает живых к югу от нее.' },
    { text: 'Шерлока', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png', inf: 'События разворачиваются в наши дни. Он прошел Афганистан, остался инвалидом. По возвращении в родные края встречается с загадочным, но своеобразным гениальным человеком. Тот в поиске соседа по квартире. Лондон, 2010 год. Происходят необъяснимые убийства. Скотланд-Ярд без понятия, за что хвататься. Существует лишь один человек, который в силах разрешить проблемы и найти ответы на сложные вопросы.'  },
    { text: 'Твин Пикс', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png', inf: 'История начинается с известия о находке обнаженного тела старшеклассницы Лоры Палмер, завёрнутого в полиэтилен и выброшенного волнами на берег озера. В ходе расследования перед внимательными взглядами агента Купера, шерифа Трумана и его помощников проходят разные жители Твин Пикс. Постепенно зритель открывает для себя темную и страшную сторону жизни обитателей на первый взгляд тихого и мирного городка.' },
    { text: 'Во все тяжкие', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png', inf: 'Школьный учитель химии Уолтер Уайт узнаёт, что болен раком лёгких. Учитывая сложное финансовое состояние дел семьи, а также перспективы, Уолтер решает заняться изготовлением метамфетамина. Для этого он привлекает своего бывшего ученика Джесси Пинкмана, когда-то исключённого из школы при активном содействии Уайта. Пинкман сам занимался варкой мета, но накануне, в ходе рейда УБН, он лишился подельника и лаборатории.' },
];



function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random()*arr.length)
    return arr[randIndex];
}

let button_film = document.querySelector('.button-film');
let button_serial = document.querySelector('.button-serial');
let card_text_film = document.querySelector('.card-text-film');
let card_image_film = document.querySelector('.card-image-film');
let card_text_serial = document.querySelector('.card-text-serial');
let card_image_serial = document.querySelector('.card-image-serial');
let card_inf_film = document.querySelector('.card-inf-film')
let card_inf_serial = document.querySelector('.card-inf-serial')





button_film.addEventListener('click', function (){
    let randomElement = getRandomElement(films);
    smoothly (card_text_film, 'textContent', randomElement.text);
    smoothly (card_image_film, 'src', randomElement.image);
    smoothly (card_inf_film, 'textContent', randomElement.inf);


});

button_serial.addEventListener('click', function (){
    let randomElement = getRandomElement(serials);
    smoothly (card_text_serial, 'textContent', randomElement.text);
    smoothly (card_image_serial, 'src', randomElement.image);
    smoothly (card_inf_serial, 'textContent', randomElement.inf);

});