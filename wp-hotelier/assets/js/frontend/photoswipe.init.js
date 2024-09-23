jQuery(function ($) {
	'use strict';
	/* global PhotoSwipe, PhotoSwipeUI_Default, jQuery */

	var pswp = $('.pswp')[0];

	$('.room__gallery, .room-card__gallery').each(function () {
		var _this = $(this);
		var getItems = function () {
			var items = [];

			_this.find('a.room__gallery-thumbnail').each(function () {
				var href = $(this).attr('href');
				var size = $(this).data('size').split('x');
				var title = $(this).attr('title');
				var width = size[0];
				var height = size[1];

				var item = {
					src: href,
					title: title,
					w: width,
					h: height
				};

				items.push(item);
			});

			return items;
		};

		var items = getItems();

		_this.on('click', 'a.room__gallery-thumbnail, a.room__gallery-link', function (e) {
			e.preventDefault();

			var index = $(this).data('index');
			var options = {
				index: parseInt(index, 10),
				showHideOpacity: true,
				shareEl: false,
				captionEl: true
			};

			// Initialize PhotoSwipe
			var lightBox = new PhotoSwipe(pswp, PhotoSwipeUI_Default, items, options);
			lightBox.init();
		});
	});
});
