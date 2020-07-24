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
  let reloadMessages = function() {
    let last_message_id = $('.message:last').data("message-id") || 0;
    $.ajax({
      url: "api/messages",
      type: "get",
      dataType: "json",
      data: {id: last_message_id}
    })
    .done(function(messages){
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.message-list').append(insertHTML);
        $('.message-list').animate({ scrollTop: $('.message-list')[0].scrollHeight});
      }
    })
    .fail(function(){
      alert("error");
    });
  };
  setInterval(reloadMessages, 7000);
});