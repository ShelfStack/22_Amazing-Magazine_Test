var app = {initialize: function() {this.bindEvents();},bindEvents: function() {document.addEventListener('deviceready', this.onDeviceReady, false);},onDeviceReady: function() {app.receivedEvent('deviceready');},receivedEvent: function(id) {var parentElement = document.getElementById(id);var listeningElement = parentElement.querySelector('.listening');var receivedElement = parentElement.querySelector('.received');var failedElement = parentElement.querySelector('.failed');var buttonElement = parentElement.querySelector('.reload');if(navigator.network.connection.type == Connection.NONE) {navigator.notification.alert("Sorry, you are offline. Please go online to access magazine.", function() {}, "Offline!");listeningElement.setAttribute('style', 'display:none;');failedElement.setAttribute('style', 'display:block;');}else{listeningElement.setAttribute('style', 'display:none;');receivedElement.setAttribute('style', 'display:block;');var devicePlatform = device.platform;if(devicePlatform=="Android"){var ref = window.open('http://dev.shelfstack.com/magazine/app/amazing_magazine', '_blank', 'location=no');}else{var ref = window.open('http://dev.shelfstack.com/magazine/app/amazing_magazine', '_blank', 'toolbar=no');}receivedElement.setAttribute('style', 'display:none;');buttonElement.setAttribute('style', 'display:block;');}}};function reloadURL(urlString){myURL = encodeURI(urlString);var devicePlatform = device.platform;if(devicePlatform=="Android"){var ref = window.open('http://dev.shelfstack.com/magazine/app/amazing_magazine', '_blank', 'location=no');}else{var ref = window.open('http://dev.shelfstack.com/magazine/app/amazing_magazine', '_blank', 'toolbar=no');}}