const appRoot = document.getElementById('app');

let text = 'Show Details';
let details = false;

const toggleDetails = () => {
  if (text === 'Show Details') {
    text = 'Hide Details';
    details = <p>These are the details</p>;
  } else {
    text = 'Show Details';
    details = false;
  }
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>{text}</button>
      {details}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
