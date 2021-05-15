const headerTemplate = document.querySelector('headerTemplate');
const node = document.importNode(headerTemplate.content, true)
document.body.appendChild(node);

function showHeader(){
    print("this works");
    const headerTemplate = document.querySelector('headerTemplate');
    var tempcontent = headerTemplate.document.content;
    var temp = document.getElementsByTagName("headertemp");
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(temp);
    document.body.appendChild(clon);   
     document.body.appendChild(tempcontent);



}

