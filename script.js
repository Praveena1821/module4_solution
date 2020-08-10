(function () {

var names = ["Praveena", "Janavarshini", "Jerry", "Jason", "Shanthi", "Ganesan", "Joker", "James", "Jack"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();

