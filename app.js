// function submitForm(e) {
//     e.preventDefault();

//     let name    = document.querySelector(".name").nodeValue;
//     let email   = document.querySelector(".email").nodeValue;
//     let message = document.querySelector(".message").nodeValue;
    
//     saveContactInfo(name, email, message);

//     document.querySelector(".contact-form").reset();

//     sendEmail(name, email, message);
// }

// function sendEmail(name, email, message) {
//     Email.send({
//         Host: "smtp.gmail.com",
//         // SecureToken:"cb1493e2-99e4-4586-b138-88bf5df9b500",
//         Username : "keyy007.kk@gmail.com",
//         Password : "ketankkk",
//         To: 'keyy007.kk@gmail.com',
//         From: 'keyy007.kk@gmail.com',
//         Subject: '${name} Sent You a Message',
//         Body: 'Name: ${name} <br/> Email: ${email} <br/> Message: ${message}',
//     }).then((message => alert("Sent Successfully")))
// }

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  