export default function isFocus(tagName:string) {
	return document.activeElement && document.activeElement.tagName===tagName.toUpperCase()
}