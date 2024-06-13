let foot = document.querySelector('footer');
foot.innerHTML += '<div class="footer-low"><p>Made with <img style="display: inline-flex; height: 13px; width: 13px;" src="https://apdraft.github.io/love-icon.svg" alt="Love Icon"> & <img style="display: inline-flex; height: 15px; width: 15px;" src="https://apdraft.github.io/coffee-icon.svg" alt="Coffe Icon"></p><p>Powered by <a href="https://www.draft.dev">draft.dev</a> <span> | © DevRel Careers. All Rights Reserved</span></p></div>';

$(".js-open-modal").click(function(){  $(".modal").addClass("visible");});$(".js-close-modal").click(function(){  $(".modal").removeClass("visible");});$(document).click(function(event) {  if (!$(event.target).closest(".modal,.js-open-modal").length) {    $("body").find(".modal").removeClass("visible");  }});

let addlink0 = document.querySelector('ul#footer-employers li');
addlink0.outerHTML += '<li><a href="/post">Post a  job</a></li>';

let addBlog = document.querySelector('#footer-info > li.email');
addBlog.outerHTML += '<li class="blog"><a href="https://devrelcareers.com/blog">DevRel Blog</a></li>';

if (window.location.href.replaceAll(window.location.origin, '').replaceAll('/','').length === 0 ) {
let cover = document.querySelector('.cover');
cover.innerHTML = '<lottie-player src="https://cdn.jsdelivr.net/gh/apdraft/apdraft.github.io/banner.json"  background="#251B37"  speed="1"  style="width: 100%; height: 300px;"  loop  autoplay></lottie-player>';
}

if (window.location.href.indexOf('/?') != -1) {
let cover = document.querySelector('.cover');
cover.innerHTML = '<lottie-player src="https://cdn.jsdelivr.net/gh/apdraft/apdraft.github.io/banner.json"  background="#251B37"  speed="1"  style="width: 100%; height: 300px;"  loop  autoplay></lottie-player>';
}