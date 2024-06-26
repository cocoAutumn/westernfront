main.floors.MT54=
{
    "floorId": "MT54",
    "title": "前线机场",
    "name": "前线机场",
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
        },
        {
            "type": "sleep",
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,3": [
            "\t[机场后勤,N516]长官，我方空军已就绪！",
            {
                "type": "choices",
                "text": "\t[机场后勤,N516]请选择出战空军",
                "choices": [
                    {
                        "text": "装备 斗士MK2",
                        "icon": "wrestler",
                        "need": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                        "condition": "core.hasItem('wrestler')&&!core.hasEquip('wrestler')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "wrestler"
                            }
                        ]
                    },
                    {
                        "text": "装备 P40C战斧",
                        "icon": "p40c",
                        "need": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
                        "condition": "core.hasItem('p40c')&&!core.hasEquip('p40c')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "p40c"
                            }
                        ]
                    },
                    {
                        "text": "装备 飓风MK1型",
                        "icon": "hurricanemk1",
                        "need": "core.hasItem('hurricanemk1')&&!core.hasEquip('hurricanemk1')",
                        "condition": "core.hasItem('hurricanemk1')&&!core.hasEquip('hurricanemk1')",
                        "action": [
                            {
                                "type": "loadEquip",
                                "id": "hurricanemk1"
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
                        "text": "卸下当前战斗机",
                        "action": [
                            {
                                "type": "unloadEquip",
                                "pos": 4
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
        "4,11": [
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]当前区域敌人特点：只有空军，轰炸机居多\n推荐携带技能：紧急补给、防空弹幕、空战王牌\n推荐出战装备：喷火MK1或飓风MK1均可"
        ],
        "4,10": [
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
                                "floorId": "MT55",
                                "loc": [
                                    7,
                                    14
                                ],
                                "direction": "down"
                            }
                        ]
                    }
                ]
            }
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
    [  0,  0,  0,  0,  0,  0,505,  0,  0,573,  0,573,  0,  0,  0],
    [311,311,311,311,311,  0,505,  0,  0,573,  0,  0,  0,573,  0],
    [494,  0,494,30924,311,  0,  0,  0,  0,573,  0,  0,  0,  0,  0],
    [573,  0,573,  0,516,  0,  0,  0,  0,573,  0,  0,  0,  0,  0],
    [494,  0,494,30923,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [311,311,311,311,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,505,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,505,  0,  0,  0,  0,  0,  0],
    [311,311,311,311,311,  0,  0,  0,505,  0,  0,  0,  0,  0,  0],
    [311,  0,  0,10157,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [311,10165,  0,  0,517,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [311,10173,  0,  0,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [311,311,311,311,311,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,505,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,505,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,513,359],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,513,359],
    [359,359,359,359,  0,  0,  0,  0,  0,  0,359,359,359,513,359],
    [359,359,359,359,  0,557,  0,  0,  0,  0,359,359,359,359,359],
    [359,359,359,359,  0,  0,  0,  0,  0,  0,359,359,359,359,359],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,513,359],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,513,359],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,513,359],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,513,359],
    [  0,359,359,359,  0,  0,  0,  0,  0,  0,359,359,359,359,359],
    [  0,359,359,359,  0,557,  0,  0,  0,  0,359,359,359,359,359],
    [  0,359,359,359,  0,557,  0,  0,  0,  0,359,359,359,513,359],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,513,359],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,513,359],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,359,359,359,513,359]
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
    [  0,  0,  0,  0,10163,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "area": "陆地"
}