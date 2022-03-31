let Btn = document.getElementsByClassName('Btn');

for(let i=0; i<Btn.length; i++){
        Btn[i].addEventListener('click',function(){
                var article = Btn[i].nextElementSibling;
                if(article.style.display == 'block'){
                        article.style.display = 'none'
                } else {
                        article.style.display = 'block'
                }
        })
}