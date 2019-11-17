function showHiddenBlock() {
    var c = document.getElementsByClassName("hidden-block");
    c[0].style.display = "block";
}

var btns = document.getElementsByClassName('news-btn');

for (let i = 0; i < btns.length; i++) {
    var element = btns[i];
    element.addEventListener("click", function() {
        if(confirm("do you want to delete this?")) {
            var newsElement = this.parentNode.parentNode;
            document.getElementsByClassName('list')[0].removeChild(newsElement)
        }        
    })
}



