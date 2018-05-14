function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
var imageService = new ImageService();

function drawImage(imgInfo){
	document.getElementById('bgImg').style.backgroundImage = `url('${imgInfo.url}')`;
}

 function getImage(){
	 imageService.getImage(drawImage)
 }
 getImage()
}


