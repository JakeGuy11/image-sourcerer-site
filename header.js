let content = `
<ul>
    <li style="padding:0px;float:left;"><a href="index.html"><img style="height:100px;margin:10px;" src="res/logo.svg"></a></li>
    <li><a class="nav-entry" href="download.html"><img height=32px src="res/menu-options/download.svg"></a></li>
    <li><a class="nav-entry" href="contribute.html"><img height=32px src="res/menu-options/contribute.svg"></a></li>
    <li><a class="nav-entry" href="about.html"><img height=32px src="res/menu-options/about.svg"></a></li>
    <li><a class="nav-entry" href="help.html"><img height=42px style="margin-top:10px;" src="res/menu-options/help.svg"></a></li>
    <li><a class="nav-entry" href="decode.html"><img height=32px src="res/menu-options/decode.svg"></a></li>
</ul>
`;
document.body.innerHTML = content + document.body.innerHTML;
