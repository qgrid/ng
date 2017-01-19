import Prism from 'prismjs';

export default function () {
	return text => {
		if (text) {
			return Prism.highlight(text, Prism.languages.html);
		}
		return text;
	};
}
