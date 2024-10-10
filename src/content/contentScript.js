function clickConnectButtons() {
    const connectButtons = document.querySelectorAll('button[aria-label^="Connect"]');
  
    let index = 0;
  
    function clickNextButton() {
      if (index < connectButtons.length) {
        connectButtons[index].click();
        index++;
        // 1-3 seconds random delay between clicks
        const delay = Math.floor(Math.random() * 2000) + 1000;
        setTimeout(clickNextButton, delay);
      }
    }
  
    clickNextButton();
  }
  
  // Inject React button into the page
  function addConnectButton() {
    const root = document.createElement('div');
    document.body.appendChild(root);
  
    import('react').then(React => {
      import('react-dom').then(ReactDOM => {
        import('../components/ConnectButton').then(({ default: ConnectButton }) => {
          ReactDOM.render(
            React.createElement(ConnectButton, { onClick: clickConnectButtons }),
            root
          );
        });
      });
    });
  }
  
  window.onload = addConnectButton;
  