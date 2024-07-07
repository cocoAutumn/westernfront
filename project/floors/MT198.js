main.floors.MT198=
{
    "floorId": "MT198",
    "title": "阿拉曼",
    "name": "阿拉曼",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao2.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "down:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                7,
                1
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]亚的斯亚贝巴公爵 彼得罗·巴多格里奥元帅 袭来",
        "\t[系统提示]进入boss战，即将进入存档界面！",
        {
            "type": "callSave"
        },
        {
            "type": "forbidSave",
            "forbid": true
        },
        {
            "type": "previewUI",
            "action": [
                {
                    "type": "strokeRect",
                    "x": 130,
                    "y": 64,
                    "width": 96,
                    "height": 16,
                    "style": [
                        255,
                        165,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 130,
                    "y": 64,
                    "width": 96,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "type": "strokeRect",
                    "x": 226,
                    "y": 64,
                    "width": 96,
                    "height": 16,
                    "style": [
                        255,
                        165,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 226,
                    "y": 64,
                    "width": 96,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                },
                {
                    "type": "strokeRect",
                    "x": 322,
                    "y": 64,
                    "width": 96,
                    "height": 16,
                    "style": [
                        255,
                        165,
                        0,
                        1
                    ],
                    "lineWidth": 5
                },
                {
                    "type": "fillRect",
                    "x": 322,
                    "y": 64,
                    "width": 96,
                    "height": 16,
                    "style": [
                        255,
                        0,
                        0,
                        1
                    ]
                }
            ]
        },
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT196",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,8": [
            {
                "type": "if",
                "condition": "(flag:MT198boss===0)",
                "true": [
                    {
                        "type": "clearMap",
                        "x": 322,
                        "y": 64,
                        "width": 96,
                        "height": 16
                    },
                    {
                        "type": "setBlock",
                        "number": "badoglio",
                        "loc": [
                            [
                                7,
                                8
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "animate",
                        "name": "hand",
                        "async": true
                    },
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            2
                        ],
                        "time": 10,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:MT198boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "text",
                        "text": "\t[巴多格里奥]\f[badoglio.png,0,310]这是一场必败的战役，我能做的就是尽可能保全有生力量。炮兵准备开火，为大部队撤离争取时间！",
                        "pos": [
                            100,
                            300,
                            380
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "m1340",
                        "loc": [
                            [
                                7,
                                4
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "m1340",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "m1340",
                        "loc": [
                            [
                                9,
                                5
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "howitzer105",
                        "loc": [
                            [
                                7,
                                6
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT198boss===1)",
                        "true": [
                            {
                                "type": "clearMap",
                                "x": 226,
                                "y": 64,
                                "width": 96,
                                "height": 16
                            },
                            {
                                "type": "setBlock",
                                "number": "badoglio",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "animate",
                                "name": "hand",
                                "async": true
                            },
                            {
                                "type": "jumpHero",
                                "loc": [
                                    7,
                                    2
                                ],
                                "time": 10,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:MT198boss",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "text",
                                "text": "\t[巴多格里奥]\f[badoglio.png,0,310]还差一点时间，装甲部队继续拖延敌军！",
                                "pos": [
                                    100,
                                    300,
                                    380
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "da90",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "da90",
                                "loc": [
                                    [
                                        9,
                                        7
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "l640",
                                "loc": [
                                    [
                                        6,
                                        5
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "l640",
                                "loc": [
                                    [
                                        8,
                                        5
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "m1340",
                                "loc": [
                                    [
                                        7,
                                        6
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setEnemy",
                                "id": "badoglio",
                                "name": "money",
                                "value": "20"
                            },
                            {
                                "type": "setEnemy",
                                "id": "badoglio",
                                "name": "exp",
                                "value": "20"
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT198boss===2)",
                                "true": [
                                    {
                                        "type": "clearMap",
                                        "x": 130,
                                        "y": 64,
                                        "width": 96,
                                        "height": 16
                                    },
                                    {
                                        "type": "animate",
                                        "name": "hand",
                                        "async": true
                                    },
                                    {
                                        "type": "jumpHero",
                                        "loc": [
                                            7,
                                            2
                                        ],
                                        "time": 10,
                                        "async": true
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "xinxinmagic.mp3"
                                    },
                                    "\t[系统提示]支线boss战 胜利！",
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[29][1]=true\n}"
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            1
                                        ]
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            7,
                                            11
                                        ]
                                    },
                                    {
                                        "type": "clearMap",
                                        "x": 0,
                                        "y": 0,
                                        "width": 480,
                                        "height": 480
                                    },
                                    {
                                        "type": "forbidSave"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "xinxinmagic.mp3"
                                    },
                                    "\t[系统提示]当前区域的全部意军已投降！",
                                    {
                                        "type": "setEnemy",
                                        "id": "italyinf2",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "italyinf3",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "italyinf4",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "italyinf5",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "italyinf6",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "l640",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "m1340",
                                        "name": "special",
                                        "value": "[61]",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "da90",
                                        "name": "special",
                                        "value": "[61]"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "p2640",
                                        "name": "special",
                                        "value": "[61]"
                                    }
                                ],
                                "false": []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150,150,150,150,150,150,150, 90,150,150,150,150,150,150,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,223,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150],
    [150,150,150,150,150,150,150, 85,150,150,150,150,150,150,150],
    [150,150,150,150,522,518,518,616,518,518,522,150,150,150,150],
    [150,150,150,150,522,518,518,581,518,518,522,150,150,150,150],
    [150,150,150,150,150,150,150,150,150,150,150,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}