function handleClick() {
  browser.nextUnreadGroupApi.nextUnreadGroup();
};

browser.browserAction.onClicked.addListener(handleClick);

browser.nextUnreadGroupApi.loadButton();

console.log("Next Unread Group enabled");
