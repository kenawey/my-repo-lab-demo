var myMessage =
  "my name is mohamed mostafa \n I am form south cairo (Hellwan City)\n I garduated form FCI at cairo Unversity I have joined to ITI at menofia baranch and you can contact me on this number 01027208732";
var showMessageButton = document.getElementById("showMessageId");
var newWindow,
  i = 0;

function showMessage() {
  newWindow = window.open("", "", "width=600px,height=300px");
  //  newWindow.document.writeln(myMessage);
  var paragraphElement = newWindow.document.createElement("p");
  paragraphElement.setAttribute("id", "txt");
  newWindow.document.body.append(paragraphElement);

  Print_Recursivly();
}
function Print_Recursivly() {
  if (i < myMessage.length) {
    newWindow.document.getElementById("txt").innerHTML += myMessage.charAt(i);
    i++;
    setTimeout(Print_Recursivly, 100); // typing speed (ms)
  } else {
    newWindow.close();
  }
}
