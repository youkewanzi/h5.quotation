export function parseTime(time, cFormat) {
	if (arguments.length === 0) {
		return null
	}
	const format = cFormat || '{y}-{m}-{d}'
	let date
	if (typeof time === 'object') {
		date = time
	} else {
		if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
			time = parseInt(time)
		}
		if ((typeof time === 'number') && (time.toString().length === 10)) {
			time = time * 1000
		}
		date = new Date(time)
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		let value = formatObj[key]
		// Note: getDay() returns 0 on Sunday
		if (key === 'a') {
			return ['日', '一', '二', '三', '四', '五', '六'][value]
		}
		if (result.length > 0 && value < 10) {
			value = '0' + value
		}
		return value || 0
	})
	return time_str
}

export function imageUrlToBase64(imageUrl) {
	return new Promise((resolve, reject) => {
		let image = new Image()
		// 解决跨域问题
		image.crossOrigin = 'Anonymous'
		image.src = imageUrl + '?' + Math.random()
		// image.onload为异步加载
		image.onload = () => {
			var canvas = document.createElement('canvas')
			canvas.width = image.width
			canvas.height = image.height
			var context = canvas.getContext('2d')
			context.drawImage(image, 0, 0, image.width, image.height)
			var imageData = context.getImageData(0, 0, canvas.width, canvas.height)
			for(var i = 0; i < imageData.data.length; i += 4) {
				// 当该像素是透明的，则设置成白色
				if(imageData.data[i + 3] == 0) {
					imageData.data[i] = 255
					imageData.data[i + 1] = 255
					imageData.data[i + 2] = 255
					imageData.data[i + 3] = 255
				}
			}
			context.putImageData(imageData, 0, 0)
			var quality = 0.8
			// 这里的dataurl就是base64类型
			var dataURL = canvas.toDataURL('image/jpeg', quality)	// 使用toDataUrl将图片转换成jpeg的格式,不要把图片压缩成png，因为压缩成png后base64的字符串可能比不转换前的长！
			resolve(dataURL)
		}
	})
}
export function base64toFile(base, filename) {
	let arr = base.split(',')
	let mime = arr[0].match(/:(.*?);/)[1]
	let bstr = atob(arr[1])
	let n = bstr.length
	let u8arr = new Uint8Array(n)
	while (n--) {
	  u8arr[n] = bstr.charCodeAt(n)
	}
	//转换成file对象
	return new File([u8arr], filename, { type: mime })
}