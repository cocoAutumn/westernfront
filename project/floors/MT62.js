main.floors.MT62=
{
    "floorId": "MT62",
    "title": "英国本土-港口",
    "name": "英国本土-港口",
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
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "function",
            "function": "function(){\nflags.learned[5]=true\n}"
        },
        {
            "type": "function",
            "function": "function(){\nflags.learned[6]=true\n}"
        },
        "\t[系统提示]习得新技能：烟幕、Z字规避",
        "\t[系统提示]烟幕（50指挥点）：释放烟幕，下一场与敌方水面战舰的战斗期间，获得20%炮火伤害减免。仅可在海上地图中使用。",
        "\t[历史来源]\f[skill5.jpg,170,50]二战时期的海战，军舰上普遍使用的是光学测距仪和瞄准器。因此，往军舰烟囱中倾倒特制的化学制剂，制造出浓厚的黑烟，可以有效对敌舰的光学观瞄设备造成干扰，以掩护烟幕后面的友军舰艇撤退。但这同样会一定程度上干扰自己人的炮击精度。",
        "\t[系统提示]Z字规避（80指挥点）：下一场战斗中，每次遭遇鱼雷攻击时额外闪避2枚鱼雷。",
        "\t[历史来源]\f[skillnone.jpg,170,50]Z字规避是一种非常常见的海战防御战术。军舰按Z字形路线行驶，增加敌方鱼雷的瞄准难度，当敌人发射鱼雷时，再根据具体情况做出进一步闪躲，从而规避大部分鱼雷攻击。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]这里是港口，别问为啥这么难看……你懂的。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,0": [
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
                                "floorId": "MT63",
                                "loc": [
                                    0,
                                    7
                                ],
                                "direction": "right"
                            }
                        ]
                    }
                ]
            }
        ],
        "7,0": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：海军，包括潜艇、驱逐舰和巡洋舰，前两者居多。少量轰炸机\n推荐携带技能：紧急补给、防空弹幕、空战王牌、烟幕、Z字规避\n推荐出战装备：E级驱逐舰、爱丁堡号轻巡洋舰"
        ],
        "14,2": [
            "\t[机场后勤,N516]长官，我方空军已就绪！",
            {
                "type": "choices",
                "text": "\t[机场后勤,N516]请选择出战空军",
                "choices": [
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
                        "text": "卸下当前攻击机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 5
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
        "4,4": [
            "\t[海军参谋,N515]长官，所有军舰待命中！",
            {
                "type": "choices",
                "text": "\t[海军参谋,N515]请选择出战海军舰艇",
                "choices": [
                    {
                        "text": "装备 E级驱逐舰",
                        "icon": "classe",
                        "need": "core.hasItem('classe')&&!core.hasEquip('classe')",
                        "condition": "core.hasItem('classe')&&!core.hasEquip('classe')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "classe"
                            }
                        ]
                    },
                    {
                        "text": "装备 马汉级驱逐舰",
                        "icon": "mahan",
                        "need": "core.hasItem('mahan')&&!core.hasEquip('mahan')",
                        "condition": "core.hasItem('mahan')&&!core.hasEquip('mahan')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "mahan"
                            }
                        ]
                    },
                    {
                        "text": "装备 爱丁堡号轻巡洋舰",
                        "icon": "edinburgh",
                        "need": "core.hasItem('edinburgh')&&!core.hasEquip('edinburgh')",
                        "condition": "core.hasItem('edinburgh')&&!core.hasEquip('edinburgh')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "edinburgh"
                            }
                        ]
                    },
                    {
                        "text": "装备 鹰号航空母舰",
                        "icon": "eagle",
                        "need": "core.hasItem('eagle')&&!core.hasEquip('eagle')",
                        "condition": "core.hasItem('eagle')&&!core.hasEquip('eagle')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "eagle"
                            }
                        ]
                    },
                    {
                        "text": "卸下当前驱逐舰",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 1
                            }
                        ]
                    },
                    {
                        "text": "卸下当前巡洋舰",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 2
                            }
                        ]
                    },
                    {
                        "text": "卸下当前主力舰",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 3
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
        "14,3": [
            "\t[系统提示]战斗机在忙着打不列颠空战，贼鸥式和剑鱼式轰炸机由于航程问题无法参战，所以本场战役中，如果没有航母的话，你只能使用布伦海姆式轰炸机。但该飞机性能一般，不带也可以。"
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
    [  0,30671,  0,  0,30308,  0,  0,10163,517,  0,  0,  0,  0,30534,30535],
    [  0,30679,  0,  0,30316,  0,  0,  0,  0,  0,  0,  0,  0,30542,30543],
    [30588,30604,  0,  0,  0,  0,  0,30516,30517,  0,  0,  0,  0,  0,516],
    [30596,30612,  0,  0,  0,  0,  0,30524,30525,  0,  0,  0,  0,  0,10163],
    [311,311,311,311,515,311,311,311,311,311,311,  0,311,311,311],
    [  0,311,  0,  0,  0,  0,  0,311,  0,  0,  0,  0,  0,311,  0],
    [  0,311,  0,  0,  0,  0,498,311,  0,  0,  0,  0,  0,311,  0],
    [  0,311,499,  0,  0,  0,  0,311,  0,  0,  0,  0,  0,311,500],
    [  0,311,  0,  0,  0,  0,  0,311,499,  0,  0,  0,499,311,  0],
    [  0,311,  0,  0,  0,  0,  0,311,  0,  0,  0,  0,  0,311,  0],
    [  0,311,  0,  0,  0,  0,498,311,  0,  0,  0,  0,  0,311,  0],
    [  0,  0,  0,  0,  0,  0,  0,311,  0,  0,  0,  0,  0,311,  0],
    [  0,  0,  0,  0,  0,  0,  0,311,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,311,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [300,300,300,300,300,300,300,300,300,300,300,300,300,300,300],
    [300,300,300,300,300,300,300,559,559,300,300,300,300,300,300],
    [300,300,300,300,300,300,300,300,300,300,300,300,300,558,300],
    [300,300,300,300,556,300,300,300,300,300,300,300,300,558,300],
    [300,300,300,300,300,300,300,300,300,300,300,300,300,300,300],
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
    "area": "浅滩"
}