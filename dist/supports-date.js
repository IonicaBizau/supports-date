"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};!function(e){if("object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.supportsDate=e()}}(function(){return function e(t,n,o){function r(u,i){if(!n[u]){if(!t[u]){var l="function"==typeof require&&require;if(!i&&l)return l(u,!0);if(f)return f(u,!0);var p=new Error("Cannot find module '"+u+"'");throw p.code="MODULE_NOT_FOUND",p}var d=n[u]={exports:{}};t[u][0].call(d.exports,function(e){var n=t[u][1][e];return r(n?n:e)},d,d.exports,e,t,n,o)}return n[u].exports}for(var f="function"==typeof require&&require,u=0;u<o.length;u++)r(o[u]);return r}({1:[function(e,t){var n=null;t.exports=function(){if(null!==n)return n;var e=document.createElement("input");e.setAttribute("type","date");var t="not-a-date";return e.setAttribute("value",t),n=e.value!==t}},{}]},{},[1])(1)});