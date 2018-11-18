(function () {
    const bankOne = [{
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    }, {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    }, {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    }, {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    }, {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    }, {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    }, {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    }, {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    }, {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
    ];

    const bankTwo = [{
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Chord-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    }, {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Chord-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    }, {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Chord-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    }, {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Shaker',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    }, {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    }, {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    }, {
        keyCode: 90,
        keyTrigger: 'Z',
        id: 'Punchy-Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    }, {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Side-Stick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    }, {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Snare',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }];

    function $class(cl) {
        return document.getElementsByClassName(cl);
    }

    const btnQ = $class("btnQ")[0];
    const btnW = $class("btnW")[0];
    const btnE = $class("btnE")[0];
    const btnA = $class("btnA")[0];
    const btnS = $class("btnS")[0];
    const btnD = $class("btnD")[0];
    const btnZ = $class("btnZ")[0];
    const btnX = $class("btnX")[0];
    const btnC = $class("btnC")[0];
    const audio = $class("audio")[0];
    const soundName = $class("sound-name")[0];
    const pwrBtn = $class("power-btn")[0];
    const bankBtn = $class("bank-btn")[0];
    const powerP = $class("pwr-p")[0];

    function playSound(key, bankMode) {
        for(let i = 0; i < bankMode.length; i++) {
            if(key === bankMode[i].keyTrigger) {
                soundName.innerHTML = bankMode[i].id;
                audio.setAttribute("src", bankMode[i].url);
                checkPower();
            }
        }
    }

    function checkPower() {
        const pwrBtn = $class("power-btn")[0];
        const sliderVol = $class("slider")[0].value;
        if(pwrBtn.id === "green") {
            audio.volume = sliderVol/100;
            audio.play();
        } else {
            audio.volume = 0;
        }
    }

    function checkMode() {
        const bankBtn = $class("bank-btn")[0];
        if(bankBtn.innerHTML === "Mode 1") {
            return bankOne;
        } else {
            return bankTwo;
        }
    }

    pwrBtn.addEventListener("click", function() {
        if(this.id === "green") {
            this.style.backgroundColor = "red";
            this.id = "red";
        } else {
            this.style.backgroundColor = "green";
            this.id = "green";
        }
        powerP.innerHTML = "Power";
    });

    bankBtn.addEventListener("click", function() {
        if(bankBtn.innerHTML === "Mode 1") {
            bankBtn.innerHTML = "Mode 2";
        } else {
            bankBtn.innerHTML = "Mode 1"
        }
    });

    function addLisOnBtn(elem, key) {
        elem.addEventListener("click", function() {
            playSound(key, checkMode());
        });
    }

    addLisOnBtn(btnQ, 'Q');
    addLisOnBtn(btnW, 'W');
    addLisOnBtn(btnE, 'E');
    addLisOnBtn(btnA, 'A');
    addLisOnBtn(btnS, 'S');
    addLisOnBtn(btnD, 'D');
    addLisOnBtn(btnZ, 'Z');
    addLisOnBtn(btnX, 'X');
    addLisOnBtn(btnC, 'C');
    /*
    btnQ.addEventListener("click", function() {
        playSound('Q', checkMode());
    });
    btnW.addEventListener("click", function() {
        playSound('W', checkMode());
    });
    btnE.addEventListener("click", function() {
        playSound('E', checkMode());
    });
    btnA.addEventListener("click", function() {
        playSound('A', checkMode());
    });
    btnS.addEventListener("click", function() {
        playSound('S', checkMode());
    });
    btnD.addEventListener("click", function() {
        playSound('D', checkMode());
    });
    btnZ.addEventListener("click", function() {
        playSound('Z', checkMode());
    });
    btnX.addEventListener("click", function() {
        playSound('X', checkMode());
    });
    btnC.addEventListener("click", function() {
        playSound('C', checkMode());
    });
    */

    function whichKey(key) {
        let arr = checkMode();
        for(let i = 0; i < arr.length; i++) {
            if(key === arr[i].keyCode) {
                playSound(arr[i].keyTrigger, arr);
            }
        }
    }
    
    document.addEventListener("keypress", function() {
        whichKey(event.keyCode);
    });
    /*
    document.addEventListener("keypress", function() {
        if(event.keyCode === checkMode()[0].keyCode) { 
            playSound('Q', checkMode());
        } else if(event.keyCode === checkMode()[1].keyCode) {
            playSound('W', checkMode());
        } else if(event.keyCode === checkMode()[2].keyCode) {
            playSound('E', checkMode());
        } else if(event.keyCode === checkMode()[3].keyCode) {
            playSound('A', checkMode());
        } else if(event.keyCode === checkMode()[4].keyCode) {
            playSound('S', checkMode());
        } else if(event.keyCode === checkMode()[5].keyCode) {
            playSound('D', checkMode());
        } else if(event.keyCode === checkMode()[6].keyCode) {
            playSound('Z', checkMode());
        } else if(event.keyCode === checkMode()[7].keyCode) {
            playSound('X', checkMode());
        } else if(event.keyCode === checkMode()[8].keyCode) {
            playSound('C', checkMode());
        }
    });
    */
})()