$(function(){
  const rndNum = () => Math.floor(Math.random() * 10 ) + 1;
  $.ajax({
    url: `https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10`,
    headers:{"X-RapidAPI-Key":"TgsmJyhFC9mshNODDzAwbjfLMvuCp1G90QljsnhllbqcyyUFPS"},
    async:true,
    cache:false,
    type:'GET',
    dataType:'json',
    beforeSend(jqXHR){
      $(".quote").html('<span>Fecthing Quote.....</span>');
    },
    success(jqXHR,status,data){
      //checks readyState and status to make sure response comes back ok
      if( data.readyState === 4 &&  status === "success"){
        const num = rndNum(); // stores vallue of random num
        $('.quote').html(`<i class="fas fa-quote-left pr-2"></i>${jqXHR[num].quote}`); // changes html to qoute text
        $('.author').html(`${jqXHR[num].author}`) // gets author name
      }
    },
    error(jqXHR,status,data){
      // if ajax request is unathorized
      if(data === "Unauthorized"){
        const errorMessage = {
          authorization:data,
          readyState:jqXHR.readyState,
          status:status
        }
        console.error(errorMessage);
        $(".quote").html(`<span>${errorMessage.authorization}</span>`);
      }
        
      
    },
  });
  // onclick function to add tweet
  $(".btn-primary").on('click',function(){
    $(this).attr({
      href:`https://twitter.com/intent/tweet?text=${$('.quote').text()} Author - ${$('.author').text()}`,
      target: '_blank'
    })
  });
  $(".btn-success").on('click',function(){
    $.ajax({
      url: `https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10`,
      headers:{"X-RapidAPI-Key":"TgsmJyhFC9mshNODDzAwbjfLMvuCp1G90QljsnhllbqcyyUFPS"},
      async:true,
      cache:false,
      type:'GET',
      dataType:'json',
      beforeSend(jqXHR){
        $(".quote").html('<span>Loading...</span>');
      },
      success(jqXHR,status,data){
        //checks readyState and status to make sure response comes back ok
        if( data.readyState === 4 &&  status === "success"){
          const num = rndNum(); // stores vallue of random num
          $('.quote').html(`<i class="fas fa-quote-left pr-2"></i>${jqXHR[num].quote}`); // changes html to qoute text
          $('.author').html(`${jqXHR[num].author}`) // gets author name
        }
      },
      error(jqXHR,status,data){
        // if ajax request is unathorized
        if(data === "Unauthorized"){
          const errorMessage = {
            authorization:data,
            readyState:jqXHR.readyState,
            status:status
          }
          console.error(errorMessage);
          $(".quote").html(`<span>${errorMessage.authorization}</span>`);
        }
          
        
      },
    });
  })
});
