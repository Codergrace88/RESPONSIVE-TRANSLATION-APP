const selectTag = document.querySelectorAll('select')
const Btn = document.querySelector('button')
const From = document.getElementById('Translate-from')
const To = document.getElementById('Translate-to')
let P = document.getElementById('error')

function errorhandler(error){
	alert(error)
	P.innerHTML = 'An error has occured'
}



selectTag.forEach((Tag,id)=>{

	for(countryCode in countries){
 let currentlySelected;
		if(id == 0 && countryCode == 'en-GB'){
			currentlySelected = 'currentlySelected'
		}else if(id == 1 && countryCode == 'vi-VN'){
			currentlySelected = 'currentlySelected'
		}

		let option = `<option value="${countryCode}">${countries[countryCode]}</option>`
		Tag.insertAdjacentHTML('beforeend',option)
	}
	
})

Btn.addEventListener('click', () =>{
	let text = From.value
	FromTranslate = selectTag[0].value
	ToTranslate = selectTag[1].value
	let API_url =`https://api.mymemory.translated.net/get?q=${text}&langpair=${FromTranslate}|${ToTranslate}it`

	fetch(API_url).then(res=>res.json()).then(data=>{
		console.log(data)
		To.textContent = data.responseData.translatedText
	})
})