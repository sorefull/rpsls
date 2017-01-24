// =============================================================================
// Реализуйте игру "Камень, ножницы, бумага", используя правила со страницы на Википедии. Что придется использовать: - Math.random() для получения случайного значения в пределах [0,1) (ознакомьтесь самостоятельно, используя информацию отсюда - условные выражения - функцию prompt для получения ввода пользователя - функцию alert для сообщения пользователю ответа программы
// Пользователь должен ввести данные ('камень', 'ножницы' или 'бумага') и пользовательское значение должно пройти проверку со значением, которое выбрала программа. Значение, которое выбрала программа, можно получать случайным образом. Пример можно посмотреть здесь (для запуска нужно нажать 'Run' слева вверху страницы).
// Вопросы и обсуждение по заданию приветсвуются в общем чате. Удачи :)

$(document).ready(function(){
  console.log("document loaded");
  $('.resp-img').on( "click", function() {
    $(this).effect( "shake", { times: 2, distance: 10, direction: 'up' } );

    var d_emojis = ['<i class="em em-skull"></i>', '<i class="em em-scream"></i>', '<i class="em em-sob"></i>', '<i class="em em-imp"></i>', '<i class="em em-hankey"></i>', '<i class="em em-church"></i>', '<i class="em em-bomb"></i>', '<i class="em em-boom"></i>', '<i class="em em--1"></i>', '<i class="em em-anguished"></i>'];
    var u_emojis = ['<i class="em em---1"></i>', '<i class="em em-blush"></i>', '<i class="em em-yum"></i>', '<i class="em em-wink"></i>', '<i class="em em-v"></i>', '<i class="em em-stuck_out_tongue"></i>', '<i class="em em-stuck_out_tongue_winking_eye"></i>', '<i class="em em-smirk"></i>', '<i class="em em-smile_cat"></i>', '<i class="em em-alien"></i>'];
    var rand_emoji = Math.floor(Math.random()*10);

    var arr = ['Lizard', 'Paper', 'Rock', 'Scissors', 'Spock'];
    var user = this.id;
    var server = arr[Math.floor(Math.random()*3)];
    var result;

    switch (user) {
      case 'Lizard':
        result = server == 'Spock' || server == 'Paper' ? 'You WIN: Lizard wins ' + server + u_emojis[rand_emoji] : 'You LOOZE: ' +server + ' wins Lizard ' + d_emojis[rand_emoji];
        break;
      case 'Paper':
        result = server == 'Rock' || server == 'Spock' ? 'You WIN: Paper wins ' + server + u_emojis[rand_emoji] : 'You LOOZE: ' +server + ' wins Paper ' + d_emojis[rand_emoji];
        break;
      case 'Rock':
        result = server == 'Lizard' || server == 'Scissors' ? 'You WIN: Rock wins ' + server + u_emojis[rand_emoji] : 'You LOOZE: ' +server + ' wins Rock ' + d_emojis[rand_emoji];
        break;
      case 'Scissors':
        result = server == 'Lizard' || server == 'Paper' ? 'You WIN: Scissors wins ' + server + u_emojis[rand_emoji] : 'You LOOZE: ' +server + ' wins Scissors ' + d_emojis[rand_emoji];
        break;
      case 'Spock':
        result = server == 'Rock' || server == 'Scissors' ? 'You WIN: Spock wins ' + server + u_emojis[rand_emoji] : 'You LOOZE: ' +server + ' wins Spock ' + d_emojis[rand_emoji];
        break;
      default:
        result = 'Something gone wrong!';
    };
    if (server == user ) {
      result = 'Raw!';
    }
    $('.result').html(result);
  });
});
