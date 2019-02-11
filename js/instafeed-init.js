var feed = new Instafeed({
  get: 'user',
  userId: '',
  accessToken: '',
  sortBy: 'most-recent',
  resolution: 'standard_resolution',
  target: 'instafeed',
  template: '<div class="insta-img"><a href="{{link}}" target="_blank"><div class="col-lg-12 col-md-12 col-sm-12" style="background:url({{image}}) no-repeat center/cover"></div></a></div>',
  after: function () {
    $('.insta-img').addClass('top-row col-lg-4 col-md-4 col-sm-12')
    var cw = $('.insta-img').width();
    $('.insta-img').css({
      'height': cw + 'px'
    });

  }
})
feed.run();
