main.floors.MT445=
{
    "floorId": "MT445",
    "title": "仙台-临时指挥所",
    "name": "仙台-临时指挥所",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
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
        },
        {
            "type": "setValue",
            "name": "item:I672",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:I680",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:I681",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "item:I682",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]苏系装备限时返场！本关只可使用苏联装备作战，但技能不受限制。",
        "\t[系统提示]苏军的地面部队非常强大，但空军比英美弱一些，且没有海军支援。作战时可以考虑先绕开敌方飞机，挑地面部队打。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,10": [
            "\t[维修人员,N514]同志，坦克准备就绪！",
            {
                "type": "choices",
                "text": "\t[维修人员,N514]请选择出战坦克",
                "choices": [
                    {
                        "text": "装备 苏联近卫装甲旅",
                        "icon": "I672",
                        "need": "core.hasItem('I672')&&!core.hasEquip('I672')",
                        "condition": "core.hasItem('I672')&&!core.hasEquip('I672')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "I672"
                            }
                        ]
                    },
                    {
                        "text": "卸下当前坦克",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 0
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
        "3,10": [
            "\t[机场后勤,N516]同志，空中力量已就绪！",
            {
                "type": "choices",
                "text": "\t[机场后勤,N516]请选择出战空军",
                "choices": [
                    {
                        "text": "装备 拉9战斗机",
                        "icon": "I680",
                        "need": "core.hasItem('I680')&&!core.hasEquip('I680')",
                        "condition": "core.hasItem('I680')&&!core.hasEquip('I680')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p40c"
                            }
                        ]
                    },
                    {
                        "text": "装备 伊尔10攻击机",
                        "icon": "I681",
                        "need": "core.hasItem('I681')&&!core.hasEquip('I681')",
                        "condition": "core.hasItem('I681')&&!core.hasEquip('I681')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "spitfiremk1"
                            }
                        ]
                    },
                    {
                        "text": "装备 图2S轰炸机",
                        "icon": "I682",
                        "need": "core.hasItem('I682')&&!core.hasEquip('I682')",
                        "condition": "core.hasItem('I682')&&!core.hasEquip('I682')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "hurricanemk2"
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
        "7,6": [
            "\t[参谋,N517]同志，请下达指示！",
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
                                "floorId": "MT446",
                                "loc": [
                                    7,
                                    0
                                ],
                                "direction": "down"
                            }
                        ]
                    }
                ]
            }
        ],
        "8,7": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：大量陆军，伴随少量空军\n推荐携带技能：防空弹幕、空战王牌、抵抗运动、破译、补给线、T34风琴、地毯式轰炸\n推荐出战装备：苏联近卫装甲旅、拉9战斗机、伊尔10攻击机、图2S轰炸机"
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
    [10014,10014,10014,10014,10014,10014,10014,10014,10014,10014,10014,10014,10014,10014,10014],
    [10014,  0,  0,  0,10014,  0,  0,  0,  0,  0,10014,  0,  0,  0,10014],
    [10014,  0,  0,  0,10014,  0,10136,10137,10138,  0,10014,  0,  0,  0,10014],
    [10014,  0,  0,  0,10014,  0,10144,10145,10146,  0,10014,  0,  0,  0,10014],
    [10014,  0,  0,  0,10014,  0,10152,10153,10154,  0,10014,  0,  0,  0,10014],
    [10014,  0,  0,  0,10014,  0,  0,  0,  0,  0,10014,  0,  0,  0,10014],
    [10014,  0,  0,  0,10014,10014,10014,517,10014,10014,10014,  0,  0,  0,10014],
    [10014,  0,  0,  0,  0,  0,  0,  0,129,  0,  0,  0,  0,  0,10014],
    [10014,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10014],
    [10014,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,10014],
    [10014,10014,10014,516,10014,10014,  0,  0,  0,10014,10014,514,10014,10014,10014],
    [10014,80666,80666,80666,80666,10014,  0,  0,  0,10014,80648,80648,80648,80648,10014],
    [10014,80674,80674,80674,80674,10014,  0,  0,  0,10014,80656,80656,80656,80656,10014],
    [10014,80674,80674,80674,80674,10014,  0,  0,  0,10014,80656,80656,80656,80656,10014],
    [10014,10014,10014,10014,10014,10014,10014,  0,10014,10014,10014,10014,10014,10014,10014]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,559,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,559,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,556,  0,  0,  0,  0,  0,  0,  0,556,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "area": "陆地"
}