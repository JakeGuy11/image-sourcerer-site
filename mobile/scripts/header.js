let header_content = `
<ul class="header">
    <li style="padding:0px;float:left;"><a href="index.html"><img style="height:100px;margin:10px;" src="res/logo.svg"></a></li>
    <li class="header"><div style="height:120px;width:120px;display:table-cell;vertical-align:middle;text-align:center;"><img id="show-menu" height=42px src="res/menu.svg"></div></li>
</ul>
<div id="dropdown-menu" style="opacity:0;visibility:hidden;">
    <img id="close-menu" height=42px style="display:inline-block;top:5px;float:right;" src="res/close-button.svg">
    <div style="display:block;margin-right:45px;">
        <center>
            <img style="padding:15px;height:32px;display:block;" src="res/menu-options/decode.svg">
            <img style="padding:15px;height:42px;display:block;" src="res/menu-options/help.svg">
            <img style="padding:15px;height:32px;display:block;" src="res/menu-options/about.svg">
            <img style="padding:15px;height:32px;display:block;" src="res/menu-options/contribute.svg">
            <img style="padding:15px;height:32px;display:block;" src="res/menu-options/download.svg">
        </center>
    </div>
</div>
`;

let footer_content = `
<div id="copyright-div" style="bottom:0px;z-index:999;background:#F5F5FFDC;font-size:12px;">
    Copyright &copy; 2021 JakeGuy11
</div>
`;

document.body.innerHTML = header_content + document.body.innerHTML + footer_content;

document.getElementById("show-menu").addEventListener("click", function() {
    document.getElementById("dropdown-menu").style.opacity = "1";
    document.getElementById("dropdown-menu").style.visibility = "visible";
});

document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("dropdown-menu").style.opacity = "0";
    document.getElementById("dropdown-menu").style.visibility = "hidden";
});

