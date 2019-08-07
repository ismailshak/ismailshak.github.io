window.onscroll = function(){
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
    document.querySelector("#navbar").style.top = "0";
  } else {
    document.querySelector("#navbar").style.top = "-200px";
  }
}