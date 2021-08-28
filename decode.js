var fileInput = document.getElementById("file-sel");

fileInput.onchange = function(event) {
	var fileList = event.target.files;
	var interestedFile = fileList[0];
    let parse_arr = [];
	
	for (var interestedFile of fileList) {
        process_image(interestedFile);
	}
}

function process_image(interestedFile) {
    var injection_data = `
    <div style="margin:25px;">
        <div style="display:inline-block;width:100%;height:auto;">
            <img class="image" style="float:left;max-width:50%;max-height:250px;height:auto;width:auto;border: 3px solid black;border-radius:10px;" src="SRC_INJECTION_SITE">
            <div style="display:inline-block;width:45%;float:left;margin-left:5px;">
                <div class="info-div" style="width:100%;word-wrap:break-word;float:left;">
                    INFO_INJECTION_SITE
                </div>
            </div>
        </div>
    </div>`;

    let imageReader = new FileReader();
    imageReader.readAsDataURL(interestedFile);

    imageReader.onload = function() {
        try {
            var splitFile = imageReader.result.split("THISISUNIQUE");
            var splitFileSecond = splitFile[1].split("THISISUNIQU"); // depending on the last few characters, it could be 'UNIQUA' or 'UNIQUE'
            var encodedData = splitFileSecond[0];
        } catch (err) { alert("This image is not recognized!"); }

        // This is where we split ways on v001 and v002
        if (atob(encodedData).substr(0,4)=="v001" || atob(encodedData).substr(0,4)=="v002") {
            //It's version 1 or 2
            var data_array = atob(encodedData).split(";&&;");
            if (data_array[0] == "v001") {
                var info_str = "<br><b>Saved as:</b><br>" + data_array[2].replace("Image-Sourcerer/", "") + "<br><br><a href='" + data_array[1] + "'>Source Post</a><br><br>";
                injection_data = injection_data.replace(`INFO_INJECTION_SITE`, info_str);
                injection_data = injection_data.replace("SRC_INJECTION_SITE", imageReader.result);
                document.getElementById("feed").innerHTML += injection_data;
            } else if (data_array[0] == "v002") {
                var info_str = "<br><b>Saved as:</b><br>" + data_array[2].replace("Image-Sourcerer/", "") + "<br><br><a href='" + data_array[1] + "'>Source Post</a><br><br><b>OP is:</b> " + data_array[3] + "<br>";
                injection_data = injection_data.replace(`INFO_INJECTION_SITE`, info_str);
                injection_data = injection_data.replace("SRC_INJECTION_SITE", imageReader.result);
                document.getElementById("feed").innerHTML += injection_data;
            } else if (data_array[0] == "v003") console.log("new image");
            else alert("This image is not recognized");
        } else {
            // The image is v003 or greater
            var data_array = unescape(atob(encodedData)).split(";&&;");
            if (data_array[0] == "v003") {
                var info_str = "<br><b>Saved as:</b><br>" + data_array[2].replace("Image-Sourcerer/", "") + "<br><br><a href='" + data_array[1] + "'>Source Post</a><br><br><b>OP is:</b> " + data_array[3] + "<br>";
                injection_data = injection_data.replace("INFO_INJECTION_SITE", info_str);
                injection_data = injection_data.replace("SRC_INJECTION_SITE", imageReader.result);
                document.getElementById("feed").innerHTML += injection_data;
            } else alert("This image is not recognized");
        }
    };
}

