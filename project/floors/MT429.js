main.floors.MT429=
{
    "floorId": "MT429",
    "title": "日本海",
    "name": "日本海",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "medaction1.mp3",
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
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]走错片场的家伙 白龙号航空母舰 袭来",
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
                    "width": 64,
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
                    "width": 64,
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
                    "x": 194,
                    "y": 64,
                    "width": 64,
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
                    "x": 194,
                    "y": 64,
                    "width": 64,
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
                    "x": 258,
                    "y": 64,
                    "width": 64,
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
                    "x": 258,
                    "y": 64,
                    "width": 64,
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
                    "width": 64,
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
                    "width": 64,
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
        "\t[系统提示]在不知名力量作用下，本区域不受核弹效果影响。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT426",
            "loc": [
                14,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,2": [
            {
                "type": "if",
                "condition": "(flag:MT429boss===0)",
                "true": [
                    {
                        "type": "clearMap",
                        "x": 322,
                        "y": 64,
                        "width": 64,
                        "height": 16
                    },
                    {
                        "type": "setBlock",
                        "number": "hakuryu",
                        "loc": [
                            [
                                7,
                                2
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
                        "name": "flag:MT429boss",
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
                    "\t[系统提示]敌方支援舰队抵达！",
                    {
                        "type": "setBlock",
                        "number": "yugumo",
                        "loc": [
                            [
                                6,
                                6
                            ],
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
                        "number": "akizuki",
                        "loc": [
                            [
                                5,
                                5
                            ],
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
                        "number": "kuma",
                        "loc": [
                            [
                                6,
                                5
                            ],
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
                        "number": "kongo",
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
                        "number": "takao",
                        "loc": [
                            [
                                6,
                                1
                            ],
                            [
                                8,
                                1
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
                        "condition": "(flag:MT429boss===1)",
                        "true": [
                            {
                                "type": "clearMap",
                                "x": 258,
                                "y": 64,
                                "width": 64,
                                "height": 16
                            },
                            {
                                "type": "setBlock",
                                "number": "hakuryu",
                                "loc": [
                                    [
                                        7,
                                        2
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
                                "name": "flag:MT429boss",
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
                            "\t[系统提示]白龙号航母 放飞舰载机",
                            {
                                "type": "setBlock",
                                "number": "a7m",
                                "loc": [
                                    [
                                        5,
                                        9
                                    ],
                                    [
                                        6,
                                        10
                                    ],
                                    [
                                        7,
                                        11
                                    ],
                                    [
                                        8,
                                        10
                                    ],
                                    [
                                        9,
                                        9
                                    ]
                                ],
                                "time": 0,
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "d4y",
                                "loc": [
                                    [
                                        5,
                                        7
                                    ],
                                    [
                                        6,
                                        8
                                    ],
                                    [
                                        7,
                                        9
                                    ],
                                    [
                                        8,
                                        8
                                    ],
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
                                "number": "b7a",
                                "loc": [
                                    [
                                        5,
                                        2
                                    ],
                                    [
                                        6,
                                        3
                                    ],
                                    [
                                        7,
                                        4
                                    ],
                                    [
                                        8,
                                        3
                                    ],
                                    [
                                        9,
                                        2
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
                                "condition": "(flag:MT429boss===2)",
                                "true": [
                                    {
                                        "type": "clearMap",
                                        "x": 194,
                                        "y": 64,
                                        "width": 64,
                                        "height": 16
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "hakuryu",
                                        "loc": [
                                            [
                                                7,
                                                2
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
                                        "name": "flag:MT429boss",
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
                                    "\t[系统提示]白龙号航母 召唤最后的援军，放飞所有舰载机",
                                    {
                                        "type": "setBlock",
                                        "number": "g4m",
                                        "loc": [
                                            [
                                                1,
                                                1
                                            ],
                                            [
                                                13,
                                                1
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "sakura",
                                        "loc": [
                                            [
                                                1,
                                                9
                                            ],
                                            [
                                                13,
                                                9
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "akizuki",
                                        "loc": [
                                            [
                                                2,
                                                8
                                            ],
                                            [
                                                12,
                                                8
                                            ],
                                            [
                                                12,
                                                2
                                            ],
                                            [
                                                2,
                                                2
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "nagara",
                                        "loc": [
                                            [
                                                3,
                                                3
                                            ],
                                            [
                                                11,
                                                7
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "kuma",
                                        "loc": [
                                            [
                                                3,
                                                7
                                            ],
                                            [
                                                11,
                                                3
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "mogami",
                                        "loc": [
                                            [
                                                3,
                                                5
                                            ],
                                            [
                                                11,
                                                5
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "takao",
                                        "loc": [
                                            [
                                                7,
                                                3
                                            ],
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
                                        "number": "kongo",
                                        "loc": [
                                            [
                                                7,
                                                5
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "a7m",
                                        "loc": [
                                            [
                                                5,
                                                12
                                            ],
                                            [
                                                6,
                                                11
                                            ],
                                            [
                                                7,
                                                10
                                            ],
                                            [
                                                8,
                                                11
                                            ],
                                            [
                                                9,
                                                12
                                            ],
                                            [
                                                1,
                                                6
                                            ],
                                            [
                                                13,
                                                6
                                            ],
                                            [
                                                13,
                                                5
                                            ],
                                            [
                                                1,
                                                5
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "d4y",
                                        "loc": [
                                            [
                                                5,
                                                10
                                            ],
                                            [
                                                6,
                                                9
                                            ],
                                            [
                                                8,
                                                9
                                            ],
                                            [
                                                9,
                                                10
                                            ],
                                            [
                                                5,
                                                8
                                            ],
                                            [
                                                9,
                                                8
                                            ],
                                            [
                                                3,
                                                9
                                            ],
                                            [
                                                11,
                                                9
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "b7a",
                                        "loc": [
                                            [
                                                6,
                                                3
                                            ],
                                            [
                                                7,
                                                4
                                            ],
                                            [
                                                8,
                                                3
                                            ],
                                            [
                                                8,
                                                1
                                            ],
                                            [
                                                6,
                                                1
                                            ],
                                            [
                                                1,
                                                3
                                            ],
                                            [
                                                13,
                                                3
                                            ],
                                            [
                                                9,
                                                2
                                            ],
                                            [
                                                5,
                                                2
                                            ]
                                        ],
                                        "time": 0,
                                        "async": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "hakuryu",
                                        "name": "money",
                                        "value": "200",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "hakuryu",
                                        "name": "exp",
                                        "value": "200"
                                    },
                                    {
                                        "type": "waitAsync"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:MT429boss===3)",
                                        "true": [
                                            {
                                                "type": "clearMap",
                                                "x": 130,
                                                "y": 64,
                                                "width": 64,
                                                "height": 16
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:MT429boss",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    7,
                                                    13
                                                ]
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    4,
                                                    12
                                                ]
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    10,
                                                    12
                                                ]
                                            },
                                            "\t[系统提示]主线boss战 胜利！",
                                            {
                                                "type": "function",
                                                "function": "function(){\nflags.mission[58][2]=true\n}"
                                            },
                                            {
                                                "type": "clearMap",
                                                "x": 0,
                                                "y": 0,
                                                "width": 416,
                                                "height": 416
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
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,729,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,721,  0,721,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,718,  0,  0,  0,  0,  0,718,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,717,  0,  0,  0,717,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,716,  0,716,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  3],
    [  3,  3,  3,  3,  3,  0,  0,  0,  0,  0,  3,  3,  3,  3,  3],
    [  3,652,651,650,  3,  0,  0,  0,  0,  0,  3,650,651,652,  3],
    [  3,652,651,650, 85,  0,  0,  0,  0,  0, 85,650,651,652,  3],
    [  3,652,651,650,  3,  0,  3,  0,  3,  0,  3,650,651,652,  3],
    [  3,  3,  3,  3,  3,  3,  3, 90,  3,  3,  3,  3,  3,  3,  3]
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
    "area": "海洋"
}