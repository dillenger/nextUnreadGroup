var { ExtensionCommon } = ChromeUtils.import("resource://gre/modules/ExtensionCommon.jsm");
var Services = globalThis.Services || ChromeUtils.import("resource://gre/modules/Services.jsm");

var recentWindow = Services.wm.getMostRecentWindow("mail:3pane");

var nextUnreadGroupApi = class extends ExtensionCommon.ExtensionAPI {
  getAPI(context) {
    return {
      nextUnreadGroupApi: {
        async nextUnreadGroup() {
          if (recentWindow) {
            recentWindow.goDoCommand('cmd_markAllRead');
            recentWindow.goDoCommand('cmd_nextUnreadMsg');
          }
        },
        async loadButton() {
          if (recentWindow) {
            recentWindow.addEventListener('DOMContentLoaded', (event) => {
              let nextUnreadGroupButton = recentWindow.document.getElementById("nextunreadgroup_dillinger-browserAction-toolbarbutton");
              if (nextUnreadGroupButton) {
                nextUnreadGroupButton.setAttribute("observes", "button_next");
              }
            });
          }
        },
      },
    };
  }
  onShutdown(isAppShutdown) {
  if (isAppShutdown) return;
  console.log("Next Unread Group disabled");
  }
};
