var fileInput = document.getElementById("file-sel");

fileInput.onchange = function(event) {
	var fileList = event.target.files;
	var interestedFile = fileList[0];
	
	for (var interestedFile of fileList) {

		let imageReader = new FileReader();
		imageReader.readAsDataURL(interestedFile);

		imageReader.onload = function() {
			console.log(imageReader.result);
			var splitFile = imageReader.result.split("THISISUNIQUE");
			var splitFileSecond = splitFile[1].split("THISISUNIQU"); // depending on the last few characters, it could be 'UNIQUA' or 'UNIQUE'
			var encodedData = splitFileSecond[0];
			// This is where we split ways on v001 and v002
			if (atob(encodedData).substr(0,4)=="v001" || atob(encodedData).substr(0,4)=="v002") {
				//It's version 1 or 2
				var dataArray = atob(encodedData).split(";&&;");
				if (dataArray[0] == "v001") document.getElementById("feed").innerHTML += dataArray[2] + "<br><a href=\"" + dataArray[1] + "\">Source Post</a><br><br>";
				else if (dataArray[0] == "v002") document.getElementById("feed").innerHTML += dataArray[2] + "<br>Original Poster: " + dataArray[3] + "<br><a href=\"" + dataArray[1] + "\">Source Post</a><br><br>";
				else if (dataArray[0] == "v003") console.log("new image");
				else alert("This image is not recognized");
			} else {
			// The image is v003 or greater
			var dataArray = unescape(atob(encodedData)).split(";&&;");
			if (dataArray[0] == "v003") document.getElementById("feed").innerHTML += dataArray[2] + "<br><a href=\"" + dataArray[1] + "\">Source Post</a><br>OP is \"" + dataArray[3] + "\"<br><br>";
				else alert("This image is not recognized");
			}
		};
	}
}
