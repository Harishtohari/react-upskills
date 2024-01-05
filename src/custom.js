$(".toggle-form").click(function () {
    $(".login_main, .registr_mian").toggle();
});

$(document).ready(function() {
    $(".hide_shw_pwd").on("click", function() {
      $(this).toggleClass("active");
      var inputField = $(this).prev("input");
  
      if ($(this).hasClass("active")) {
        inputField.attr("type", "text");
      } else {
        inputField.attr("type", "password");
      }
    });
  
    $("#registration-form").on("submit", function(e) {
      var password1 = $("#password1").val(); 
      var password2 = $("#password2").val(); 
  
      if (password1 !== password2) {
        e.preventDefault();
        $(this).find(".err_msg").show();
        $("#password-match-message").text("Passwords do not match.").css("color", "red");
      }
    });
  });
  
  $("#phoneInput").on("input", function() {    
    $(this).val($(this).val().replace(/\D/g, ""));
    if ($(this).val().length > 10) {
      $(this).val($(this).val().slice(0, 10));
    }
  });