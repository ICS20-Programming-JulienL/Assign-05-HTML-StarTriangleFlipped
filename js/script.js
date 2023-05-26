// Created by: Julien Lamoureux
// Created on: May 2023
// This file contains the JS functions for index.html, Unit5-03-HTML-Factorial

"use strict";

function calculateFactorial() {

   // initialize numbers to an empty string
  let results = ""

  // initialize counter to 0
  let counter = 1


  // initialize factorial to 1
  let star = ""

  // get userInteger from user input
  let userInteger1 = document.getElementById("first-int").value
  
     do {
       if (counter % 5 == 0) {
         star= "o".repeat(counter)
          results= results+star+"<br>"
          counter++
       }
       else if (counter % 5 != 0) {
          star= "*".repeat(counter)
          results= results+star+"<br>"
          counter++
        }
     } while (counter <= userInteger1)

  // initialize resultsUpsideDown to an empty string

  // initialize counterUpsideDown to 0
  let resultsUpsideDown= ""
  let starUpsideDown = ""
  // initialize factorial to 1

  // get userInteger from user input
  let userInteger = document.getElementById("first-int").value
  
     for (let counterUpsideDown=userInteger;counterUpsideDown >= 0; counterUpsideDown--) {
      
       if (counterUpsideDown % 5 == 0) {
        starUpsideDown= "o".repeat(counterUpsideDown)
        resultsUpsideDown= resultsUpsideDown+starUpsideDown+"<br>"
       }
        else if (counterUpsideDown % 5 != 0) {
          starUpsideDown = "* ".repeat(counterUpsideDown)
      resultsUpsideDown= resultsUpsideDown+starUpsideDown+"<br>"
      }
     }

  
  document.getElementById('program-feedback').innerHTML = results+resultsUpsideDown
    // define the resultsUpsideDown statement
  
}

