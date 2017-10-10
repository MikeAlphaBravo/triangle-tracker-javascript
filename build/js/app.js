(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Triangle(side1,side2,side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

// has 2 equal sides
Triangle.prototype.isosceles = function () {
  if((this.side1 === this.side2) || (this.side3 === this.side2) || (this.side1 === this.side3)) {
    return true;
  }
};

//all sides are the same
Triangle.prototype.equilateral = function () {
  if((this.side1 === this.side2) && (this.side1=== this.side3)) {
    return true;
  }
};

//3 unequal sides
Triangle.prototype.scalene = function () {
  if((this.side1 != this.side2) && (this.side1 != this.side3) && (this.side2 != this.side3)) {
    return true;
  }
};

//checks if it is a triangle
Triangle.prototype.isTriangle = function () {
  if ((this.side1 + this.side2 > this.side3) && (this.side2 + this.side3 > this.side1) && (this.side3 + this.side1 > this.side2)) {
    if (this.isosceles()) {
      return 3;
    }
    else if (this.equilateral()) {
      return 2;
    }
    else if (this.scalene()) {
      return 1;
    }
  }else {
    return 0;
  }
};

},{}],2:[function(require,module,exports){
var Triangle = require('./../js/triangle.js').triangleModule;

$(document).ready(function() {
  $('#triangle-form').submit(function(event) {
    event.preventDefault();
    var side1 = $('#side1').val();
    var side2 = $('#side2').val();
    var side3 = $('#side3').val();
    var simpleTriangle = new Triangle(side1,side2,side3);
    var state = simpleTriangle.isTriangle();
    if(state === 3) {
      $('#solution').text("<h3>This is an isosceles triangle</h3>");
    }
    else if (state === 2) {
      $('#solution').text("<h3>This is an equilateral triangle</h3>");
    }
    else if (state === 1) {
      $('#solution').text("<h3>This is an scalene triangle</h3>");
    }
    else {
      $('#solution').text("<h3>This is NOT a triangle!!</h3>");
    }
    // $('#solution').append("<li>" + element + "</li>");
  });
});

},{"./../js/triangle.js":1}]},{},[2]);
