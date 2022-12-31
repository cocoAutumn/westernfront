main.floors.MT11=
{
    "floorId": "MT11",
    "title": "阿登森林东",
    "name": "阿登森林东",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao5.mp3",
    "firstArrive": [
        "\t[盟军指挥官,hero]敌人的攻势越来越强了，我们几乎不可能阻止他们前进了。",
        "\t[盟军指挥官,hero]全军向北突破，与盟军主力会合！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[2][0]=true\n}"
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
                    -320,
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
                    320,
                    240
                ],
                "scale": 0.5,
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
                "value": "3"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT13",
                        "loc": [
                            7,
                            7
                        ]
                    }
                ],
                "no": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT12",
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
        "0,7": {
            "floorId": "MT10",
            "loc": [
                14,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "0,4": [
            {
                "type": "setValue",
                "name": "flag:st2tsk3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,3": [
            {
                "type": "setValue",
                "name": "flag:st2tsk3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:st2tsk3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:st2tsk3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,0": {
            "0": null,
            "1": {
                "condition": "flag:st2tsk3>=1",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[2][2]=true\n}"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 27, 27, 82, 82, 82, 34,152, 89,152,  0,520,520,  0,226,  0],
    [ 27, 27, 27, 82,152, 34,152,250,152, 81,152,152,152, 82,152],
    [ 28, 28, 28, 33,152, 34,152,  0,152,226,347,152,  0,520,  0],
    [407, 28, 28, 33,152,403,152,244,152,347,347,152,152,152,226],
    [407,152,152,152,152,401,152,  0,152,152,152,152, 21, 21,  0],
    [  0, 31, 31,  0, 81, 32,152,226,152, 32,152, 22, 21, 21,  0],
    [152,152,152,152,152,  0,250, 32,250,  0,152,152,152,152, 81],
    [ 92,  0,250,  0,244,  0,152,152,152,407,152,  0,  0,  0,  0],
    [152,152,152,152,152, 81,152,  0,520,  0,152,402,152,152,152],
    [  0,402,  0,520,  0,407,152,226,152,152,152, 81,402,  0,152],
    [ 21,152, 81,152,152,152,152,  0,520,  0,  0,402,152,520,  0],
    [ 21,152, 30,226, 30,152, 29,152,152,403,152,152,152,152, 81],
    [ 21,152, 30,152, 30,152, 27, 28,152, 33,152, 27, 27, 27,402],
    [152,152,152,152, 81,152, 27, 28,152, 33,152,152,152, 81,403],
    [345,345,345,345,226,152, 29,403, 81, 33,152,345,345,345,345]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}