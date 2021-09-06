// Redirect the user if they're on a bad device
let small_screen = ((window.innerWidth / window.innerHeight) < 1.2);
let mobile_device = /\b(BlackBerry|webOS|IEMobile|Windows Phone|Android|iPod|iPad|iPhone)\b/i.test(navigator.userAgent);
if (small_screen || mobile_device) window.location = "mobile/index.html";

let header_content = `
<ul class="header">
    <li style="padding:0px;float:left;"><a href="index.html"><img style="height:100px;margin:10px;" src="res/logo.svg"></a></li>
    <li class="header"><a class="nav-entry" href="download.html"><img height=32px src="res/menu-options/download.svg"></a></li>
    <li class="header"><a class="nav-entry" href="contribute.html"><img height=32px src="res/menu-options/contribute.svg"></a></li>
    <li class="header"><a class="nav-entry" href="about.html"><img height=32px src="res/menu-options/about.svg"></a></li>
    <li class="header"><a class="nav-entry" href="help.html"><img height=42px style="margin-top:10px;" src="res/menu-options/help.svg"></a></li>
    <li class="header"><a class="nav-entry" href="decode.html"><img height=32px src="res/menu-options/decode.svg"></a></li>
</ul>
`;

let footer_content = `
<div class="footer-div">
    <div style="display:table-cell;vertical-align:middle;text-align:center;">
        <ul class="footer">
            <li class="footer"> </li>
            <li class="footer"> </li>
            <li class="footer"> </li>
            <li class="footer"> </li>
            <li class="footer">Copyright &copy; 2021 JakeGuy11</li>
            <li class="footer"><a href="https://github.com/JakeGuy11/image-sourcerer/blob/main/LICENSE">View License</a></li>
            <li class="footer"> </li>
        </ul>
    </div>
    <div style="white-space:no-wrap;display:table-cell;width:1%;">
        <img style="height:50px;margin:15px;" src="res/icon.svg">
    </div>
    <div style="display:table-cell;vertical-align:middle;text-align:center;">
        <ul class="footer" style="marin-top:5px;">
            <li class="footer"> </li>
            <li class="footer"><a href="https://github.com/JakeGuy11/image-sourcerer">Extension Code</a></li>
            <li class="footer"><a href="https://github.com/JakeGuy11/image-sourcerer-site">Site Code</a></li>
            <li class="footer"><a href="https://github.com/JakeGuy11/image-sourcerer-proxy">Proxy Code</a></li>
            <li class="footer"> </li>
            <li class="footer"> </li>
            <li class="footer"> </li>
            <li class="footer"> </li>
            <li class="footer"> </li>
            <li class="footer"> </li>
        </ul>
    </div>
</div>
`;

document.body.innerHTML = header_content + document.body.innerHTML + footer_content;
