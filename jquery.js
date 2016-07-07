$(window).ready(function(){
	$('.member-content__profile p').next().hide();
});
$(function() {

	//メニューバーのスライド表示
$('header').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
	if (isInView) {
		if (visiblePartY == 'both') {
			$(this).stop().show(1500);
		}
	}
});

	// Memberページのプロフィール名前
	$('.member-content__profile p').hover(function(){
		name = $(this).text();
		// fblink = $(this + 'a').attr('href');
		var position = $($(this).next()).text();
		$(this).text(position);
	},
	function(){
		$(this).html(name);
	});

	//スマホメニュー部分のアニメーション
	  $('#language-show').click(function() {
	    $('#language-list').toggleClass('hide-list').next().slideToggle(1000);
	  });

		//index.htmlのロゴアニメーション
	$('.top-logo').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if (isInView) {
			if (visiblePartY == 'both') {
				$(this).stop().fadeIn(1200);
			}
		}
	});

	//index.htmlのタイプライターアニメ
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
