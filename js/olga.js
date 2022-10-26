function checkForSpam(message) {
  let result;
  // Change code below this line
  // const word1 = "sale";
  // const word2 = "spam";
    result = message.toLowerCase().includes("spam") || message.toLowerCase().includes("sale");

  // Change code above this line
    console.log(result);
    console.log(message.toLowerCase())
}
checkForSpam("[SPAM] How to earn sale fast money?")
checkForSpam("Trust me, this is not a spam message")