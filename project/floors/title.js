main.floors.title=
{
    "floorId": "title",
    "title": "标题",
    "name": "标题",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "images": [
        {
            "name": "bg.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "hideStatusBar"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "bg.jpg",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 2,
            "image": "title1.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                160,
                -100,
                320,
                100
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 3,
            "image": "title2.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                140,
                -120,
                350,
                120
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 4,
            "image": "title3.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                640,
                240,
                200,
                50
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 5,
            "image": "title4.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                640,
                290,
                200,
                50
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 6,
            "image": "title5.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                640,
                340,
                200,
                50
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "showImage",
            "code": 7,
            "image": "aircraft1.png",
            "sloc": [
                0,
                0,
                null
            ],
            "loc": [
                640,
                160,
                168,
                216
            ],
            "opacity": 1,
            "time": 0
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "equip.mp3"
        },
        {
            "type": "moveImage",
            "code": 2,
            "to": [
                160,
                0
            ],
            "time": 500
        },
        {
            "type": "playSound",
            "name": "equip.mp3"
        },
        {
            "type": "moveImage",
            "code": 3,
            "to": [
                140,
                80
            ],
            "time": 500
        },
        {
            "type": "playSound",
            "name": "strafe.mp3"
        },
        {
            "type": "moveImage",
            "code": 7,
            "to": [
                -168,
                160
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "moveImage",
            "code": 4,
            "to": [
                220,
                240
            ],
            "time": 800,
            "async": true
        },
        {
            "type": "moveImage",
            "code": 5,
            "to": [
                220,
                290
            ],
            "time": 800,
            "async": true
        },
        {
            "type": "moveImage",
            "code": 6,
            "to": [
                220,
                340
            ],
            "time": 800,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "hideImage",
            "code": 7,
            "time": 0
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "allthis.mp3",
            "startTime": 47
        },
        {
            "type": "while",
            "condition": "1",
            "data": [
                {
                    "type": "wait",
                    "data": [
                        {
                            "case": "mouse",
                            "px": [
                                220,
                                420
                            ],
                            "py": [
                                240,
                                289
                            ],
                            "action": [
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
                                    "type": "hideImage",
                                    "code": 5,
                                    "time": 0
                                },
                                {
                                    "type": "hideImage",
                                    "code": 6,
                                    "time": 0
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
                                    "type": "sleep",
                                    "time": 500
                                },
                                {
                                    "type": "if",
                                    "condition": "(main.levelChoose.length == 0)",
                                    "true": [
                                        {
                                            "type": "comment",
                                            "text": "直接开始游戏"
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "comment",
                                            "text": "动态生成难度选择项"
                                        },
                                        {
                                            "type": "function",
                                            "function": "function(){\nvar choices = [];\nmain.levelChoose.forEach(function (one) {\n\tchoices.push({\n\t\t\"text\": one.title || '',\n\t\t\"action\": [\n\t\t\t{ \"type\": \"function\", \"function\": \"function() { core.status.hard = '\" + (one.name || '') + \"'; }\" }\n\t\t]\n\t});\n})\ncore.insertAction({ \"type\": \"choices\", \"choices\": choices });\n}"
                                        }
                                    ]
                                },
                                {
                                    "type": "comment",
                                    "text": "成功选择难度"
                                },
                                {
                                    "type": "function",
                                    "function": "function(){\ncore.stopAnimate(flags.lastId || 0)\n}"
                                },
                                {
                                    "type": "break",
                                    "n": 1
                                },
                                {
                                    "type": "comment",
                                    "text": "当点击地图左上角时执行此事件"
                                }
                            ]
                        },
                        {
                            "case": "mouse",
                            "px": [
                                220,
                                420
                            ],
                            "py": [
                                290,
                                339
                            ],
                            "action": [
                                {
                                    "type": "callLoad"
                                }
                            ]
                        },
                        {
                            "case": "mouse",
                            "px": [
                                20,
                                420
                            ],
                            "py": [
                                340,
                                390
                            ],
                            "action": []
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

]
}