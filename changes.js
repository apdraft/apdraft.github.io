let foot = document.querySelector('footer');
foot.innerHTML += '<div class="footer-low"><p>Made with <img style="display: inline-flex; height: 13px; width: 13px;" src="https://apdraft.github.io/love-icon.svg" alt="Love Icon"> & <img style="display: inline-flex; height: 15px; width: 15px;" src="https://apdraft.github.io/coffee-icon.svg" alt="Coffe Icon"></p><p>Powered by <a href="https://www.draft.dev">draft.dev</a> <span> | ©2022 DevRel Careers. All Rights Reserved</span></p></div>';

$(".js-open-modal").click(function(){  $(".modal").addClass("visible");});$(".js-close-modal").click(function(){  $(".modal").removeClass("visible");});$(document).click(function(event) {  if (!$(event.target).closest(".modal,.js-open-modal").length) {    $("body").find(".modal").removeClass("visible");  }});

let addlink0 = document.querySelector('ul#footer-employers li');
addlink0.outerHTML += '<li><a href="/post">Post a  job</a></li>';

let addlink1 = document.querySelector('ul#footer-jobseekers li');
addlink1.outerHTML += '<li><a href="/talent-pool">Talent Pool</a></li>';

let changelink = document.querySelector('#footer-info > li.email');
changelink.outerHTML = '<li class="email"><a href="https://devrelcareers.com/contact">Contact</a></li>';

if (window.location.href.indexOf('job') != -1) {
let addbox = document.querySelector('.company-box');
addbox.outerHTML += '<div class="company-box" style="margin-top: 30px;"><h2 class="company-name"><a href="/talent-pool">Talent Pool</a></h2><p class="company-tagline">Join our pool of DevRels</p><a href="/talent-pool"><lottie-player src="https://apdraft.github.io/join-talent-pool.json"  background="transparent"  speed="1"  style="width: auto; height: auto;"  loop  autoplay></lottie-player></a></div>';
}

if (window.location.href.indexOf('post') != -1) {
let changelink1 = document.querySelector('#app > div.boxes.cf > div.postpage-marketing-box.cf > section > p:nth-child(3) > a');
changelink1.outerHTML = '<a href="https://devrelcareers.com/contact">contact us</a>';
}

if (window.location.href.replaceAll(window.location.origin, '').replaceAll('/','').length === 0 ) {
let cover = document.querySelector('.cover');
cover.innerHTML = '<lottie-player src="https://cdn.jsdelivr.net/gh/apdraft/apdraft.github.io/banner.json"  background="#251B37"  speed="1"  style="width: 100%; height: 300px;"  loop  autoplay></lottie-player>';
}


