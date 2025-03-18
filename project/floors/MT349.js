main.floors.MT349=
{
    "floorId": "MT349",
    "title": "英国",
    "name": "英国",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao6.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "showStatusBar"
        },
        {
            "type": "update"
        },
        {
            "type": "setCurtain",
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,10": [
            "\t[机场后勤,N516]长官，我方空军已就绪！",
            {
                "type": "choices",
                "text": "\t[机场后勤,N516]请选择出战空军",
                "choices": [
                    {
                        "text": "装备 P40C战斧",
                        "icon": "p40c",
                        "need": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
                        "condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p40c"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK1型",
                        "icon": "spitfiremk1",
                        "need": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "condition": "core.hasItem('spitfiremk1')&&!core.hasEquip('spitfiremk1')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk1"
                            }
                        ]
                    },
                    {
                        "text": "装备 飓风MK2型",
                        "icon": "hurricanemk2",
                        "need": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                        "condition": "core.hasItem('hurricanemk2')&&!core.hasEquip('hurricanemk2')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "hurricanemk2"
                            }
                        ]
                    },
                    {
                        "text": "装备 F4F野猫战斗机",
                        "icon": "f4f3",
                        "need": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
                        "condition": "core.hasItem('f4f3')&&!core.hasEquip('f4f3')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f4f3"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK5战斗机",
                        "icon": "spitfiremk5",
                        "need": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
                        "condition": "core.hasItem('spitfiremk5')&&!core.hasEquip('spitfiremk5')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk5"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK9战斗机",
                        "icon": "spitfiremk9",
                        "need": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
                        "condition": "core.hasItem('spitfiremk9')&&!core.hasEquip('spitfiremk9')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk9"
                            }
                        ]
                    },
                    {
                        "text": "装备 F6F地狱猫战斗机",
                        "icon": "f6f5",
                        "need": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "condition": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f6f5"
                            }
                        ]
                    },
                    {
                        "text": "装备 P47B雷电战斗机",
                        "icon": "p47b",
                        "need": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
                        "condition": "core.hasItem('p47b')&&!core.hasEquip('p47b')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p47b"
                            }
                        ]
                    },
                    {
                        "text": "装备 F6F地狱猫战斗机",
                        "icon": "f6f5",
                        "need": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "condition": "core.hasItem('f6f5')&&!core.hasEquip('f6f5')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f6f5"
                            }
                        ]
                    },
                    {
                        "text": "装备 喷火MK16战斗机",
                        "icon": "spitfiremk16",
                        "need": "core.hasItem('spitfiremk16')&&!core.hasEquip('spitfiremk16')",
                        "condition": "core.hasItem('spitfiremk16')&&!core.hasEquip('spitfiremk16')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk16"
                            }
                        ]
                    },
                    {
                        "text": "装备 F4U海盗战斗机",
                        "icon": "f4u",
                        "need": "core.hasItem('f4u')&&!core.hasEquip('f4u')",
                        "condition": "core.hasItem('f4u')&&!core.hasEquip('f4u')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "f4u"
                            }
                        ]
                    },
                    {
                        "text": "装备 P51野马战斗机",
                        "icon": "p51d",
                        "need": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
                        "condition": "core.hasItem('p51d')&&!core.hasEquip('p51d')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p51d"
                            }
                        ]
                    },
                    {
                        "text": "装备 SBD无畏式轰炸机",
                        "icon": "sbd3",
                        "need": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
                        "condition": "core.hasItem('sbd3')&&!core.hasEquip('sbd3')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "sbd3"
                            }
                        ]
                    },
                    {
                        "text": "装备 英俊战士重型战斗机",
                        "icon": "beautifighter",
                        "need": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                        "condition": "core.hasItem('beautifighter')&&!core.hasEquip('beautifighter')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "beautifighter"
                            }
                        ]
                    },
                    {
                        "text": "装备 P38闪电重型战斗机",
                        "icon": "p38",
                        "need": "core.hasItem('p38')&&!core.hasEquip('p38')",
                        "condition": "core.hasItem('p38')&&!core.hasEquip('p38')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p38"
                            }
                        ]
                    },
                    {
                        "text": "装备 台风攻击机",
                        "icon": "typhoon",
                        "need": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
                        "condition": "core.hasItem('typhoon')&&!core.hasEquip('typhoon')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "typhoon"
                            }
                        ]
                    },
                    {
                        "text": "装备 蚊式战斗机",
                        "icon": "mosquito",
                        "need": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
                        "condition": "core.hasItem('mosquito')&&!core.hasEquip('mosquito')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "mosquito"
                            }
                        ]
                    },
                    {
                        "text": "装备 P47D雷电攻击机",
                        "icon": "p47d",
                        "need": "core.hasItem('p47d')&&!core.hasEquip('p47d')",
                        "condition": "core.hasItem('p47d')&&!core.hasEquip('p47d')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p47d"
                            }
                        ]
                    },
                    {
                        "text": "装备 SB2C地狱俯冲者",
                        "icon": "sb2c",
                        "need": "core.hasItem('sb2c')&&!core.hasEquip('sb2c')",
                        "condition": "core.hasItem('sb2c')&&!core.hasEquip('sb2c')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "sb2c"
                            }
                        ]
                    },
                    {
                        "text": "装备 P61黑寡妇",
                        "icon": "p61",
                        "need": "core.hasItem('p61')&&!core.hasEquip('p61')",
                        "condition": "core.hasItem('p61')&&!core.hasEquip('p61')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p61"
                            }
                        ]
                    },
                    {
                        "text": "装备 剑鱼式鱼雷机",
                        "icon": "swordfish",
                        "need": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
                        "condition": "core.hasItem('swordfish')&&!core.hasEquip('swordfish')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "swordfish"
                            }
                        ]
                    },
                    {
                        "text": "装备 TBD蹂躏者鱼雷机",
                        "icon": "tbd",
                        "need": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
                        "condition": "core.hasItem('tbd')&&!core.hasEquip('tbd')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "tbd"
                            }
                        ]
                    },
                    {
                        "text": "装备 梭鱼式鱼雷机",
                        "icon": "barracuda",
                        "need": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
                        "condition": "core.hasItem('barracuda')&&!core.hasEquip('barracuda')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "barracuda"
                            }
                        ]
                    },
                    {
                        "text": "装备 布伦海姆轰炸机",
                        "icon": "blenheim",
                        "need": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
                        "condition": "core.hasItem('blenheim')&&!core.hasEquip('blenheim')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "blenheim"
                            }
                        ]
                    },
                    {
                        "text": "装备 B25米切尔轰炸机",
                        "icon": "b25",
                        "need": "core.hasItem('b25')&&!core.hasEquip('b25')",
                        "condition": "core.hasItem('b25')&&!core.hasEquip('b25')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "b25"
                            }
                        ]
                    },
                    {
                        "text": "装备 TBF复仇者",
                        "icon": "tbf",
                        "need": "core.hasItem('tbf')&&!core.hasEquip('tbf')",
                        "condition": "core.hasItem('tbf')&&!core.hasEquip('tbf')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "tbf"
                            }
                        ]
                    },
                    {
                        "text": "装备 B17空中堡垒",
                        "icon": "b17",
                        "need": "core.hasItem('b17')&&!core.hasEquip('b17')",
                        "condition": "core.hasItem('b17')&&!core.hasEquip('b17')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "b17"
                            }
                        ]
                    },
                    {
                        "text": "装备 兰开斯特轰炸机",
                        "icon": "lancaster",
                        "need": "core.hasItem('lancaster')&&!core.hasEquip('lancaster')",
                        "condition": "core.hasItem('lancaster')&&!core.hasEquip('lancaster')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "lancaster"
                            }
                        ]
                    },
                    {
                        "text": "卸下当前战斗机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 4
                            }
                        ]
                    },
                    {
                        "text": "卸下当前攻击机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 5
                            }
                        ]
                    },
                    {
                        "text": "卸下当前轰炸机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 6
                            }
                        ]
                    },
                    {
                        "text": "返回",
                        "action": []
                    }
                ]
            }
        ],
        "10,11": [
            "\t[参谋,N517]长官，请下达指示！",
            "\t[系统提示]即将进入存档界面",
            {
                "type": "callSave"
            },
            {
                "type": "insert",
                "name": "选择技能"
            },
            {
                "type": "choices",
                "text": "是否立即前往战场？",
                "choices": [
                    {
                        "text": "还没准备好",
                        "action": []
                    },
                    {
                        "text": "现在出发",
                        "action": [
                            {
                                "type": "if",
                                "condition": "core.hasEquip('b17')",
                                "true": [
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
                                        "type": "changeFloor",
                                        "floorId": "MT350",
                                        "loc": [
                                            7,
                                            11
                                        ],
                                        "direction": "up"
                                    }
                                ],
                                "false": [
                                    "必须装备B17轰炸机才可执行任务！"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "11,11": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：空战，存在强敌。\n推荐携带技能：防空弹幕、空战王牌、破译、补给线、孟菲斯美女、红色尾翼\n推荐出战装备：巴尔的摩号重巡、埃塞克斯级航母、P51野马、P47D雷电、B17空中堡垒。"
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30526,30526,30526,  0],
    [  0,  0,311,311,311,311,311,  0,  0,  0,  0,30534,30534,30534,  0],
    [  0,  0,311,622,  0,622,311,  0,  0,  0,  0,30542,30542,30542,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,622,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,622,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,622,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,622,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,311,622,  0,622,311,516,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,311,311,311,311,311,  0,  0,311,311,517,311,311,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,311,  0,  0,  0,311,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,311,10139,10168,10139,311,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,311,10139,10176,10139,311,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,359,359,359,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [359,513,513,359,359,513,513,359,359,513,513,359,359,513,513],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [513,513,513,359,359,513,513,513,359,359,513,513,513,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,359,359,359,359,359,359,359,359,359,359,359,359,359,359],
    [359,513,513,359,359,513,513,359,359,513,513,359,359,513,513],
    [  0,  0,359,359,359,  0,  0,557,  0,  0,556,556,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,  0,  0,  0]
],
    "fgmap": [
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10163,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}