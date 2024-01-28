//your JS code here. If required.
 function toggleActive(panelNumber) {
    // Remove active class from all panels
    document.querySelectorAll('.panel').forEach(panel => {
      panel.classList.remove('active');
    });

    // Add active class to the clicked panel
    const clickedPanel = document.getElementById(`panel-${panelNumber}`);
    clickedPanel.classList.add('active');
  }
