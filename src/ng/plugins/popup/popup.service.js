import TemplateLink from 'ng/components/template/template.link';

export default class PopupService {
	constructor() {
		Array.from(arguments).forEach((arg, index) => this[PopupService.$inject[index]] = arg);

		this.template = new TemplateLink(this.$compile, this.$templateCache);
		this.popups = {};
	}

	close(id) {
		const item = this.popups[id];
		if (item && angular.isFunction(item.close)) {
			item.close();
		}
	}

	closeAll() {
		const popups = Object.keys(this.popups);
		for (let i = 0, length = popups.length; i < length; i++) {
			this.close(popups[i]);
		}
	}

	open(settings, model) {
		if (this.popups.hasOwnProperty(settings.id)) {
			return;
		}

		const scope = this.$rootScope.$new();
		scope.model = model;
		scope.id = settings.id;

		const link = this.template.link('qgrid.plugin.popup-panel.tpl.html', model.popup().resource);
		const popup = angular.element('<div class="q-grid-popup"></div>');
		const box = angular.element(`<q-grid-core:box model="model"></q-grid-core:box>`);
		popup.append(box);
		this.$document[0].body.append(popup[0]);
		link(popup, scope, box);

		// scope.id = settings.id;
		// scope.title = settings.title;
		// scope.context = settings.context;
		//
		// scope.popup = {
		// 	id: settings.id,
		// 	resizable: settings.resizable,
		// 	collapsible: settings.collapsible,
		// 	active: function () {
		// 		return this.popups[settings.id].active;
		// 	},
		// 	expanded: function () {
		// 		return this.popups[settings.id].expanded;
		// 	},
		// 	close: settings.close
		// };
		//
		// var pos = this.position(target, settings);
		//
		// popup.attr('id', settings.id);
		// popup.css({left: pos.left + 'px', top: pos.top + 'px', zIndex: 79});
		//
		// if (settings.resizable) {
		// 	popup.addClass('resizable');
		// }
		// if (settings.collapsible) {
		// 	popup.addClass('collapsible');
		// }
		//
		// if (settings.cls) {
		// 	popup.addClass(settings.cls);
		// }
		//
		// var container = this.$document.find('body')[0];
		// if (settings.container) {
		// 	container =
		// 		container.querySelector(settings.container)
		// 		|| container;
		// }
		//
		// this.$timeout(function () {
		// 	//Added this $timeout to keep the popup from flickering the position every time,
		// 	//it enters the DOM
		// 	angular.element(container).append(popup);
		// });
	}

	expand(id) {
		const item = self.popups[id],
			popupElement = item.element[0],
			position = {
				top: popupElement.style.top,
				left: popupElement.style.left
			},
			size = {
				width: popupElement.offsetWidth,
				height: popupElement.offsetHeight
			};
		item.layout = {
			position: position,
			size: size
		};
		item.element.addClass('expanded');
		item.expanded = true;

		item.event.emit('expand');
	}

	collapse(id) {
		const item = self.popups[id],
			popupElement = item.element[0];
		item.element.removeClass('expanded');
		item.expanded = false;
		popupElement.style.width = item.layout.size.width;
		popupElement.style.height = item.layout.size.height;

		popupElement.style.top = item.layout.position.top;
		popupElement.style.left = item.layout.position.left;

		item.event.emit('collapse');
	}

	focus(id) {
		const keys = Object.keys(this.popups);
		let item;
		for (let i = 0, length = keys.length; i < length; i++) {
			item = this.popups[keys[i]];
			item.active = false;
			item.element.removeClass('active');
			item.element.removeAttr('tabindex');
		}

		const popup = this.popups[id];
		popup.active = true;
		popup.element.addClass('active');
		popup.element.attr('tabindex', 0);
		popup.element.focus();

		item.event.emit('focus');
	}

	resize(id, settings) {
		const item = this.popups[id],
			popupElement = item.element[0];
		item.element.css({
			width: Math.min(settings.width, this.$document[0].body.clientWidth - popupElement.offsetLeft) + "px",
			height: Math.min(settings.height, this.$document[0].body.clientHeight - popupElement.offsetTop) + "px"
		});
		item.event.emit('resize');
	}

	targetize(target, settings) {
		if (!target) {
			return {
				offset: function () {
					return {
						left: this.$window.innerWidth / 2,
						top: (this.$window.innerHeight - (parseInt(settings.height) || 0)) / 2
					};
				},
				height: function () {
					return 500;
				},
				width: function () {
					return 400;
				}
			};
		}
		else {
			//TODO: get rid of jQuery
			return angular.element(target);
		}
	}

	position(target, settings) {
		const dy = parseInt(settings.offsetTop) || 0;
		const dx = parseInt(settings.offsetLeft) || 0;
		const w = this.$window.innerWidth;
		const h = this.$window.innerHeight;
		const p = target.offset();
		const x = p.left;
		const y = p.top;
		const eh = parseInt(settings.height) || target.height();
		const ew = parseInt(settings.width) || target.width();
		const eh2 = eh / 2;
		const ew2 = ew / 2;
		const gtx1 = x + ew2 > w;
		const ltx0 = x - ew2 < 0;
		const gty1 = y + eh > h;
		const lty0 = y - eh < 0;
		const l = ltx0 && gtx1
			? w / 2 - ew2
			: gtx1
				? x - ew - dx
				: ltx0
					? x + dx
					: x - ew2 + dx;
		const t = lty0 && gty1
			? h / 2 - eh2
			: gty1
				? y - eh - dy
				: lty0
					? y + dy
					: y + dy;

		return {
			left: l,
			top: t
		};
	}
}


PopupService.$inject = [
	'$rootScope',
	'$window',
	'$document',
	'$templateCache',
	'$compile',
	'$timeout'
];
