/*
    Below here are functions for the FILE DROPPER
*/
var fileInput = document.getElementById("file-sel");

function dropHandler(ev) {
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      if (ev.dataTransfer.items[i].kind === 'file') {
        process_image(ev.dataTransfer.items[i].getAsFile());
      }
    }
  }
}

function dragOverHandler(ev) {
    ev.preventDefault();
}

fileInput.onchange = function(event) {
	var fileList = event.target.files;
	var interestedFile = fileList[0];
    let parse_arr = [];
	
	for (var interestedFile of fileList) {
        process_image(interestedFile);
	}
}

function process_image(interestedFile) {

    let imageReader = new FileReader();
    imageReader.readAsDataURL(interestedFile);

    imageReader.onload = function() {
        b64_to_entry(imageReader.result, true);
    };
}

/*
    Below here are the functions for THE BUTTON AND URL INPUT
*/
document.getElementById("url_entry").addEventListener("keyup", function(ev) {
    if (ev.keyCode == 13) {
        ev.preventDefault();
        document.getElementById("download_url").click();
    }
});

function handle_button() {
    let url_field = document.getElementById("url_entry");
    let url = url_field.value;
    url_field.value = "";
    
    if (url != "") process_url(url);
}

function process_url(url) {
    url_to_b64(url, function(data) {
        if (!b64_to_entry(data, false)) {
            // Failed with the default url - try with no flags perhaps? (known issue with discord)
            let discord_url = url.split("?")[0].replace("cdn.discordapp.com", "media.discordapp.net");
            console.log(discord_url);
            url_to_b64(discord_url, function(data) {
                b64_to_entry(data, true);
            });
        }
    });
}

function url_to_b64(url, callback) {
    // Get the URL as base 64
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.onerror = function() { // only triggers if the request couldn't be made at all
        callback(null);
    };
    xhr.open('GET', url);
    xhr.responseType = "blob";
    xhr.send();
}

function b64_to_entry(base64_data, show_error) {
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

    try {
        var splitFile = base64_data.split("THISISUNIQUE");
        var splitFileSecond = splitFile[1].split("THISISUNIQU"); // depending on the last few characters, it could be 'UNIQUA' or 'UNIQUE'
        var encodedData = splitFileSecond[0];
    } catch (err) {
        if (show_error) alert("This image is not recognized by Image Sourcerer");
        return false;
    }

    // This is where we split ways on v001 and v002
    if (atob(encodedData).substr(0,4)=="v001" || atob(encodedData).substr(0,4)=="v002") {
        //It's version 1 or 2
        var data_array = atob(encodedData).split(";&&;");
        if (data_array[0] == "v001") {
            var info_str = "<br><b>Saved as:</b><br>" + data_array[2].replace("Image-Sourcerer/", "") + "<br><br><a target='_blank' href='" + data_array[1] + "'>Source Post</a><br><br>";
            injection_data = injection_data.replace(`INFO_INJECTION_SITE`, info_str);
            injection_data = injection_data.replace("SRC_INJECTION_SITE", base64_data);
            document.getElementById("feed").innerHTML += injection_data;
        } else if (data_array[0] == "v002") {
            var info_str = "<br><b>Saved as:</b><br>" + data_array[2].replace("Image-Sourcerer/", "") + "<br><br><a target='_blank' href='" + data_array[1] + "'>Source Post</a><br><br><b>OP is:</b> " + data_array[3] + "<br>";
            injection_data = injection_data.replace(`INFO_INJECTION_SITE`, info_str);
            injection_data = injection_data.replace("SRC_INJECTION_SITE", base64_data);
            document.getElementById("feed").innerHTML += injection_data;
        } else if (data_array[0] == "v003") console.log("new image");
        else alert("This image is not recognized by Image Sourcerer");
    } else {
        // The image is v003 or greater
        var data_array = unescape(atob(encodedData)).split(";&&;");
        if (data_array[0] == "v003") {
            var info_str = "<br><b>Saved as:</b><br>" + data_array[2].replace("Image-Sourcerer/", "") + "<br><br><a target='_blank' href='" + data_array[1] + "'>Source Post</a><br><br><b>OP is:</b> " + data_array[3] + "<br>";
            injection_data = injection_data.replace("INFO_INJECTION_SITE", info_str);
            injection_data = injection_data.replace("SRC_INJECTION_SITE", base64_data);
            document.getElementById("feed").innerHTML += injection_data;
        } else alert("This image is not recognized by Image Sourcerer");
    }
    return true;
}

