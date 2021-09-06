let header_content = `
<ul class="header">
    <li style="padding:0px;float:left;"><a href="index.html"><img style="height:100px;margin:10px;" src="res/logo.svg"></a></li>
    <li class="header"><div style="height:120px;width:120px;display:table-cell;vertical-align:middle;text-align:center;"><img id="show-menu" style="height:42px;transition:0.5s;" src="res/menu.svg"></div></li>
</ul>
<div id="dropdown-menu" style="opacity:0;visibility:hidden;">
    <img id="close-menu" height=42px style="display:inline-block;top:5px;float:right;" src="res/close-button.svg">
    <div style="display:block;margin-right:45px;">
        <center>
            <div class="dropdown-entry"><a href="decode.html"><img style="padding:15px;height:48px;display:block;" src="res/menu-options/decode.svg"></a></div>
            <div class="dropdown-entry"><a href="help.html"><img style="padding:10px;padding-bottom:5px;height:63px;display:block;" src="res/menu-options/help.svg"></a></div>
            <div class="dropdown-entry"><a href="about.html"><img style="padding:15px;height:48px;display:block;" src="res/menu-options/about.svg"></a></div>
            <div class="dropdown-entry"><a href="contribute.html"><img style="padding:15px;height:48px;display:block;" src="res/menu-options/contribute.svg"></a></div>
            <div class="dropdown-entry"><a href="download.html"><img style="padding:15px;height:48px;display:block;" src="res/menu-options/download.svg"></a></div>
            <div id="copyright-div" style="bottom:0px;font-size:12px;">
                Copyright &copy; 2021 JakeGuy11
            </div>
        </center>
    </div>
</div>
`;

let footer_content = `
<div id="copyright-div" style="bottom:0px;font-size:12px;">
    Copyright &copy; 2021 JakeGuy11
</div>
`;

document.body.innerHTML = header_content + document.body.innerHTML;

document.getElementById("show-menu").addEventListener("click", function() {
    document.getElementById("dropdown-menu").style.opacity = "1";
    document.getElementById("dropdown-menu").style.visibility = "visible";
    document.getElementById("show-menu").style.transform = "rotate(90deg)";
});

document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("dropdown-menu").style.opacity = "0";
    document.getElementById("dropdown-menu").style.visibility = "hidden";
    document.getElementById("show-menu").style.transform = "rotate(0deg)";
});

