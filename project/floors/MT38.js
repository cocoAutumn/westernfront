main.floors.MT38=
{
    "floorId": "MT38",
    "title": "英吉利海峡",
    "name": "英吉利海峡",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "gaijin2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,10": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    7,
                    9
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,13": [
            {
                "type": "unloadEquip",
                "pos": 0
            },
            {
                "type": "unloadEquip",
                "pos": 1
            },
            {
                "type": "unloadEquip",
                "pos": 2
            },
            {
                "type": "unloadEquip",
                "pos": 3
            },
            {
                "type": "unloadEquip",
                "pos": 4
            },
            {
                "type": "unloadEquip",
                "pos": 5
            },
            {
                "type": "unloadEquip",
                "pos": 6
            },
            {
                "type": "function",
                "function": "function(){\nflags.mission[6][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(item:tea>=20)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[6][2]=true\n}"
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\nflags.skillList=[0,0,0,0,0,0,0]\n}"
            },
            {
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "hideStatusBar"
            },
            {
                "type": "update"
            },
            {
                "type": "sleep",
                "time": 1000
            },
            {
                "type": "playSound",
                "name": "158-Skill02.mp3"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "win.png",
                "sloc": [
                    0,
                    0,
                    null
                ],
                "loc": [
                    -370,
                    140,
                    1280,
                    200
                ],
                "opacity": 1,
                "time": 0
            },
            {
                "type": "scaleImage",
                "code": 1,
                "center": [
                    190,
                    200
                ],
                "scale": 0.4,
                "time": 1000
            },
            {
                "type": "function",
                "function": "function(){\nvar a = flags.mission[core.getFlag('stage')];\ncore.setFlag('@temp@A', a[0] + a[1] + a[2]);\n}"
            },
            {
                "type": "if",
                "condition": "(temp:A>=1)",
                "true": [
                    {
                        "type": "playSound",
                        "name": "xinxinbazhe.mp3"
                    },
                    {
                        "type": "showImage",
                        "code": 2,
                        "image": "star.png",
                        "sloc": [
                            0,
                            0,
                            null
                        ],
                        "loc": [
                            130,
                            50,
                            90,
                            90
                        ],
                        "opacity": 1,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "if",
                        "condition": "(temp:A>=2)",
                        "true": [
                            {
                                "type": "playSound",
                                "name": "xinxinbazhe.mp3"
                            },
                            {
                                "type": "showImage",
                                "code": 3,
                                "image": "star.png",
                                "sloc": [
                                    0,
                                    0,
                                    null
                                ],
                                "loc": [
                                    280,
                                    50,
                                    90,
                                    90
                                ],
                                "opacity": 1,
                                "time": 500,
                                "async": true
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "if",
                                "condition": "(temp:A>=3)",
                                "true": [
                                    {
                                        "type": "playSound",
                                        "name": "xinxinbazhe.mp3"
                                    },
                                    {
                                        "type": "showImage",
                                        "code": 4,
                                        "image": "star.png",
                                        "sloc": [
                                            0,
                                            0,
                                            null
                                        ],
                                        "loc": [
                                            430,
                                            50,
                                            90,
                                            90
                                        ],
                                        "opacity": 1,
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    }
                                ],
                                "false": []
                            }
                        ],
                        "false": []
                    }
                ],
                "false": []
            },
            {
                "type": "sleep",
                "time": 2000
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 2,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 3,
                "time": 0
            },
            {
                "type": "hideImage",
                "code": 4,
                "time": 0
            },
            {
                "type": "setHeroOpacity",
                "opacity": 0
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "setValue",
                "name": "flag:stage",
                "value": "7"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT40",
                        "loc": [
                            7,
                            7
                        ]
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "wots1.mp3",
                        "keep": true
                    },
                    "德军的空袭始于1940年7月10日。德军的想法是，如果要为“海狮行动”的登陆战做准备，就必须歼灭英国皇家海军。",
                    "因此，他们对英国的护航船队和港口发起空袭，并顺便诱歼英国空军。",
                    "他们没能成功。利用先进的雷达技术，英国空军能够在第一时间预知德机的来袭，并有序做出应对。",
                    "英国皇家空军的指挥系统非常完善。战斗机、雷达和高射炮被协调的很好，每一波来袭的德机都遭到了来自四面八方的协同攻击，损失惨重。",
                    "戈林不得不调整作战计划。他意识到，在英国空军的掩护之下，很难对他们强大的海军造成伤害。既然这样，那便直接攻击机场，彻底破坏英军战机起飞的能力。",
                    "德军制定了一个计划，在8月13日（后因天气原因改为15日）倾巢出动，彻底摧毁英国南部的防御体系。",
                    "计划名为，“鹰日”",
                    {
                        "type": "changeFloor",
                        "floorId": "MT39",
                        "loc": [
                            -1,
                            -1
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT37",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT38_7_12",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT38_7_12",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT38_7_12",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT38_7_12",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT38_7_12",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,12": {
            "0": {
                "condition": "flag:door_MT38_7_12==5",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            12
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            5,
                            12
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            9
                        ],
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT38_7_12",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "7,14": {
            "0": {
                "condition": "core.maps.searchBlockWithFilter(x=>['俯冲轰炸机','中型轰炸机'].includes(core.material.enemys[x?.event?.id]?.type),['MT34','MT35','MT36','MT37','MT38']).length===0",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[6][1]=true\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,383,  0, 81,521,521,140, 91,140,518,  0,140,528,140,528],
    [527,518,383,140,518,518,140,  0,140,  0,518,140,525,140,525],
    [526,527,  0,140,382,  0,140,205,140,206,140,140,382,140,382],
    [140,140,140,140,205,382,140,  0,207,  0,140,  0,  0,529,  0],
    [525,518,206,140,205,140,140,207,140,205,140,382,140,140,140],
    [528,205,  0, 81,  0, 82,  0,  0,205,528,140,  0,529,  0,206],
    [525,518,206,140, 33,140,140,140,140,207,140,140,140,140, 81],
    [140,140,140,140,  0,205,  0,  0,  0,207,  0,  0, 81,206,  0],
    [  0, 33,  0,205,  0,140,  0,382,  0,140,  0,525,140,  0,518],
    [ 81,140,140,140,140,140,140, 86,140,140,140,140,140,140, 81],
    [205,207, 21, 22,140,  0,205,  0,205,  0,140,566,140,206,205],
    [207, 21, 22, 22,140,383,  0,383,  0,383,140,566,140,  0,206],
    [ 82,140,140,140,140, 85,109, 85,109, 85,140,566, 82,518,518],
    [ 21, 21,518,518,140,566,109, 89,109,566,140,566,140,347,347],
    [ 21, 21,518,518,140,566,109,109,109,566,140,566,140,347,347]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

],
    "area": "天空"
}