let header_content = `
<ul class="header">
    <li style="padding:0px;float:left;"><a href="index.html"><img style="height:100px;margin:10px;" src="res/logo.svg"></a></li>
    <li class="header"><a class="nav-entry" href="decode.html"><img height=32px src="res/menu-options/decode.svg"></a></li>
</ul>
`;

let footer_content = `
<div id="copyright-div" style="bottom:0px;z-index:999;background:#F5F5FFDC;font-size:12px;">
    Copyright &copy; 2021 JakeGuy11
</div>
`;

document.body.innerHTML = header_content + document.body.innerHTML + footer_content;
