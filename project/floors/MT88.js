main.floors.MT88=
{
    "floorId": "MT88",
    "title": "丹麦海峡",
    "name": "丹麦海峡",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "hiaction6.ogg",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 1000,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": "hero"
        },
        "\t[盟军指挥官,hero]看来是德国人比我们抢先一步到达，并且占据了有利位置……",
        "\t[盟军指挥官,hero]问题不大。胡德号和威尔士亲王号，准备战斗！瞄准俾斯麦号！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]莱茵演习 俾斯麦号战列舰(?) 袭来！",
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
        {
            "type": "setEnemy",
            "id": "hipper",
            "name": "name",
            "value": "'俾斯麦(?)'"
        },
        {
            "type": "setEnemy",
            "id": "bismark",
            "name": "money",
            "value": "0"
        },
        {
            "type": "setEnemy",
            "id": "bismark",
            "name": "exp",
            "value": "0"
        },
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,4": [
            {
                "type": "if",
                "condition": "(flag:MT88boss>=4)",
                "true": [
                    "\t[盟军指挥官,hero]这是欧根亲王号，没时间在她身上浪费炮弹了，必须尽快攻击真正的俾斯麦号！"
                ],
                "false": []
            }
        ],
        "10,4": [
            {
                "type": "if",
                "condition": "(flag:MT88boss<4)",
                "true": [
                    "欧根亲王号重巡洋舰(?)"
                ],
                "false": []
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "4,4": [
            {
                "type": "if",
                "condition": "(flag:MT88boss===0)",
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
                        "number": "hipper",
                        "loc": [
                            [
                                4,
                                4
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
                        "name": "flag:MT88boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[系统提示]俾斯麦(?)号 没有作出反应"
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT88boss===1)",
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
                                "number": "hipper",
                                "loc": [
                                    [
                                        4,
                                        4
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
                                "name": "flag:MT88boss",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[系统提示]俾斯麦(?)号 没有作出反应"
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT88boss===2)",
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
                                        "number": "hipper",
                                        "loc": [
                                            [
                                                4,
                                                4
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
                                        "name": "flag:MT88boss",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    "\t[系统提示]俾斯麦(?)号 没有作出反应"
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:MT88boss===3)",
                                        "true": [
                                            {
                                                "type": "clearMap",
                                                "x": 130,
                                                "y": 64,
                                                "width": 64,
                                                "height": 16
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "N585",
                                                "loc": [
                                                    [
                                                        4,
                                                        4
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "bismark",
                                                "loc": [
                                                    [
                                                        10,
                                                        4
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:MT88boss",
                                                "operator": "+=",
                                                "value": "1"
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
                                            "\t[威尔士亲王号舰长,N584]这里是威尔士亲王号！我们打错了！那个是欧根亲王号重巡洋舰，敌人的尾舰才是俾斯麦号！重复，尾舰才是俾斯麦号！",
                                            "\t[吕特晏斯（俾斯麦号指挥官）,bismark]继续保持静默已经没有任何意义。Jot Dora（准许开火）！",
                                            {
                                                "type": "playSound",
                                                "name": "xinxinmagic.mp3"
                                            },
                                            "\t[警告]莱茵演习 真·俾斯麦号战列舰 袭来！",
                                            {
                                                "type": "setEnemy",
                                                "id": "hipper",
                                                "name": "name",
                                                "value": "'希佩尔上将级巡洋舰'"
                                            },
                                            {
                                                "type": "clearMap"
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
        ],
        "10,4": [
            {
                "type": "if",
                "condition": "(flag:MT88boss===4)",
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
                        "number": "bismark",
                        "loc": [
                            [
                                10,
                                4
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
                        "name": "flag:MT88boss",
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
                    "\t[系统提示]俾斯麦号 的攻击力小幅提升了！",
                    {
                        "type": "setEnemy",
                        "id": "bismark",
                        "name": "atk",
                        "value": "850"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT88boss===5)",
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
                                "number": "bismark",
                                "loc": [
                                    [
                                        10,
                                        4
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
                                "name": "flag:MT88boss",
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
                            "\t[系统提示]俾斯麦号 的生命值小幅提升了！",
                            {
                                "type": "setEnemy",
                                "id": "bismark",
                                "name": "hp",
                                "value": "120000"
                            },
                            {
                                "type": "setEnemy",
                                "id": "bismark",
                                "name": "money",
                                "value": "50"
                            },
                            {
                                "type": "setEnemy",
                                "id": "bismark",
                                "name": "exp",
                                "value": "50"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT88boss===6)",
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
                                        "number": "bismark",
                                        "loc": [
                                            [
                                                10,
                                                4
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
                                        "name": "flag:MT88boss",
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
                                    "\t[系统提示]俾斯麦号 的生命值和攻击力同时提升了！",
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "hp",
                                        "value": "150000"
                                    },
                                    {
                                        "type": "setEnemy",
                                        "id": "bismark",
                                        "name": "atk",
                                        "value": "1000"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:MT88boss===7)",
                                        "true": [
                                            {
                                                "type": "clearMap",
                                                "x": 130,
                                                "y": 64,
                                                "width": 64,
                                                "height": 16
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "bismark",
                                                "loc": [
                                                    [
                                                        10,
                                                        4
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
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "clearMap"
                                            },
                                            {
                                                "type": "function",
                                                "function": "function(){\nflags.mission[13][0]=true\n}"
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(item:yellowKey>=20)",
                                                "true": [
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\nflags.mission[13][1]=true\n}"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "if",
                                                "condition": "(status:mana>=300)",
                                                "true": [
                                                    {
                                                        "type": "function",
                                                        "function": "function(){\nflags.mission[13][2]=true\n}"
                                                    }
                                                ]
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
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "animate",
                                                "name": "repair",
                                                "loc": [
                                                    10,
                                                    4
                                                ],
                                                "async": true
                                            },
                                            {
                                                "type": "animate",
                                                "name": "aim",
                                                "loc": [
                                                    7,
                                                    12
                                                ],
                                                "async": true
                                            },
                                            {
                                                "type": "waitAsync"
                                            },
                                            {
                                                "type": "animate",
                                                "name": "explore",
                                                "loc": [
                                                    7,
                                                    12
                                                ]
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "animate",
                                                "name": "bigexplore",
                                                "loc": [
                                                    7,
                                                    12
                                                ],
                                                "async": true
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
                                                "keep": true,
                                                "async": true
                                            },
                                            {
                                                "type": "waitAsync"
                                            },
                                            {
                                                "type": "showImage",
                                                "code": 1,
                                                "image": "hoodsinking.jpg",
                                                "loc": [
                                                    0,
                                                    0
                                                ],
                                                "opacity": 1,
                                                "time": 0
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 1000
                                            },
                                            "1941年5月24日上午5时59分，俾斯麦号上的所有主炮发起了一次齐射",
                                            "这是直接扭转战局的一炮。8枚炮弹中的其中一枚，不偏不倚，砸进了胡德号的弹药库。",
                                            "那里储藏着数吨整装待发的炮弹。当这一发穿甲弹爆炸时，立即引起了剧烈的连锁反应，导致弹药库内的所有炮弹都发生了殉爆。",
                                            {
                                                "type": "playSound",
                                                "name": "049-Explosion02.mp3"
                                            },
                                            {
                                                "type": "screenFlash",
                                                "color": [
                                                    255,
                                                    255,
                                                    255,
                                                    1
                                                ],
                                                "time": 500,
                                                "times": 1
                                            },
                                            {
                                                "type": "setCurtain",
                                                "time": 2000
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 1000
                                            },
                                            "胡德号战列舰仿佛一个庆祝新年到来时绽放的大型烟花，冲天的火焰从弹药库的位置迸发而出，紧接着是震天动地的一声巨响。",
                                            {
                                                "type": "playSound",
                                                "name": "049-Explosion02.mp3"
                                            },
                                            {
                                                "type": "screenFlash",
                                                "color": [
                                                    255,
                                                    255,
                                                    255,
                                                    1
                                                ],
                                                "time": 500,
                                                "times": 1
                                            },
                                            {
                                                "type": "setCurtain",
                                                "color": [
                                                    0,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "time": 2000,
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
                                            "万吨的巨舰在那一瞬间竟直接脱离了海面。胡德号从中间断为两截，开始以肉眼可见的速度急速下沉。",
                                            "身经百战，被称为“皇家海军的荣耀”的胡德号战列舰，最终长眠在丹麦海峡的海底。船上1418名船员，仅3人幸存。",
                                            "胡德号的陨落同时震惊了双方的船员。后面的威尔士亲王号来不及哀悼，此时的她已经身中数弹，一门主炮还出了故障。",
                                            "尽管心有不甘，舰长也只能下令撤退，否则就会成为胡德号的陪葬品。",
                                            "威尔士亲王号战列舰小心避开了胡德号沉没的残骸，消失在清晨的浓雾中。",
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "xinxinmagic.mp3"
                                            },
                                            "\t[系统提示]胡德号沉没，永久失去该装备！",
                                            {
                                                "type": "unloadEquip",
                                                "pos": 3
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:stage",
                                                "value": "14"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "item:hood",
                                                "operator": "-=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "changeFloor",
                                                "floorId": "MT89",
                                                "loc": [
                                                    14,
                                                    7
                                                ],
                                                "direction": "left"
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,582,  0,  0,  0,  0,  0,510,  0,  0,  0,  0],
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
    "weather": [
        "fog",
        5
    ],
    "area": "海洋"
}