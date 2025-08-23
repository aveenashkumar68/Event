gsap.from(".navbar-brand", {y:-50, opacity:0, duration:1});
gsap.from(".nav-link", {y:-50, opacity:0, duration:1, delay:0.5, stagger:0.2});
gsap.from("#home h1", {x:-100, opacity:0, duration:1, delay:1});
gsap.from("#home p", {x:100, opacity:0, duration:1, delay:1.5});
gsap.from(".btn", {scale:0, opacity:0, duration:1, delay:2});

gsap.from(".git-card", {
  scrollTrigger: "#blogs",
  opacity: 0,
  y: 50,
  duration: 1,
});

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  window.location.href = "https://forms.gle/cwh4RSCo7aTj6Bui8";
});
