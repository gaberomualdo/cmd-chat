window.onload = check_chat_hash;
window.onhashchange = function(){location.reload();};
function check_chat_hash(hashchangefunc){
  if(window.location.hash) {
    var hash = window.location.hash.substring(1);
    alert("test");
  } else {

  }
}
