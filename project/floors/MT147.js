main.floors.MT147=
{
    "floorId": "MT147",
    "title": "贾扎拉防线",
    "name": "贾扎拉防线",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "cao1.mp3",
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
        },
        {
            "type": "text",
            "text": "\t[梅塞]\f[messer.png,0,310]给英军防线施加压力，让他们腾不出足够人手去阻击隆美尔将军。",
            "pos": [
                100,
                300,
                380
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT146",
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
                "condition": "(flag:MT147boss===0)",
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
                        "name": "flag:MT147boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[系统提示]梅塞的攻击力提高了，并集结了一些部队。",
                    {
                        "type": "setEnemy",
                        "id": "messe",
                        "name": "atk",
                        "value": "12000"
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
                                6
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
                                5,
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
                                9,
                                7
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
                        "condition": "(flag:MT147boss===1)",
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
                                "name": "flag:MT147boss",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[系统提示]梅塞的血量提高了，并集结了一些部队。",
                            {
                                "type": "setEnemy",
                                "id": "messe",
                                "name": "hp",
                                "value": "45000"
                            },
                            {
                                "type": "setBlock",
                                "number": "g50",
                                "loc": [
                                    [
                                        6,
                                        7
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "g50",
                                "loc": [
                                    [
                                        8,
                                        7
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
                                "condition": "(flag:MT147boss===2)",
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
                                        "type": "text",
                                        "text": "\t[梅塞]\f[messer.png,0,310]我们已经完成了任务，有序撤退！",
                                        "pos": [
                                            100,
                                            300,
                                            380
                                        ]
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "xinxinmagic.mp3"
                                    },
                                    "\t[系统提示]支线boss战 胜利！",
                                    {
                                        "type": "function",
                                        "function": "function(){\nflags.mission[22][2]=true\n}"
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
                                            3,
                                            13
                                        ]
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            11,
                                            13
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
    [150,  0,  0,  0,  0,  0,  0,221,  0,  0,  0,  0,  0,  0,150],
    [150,150,150,150,  0,  0,  0,  0,  0,  0,  0,150,150,150,150],
    [150,588,588,150,  0,  0,  0,  0,  0,  0,  0,150,588,588,150],
    [150,588,588,150,  0,  0,  0,  0,  0,  0,  0,150,588,588,150],
    [150,518,518,150,  0,  0,  0,  0,  0,  0,  0,150,518,518,150],
    [150,518,518, 85,  0,  0,  0,  0,  0,  0,  0, 85,518,518,150],
    [150,150,150,150,150,150,150,150,150,150,150,150,150,150,150]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}