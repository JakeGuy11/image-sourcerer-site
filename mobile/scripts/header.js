let header_content = `
<ul class="header">
    <li style="padding:0px;float:left;"><a href="index.html"><img style="height:100px;margin:10px;" src="res/logo.svg"></a></li>
    <li class="header"><div style="height:120px;width:120px;display:table-cell;vertical-align:middle;text-align:center;"><img id="show-menu" height=42px src="res/menu.svg"></div></li>
</ul>
<div id="dropdown-menu" style="display:none;min-width:100px;">
    <img id="close-menu" height=42px style="display:inline-block;top:5px;float:right;" src="res/close-button.svg">
</div>
`;

let footer_content = `
<div id="copyright-div" style="bottom:0px;z-index:999;background:#F5F5FFDC;font-size:12px;">
    Copyright &copy; 2021 JakeGuy11
</div>
`;

document.body.innerHTML = header_content + document.body.innerHTML + footer_content;

document.getElementById("show-menu").addEventListener("click", function() {
    document.getElementById("dropdown-menu").style.display = "block";
});

document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("dropdown-menu").style.display = "none";
});

