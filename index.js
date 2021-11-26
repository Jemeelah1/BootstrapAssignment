const names=document.querySelector(".form-control");
const email=document.querySelector(".emailinput");
const phone=document.querySelector(".phoneinput");
const subject=document.querySelector(".subjectinput");
const dob=document.querySelector(".dobinput");
const text=document.querySelector(".textinput");

var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function SubscribeForm() {
  let x = document.querySelector(".subscribe").value;
  if (x == "") {
    document.querySelector(".subscribeForm").innerHTML = "this field must not be empty"
    return false;
  }
}

function SubscribeFooter() {
  let x = document.querySelector(".subscribeFooter").value;
  if (x == "") {
    document.querySelector(".subFooter").innerHTML = "this field must not be empty"
    return false;
  }
}

function validation(event) {
  event.preventDefault();
  if(!names.value) {
      document.querySelector(".name").innerHTML = "this field must not be empty"
  } else if (!email.value) {
      document.querySelector(".email").innerHTML = "enter your email address"
  } else if (!phone.value) {
      document.querySelector(".phone").innerHTML = "enter your phone number"
  } else if (!subject.value) {
      document.querySelector(".selectsub").innerHTML = "select subject"
  } else if (!dob.value) {
      document.querySelector(".dob").innerHTML = "enter date of birth"
  } else if (!text.value) {
      document.querySelector(".text").innerHTML = "write a message"
  } else {
      console.log("wrong!")
  }
}

var section = document.querySelector('.numbers');
var hasEntered = false;

window.addEventListener('scroll', (e) => {
	var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

	if (shouldAnimate && !hasEntered) {
  	hasEntered = true;
    
    $('.value').each(function () {
    	$(this).prop('Counter',0).animate({
        Counter: $(this).text()
    	}, {
        duration: 1000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
   		});
    });

  }
});
