let content = `
<ul>
    <li style="padding:0px;float:left;"><img style="height:100px;margin:10px;" src="res/logo.svg"></li>
    <li><a class="nav-entry" href="https://www.google.com/"><img height=32px src="res/menu-options/download.svg"></a></li>
    <li><a class="nav-entry" href="https://www.google.com/"><img height=32px src="res/menu-options/contribute.svg"></a></li>
    <li><a class="nav-entry" href="https://www.google.com/"><img height=32px src="res/menu-options/about.svg"></a></li>
    <li><a class="nav-entry" href="https://www.google.com/"><img height=42px style="margin-top:10px;" src="res/menu-options/help.svg"></a></li>
    <li><a class="nav-entry" href="https://www.google.com/"><img height=32px src="res/menu-options/decode.svg"></a></li>
</ul>
`;
document.body.innerHTML = content + document.body.innerHTML;
