let content = `
<ul>
    <li style="padding:0px;float:left;"><img style="height:100px;margin:10px;" src="res/icons/logo-large.png"></li>
    <li><a class="nav-entry" href="https://www.google.com/">Item1</a></li>
    <li><a class="nav-entry" href="https://www.google.com/">Item2</a></li>
    <li><a class="nav-entry" href="https://www.google.com/">Item3</a></li>
    <li><a class="nav-entry" href="https://www.google.com/">Item4</a></li>
</ul>
`;
document.body.innerHTML = content + document.body.innerHTML;
