main.floors.MT245=
{
    "floorId": "MT245",
    "title": "突尼斯",
    "name": "突尼斯",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10007",
    "bgm": "desert3.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "closeDoor",
            "id": "specialDoor",
            "loc": [
                7,
                13
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
        "\t[警告]相对优秀的意大利将军 乔瓦尼·梅塞少将 袭来",
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
        "7,14": {
            "floorId": "MT243",
            "loc": [
                13,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,5": [
            {
                "type": "if",
                "condition": "(flag:MT245boss===0)",
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
                        "number": "messe",
                        "loc": [
                            [
                                7,
                                5
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
                            12
                        ],
                        "time": 10,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:MT245boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "text",
                        "text": "\t[梅塞]\f[messer.png,0,310]盟军有压倒性的人数和装备优势，北非彻底失守只是时间问题。为什么那些政客就认识不到这一点？",
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
                        "number": "m1340",
                        "loc": [
                            [
                                7,
                                7
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "italyinf3",
                        "loc": [
                            [
                                6,
                                4
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "italyinf3",
                        "loc": [
                            [
                                6,
                                6
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "italyinf3",
                        "loc": [
                            [
                                8,
                                4
                            ]
                        ],
                        "time": 0,
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "italyinf3",
                        "loc": [
                            [
                                8,
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
                        "condition": "(flag:MT245boss===1)",
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
                                "number": "messe",
                                "loc": [
                                    [
                                        7,
                                        5
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
                                    12
                                ],
                                "time": 10,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:MT245boss",
                                "operator": "+=",
                                "value": "1",
                                "norefresh": true
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "text",
                                "text": "\t[梅塞]\f[messer.png,0,310]我们的后方已经被盟军包抄。这些是仅剩的补给物资了，打完这些，我们能做的就都做完了。",
                                "pos": [
                                    100,
                                    300,
                                    380
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "p2640",
                                "loc": [
                                    [
                                        6,
                                        6
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "p2640",
                                "loc": [
                                    [
                                        8,
                                        6
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "flak88",
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
                                "number": "italyinf3",
                                "loc": [
                                    [
                                        6,
                                        4
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "italyinf3",
                                "loc": [
                                    [
                                        8,
                                        4
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setEnemy",
                                "id": "messe",
                                "name": "money",
                                "value": "20"
                            },
                            {
                                "type": "setEnemy",
                                "id": "messe",
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
                                "condition": "(flag:MT245boss===2)",
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
                                            12
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
                                        "function": "function(){\nflags.mission[35][1]=true\n}"
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
    [109,109,109,109,109,109,109,109,109,109,109,109,109,109,109],
    [109,  0,  0,  0,109,606,605,625,605,606,109,  0,  0,  0,109],
    [109,  0,  0,  0,109,605,522,625,522,605,109,  0,  0,  0,109],
    [109,  0,  0,  0,109,109,109, 85,109,109,109,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,221,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,109,  0,109,  0,  0,  0,  0,  0,109],
    [109,109,109,109,109,109,109, 90,109,109,109,109,109,109,109]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}