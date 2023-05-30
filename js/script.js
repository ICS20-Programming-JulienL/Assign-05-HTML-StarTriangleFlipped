// Created by: Julien Lamoureux
// Created on: May 2023
// This file contains the JS functions for index.html, Assign-05-HTML-StarTriangleFlipped

"use strict";

function displayTriangle() {

   // initialize numbers to an empty string
  let results = ""

  // initialize counter to 0
  let counter = 1


  // initialize factorial to 1
  let star = ""

  // get height from user input
  let height = document.getElementById("height").value

  if ((height == "") || (height <= 0)) {
    results = "Please enter a positive integer greater than 0.";
    }
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
     } while (counter <= height)

  // initialize resultsUpsideDown to an empty string

  // initialize counterUpsideDown to 0
  let resultsUpsideDown= ""
  let starUpsideDown = ""
  // initialize factorial to 1
  
     for (let counterUpsideDown=height;counterUpsideDown >= 0; counterUpsideDown--) {
      
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

