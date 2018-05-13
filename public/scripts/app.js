'use strict';

var appRoot = document.getElementById('app');

var text = 'Show Details';
var details = false;

var toggleDetails = function toggleDetails() {
  if (text === 'Show Details') {
    text = 'Hide Details';
    details = React.createElement(
      'p',
      null,
      'These are the details'
    );
  } else {
    text = 'Show Details';
    details = false;
  }
  renderApp();
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleDetails },
      text
    ),
    details
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
