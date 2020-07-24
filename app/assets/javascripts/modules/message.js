$(function(){

  function buildHTML(message){
    if(message.image){
      let html = `<div class="message" data-message-id=${message.id}>
                  <div class="message__name">
                  ${message.user_name}
                  <div class="message__name__date">
                  ${message.created_at}
                  </div>
                  </div>
                  <div class="message__comment">
                  <div class="message__comment__text">
                  ${message.content}
                  </div>
                  <img class="message__image" src="${message.image}">
                  </div>
                  </div>`
      return html;
    } else {
      let html = `<div class="message" data-message-id=${message.id}>
                  <div class="message__name">
                  ${message.user_name}
                  <div class="message__name__date">
                  ${message.created_at}
                  </div>
                  </div>
                  <div class="message__comment">
                  <div class="message__comment__text">
                  ${message.content}
                  </div>
                  
                  </div>
                  </div>`
      return html;

    };
  }
  $(".form").on("submit", function(e){
    e.preventDefault()
    console.log($(".form"))
    let formData = new FormData(this);
    let url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $(".message-list").append(html);
      $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
      $('form')[0].reset();
      $(".send").prop("disabled",false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  })

  // let reloadMessages = function() {
  //   let last_message_id = $('.MessageBox:last').data("message-id") || 0;
  //   $.ajax({
  //     url: "api/messages",
  //     type: "GET",
  //     dataType: "json",
  //     data: {id: last_message_id}
  //   })
  //   .done(function(messages){
  //     if (messages.length !== 0) {
  //       let insertHTML = '';
  //       $.each(messages, function(i, message) {
  //         insertHTML += buildHTML(message)
  //       });
  //       $('.message-list').append(insertHTML);
  //       $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
  //     }
  //   })
  //   .fail(function(){
  //     alert("error");
  //   });
  // };
  // setInterval(reloadMessages, 7000);
});