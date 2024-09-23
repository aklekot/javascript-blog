'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  console.log('Link was clicked!');
  const clickedElement = this;
  console.log('clickedElement (with plus): ' + clickedElement);
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
    console.log("Removed");
  }

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
    console.log("Article - Removed");
  }

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log('Selector artykułu: ' + articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /*add class 'active' to the clicked link */
  targetArticle.classList.add('active');
  console.log("Dodano klasę active do artykułu");

  /* add class 'active' to the correct article */
  clickedElement.classList.add('active');
  console.log("Added active class to the target article");

}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks() {
  console.log("Generating title links");

  /* find the titleList element */
  const titleList = document.querySelector(optTitleListSelector);

  /* remove contents of titleList */
  titleList.innerHTML = '';

  /* find all the articles */
  const articles = document.querySelectorAll(optArticleSelector);

  for (let article of articles) {
    const articleId = article.getAttribute('id');

    /* find the title element and get the title */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create the HTML for the link */
    const linkHTML = `<li><a href="#${articleId}"><span>${articleTitle}</span></a></li>`;

    /* insert link into titleList */
    titleList.insertAdjacentHTML('beforeend', linkHTML);
  }

  /* add event listeners to each link */
  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}



generateTitleLinks();

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}
