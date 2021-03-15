  $(document).ready(function(){
  $("#sandmail").click(function(){
    var name =$("#name").val().trim();
    var mulic=$("#mulic").val().trim();
    var phone =$("#phone").val().trim();
    var epasts = $("#epasts").val().trim();
  if(name ==""){
          $("#errorname").text("*Ваше имя");
          $('#errorname').removeClass('hidden');
        }
        else {
            $("#errorname").text("");
           $('#errorname').addClass('hidden');
        }
  if(mulic==""){
          $("#errormulic").text("*Название организации");
          $('#errormulic').removeClass('hidden');
        }
        else {
          $("#errormulic").text("");
          $('#errormulic').addClass('hidden'); }
  if(phone =="") {
          $("#errorphone").text("*Телефон");
          $('#errorphone').removeClass('hidden');
                }
        else {
          $("#errorphone").text("");
          $('#errorphone').addClass('hidden');
       }
if(epasts.split("@").length - 1 == 0|| epasts.split(".").length - 1 ==0){
         $("#erroremail").text("*Введите е-mail");
         $('#erroremail').removeClass('hidden');
         epasts = "";
       } else{
         $("#erroremail").text("");
         $('#erroremail').addClass('hidden');
      }
        if ((name !="") && (mulic!="") && (phone!="") && (epasts!=""))
        {

       		$.ajax({
        		  url: "../returncall/mail.php",
        		  type: "POST",
              cahse:  false,
              dataType: 'json',
              data: {
                "name": name,
                "mulic": mulic,
                "phone": phone,
                "epasts": epasts
              },
              beforeSend: function(){
                $('#sandmail').attr ("disabled", "disabled");
              },
              success: function(data){

                if (data) {
                				$('#name').val ("");
                				$('#mulic').val ("");
                				$('#phone').val ("");
                        $('#epasts').val ("");
                    		$('#sandmail').removeAttr("disabled");
                        $(".retbutton").val(function (){
                          $(".retbutton").css('background-color','#ff9700');
                          $(".retbutton").css('color','#fff');
                          $("#sandmail").html("Отправлено");
                        });
                        $(".retbutton").click(function (){
                          $(".retbutton").css('background-color','#fff');
                          $(".retbutton").css('color','#44b5c4');
                          $("#sandmail").html("Получить");
                        });
                        $('.js-overlay-campaign').fadeOut();
                    } else {
                          alert("");
                          $('#sandmail').removeAttr("disabled");
                      }
                  }
      			}) ;
          }
      });
      return false;
  });
