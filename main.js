function SuggestPwd() {
 var passwordWords = ['green', 'agent112', 'publish', 'devicE', 'initial', 'checkS', 'tiTLE', 'Sliced', 'monopoly', 'Kindom', 'search', 'website', 'coding', 'EMiNEm', 'clappING', 'WebWeb', 'Custard', 'alphabet', 'secret', 'unbreakable', 'encrypted', 'soCool', 'emptY', 'Immagine', 'Social', 'purplE', 'grEen', 'lEgend', 'FOCUSED', 'Hussle', 'systeM', 'Writer', 'Poetry', 'RedBlueGreen', '911cops', 'oxyGEN', 'leTTer', 'CHurCH', 'General', 'fashION', 'syLLabus', 'Spanish', 'PROtect', 'Charge', 'poLice', 'SCIence', 'PoultrY', 'Adverb', 'Blogger', 'PLANtain', 'gooFER', 'anDROID', 'miGhty', 'infinity', 'DomaIN', 'Dollars', 'AmeriCA', 'Forward', 'SpiDER', 'samSUNG', 'Twenty', 'DeserT', 'Angular', 'PROject', 'proNOUN', 'KeyBoard', '123easy', 'EasyPeasy', 'Ballerina', 'Kitchen', 'Sponge', 'Strength', 'Script', 'cherrY', 'Triangle', 'oClock', 'Military', 'RanDom', 'Numbers', 'Flourish', 'thirty', 'hundred', 'scorpion', 'Burret', 'healTHy', 'loverR', 'Carring', 'yesyesyes', 'Artificial', 'UpDown', 'InDuStRy', 'FESTIval', 'Carring', 'BootStrap', 'Styling', 'DuckDuck', 'WresTLE', 'HardTimes', 'Remeber', 'forGOT', 'DiaMond', 'Monday', 'alarmed', 'Adjacent', 'Sparked', 'President', 'soManY' , 'Scared', 'Crypto', 'Builders', 'percenT', 'Febuary', 'AccOunt', 'Action', 'reQUIRED', 'SaveUp', 'BiNaRy', 'Elephant', 'redcarpet', 'Everything', 'Maniac', 'maTrix', 'Sounded', 'cooKer', 'finiancE', 'RagRag', 'Cheater', 'GuesseD', 'SecurED', 'lifeHUB', 'hoBBer', 'danCing', 'SingING', 'BasKEt', 'Tounge', 'canCEL', 'FathER', 'DreaMer', 'BabyBoo', 'metalore', 'YouKnow', 'ToldMe', 'Favourite', "Bonbing", 'Telephone', 'Clothe', 'Fresher', 'Aspire', 'InSpiRe', 'EsPiRe', 'SooRich', '4Sure', 'SmartGo', 'ABCxyz'];
 var randomWordIndex = Math.floor(Math.random() * passwordWords.length);
 var randomWord = passwordWords[randomWordIndex];
 var strongPassword = randomWord + Math.random().toString(36).slice(-2);
 document.getElementById("fpwd").value = strongPassword;
 }
 function textToASCII() {
 var inputText = document.getElementById("text12").value
 var output = "";
 for (var i = 0; i < inputText.length; i++) {
 output += inputText.charCodeAt(i) + " ";
 }
 document.getElementById("asciii").value = output;
 }
 function ASCIItoText() {
 var asciiInput = document.getElementById("ascii2").value;
 var asciiCodes = asciiInput.split(" ");
 var text = "";
 
 for (var i = 0; i < asciiCodes.length; i++) {
 text += String.fromCharCode(asciiCodes[i]);
 }
 
 document.getElementById("text232").value = text;
 }  
 function textToHexa() {
 var text = document.getElementById("text100").value;
 var hexa = "";
 for (i = 0; i < text.length; i++) {
 hexa += text.charCodeAt(i).toString(16);
 }
 document.getElementById("hexa100").value = hexa;
 }
 function hexaToTx() {
 var hexa = document.getElementById("text200").value;
 var text = "";
 for (var i = 0; i < hexa.length; i += 2) {
 var charCode = parseInt(hexa.substr(i, 2), 16);
 text += String.fromCharCode(charCode);
 }
 document.getElementById("text300").value = text;
 };
 function textToHexa() {
 var text = document.getElementById("text100").value;
 var hexa = "";
 
 for (i = 0; i < text.length; i++) {
 hexa += text.charCodeAt(i).toString(16);
 }
 document.getElementById("hexa100").value = hexa;
 }
     function textToDecimal() {
     var text = document.getElementById("text1111").value;
     var decimal = "";
     for (var i = 0; i < text.length; i++) {
     decimal += text[i].charCodeAt(0) + " ";
     }
     document.getElementById("decimal").value = decimal;
     }
     function DecimaltoText() {
     var decimal = document.getElementById("decimal2").value;
     var decimalArray = decimal.split(" ");
     var text = "";
     for (var i = 0; i < decimalArray.length; i++) {
     text += String.fromCharCode(decimalArray[i]);
     }
     document.getElementById("text222").value = text;
     }
     
     function textToBinary() {
     var text = document.getElementById("text211").value;
     var binary = "";
     for (var i = 0; i < text.length; i++) {
     binary += text[i].charCodeAt(0).toString(2) + " ";
     }
     document.getElementById("binary202").value = binary;
     }
     function BinarytoText() {
     var binary = document.getElementById("binary20").value;
     var binaryArray = binary.split(" ");
     var text = "";
     for (var i = 0; i < binaryArray.length; i++) {
     text += String.fromCharCode(parseInt(binaryArray[i], 2));
     }
     document.getElementById("text202").value = text;
     }
     
	 function menu(){
	 var x = document.getElementById("mi")
	 x.style.display = "block"
	 var y = document.getElementById("mo")
	 y.style.display ="none"
	 var z = document.getElementById("mc")
	 z.style.display ="block"
	 }
	 function menuc() {
	 
	 var x = document.getElementById("mi")
	 x.style.display = "none"
	 var y = document.getElementById("mo")
	 y.style.display ="block"
	 var z = document.getElementById("mc")
	 z.style.display ="none"
	 }
function CheckPwd() {
  var password = document.getElementById("ypwd").value;
  var strengthBar = document.querySelector("input[readonly]");

  // Define the rules and their corresponding scores
  var rules = [
    { pattern: /\d/, score: 1, description: "At least one number" },
    { pattern: /[A-Z]/, score: 1, description: "At least one uppercase letter" },
    { pattern: /[\W_]/, score: 1, description: "At least one special character" },
    { pattern: /[a-z]/, score: 1, description: "At least one lowercase letter" },
    { pattern: /^.{7,}$/, score: 1, description: "At least 7 characters" }
  ];

  // Calculate the password strength score based on the rules
  var score = rules.reduce(function(acc, rule) {
    return acc + (rule.pattern.test(password) ? rule.score : 0);
  }, 0);

  // Set the strength bar color based on the score
  var colors = ["red", "orange", "yellow", "lightgreen", "green"];
  var color = colors[Math.min(Math.floor(score / 2), 4)];
  strengthBar.style.backgroundColor = color;

  // Set the strength bar text based on the score
  var texts = ["Very weak", "Weak", "Fair", "Strong", "Very strong"];
  var text = texts[Math.min(Math.floor(score / 2), 4)];
  strengthBar.value = "Strength - " + (score * 20) + "% (" + text + ")";
}
