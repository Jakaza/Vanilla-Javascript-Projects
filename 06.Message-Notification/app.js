
const closeBtn = document.getElementById('close');
const articleCon = document.querySelector('.article-con');




function showMessage() {

    articleCon.style.transform = 'translateX(12%)';

    setTimeout(() => {

        articleCon.style.transform = 'translateX(100%)';

    }, 2500);

}


function closeMessage() {

    articleCon.style.transform = 'translateX(100%)';
}

closeBtn.addEventListener('click', closeMessage)