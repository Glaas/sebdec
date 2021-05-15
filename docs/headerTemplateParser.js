const tempolate = `
<header id="header">
<a class="logo" href="index.html">Home</a>
<a class="logo" href="wip.html">Portfolio</a>
<a class="logo" href="wip.html">Games</a>
<a class="logo" href="wip.html">Art</a>
<a class="logo" href="neatstuff.html">Neat stuff I made</a>
<a class="logo" href="aboutme.html">About me / Contact</a>
<a class="logo" href="testLab.html">teslab</a>


</header>
`

function showHeader() {

    var ht = document.createElement('div');
    ht.innerHTML = tempolate;

    document.body.prepend(ht);







}

