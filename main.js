class Keyboard {
  constructor() {
    this.keys = {
      0: { ru: "ё", en: "`", ctrl: "" },
      1: { ru: "1", en: "", ctrl: "" },
      2: { ru: "2", en: "", ctrl: "" },
      3: { ru: "3", en: "", ctrl: "" },
      4: { ru: "4", en: "", ctrl: "" },
      5: { ru: "5", en: "", ctrl: "" },
      6: { ru: "6", en: "", ctrl: "" },
      7: { ru: "7", en: "", ctrl: "" },
      8: { ru: "8", en: "", ctrl: "" },
      9: { ru: "9", en: "", ctrl: "" },
      10: { ru: "0", en: "", ctrl: "" },
      11: { ru: "-", en: "", ctrl: "" },
      12: { ru: "=", en: "", ctrl: "" },
      13: ["Backspace", "key__func", "key__backspace"],

      14: ["Tab", "key__func", "key__tab"],  //Tab
      15: { ru: "й", en: ""},
      16: { ru: "ц", en: ""},
      17: { ru: "у", en: ""},
      18: { ru: "к", en: ""},
      19: { ru: "е", en: ""},
      20: { ru: "н", en: ""},
      21: { ru: "г", en: ""},
      22: { ru: "ш", en: ""},
      23: { ru: "щ", en: ""},
      24: { ru: "з", en: ""},
      25: { ru: "х", en: ""},
      26: { ru: "ъ", en: ""},
      27: ["Del", "key__func", "key__del"],  //Delete

      28: ["CapsLock", "key__func", "key__caps"], //CapsLock
      29: { ru: "ф", en: ""},
      30: { ru: "ы", en: ""},
      31: { ru: "в", en: ""},
      32: { ru: "а", en: ""},
      33: { ru: "п", en: ""},
      34: { ru: "р", en: ""},
      35: { ru: "о", en: ""},
      36: { ru: "л", en: ""},
      37: { ru: "д", en: ""},
      38: { ru: "ж", en: ""},
      39: { ru: "э", en: ""},
      40: ["Enter", "key__func", "key__enter"],  //Enter

      41: ["Shift", "key__func", "key__l-shift"], // Left Shift
      42: { ru: "\\", en: ""},
      43: { ru: "я", en: ""},
      44: { ru: "ч", en: ""},
      45: { ru: "с", en: ""},
      46: { ru: "м", en: ""},
      47: { ru: "и", en: ""},
      48: { ru: "т", en: ""},
      49: { ru: "ь", en: ""},
      50: { ru: "б", en: ""},
      51: { ru: "ю", en: ""},
      52: { ru: ".", en: ""},
      53: ["↑", "key__func", "key__arrow"],
      54: ["Shift", "key__func", "key__r-shift"],  //Right Shift

      55: ["Ctrl", "key__func", "key__ctrl"],
      56: ["Win", "key__func", "key__win-alt"],
      57: ["Alt", "key__func", "key__win-alt"],
      58: ["Space", "key__func", "key__space"],
      59: ["Alt", "key__func", "key__win-alt"],
      60: ["Ctrl", "key__func", "key__ctrl"],
      61: ["←", "key__func", "key__arrow"],
      62: ["↓", "key__func", "key__arrow"],
      63: ["→", "key__func", "key__arrow"], //
    }

    this.length = this.__keyLength();
    this.keyboardElement = null;
    this.textarea = null;
    this.textField = null;
    this.language = "ru";
    this.caps = false;
    this.buffer = "";  // For saving text
    this.pressed = new Set(); // To store clamped (pressed) keys (note Alt + Shift)
  
    //Allow to delete the event handler 
    //so that it doesn't duplicate the output characters
    //after chanding the language
    this.keydownHandler = event => this.__keydownFunction(event);
    this.keyupHadler = event => this.__keyupFunction(event);
    this.clickHandler = event => this.__clickFunction(event);

  }

  __keyLength() {
    let counter = 0;
    for (let key in this.keys) {
      counter++;
    }
    return counter;
  }

  __keydownFunction(event) {

  }
  __keyupFunction(event) {

  }
  __clickFunction(event) {

  }
}

module.exports = Keyboard;