
const donationTabBtn = document.getElementById('donation-tab-btn');
const historyTabBtn = document.getElementById('history-tab-btn');


function activateTab(selectedTab) {
  donationTabBtn.classList.remove('active-tab');
  historyTabBtn.classList.remove('active-tab');
  selectedTab.classList.add('active-tab');
}

donationTabBtn.addEventListener('click', function () {
  activateTab(donationTabBtn);
});

historyTabBtn.addEventListener('click', function () {
  activateTab(historyTabBtn);
});