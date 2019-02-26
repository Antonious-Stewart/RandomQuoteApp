// "https://twitter.com/home/?status= twitter cta
// https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10
// TgsmJyhFC9mshNODDzAwbjfLMvuCp1G90QljsnhllbqcyyUFPS
const rndNum = () => Math.floor(Math.random() * 10 ) + 1;
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
    if( data.readyState === 4 &&  status === "success"){
      const num = rndNum();
      $('.quote').html(`<i class="fas fa-quote-left pr-2"></i>${jqXHR[num].quote}`);
      $('.author').html(`${jqXHR[num].author}`)
      
    }
    
    
  },
  error(jqXHR,status,data){
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
