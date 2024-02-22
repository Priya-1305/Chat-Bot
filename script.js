var messages = [],
  lastUserMessage = "",
  botMessage = "",
  botName = 'Jarvis'
function chatbotResponse() {
  botMessage = "I'm confused...";

  if (lastUserMessage === 'hi') {
    botMessage = 'Howdy!';
  }
  if (lastUserMessage === 'Hi') {
    botMessage = 'hello';
  }
  if (lastUserMessage === 'hello') {
    botMessage = 'Hi';
  }
  if (lastUserMessage === 'What is your name') {
    botMessage = 'My name is ' + botName + ' what should I help you sir';
  }
  if (lastUserMessage === 'How are you') {
    botMessage = 'I am fine What about You?';
  }
  if (lastUserMessage === 'I am Good') {
    botMessage = 'Ok sir';
  }
  if (lastUserMessage === 'I am fine') {
    botMessage = 'Ok sir';
  }
  if (lastUserMessage === 'play song') {
    botMessage = 'See in new tab';
    window.open("https://gaana.com/");
  }
  if (lastUserMessage === 'C compiler for me') {
    botMessage = 'Wait...';
    window.open("https://www.onlinegdb.com/online_c_compiler");
  }
  if (lastUserMessage === 'bye') {
    botMessage = 'See in new tab';
    window.open("http://www.google.com");
  }
  if (lastUserMessage === 'open google') {
    botMessage = 'See in new tab';
    window.open("http://www.google.com");
  }
  if (lastUserMessage === 'open youtube') {
    botMessage = 'See in new tab';
    window.open("http://www.youtube.com");
  }
}

function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    messages.push(lastUserMessage);
    chatbotResponse()
    Speech(botMessage)
    messages.push("<b>" + botName + ":</b> " + botMessage)
    
    for (var i = 1; i < 10; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}
function Speech(say) {
  if ('speechSynthesis' in window) {
    var utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
}
document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
  }
}