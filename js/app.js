//Intento de modal

/*(function main(){
	var boxes = Array.from(document.getElementsByClassName("proImg"));
	console.log(boxes);
	var modal = document.getElementById("modalId");
	var bodyModal, close, img;

	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			
			console.log(box);
			modal.innerHTML = "";

			imgs = document.createElement("div");
			imgs = box.innerHTML;
			modal.appendChild(imgs);
			
			//modal.innerHTML = box.innerHTML;			
			
			modal.classList.remove("hide");

			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			close.appendChild(img);
			modal.appendChild(close);
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();
*/
