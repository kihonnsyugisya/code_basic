$(function () {
  var $header = $('header');

  //開閉用ボタンをクリックでクラスの切替え
  $('#js__btn').on('click', function () {
      $header.toggleClass('open');
  });

  //メニュー名以外の部分をクリックで閉じる
  $('#js__nav').on('click', function () {
      $header.removeClass('open');
  });
});

$('.animated').waypoint({
  handler(direction) {
    if (direction ==='down') {

      $(this.element).addClass('fadeInUp');

      this.destroy();
    }
  },

  // 要素の上端が画面のどの位置に来たときにhandlerを実行するかを指定。
  // 0%なら画面の一番上、100%なら画面の一番下に来たときに実行される。
  offset: '100%',
});
