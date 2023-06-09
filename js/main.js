const nav = document.querySelector("header .nav");
const menu = document.querySelector(".menu-btn");
const typed = document.querySelector(".typed");
const typed_time = 250;
const typed_await = 1000;


let closeNav = () => {
	nav.classList.toggle('open');
	menu.classList.toggle('open');
};

function contact(form){
	let subject = form.elements[0].value;
	let body = form.elements[1].value;
	let url = "mailto:info@adwitch.in?"+"subject="+subject+"&&body="+body
	form.action = url;
	if(subject != "" && body != ""){
		window.location.href=url;
	}else{
		alert("Check the input !")
	}
	return false;
}

document.querySelector("header .nav .fader").addEventListener("click",closeNav);
menu.addEventListener('click',closeNav);

let navbtns = document.querySelectorAll("header .nav button");
for(let n in navbtns){
	if(navbtns[n].textContent != ""){
		let str = navbtns[n].textContent;
		try{
			navbtns[n].addEventListener('click',()=>{
			let elm = ".hero";
			if(str == "Services") elm = ".services";
			if(str == "Faq") elm = ".faq";
			if(str == "Contact Us") elm=".contact";
			let element = document.querySelector(elm);
			const y = element.getBoundingClientRect().top + window.scrollY - 60;
			setTimeout(1000,closeNav);
			window.scroll({
				top: y,
				behavior: 'smooth'
			});
			
		});}catch(e){
			
		}
	}
}

setTyped(["Rebuild","Upgrade","Remake","Boost"]);



function setTyped(texts){
	typed.textContent = "";
	let i = 0;
	
	let mac = () => {
		if (i >= texts.length) i = 0;
		let text = texts[i];
		for(let x = 0; x < text.length;x++){
			setTimeout(() => {
				typed.textContent += text[x];
				if(x == text.length-1){
					i++;
					setTimeout(() => {
						for(let y = 0; y < typed.textContent.length; y ++){
							setTimeout(() => {
								typed.textContent = typed.textContent.substr(0,typed.textContent.length-1);
								if(typed.textContent == ""){
									setTimeout(mac,typed_await/2);
								}
							},typed_time*y/2);
						}
					},typed_await);
				}
			},typed_time*x);
		}
	};
	setTimeout(mac, 0)	
}

