export default function OptionalBinding(target:any, callback:any) {
	if(!!target || target===0 || target===false) {
		callback();
	}
	else {
		return;
	}
}