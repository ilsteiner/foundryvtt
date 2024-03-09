var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __name = (target, value2) => __defProp(target, "name", { value: value2, configurable: true });
var __publicField = (obj, key, value2) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
  return value2;
};
const CONSTANTS = {
  MODULE_NAME: "lazymoney",
  MODULE_ID: "lazymoney",
  PATH: `modules/lazymoney/`
};
CONSTANTS.PATH = `modules/${CONSTANTS.MODULE_NAME}/`;
const _LazyMoneyHelpers = class _LazyMoneyHelpers {
  async manageCurrency(actorOrActorUuid, currencyValue, currencyDenom) {
    let sign = _LazyMoneyHelpers.signCase.default;
    for (const val of Object.values(_LazyMoneyHelpers.signCase)) {
      if (value.includes(val)) {
        sign = val;
        break;
      }
    }
    const actor = getActor(actorOrActorUuid);
    const newAmount = _LazyMoneyHelpers.calculateNewAmount(actor, currencyValue, currencyDenom, sign);
    actor.update({ "system.currency": newAmount });
  }
  static async addCurrency(actorOrActorUuid, currencyValue, currencyDenom) {
    const actor = getActor(actorOrActorUuid);
    const newAmount = _LazyMoneyHelpers.calculateNewAmount(
      actor,
      currencyValue,
      currencyDenom,
      _LazyMoneyHelpers.signCase.add
    );
    actor.update({ "system.currency": newAmount });
  }
  static async subtractCurrency(actorOrActorUuid, currencyValue, currencyDenom) {
    const actor = getActor(actorOrActorUuid);
    const newAmount = _LazyMoneyHelpers.calculateNewAmount(
      actor,
      currencyValue,
      currencyDenom,
      _LazyMoneyHelpers.signCase.subtract
    );
    actor.update({ "system.currency": newAmount });
  }
  /* =============================================== */
  static convertToGold(currencyValue, currencyDenom) {
    return _LazyMoneyHelpers.recalcItemPriceValue(currencyValue, currencyDenom).gold;
  }
  static convertToSilver(currencyValue, currencyDenom) {
    return _LazyMoneyHelpers.recalcItemPriceValue(currencyValue, currencyDenom).silver;
  }
  static convertToCopper(currencyValue, currencyDenom) {
    return _LazyMoneyHelpers.recalcItemPriceValue(currencyValue, currencyDenom).copper;
  }
  static convertToElectrum(currencyValue, currencyDenom) {
    return _LazyMoneyHelpers.recalcItemPriceValue(currencyValue, currencyDenom).electrum;
  }
  static convertToPlatinum(currencyValue, currencyDenom) {
    return _LazyMoneyHelpers.recalcItemPriceValue(currencyValue, currencyDenom).platinum;
  }
  /* ============================================ */
  /* PRIVATE FUNCTIONS */
  /* ============================================ */
  static patchCurrency(currency) {
    if (hasProperty(currency, "pp")) {
      let ppValue = getProperty(currency, "pp") || 0;
      if (!is_lazy_number(ppValue))
        ;
      else if (String(ppValue).startsWith("0") && String(ppValue) !== "0") {
        while (String(ppValue).startsWith("0")) {
          if (String(ppValue) === "0") {
            break;
          }
          ppValue = String(ppValue).slice(1);
        }
      }
      if (!is_real_number(ppValue)) {
        ppValue = 0;
      }
      if (getProperty(currency, "pp") !== ppValue) {
        setProperty(currency, "pp", Number(ppValue ?? 0));
        info(`patchCurrency | update pp from '${getProperty(currency, "pp")}' to '${ppValue}'`);
      }
    }
    if (hasProperty(currency, "gp")) {
      let gpValue = getProperty(currency, "gp") || 0;
      if (!is_lazy_number(gpValue))
        ;
      else if (String(gpValue).startsWith("0") && String(gpValue) !== "0") {
        while (String(gpValue).startsWith("0")) {
          if (String(gpValue) === "0") {
            break;
          }
          gpValue = String(gpValue).slice(1);
        }
      }
      if (!is_real_number(gpValue)) {
        gpValue = 0;
      }
      if (getProperty(currency, "gp") !== gpValue) {
        setProperty(currency, "gp", Number(gpValue ?? 0));
        info(`patchCurrency | update gp from '${getProperty(currency, "gp")}' to '${gpValue}'`);
      }
    }
    if (hasProperty(currency, "ep")) {
      let epValue = getProperty(currency, "ep") || 0;
      if (!is_lazy_number(epValue))
        ;
      else if (String(epValue).startsWith("0") && String(epValue) !== "0") {
        while (String(epValue).startsWith("0")) {
          if (String(epValue) === "0") {
            break;
          }
          epValue = String(epValue).slice(1);
        }
      }
      if (!is_real_number(epValue)) {
        epValue = 0;
      }
      if (getProperty(currency, "ep") !== epValue) {
        setProperty(currency, "ep", Number(epValue ?? 0));
        info(`patchCurrency | update ep from '${getProperty(currency, "ep")}' to '${epValue}'`);
      }
    }
    if (hasProperty(currency, "sp")) {
      let spValue = getProperty(currency, "sp") || 0;
      if (!is_lazy_number(spValue))
        ;
      else if (String(spValue).startsWith("0") && String(spValue) !== "0") {
        while (String(spValue).startsWith("0")) {
          if (String(spValue) === "0") {
            break;
          }
          spValue = String(spValue).slice(1);
        }
      }
      if (!is_real_number(spValue)) {
        spValue = 0;
      }
      if (getProperty(currency, "sp") !== spValue) {
        setProperty(currency, "sp", Number(spValue ?? 0));
        info(`patchCurrency | update sp from '${getProperty(currency, "sp")}' to '${spValue}'`);
      }
    }
    if (hasProperty(currency, "cp")) {
      let cpValue = getProperty(currency, "cp") || 0;
      if (!is_lazy_number(cpValue))
        ;
      else if (String(cpValue).startsWith("0") && String(cpValue) !== "0") {
        while (String(cpValue).startsWith("0")) {
          if (String(cpValue) === "0") {
            break;
          }
          cpValue = String(cpValue).slice(1);
        }
      }
      if (!is_real_number(cpValue)) {
        cpValue = 0;
      }
      if (getProperty(currency, "cp") !== cpValue) {
        setProperty(currency, "cp", Number(cpValue ?? 0));
        info(`patchCurrency | update cp from '${getProperty(currency, "cp")}' to '${cpValue}'`);
      }
    }
    return currency;
  }
  static calculateNewAmount(actor, valueS, denom, sign) {
    if (!actor) {
      throw error(`No actor is been passed`, true);
    }
    if (isEmptyObject(valueS)) {
      throw error(`The currency value is empty or null`, true);
    }
    let money = actor.system.currency;
    money = _LazyMoneyHelpers.patchCurrency(money);
    let value2 = String(valueS);
    let isValidCurrencyDenom = false;
    for (const val of Object.values(_LazyMoneyHelpers.currencyDenomCase)) {
      if (denom === val) {
        isValidCurrencyDenom = true;
        break;
      }
    }
    if (!isValidCurrencyDenom) {
      throw error(`The currency denomination '${this.currencyDenomCase}' is not valid`, true);
    }
    const splitVal = value2.split(sign);
    let delta;
    if (splitVal.length > 1) {
      delta = Number(splitVal[1]);
    } else {
      delta = Number(splitVal[0]);
      _LazyMoneyHelpers.chatLog(
        actor,
        `${game.user?.name} on ${actor.name} has replaced ${money[denom]} ${denom} with ${delta} ${denom}.`
      );
      return;
    }
    let newAmount = {};
    if (!(denom === "ep" && game.settings.get(CONSTANTS.MODULE_ID, "ignoreElectrum"))) {
      switch (sign) {
        case _LazyMoneyHelpers.signCase.add: {
          newAmount = _LazyMoneyHelpers.addMoney(money, delta, denom);
          _LazyMoneyHelpers.chatLog(actor, `${game.user?.name} on ${actor.name} has added ${delta} ${denom}.`);
          break;
        }
        case _LazyMoneyHelpers.signCase.subtract: {
          newAmount = _LazyMoneyHelpers.removeMoney(money, delta, denom);
          _LazyMoneyHelpers.chatLog(actor, `${game.user?.name} on ${actor.name} has removed ${delta} ${denom}.`);
          if (!newAmount) {
            newAmount = money;
          }
          break;
        }
        case _LazyMoneyHelpers.signCase.equals: {
          newAmount = _LazyMoneyHelpers.updateMoney(money, delta, denom);
          _LazyMoneyHelpers.chatLog(
            actor,
            `${game.user?.name} on ${actor.name} has replaced ${money[denom]} ${denom} with ${delta} ${denom}.`
          );
          break;
        }
        default: {
          newAmount = _LazyMoneyHelpers.updateMoney(money, delta, denom);
          _LazyMoneyHelpers.chatLog(
            actor,
            `${game.user?.name} on ${actor.name} has replaced ${money[denom]} ${denom} with ${delta} ${denom}.`
          );
          break;
        }
      }
    } else {
      switch (sign) {
        case _LazyMoneyHelpers.signCase.add: {
          newAmount[denom] = money[denom] + delta;
          _LazyMoneyHelpers.chatLog(actor, `${game.user?.name} on ${actor.name} has added ${delta} ${denom}.`);
          break;
        }
        case _LazyMoneyHelpers.signCase.subtract: {
          newAmount[denom] = money[denom] - delta;
          _LazyMoneyHelpers.chatLog(actor, `${game.user?.name} on ${actor.name} has removed ${delta} ${denom}.`);
          break;
        }
        case _LazyMoneyHelpers.signCase.equals: {
          newAmount[denom] = money[denom];
          _LazyMoneyHelpers.chatLog(
            actor,
            `${game.user?.name} on ${actor.name} has replaced ${money[denom]} ${denom} with ${delta} ${denom}.`
          );
          break;
        }
        default: {
          newAmount[denom] = money[denom];
          _LazyMoneyHelpers.chatLog(
            actor,
            `${game.user?.name} on ${actor.name} has replaced ${money[denom]} ${denom} with ${delta} ${denom}.`
          );
          break;
        }
      }
    }
    return newAmount;
  }
  static chatLog(actor, money) {
    debug(`chatlog | money: ${money}`);
    if (game.settings.get(CONSTANTS.MODULE_ID, "chatLog")) {
      const msgData = {
        content: money,
        speaker: ChatMessage.getSpeaker({ actor }),
        whisper: ChatMessage.getWhisperRecipients("GM")
      };
      return ChatMessage.create(msgData);
    } else {
      return void 0;
    }
  }
  static getCpValue() {
    let cpValue = {};
    if (game.modules.get("world-currency-5e")?.active) {
      const ignorePP = game.settings.get("world-currency-5e", "ppAltRemove");
      const ignoreGP = game.settings.get("world-currency-5e", "gpAltRemove");
      const ignoreEP = game.settings.get("world-currency-5e", "epAltRemove");
      const ignoreSP = game.settings.get("world-currency-5e", "spAltRemove");
      const ignoreCP = game.settings.get("world-currency-5e", "cpAltRemove");
      let gpConvertb = game.settings.get("world-currency-5e", "gpConvert");
      if (!is_real_number(gpConvertb)) {
        gpConvertb = 1;
      } else {
        gpConvertb = gpConvertb;
      }
      let ppConvertb = game.settings.get("world-currency-5e", "ppConvert");
      if (!is_real_number(ppConvertb)) {
        ppConvertb = 0.1;
      } else {
        if (ppConvertb >= 1) {
          ppConvertb = gpConvertb / ppConvertb;
        } else {
          ppConvertb = gpConvertb * ppConvertb;
        }
      }
      let epConvertb = game.settings.get("world-currency-5e", "epConvert");
      if (!is_real_number(epConvertb)) {
        epConvertb = 5;
      } else {
        if (epConvertb >= 1) {
          epConvertb = gpConvertb * epConvertb;
        } else {
          epConvertb = gpConvertb / epConvertb;
        }
      }
      let spConvertb = game.settings.get("world-currency-5e", "spConvert");
      if (!is_real_number(spConvertb)) {
        spConvertb = 10;
      } else {
        if (spConvertb >= 1) {
          spConvertb = gpConvertb * spConvertb;
        } else {
          spConvertb = gpConvertb / spConvertb;
        }
      }
      let cpConvertb = game.settings.get("world-currency-5e", "cpConvert");
      if (!is_real_number(cpConvertb)) {
        cpConvertb = 100;
      } else {
        if (cpConvertb >= 1) {
          cpConvertb = gpConvertb * cpConvertb;
        } else {
          cpConvertb = gpConvertb / cpConvertb;
        }
      }
      const ppConvert = gpConvertb / ppConvertb * cpConvertb;
      const gpConvert = gpConvertb * cpConvertb;
      const epConvert = gpConvertb / epConvertb * cpConvertb;
      const spConvert = gpConvertb / spConvertb * cpConvertb;
      const cpConvert = 1;
      if (ignorePP && ignoreGP && ignoreEP && ignoreSP && ignoreCP) {
        cpValue = {};
      }
      if (ignorePP && ignoreGP && ignoreEP && ignoreSP && !ignoreCP) {
        cpValue = {
          cp: { value: cpConvert, up: "", down: "" }
        };
      }
      if (ignorePP && ignoreGP && ignoreEP && !ignoreSP && ignoreCP) {
        cpValue = {
          sp: { value: cpConvert, up: "", down: "" }
        };
      }
      if (ignorePP && ignoreGP && ignoreEP && !ignoreSP && !ignoreCP) {
        cpValue = {
          sp: { value: spConvert, up: "", down: "cp" },
          cp: { value: cpConvert, up: "sp", down: "" }
        };
      }
      if (ignorePP && ignoreGP && !ignoreEP && ignoreSP && ignoreCP) {
        cpValue = {
          ep: { value: cpConvert, up: "", down: "" }
        };
      }
      if (ignorePP && ignoreGP && !ignoreEP && ignoreSP && !ignoreCP) {
        cpValue = {
          ep: { value: epConvert, up: "", down: "sp" },
          cp: { value: cpConvert, up: "ep", down: "" }
        };
      }
      if (ignorePP && ignoreGP && !ignoreEP && !ignoreSP && ignoreCP) {
        cpValue = {
          ep: { value: epConvert, up: "", down: "sp" },
          sp: { value: spConvert, up: "ep", down: "" }
        };
      }
      if (ignorePP && ignoreGP && !ignoreEP && !ignoreSP && !ignoreCP) {
        cpValue = {
          ep: { value: epConvert, up: "", down: "sp" },
          sp: { value: spConvert, up: "ep", down: "cp" },
          cp: { value: cpConvert, up: "sp", down: "" }
        };
      }
      if (ignorePP && !ignoreGP && ignoreEP && ignoreSP && ignoreCP) {
        cpValue = {
          gp: { value: gpConvert, up: "", down: "sp" },
          sp: { value: spConvert, up: "gp", down: "cp" },
          cp: { value: cpConvert, up: "sp", down: "" }
        };
      }
      if (ignorePP && !ignoreGP && ignoreEP && ignoreSP && !ignoreCP) {
        cpValue = {
          gp: { value: gpConvert, up: "", down: "cp" },
          cp: { value: cpConvert, up: "gp", down: "" }
        };
      }
      if (ignorePP && !ignoreGP && ignoreEP && !ignoreSP && ignoreCP) {
        cpValue = {
          gp: { value: gpConvert, up: "", down: "sp" },
          sp: { value: spConvert, up: "gp", down: "" }
        };
      }
      if (ignorePP && !ignoreGP && ignoreEP && !ignoreSP && !ignoreCP) {
        cpValue = {
          gp: { value: gpConvert, up: "", down: "sp" },
          sp: { value: spConvert, up: "gp", down: "cp" },
          cp: { value: cpConvert, up: "sp", down: "" }
        };
      }
      if (ignorePP && !ignoreGP && !ignoreEP && ignoreSP && ignoreCP) {
        cpValue = {
          gp: { value: gpConvert, up: "", down: "ep" },
          ep: { value: epConvert, up: "gp", down: "" }
        };
      }
      if (ignorePP && !ignoreGP && !ignoreEP && ignoreSP && !ignoreCP) {
        cpValue = {
          gp: { value: gpConvert, up: "", down: "ep" },
          ep: { value: epConvert, up: "gp", down: "cp" },
          cp: { value: cpConvert, up: "ep", down: "" }
        };
      }
      if (ignorePP && !ignoreGP && !ignoreEP && !ignoreSP && ignoreCP) {
        cpValue = {
          gp: { value: gpConvert, up: "", down: "ep" },
          ep: { value: epConvert, up: "gp", down: "sp" },
          sp: { value: spConvert, up: "ep", down: "" }
        };
      }
      if (ignorePP && !ignoreGP && !ignoreEP && !ignoreSP && !ignoreCP) {
        cpValue = {
          gp: { value: gpConvert, up: "", down: "ep" },
          ep: { value: epConvert, up: "gp", down: "sp" },
          sp: { value: spConvert, up: "ep", down: "cp" },
          cp: { value: cpConvert, up: "sp", down: "" }
        };
      }
      if (!ignorePP && ignoreGP && ignoreEP && ignoreSP && ignoreCP) {
        cpValue = {
          pp: { value: cpConvert, up: "", down: "" }
        };
      }
      if (!ignorePP && ignoreGP && ignoreEP && ignoreSP && !ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "cp" },
          cp: { value: cpConvert, up: "pp", down: "" }
        };
      }
      if (!ignorePP && ignoreGP && ignoreEP && !ignoreSP && ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "sp" },
          sp: { value: spConvert, up: "pp", down: "" }
        };
      }
      if (!ignorePP && ignoreGP && ignoreEP && !ignoreSP && !ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "sp" },
          sp: { value: spConvert, up: "pp", down: "cp" },
          cp: { value: cpConvert, up: "sp", down: "" }
        };
      }
      if (!ignorePP && ignoreGP && !ignoreEP && ignoreSP && ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "ep" },
          ep: { value: epConvert, up: "pp", down: "" }
        };
      }
      if (!ignorePP && ignoreGP && !ignoreEP && ignoreSP && !ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "ep" },
          ep: { value: epConvert, up: "pp", down: "cp" },
          cp: { value: cpConvert, up: "ep", down: "" }
        };
      }
      if (!ignorePP && ignoreGP && !ignoreEP && !ignoreSP && ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "ep" },
          ep: { value: epConvert, up: "pp", down: "sp" },
          sp: { value: spConvert, up: "ep", down: "" }
        };
      }
      if (!ignorePP && ignoreGP && !ignoreEP && !ignoreSP && !ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "ep" },
          ep: { value: epConvert, up: "pp", down: "sp" },
          sp: { value: spConvert, up: "ep", down: "cp" },
          cp: { value: cpConvert, up: "sp", down: "" }
        };
      }
      if (!ignorePP && !ignoreGP && ignoreEP && ignoreSP && ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "gp" },
          gp: { value: gpConvert, up: "pp", down: "" }
        };
      }
      if (!ignorePP && !ignoreGP && ignoreEP && ignoreSP && !ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "gp" },
          gp: { value: gpConvert, up: "pp", down: "cp" },
          cp: { value: cpConvert, up: "gp", down: "" }
        };
      }
      if (!ignorePP && !ignoreGP && ignoreEP && !ignoreSP && ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "gp" },
          gp: { value: gpConvert, up: "pp", down: "sp" },
          sp: { value: spConvert, up: "gp", down: "" }
        };
      }
      if (!ignorePP && !ignoreGP && ignoreEP && !ignoreSP && !ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "gp" },
          gp: { value: gpConvert, up: "pp", down: "sp" },
          sp: { value: spConvert, up: "gp", down: "cp" },
          cp: { value: cpConvert, up: "sp", down: "" }
        };
      }
      if (!ignorePP && !ignoreGP && !ignoreEP && ignoreSP && ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "gp" },
          gp: { value: gpConvert, up: "pp", down: "ep" },
          ep: { value: epConvert, up: "gp", down: "" }
        };
      }
      if (!ignorePP && !ignoreGP && !ignoreEP && ignoreSP && !ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "gp" },
          gp: { value: gpConvert, up: "pp", down: "ep" },
          ep: { value: epConvert, up: "gp", down: "cp" },
          cp: { value: cpConvert, up: "ep", down: "" }
        };
      }
      if (!ignorePP && !ignoreGP && !ignoreEP && !ignoreSP && ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "gp" },
          gp: { value: gpConvert, up: "pp", down: "ep" },
          ep: { value: epConvert, up: "gp", down: "sp" },
          sp: { value: spConvert, up: "ep", down: "" }
        };
      }
      if (!ignorePP && !ignoreGP && !ignoreEP && !ignoreSP && !ignoreCP) {
        cpValue = {
          pp: { value: ppConvert, up: "", down: "gp" },
          gp: { value: gpConvert, up: "pp", down: "ep" },
          ep: { value: epConvert, up: "gp", down: "sp" },
          sp: { value: spConvert, up: "ep", down: "cp" },
          cp: { value: cpConvert, up: "sp", down: "" }
        };
      }
    } else {
      if (game.settings.get(CONSTANTS.MODULE_ID, "ignoreElectrum")) {
        cpValue = {
          pp: { value: 1e3, up: "", down: "gp" },
          gp: { value: 100, up: "pp", down: "sp" },
          sp: { value: 10, up: "gp", down: "cp" },
          cp: { value: 1, up: "sp", down: "" }
        };
      } else {
        cpValue = {
          pp: { value: 1e3, up: "", down: "gp" },
          gp: { value: 100, up: "pp", down: "ep" },
          ep: { value: 50, up: "gp", down: "sp" },
          sp: { value: 10, up: "ep", down: "cp" },
          cp: { value: 1, up: "sp", down: "" }
        };
      }
    }
    let total = 1;
    const convert = CONFIG.DND5E.currencies;
    Object.values(convert).reverse().forEach((v) => {
      if (v.conversion !== void 0) {
        total *= v.conversion.each;
        if (cpValue[v.conversion.into]) {
          cpValue[v.conversion.into].value = total;
        }
      }
    });
    return cpValue;
  }
  static getDelta(delta, denom) {
    const cpValue = _LazyMoneyHelpers.getCpValue();
    let newDelta = {};
    delta *= cpValue[denom].value;
    for (let key in cpValue) {
      const myValue = cpValue[key].value;
      let intDiv = Number(~~(delta / myValue));
      if (intDiv > 0) {
        newDelta[key] = intDiv;
        delta %= myValue;
      }
    }
    return newDelta;
  }
  static scaleDown(oldAmount, denom) {
    const cpValue = _LazyMoneyHelpers.getCpValue();
    const up = cpValue[denom].up;
    let newAmount = oldAmount;
    if (newAmount[up] > 0) {
      newAmount[up] -= 1;
      newAmount[denom] += ~~(cpValue[up].value / cpValue[denom].value);
      return newAmount;
    } else if (newAmount[up] === 0) {
      newAmount = _LazyMoneyHelpers.scaleDown(newAmount, up);
      _LazyMoneyHelpers.scaleDown(newAmount, denom);
      return newAmount;
    } else {
      return false;
    }
  }
  static addMoney(oldAmount, delta, denom) {
    const cpValue = _LazyMoneyHelpers.getCpValue();
    let newAmount = {};
    if (game.settings.get(CONSTANTS.MODULE_ID, "addConvert")) {
      let cpDelta = delta * cpValue[denom].value;
      for (let key in cpValue) {
        const myValue = cpValue[key].value;
        newAmount[key] = oldAmount[key] + ~~(cpDelta / myValue);
        cpDelta %= myValue;
      }
    } else {
      newAmount[denom] = oldAmount[denom] + delta;
    }
    return newAmount;
  }
  static removeMoney(oldAmount, delta, denom) {
    const cpValue = _LazyMoneyHelpers.getCpValue();
    let newAmount = oldAmount;
    let newDelta = {};
    let down;
    if (oldAmount[denom] >= delta) {
      newAmount[denom] = oldAmount[denom] - delta;
      return newAmount;
    } else {
      newDelta = _LazyMoneyHelpers.getDelta(delta, denom);
      const myValue = cpValue[denom].value;
      delta = delta * myValue;
    }
    if (_LazyMoneyHelpers.totalMoney(oldAmount) >= delta) {
      for (let [key, value2] of Object.entries(newDelta)) {
        if (newAmount[key] >= value2) {
          newAmount[key] -= value2;
        } else if (_LazyMoneyHelpers.scaleDown(newAmount, key)) {
          newAmount[key] -= value2;
        } else {
          newAmount = oldAmount;
          while (newAmount[key] <= value2 && _LazyMoneyHelpers.totalMoney(newAmount) > 0 && key !== "cp") {
            down = cpValue[key].down;
            value2 -= newAmount[key];
            newAmount[key] = 0;
            const myValue = cpValue[key].value;
            const myDown = cpValue[down].value;
            value2 *= ~~(myValue / myDown);
            key = down;
          }
          newAmount[key] -= value2;
        }
      }
      return newAmount;
    } else {
      return false;
    }
  }
  // TODO old amount is not used ?
  static updateMoney(oldAmount, delta, denom) {
    let newAmount = {};
    newAmount[denom] = delta;
    return newAmount;
  }
  static totalMoney(money) {
    const cpValue = _LazyMoneyHelpers.getCpValue();
    let total = 0;
    for (let key in cpValue) {
      const myValue = cpValue[key].value;
      total += money[key] * myValue;
    }
    return total;
  }
  /* ============================================== */
  // https://oatcookies.neocities.org/dndmoney
  static I(str) {
    return Number.parseInt(str, 10);
  }
  static F(str) {
    return Number.parseFloat(str);
  }
  static N(value2) {
    if (Number.isNaN(value2)) {
      return 0;
    }
    return value2;
  }
  static recalcItemPriceValue(priceValue, priceDenom) {
    let copper = 0;
    let silver = 0;
    let gold = 0;
    let electrum = 0;
    let platinum = 0;
    if (priceDenom === "cp") {
      copper = _LazyMoneyHelpers.N(_LazyMoneyHelpers.F(priceValue));
    }
    if (priceDenom === "sp") {
      silver = _LazyMoneyHelpers.N(_LazyMoneyHelpers.F(priceValue));
    }
    if (priceDenom === "gp") {
      gold = _LazyMoneyHelpers.N(_LazyMoneyHelpers.F(priceValue));
    }
    if (priceDenom === "ep") {
      electrum = _LazyMoneyHelpers.N(_LazyMoneyHelpers.F(priceValue));
    }
    if (priceDenom === "pp") {
      platinum = _LazyMoneyHelpers.N(_LazyMoneyHelpers.F(priceValue));
    }
    const pennies = copper + 10 * silver + 50 * electrum + 100 * gold + 1e3 * platinum;
    return _LazyMoneyHelpers.recalc_pennies(pennies);
  }
  static recalc_pennies(pennies) {
    const copper = pennies % 10;
    const silver = (pennies - copper) % 100 / 10;
    const gold = (pennies - copper - 10 * silver) / 100;
    const electrum = gold * 2;
    const platinum = gold / 10;
    return {
      gold,
      silver,
      copper,
      electrum,
      platinum
    };
  }
};
__name(_LazyMoneyHelpers, "LazyMoneyHelpers");
/* =============================================== */
__publicField(_LazyMoneyHelpers, "signCase", {
  add: "+",
  subtract: "-",
  equals: "=",
  default: " "
});
__publicField(_LazyMoneyHelpers, "currencyDenomCase", {
  cp: "cp",
  sp: "sp",
  ep: "ep",
  gp: "gp",
  pp: "pp"
});
let LazyMoneyHelpers = _LazyMoneyHelpers;
function debug(msg, args = "") {
  if (game.settings.get(CONSTANTS.MODULE_NAME, "debug")) {
    console.log(`DEBUG | ${CONSTANTS.MODULE_NAME} | ${msg}`, args);
  }
  return msg;
}
__name(debug, "debug");
function log(message) {
  message = `${CONSTANTS.MODULE_NAME} | ${message}`;
  console.log(message.replace("<br>", "\n"));
  return message;
}
__name(log, "log");
function info(info2, notify = false) {
  info2 = `${CONSTANTS.MODULE_NAME} | ${info2}`;
  if (notify)
    ui.notifications?.info(info2);
  console.log(info2.replace("<br>", "\n"));
  return info2;
}
__name(info, "info");
function warn(warning, notify = false) {
  warning = `${CONSTANTS.MODULE_NAME} | ${warning}`;
  if (notify)
    ui.notifications?.warn(warning);
  console.warn(warning.replace("<br>", "\n"));
  return warning;
}
__name(warn, "warn");
function error$1(error2, notify = true) {
  error2 = `${CONSTANTS.MODULE_NAME} | ${error2}`;
  if (notify)
    ui.notifications?.error(error2);
  return new Error(error2.replace("<br>", "\n"));
}
__name(error$1, "error$1");
function is_real_number(inNumber) {
  return !isNaN(inNumber) && typeof inNumber === "number" && isFinite(inNumber);
}
__name(is_real_number, "is_real_number");
function isEmptyObject(obj) {
  if (obj === null || obj === void 0) {
    return true;
  }
  const result = obj && // null and undefined check
  Object.keys(obj).length === 0;
  return result;
}
__name(isEmptyObject, "isEmptyObject");
function is_lazy_number(inNumber) {
  const isSign = String(inNumber).startsWith(LazyMoneyHelpers.signCase.add) || String(inNumber).startsWith(LazyMoneyHelpers.signCase.subtract) || String(inNumber).startsWith(LazyMoneyHelpers.signCase.equals) || String(inNumber).startsWith(LazyMoneyHelpers.signCase.default);
  if (isSign) {
    const withoutFirst = String(inNumber).slice(1);
    return is_real_number(withoutFirst);
  } else {
    return true;
  }
}
__name(is_lazy_number, "is_lazy_number");
function getActor(target) {
  if (stringIsUuid(target)) {
    target = fromUuidSync(target);
  }
  if (!(target instanceof CONFIG.Actor.documentClass)) {
    throw error$1(`Invalid actor`, true);
  }
  return target;
}
__name(getActor, "getActor");
function stringIsUuid(inId) {
  return typeof inId === "string" && (inId.match(/\./g) || []).length && !inId.endsWith(".");
}
__name(stringIsUuid, "stringIsUuid");
const registerSettings = /* @__PURE__ */ __name(function() {
  game.settings.registerMenu(CONSTANTS.MODULE_NAME, "resetAllSettings", {
    name: `${CONSTANTS.MODULE_NAME}.setting.reset.name`,
    hint: `${CONSTANTS.MODULE_NAME}.setting.reset.hint`,
    icon: "fas fa-coins",
    type: ResetSettingsDialog,
    restricted: true
  });
  game.settings.register(CONSTANTS.MODULE_NAME, "enable", {
    name: `${CONSTANTS.MODULE_NAME}.setting.enable.name`,
    hint: `${CONSTANTS.MODULE_NAME}.setting.enable.hint`,
    scope: "client",
    config: true,
    default: true,
    type: Boolean
  });
  game.settings.register(CONSTANTS.MODULE_NAME, "addConvert", {
    name: `${CONSTANTS.MODULE_NAME}.setting.addConvert.name`,
    hint: `${CONSTANTS.MODULE_NAME}.setting.addConvert.hint`,
    scope: "client",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register(CONSTANTS.MODULE_NAME, "ignoreElectrum", {
    name: `${CONSTANTS.MODULE_NAME}.setting.ignoreElectrum.name`,
    hint: `${CONSTANTS.MODULE_NAME}.setting.ignoreElectrum.hint`,
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register(CONSTANTS.MODULE_NAME, "chatLog", {
    name: `${CONSTANTS.MODULE_NAME}.setting.chatLog.name`,
    hint: `${CONSTANTS.MODULE_NAME}.setting.chatLog.hint`,
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });
  game.settings.register(CONSTANTS.MODULE_NAME, "debug", {
    name: `${CONSTANTS.MODULE_NAME}.setting.debug.name`,
    hint: `${CONSTANTS.MODULE_NAME}.setting.debug.hint`,
    scope: "client",
    config: true,
    default: false,
    type: Boolean
  });
}, "registerSettings");
const _ResetSettingsDialog = class _ResetSettingsDialog extends FormApplication {
  constructor(...args) {
    super(...args);
    return new Dialog({
      title: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.dialogs.resetsettings.title`),
      content: '<p style="margin-bottom:1rem;">' + game.i18n.localize(`${CONSTANTS.MODULE_NAME}.dialogs.resetsettings.content`) + "</p>",
      buttons: {
        confirm: {
          icon: '<i class="fas fa-check"></i>',
          label: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.dialogs.resetsettings.confirm`),
          callback: async () => {
            const worldSettings = game.settings.storage?.get("world")?.filter((setting) => setting.key.startsWith(`${CONSTANTS.MODULE_NAME}.`));
            for (let setting of worldSettings) {
              console.log(`Reset setting '${setting.key}'`);
              await setting.delete();
            }
          }
        },
        cancel: {
          icon: '<i class="fas fa-times"></i>',
          label: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.dialogs.resetsettings.cancel`)
        }
      },
      default: "cancel"
    });
  }
  async _updateObject(event, formData) {
  }
};
__name(_ResetSettingsDialog, "ResetSettingsDialog");
let ResetSettingsDialog = _ResetSettingsDialog;
const API = {
  async manageCurrency(inAttributes) {
    if (typeof inAttributes !== "object") {
      throw error("addCurrency | inAttributes must be of type object");
    }
    return await LazyMoneyHelpers.manageCurrency(
      inAttributes.actor,
      inAttributes.currencyValue,
      inAttributes.currencyDenom
    );
  },
  async addCurrency(inAttributes) {
    if (typeof inAttributes !== "object") {
      throw error("addCurrency | inAttributes must be of type object");
    }
    return await LazyMoneyHelpers.addCurrency(
      inAttributes.actor,
      inAttributes.currencyValue,
      inAttributes.currencyDenom
    );
  },
  async subtractCurrency(inAttributes) {
    if (typeof inAttributes !== "object") {
      throw error("subtractCurrency | inAttributes must be of type object");
    }
    return await LazyMoneyHelpers.subtractCurrency(
      inAttributes.actor,
      inAttributes.currencyValue,
      inAttributes.currencyDenom
    );
  },
  async convertToGold(inAttributes) {
    if (typeof inAttributes !== "object") {
      throw error("convertToGold| inAttributes must be of type object");
    }
    return await LazyMoneyHelpers.convertToGold(inAttributes.currencyValue, inAttributes.currencyDenom);
  },
  async convertToSilver(inAttributes) {
    if (typeof inAttributes !== "object") {
      throw error("convertToSilver | inAttributes must be of type object");
    }
    return await LazyMoneyHelpers.convertToSilver(inAttributes.currencyValue, inAttributes.currencyDenom);
  },
  async convertToCopper(inAttributes) {
    if (typeof inAttributes !== "object") {
      throw error("convertToCopper | inAttributes must be of type object");
    }
    return await LazyMoneyHelpers.convertToCopper(inAttributes.currencyValue, inAttributes.currencyDenom);
  },
  async convertToElectrum(inAttributes) {
    if (typeof inAttributes !== "object") {
      throw error("convertToElectrum | inAttributes must be of type object");
    }
    return await LazyMoneyHelpers.convertToElectrum(inAttributes.currencyValue, inAttributes.currencyDenom);
  },
  async convertToPlatinum(inAttributes) {
    if (typeof inAttributes !== "object") {
      throw error("convertToPlatinum | inAttributes must be of type object");
    }
    return await LazyMoneyHelpers.convertToPlatinum(inAttributes.currencyValue, inAttributes.currencyDenom);
  }
};
function _onChangeCurrency(ev) {
  const input = ev.target;
  const actor = ev.data.app.actor;
  const sheet = ev.data.app.options;
  let money = ev.data.app.actor.system.currency;
  money = LazyMoneyHelpers.patchCurrency(money);
  const denom = input.name.split(".")[2];
  const value2 = input.value;
  let sign = LazyMoneyHelpers.signCase.default;
  for (const val of Object.values(LazyMoneyHelpers.signCase)) {
    if (value2.includes(val)) {
      sign = val;
      break;
    }
  }
  let newAmount = LazyMoneyHelpers.calculateNewAmount(actor, value2, denom, sign);
  flash(input);
  if (Object.keys(newAmount).length > 0) {
    sheet.submitOnChange = false;
    actor.update({ "system.currency": newAmount }).then(() => {
      input.value = Number(getProperty(actor, input.name) ?? 0);
      sheet.submitOnChange = true;
    }).catch(console.log.bind(console));
  }
}
__name(_onChangeCurrency, "_onChangeCurrency");
function flash(input) {
  input.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  setTimeout(() => {
    input.style.backgroundColor = "";
  }, 150);
}
__name(flash, "flash");
function applyLazyMoney(app, html, actorData) {
  if (!game.settings.get(CONSTANTS.MODULE_ID, "enable")) {
    return;
  }
  for (const elem of html.find("input[name^='system.currency']")) {
    elem.type = "text";
    elem.classList.add("lazymoney");
  }
  html.find("input[name^='system.currency']").off("change");
  html.find("input[name^='system.currency']").change(
    {
      app,
      data: actorData
    },
    _onChangeCurrency
  );
}
__name(applyLazyMoney, "applyLazyMoney");
const setupHooks = /* @__PURE__ */ __name(() => {
  setApi(API);
}, "setupHooks");
const readyHooks = /* @__PURE__ */ __name(async () => {
  log("Initializing lazymoney");
  Object.keys(CONFIG.Actor.sheetClasses.character).forEach((key) => {
    let sheet = key.split(".")[1];
    try {
      Hooks.on("render" + sheet, (app, html, actorData) => {
        applyLazyMoney(app, html, actorData);
      });
    } catch (error2) {
      warn("lazymoney can't hook to " + key);
    }
  });
  Object.keys(CONFIG.Actor.sheetClasses.npc).forEach((key) => {
    let sheet = key.split(".")[1];
    try {
      Hooks.on("render" + sheet, (app, html, actorData) => {
        applyLazyMoney(app, html, actorData);
      });
    } catch (error2) {
      warn("lazymoney can't hook to " + key);
    }
  });
}, "readyHooks");
Hooks.once("init", async () => {
  registerSettings();
});
Hooks.once("setup", function() {
  setupHooks();
});
Hooks.once("ready", async () => {
  readyHooks();
});
Hooks.once("devModeReady", ({ registerPackageDebugFlag }) => {
  registerPackageDebugFlag(CONSTANTS.MODULE_NAME);
});
function setApi(api) {
  const data = game.modules.get(CONSTANTS.MODULE_NAME);
  data.api = api;
}
__name(setApi, "setApi");
function getApi() {
  const data = game.modules.get(CONSTANTS.MODULE_NAME);
  return data.api;
}
__name(getApi, "getApi");
function setSocket(socket) {
  const data = game.modules.get(CONSTANTS.MODULE_NAME);
  data.socket = socket;
}
__name(setSocket, "setSocket");
function getSocket() {
  const data = game.modules.get(CONSTANTS.MODULE_NAME);
  return data.socket;
}
__name(getSocket, "getSocket");
export {
  getApi,
  getSocket,
  setApi,
  setSocket
};
//# sourceMappingURL=module.js.map
