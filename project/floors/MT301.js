main.floors.MT301=
{
    "floorId": "MT301",
    "title": "德国",
    "name": "德国",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "sky.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "europe2.mp3",
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
            "type": "animate",
            "name": "shootair",
            "loc": [
                7,
                2
            ]
        },
        {
            "type": "playSound",
            "name": "crash2.mp3"
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    2
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[盟军指挥官,hero]那家伙似乎技术不错，我去对付他。",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]击落221架！王牌飞行员 海因茨·巴尔 袭来",
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
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,14": {
            "floorId": "MT300",
            "loc": [
                0,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,4": [
            {
                "type": "if",
                "condition": "(flag:MT301boss===0)",
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
                        "number": "acepilot",
                        "loc": [
                            [
                                7,
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
                        "name": "flag:MT301boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "\t[德军王牌飞行员,acepilot]有意思的对手。想跟我比试一下？那就来吧！",
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT301boss===1)",
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
                                "number": "acepilot",
                                "loc": [
                                    [
                                        7,
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
                                    5
                                ],
                                "time": 10,
                                "async": true
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "setValue",
                                "name": "flag:MT301boss",
                                "operator": "+=",
                                "value": "1",
                                "norefresh": true
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[德军王牌飞行员,acepilot]我想你应该没戴墨镜吧？",
                            "敌机开始向上爬升，你紧追不舍。",
                            {
                                "type": "setCurtain",
                                "color": [
                                    255,
                                    255,
                                    255,
                                    1
                                ],
                                "time": 500,
                                "keep": true
                            },
                            "对方迎着太阳飞行，让你、他和太阳连成一线，这是一套经典的战术。刺目的阳光让你很难睁开眼，敌机的轮廓在光芒中逐渐趋于消失。",
                            {
                                "type": "choices",
                                "text": "要怎么做？",
                                "choices": [
                                    {
                                        "text": "保持飞行姿态继续爬升",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "action": [
                                            "你没有做出任何动作，尽管已经看不到敌机，你仍在不懈地追逐他。",
                                            {
                                                "type": "playSound",
                                                "name": "180-Skill24.mp3"
                                            },
                                            {
                                                "type": "screenFlash",
                                                "color": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "time": 100,
                                                "times": 1
                                            },
                                            {
                                                "type": "screenFlash",
                                                "color": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "time": 100,
                                                "times": 1
                                            },
                                            {
                                                "type": "screenFlash",
                                                "color": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "time": 100,
                                                "times": 1
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "crash2.mp3"
                                            },
                                            {
                                                "type": "setCurtain",
                                                "color": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "time": 500,
                                                "keep": true
                                            },
                                            "直到一连串炮弹打在你的飞机上，你的机翼被无情撕裂，驾驶舱里的火焰将你完全包裹。",
                                            "你能感受到飞机在不受控制地向下盘旋坠落，身体被数倍的重力压在座椅上动弹不得。所有的灭火手段和自救方式全都不起作用，你什么都做不到，只能掏出随身携带的手枪给自己一个痛快。",
                                            {
                                                "type": "setValue",
                                                "name": "status:hp",
                                                "value": "0"
                                            }
                                        ]
                                    },
                                    {
                                        "text": "向一侧略微偏开",
                                        "color": [
                                            0,
                                            255,
                                            0,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "fw190a3",
                                                "loc": [
                                                    [
                                                        7,
                                                        2
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            "你略微调整飞行姿态，让这条三点连成的直线不再成立。没了阳光的干扰，敌机的轮廓再度清晰可见。",
                                            {
                                                "type": "setCurtain",
                                                "time": 500
                                            },
                                            {
                                                "type": "animate",
                                                "name": "wonder",
                                                "loc": "hero",
                                                "async": true
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 100
                                            },
                                            {
                                                "type": "moveHero",
                                                "time": 100,
                                                "async": true,
                                                "steps": [
                                                    "right:1"
                                                ]
                                            },
                                            {
                                                "type": "moveHero",
                                                "time": 0,
                                                "async": true,
                                                "steps": [
                                                    "down:0"
                                                ]
                                            },
                                            {
                                                "type": "animate",
                                                "name": "shootair",
                                                "loc": [
                                                    7,
                                                    5
                                                ],
                                                "async": true
                                            },
                                            {
                                                "type": "move",
                                                "loc": [
                                                    7,
                                                    2
                                                ],
                                                "time": 100,
                                                "keep": true,
                                                "steps": [
                                                    "down:5"
                                                ]
                                            },
                                            {
                                                "type": "waitAsync"
                                            },
                                            "也正是在同一时刻，你看见了那架背对太阳高速俯冲下来的灰色战机——那是一架前来捣乱的FW190。",
                                            "最后关头，你及时采取规避机动，躲开了那些致命的20毫米炮弹。现在是一对二，必须尽快解决其中一个敌人，否则必然持续处于下风。"
                                        ]
                                    },
                                    {
                                        "text": "放弃追击，俯冲脱离",
                                        "color": [
                                            255,
                                            0,
                                            0,
                                            1
                                        ],
                                        "action": [
                                            {
                                                "type": "setBlock",
                                                "number": "fw190a3",
                                                "loc": [
                                                    [
                                                        7,
                                                        2
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            {
                                                "type": "moveHero",
                                                "steps": [
                                                    "down:0"
                                                ]
                                            },
                                            "这个敌人非常狡猾，现在敌明我暗，尚且不知道对方在谋划着什么。眼下最好的保命手段，就是趁对方还未反应过来时，即刻俯冲脱离战斗。",
                                            {
                                                "type": "setCurtain",
                                                "time": 500
                                            },
                                            {
                                                "type": "animate",
                                                "name": "wonder",
                                                "loc": "hero"
                                            },
                                            {
                                                "type": "animate",
                                                "name": "shoot3",
                                                "loc": "hero",
                                                "async": true
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "180-Skill24.mp3"
                                            },
                                            {
                                                "type": "screenFlash",
                                                "color": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "time": 100,
                                                "times": 1
                                            },
                                            {
                                                "type": "screenFlash",
                                                "color": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "time": 100,
                                                "times": 1
                                            },
                                            {
                                                "type": "screenFlash",
                                                "color": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "time": 100,
                                                "times": 1
                                            },
                                            {
                                                "type": "setCurtain",
                                                "color": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "time": 500,
                                                "keep": true
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "crash2.mp3"
                                            },
                                            {
                                                "type": "waitAsync"
                                            },
                                            "视野恢复清晰，但当你看向后视镜时，却绝望地发现身后的两名紧追不舍的敌人向你抛洒的致命弹雨。",
                                            "刚刚结束爬升的你损失了太多能量，飞机已然无力做出任何规避机动。身体被其中一颗炮弹大卸八块，你几乎一瞬间就失去了意识。",
                                            {
                                                "type": "setValue",
                                                "name": "status:hp",
                                                "value": "0"
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT301boss===2)",
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
                                        "number": "acepilot",
                                        "loc": [
                                            [
                                                7,
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
                                            6
                                        ],
                                        "time": 10,
                                        "async": true
                                    },
                                    {
                                        "type": "moveHero",
                                        "time": 0,
                                        "steps": [
                                            "down:0"
                                        ]
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "flag:MT301boss",
                                        "operator": "+=",
                                        "value": "1",
                                        "norefresh": true
                                    },
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    "\t[德军王牌飞行员,acepilot]你先撤，这家伙交给我。",
                                    "受损的“闯入者”拖着黑烟隐入云层，想必是不会再来偷袭了。但经过刚刚的战斗，你已经失去主动权，被对方紧紧咬着六点钟方向，无论如何也甩不掉。",
                                    {
                                        "type": "choices",
                                        "text": "要怎么做？",
                                        "choices": [
                                            {
                                                "text": "殷麦曼滚转",
                                                "color": [
                                                    255,
                                                    0,
                                                    0,
                                                    1
                                                ],
                                                "action": [
                                                    "你尝试做殷麦曼滚转，绕到他身后进行攻击。",
                                                    "然而，机械呆板的动作很快引起了对手的注意，他预判到了你的动作。当你翻转机身向下翻滚时，一头撞上了他的枪线上。",
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
                                                        "type": "playSound",
                                                        "name": "180-Skill24.mp3",
                                                        "sync": true
                                                    },
                                                    {
                                                        "type": "playSound",
                                                        "name": "crash2.mp3"
                                                    },
                                                    {
                                                        "type": "setValue",
                                                        "name": "status:hp",
                                                        "value": "0"
                                                    }
                                                ]
                                            },
                                            {
                                                "text": "向高空拖带",
                                                "color": [
                                                    0,
                                                    255,
                                                    0,
                                                    1
                                                ],
                                                "action": [
                                                    "你利用“野马”战斗机的机动性优势，一边盘旋，一边拉升高度，试图引诱对方跟随你爬升，并逐渐失去能量。",
                                                    {
                                                        "type": "animate",
                                                        "name": "irritable",
                                                        "loc": [
                                                            7,
                                                            4
                                                        ]
                                                    },
                                                    "然而对方似乎很明白自己的飞机弱势在哪里，并没有上套。他拉开差距，局势重新洗牌。"
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "if",
                                        "condition": "(flag:MT301boss===3)",
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
                                                "number": "acepilot",
                                                "loc": [
                                                    [
                                                        7,
                                                        4
                                                    ]
                                                ],
                                                "time": 0
                                            },
                                            {
                                                "type": "waitAsync"
                                            },
                                            {
                                                "type": "setValue",
                                                "name": "flag:MT301boss",
                                                "operator": "+=",
                                                "value": "1",
                                                "norefresh": true
                                            },
                                            {
                                                "type": "animate",
                                                "name": "fire",
                                                "loc": [
                                                    7,
                                                    4
                                                ]
                                            },
                                            {
                                                "type": "hide",
                                                "loc": [
                                                    [
                                                        7,
                                                        4
                                                    ]
                                                ],
                                                "remove": true,
                                                "time": 500,
                                                "async": true
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "crash2.mp3"
                                            },
                                            {
                                                "type": "waitAsync"
                                            },
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            "\t[德军王牌飞行员,acepilot]该死！我被击中了！让地勤人员到这片区域找我！",
                                            "经过一番激斗，你取得了这场空战的最终胜利。你飞过对手的降落伞旁，与他擦肩而过。国际公约规定不允许射杀跳伞的飞行员，所以你在他身旁飞了两圈，摇摆机翼作为胜利者的宣告后，头也不回地飞向轰炸机群。",
                                            {
                                                "type": "playSound",
                                                "name": "xinxinmagic.mp3"
                                            },
                                            "\t[系统提示]支线boss战 胜利！",
                                            {
                                                "type": "function",
                                                "function": "function(){\nflags.mission[41][1]=true\n}"
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
                                                    2,
                                                    10
                                                ]
                                            },
                                            {
                                                "type": "openDoor",
                                                "loc": [
                                                    12,
                                                    10
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
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,633,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,634,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109],
    [109,109, 85,109,109,  0,  0,  0,  0,  0,109,109, 85,109,109],
    [109,540,541,540,109,  0,  0,  0,  0,  0,109,519,341,519,109],
    [109,541,551,541,109,  0,  0,  0,  0,  0,109,341,590,341,109],
    [109,540,541,540,109,  0,  0,  0,  0,  0,109,519,341,519,109],
    [109,109,109,109,109,109,109, 90,109,109,109,109,109,109,109]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}