//メニューバーのスライド表示
$(function() {
$('header').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
	if (isInView) {
		if (visiblePartY == 'both') {
			$(this).stop().show(1500);
		}
	}
});
});
$(function() {
//スマホメニュー部分のアニメーション
  $('#language-show').click(function() {
    $('#language-list').toggleClass('hide-list').next().slideToggle(1000);
  });
});


//index.htmlのロゴアニメーション
$(function() {
$('.top-logo').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
	if (isInView) {
		if (visiblePartY == 'both') {
			$(this).stop().fadeIn(1200);
		}
	}
});
});

//index.htmlのタイプライターアニメ
$(function(){
    var setElm = $('.split'),
    delaySpeed = 60,
    fadeSpeed = 650;

    setText = setElm.html();

    setElm.css({visibility:'visible'}).children().addBack().contents().each(function(){
        var elmThis = $(this);
        if (this.nodeType == 3) {
            var $this = $(this);
            $this.replaceWith($this.text().replace(/(\S)/g, '<span class="textSplitLoad">$&</span>'));
        }
    });
    $(window).load(function(){
        splitLength = $('.textSplitLoad').length;
        setElm.find('.textSplitLoad').each(function(i){
            splitThis = $(this);
            splitTxt = splitThis.text();
            splitThis.delay(i*(delaySpeed)).css({display:'inline',opacity:'0'}).animate({opacity:'1'},fadeSpeed);
        });
        setTimeout(function(){
                setElm.html(setText);
        },splitLength*delaySpeed+fadeSpeed);
    });
});
