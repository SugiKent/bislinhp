
$(function() {
	windowWidth = $(window).width();
	windowHeight = $(window).height();

	// Memberページのプロフィール名前
	$('.member-content__cancel').click(function(){
		$('.member-content__detail').hide();
	});
	$('.member-content__profile > p ,.member-content__profile > img').click(function(){
		$('.member-content__detail').hide().animate({
			top: 0,
			left: 0,
			width: '0px',
			height: '0px'
		},0);
		if (windowWidth > 700 ) {
			$(this).siblings('.member-content__detail').show().animate({
				top: 0,
				left: 0,
				width: '500px',
				height: '500px'
			},300);
		} else {
			$(this).siblings('.member-content__detail').show().animate({
				top: 0,
				left: 0,
				width: windowWidth,
				height: windowHeight + 100
			},300);
		}
	});


	//スマホメニュー部分のアニメーション
	  $('#language-show').click(function() {
	    $('#language-list').toggleClass('hide-list').next().slideToslideToggle(1000);
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
