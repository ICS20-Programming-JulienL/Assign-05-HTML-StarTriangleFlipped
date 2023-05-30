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
       
       // if the counter is a multiple of 5, repeat planet symbols
       if (counter % 5 == 0) {

        // repeat the planet symbol the number of times that the counter is equal to
         star= "o".repeat(counter)

         // add a line break
          results= results+star+"<br>"
          counter++
       }

        //otherwise, if the counter is not a multiple of 5, repeat the star symbol
       else if (counter % 5 != 0) {
         
         // repeat the star symbol the number of times that the counter is equal to.
          star= "*".repeat(counter)

          // add a line break
          results= results+star+"<br>"

         //increment the counter
          counter++
        }
     } while (counter <= height)

  // initialize resultsUpsideDown to an empty string
  let resultsUpsideDown= ""
  // initialize counterUpsideDown to 0
  let starUpsideDown = ""

     for (let counterUpsideDown=height;counterUpsideDown >= 0; counterUpsideDown--) {

       // if the counter is a multiple of 5, repeat planet symbols
       if (counterUpsideDown % 5 == 0) {
        // repeat the planet symbol the number of times that the counter is equal to.
        starUpsideDown= "o".repeat(counterUpsideDown)

        //add a line break
        resultsUpsideDown= resultsUpsideDown+starUpsideDown+"<br>"
       }
         
        //otherwise, if the counter is not a multiple of 5, repeat the star symbol
        else if (counterUpsideDown % 5 != 0) {
           // repeat the star symbol the number of times that the counter is equal to.
          starUpsideDown = "* ".repeat(counterUpsideDown)

       // add a line break
      resultsUpsideDown= resultsUpsideDown+starUpsideDown+"<br>"
      }
     }

  // display results
  document.getElementById('program-feedback').innerHTML = results+resultsUpsideDown
  
}

