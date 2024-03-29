const CorePing = 'Core.Ping';
const CharRegister = 'Char.Register';
const CharLogin = 'Char.Login';

export function ParseGMCP(store, msg) {
  try {
    if (!msg) {
      return;
    }
    if (!store.state.gmcpOK) {
      console.log("gmcp ok");
    }
    store.state.gmcpOK = true;
    let gmcpInfo = JSON.parse(msg);
    let key = gmcpInfo["key"];
    let value = gmcpInfo["value"];
    if (!key) {
      return;
    }

    switch (key) {
      case CorePing:
        if (store.state.lastPing > 0) {
          store.state.pingTime = (new Date).getMilliseconds() - store.state.lastPing;
        }
        break;
      case CharRegister:
      case CharLogin:
        if (typeof value.code === "undefined") {
          return;
        }
        if (value.code == 0) {
          store.commit("SET_LOGIN_TOKEN", { id: value.id, token: value.token });
          return;
        }

        switch (value.error) {
          case "ERR_REGISTER":
          case "ERR_LOGIN_PASS":
            store.state.loginError = value.message;
            break;
          case "ERR_LOGIN_TOKEN":
            store.commit("CLEAN_LOGIN_TOKEN");
            store.state.showLoginBox = true;
            break;
          case "ERR_LOGIN":
            console.log(value.message);
            break;
        }
        break;
      default:
        console.log("gmcp:", gmcpInfo);
        break;
    }
  } catch (e) {
    //
  }
}

export function SendGMCPString(store, key, payload) {
  let cmd = `${key}`
  if (typeof payload !== "undefined" || payload === "") {
    cmd += ` ${payload}`
  }
  store.dispatch("sendCommand", {
    type: "gmcp",
    command: cmd,
  });
}

export function SendGMCP(store, key, payload) {
  let p = "";
  if (typeof payload !== "undefined") {
    p = JSON.stringify(payload);
  }
  SendGMCPString(store, key, p);
}
