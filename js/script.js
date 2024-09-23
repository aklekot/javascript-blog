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

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}