main.floors.MT155=
{
    "floorId": "MT155",
    "title": "地中海",
    "name": "地中海",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "europe5.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "14,7": [
            {
                "type": "unloadEquip",
                "pos": 0
            },
            {
                "type": "unloadEquip",
                "pos": 1
            },
            {
                "type": "unloadEquip",
                "pos": 2
            },
            {
                "type": "unloadEquip",
                "pos": 3
            },
            {
                "type": "unloadEquip",
                "pos": 4
            },
            {
                "type": "unloadEquip",
                "pos": 5
            },
            {
                "type": "unloadEquip",
                "pos": 6
            },
            {
                "type": "function",
                "function": "function(){\nflags.mission[23][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(item:blueKey>=5)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[23][1]=true\n}"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(status:money>=4000)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[23][2]=true\n}"
                    }
                ]
            },
            {
                "type": "function",
                "function": "function(){\nflags.skillList=[0,0,0,0,0,0,0]\n}"
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
                "type": "setHeroOpacity",
                "opacity": 0
            },
            {
                "type": "setValue",
                "name": "flag:stage",
                "value": "24"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT150",
                        "loc": [
                            7,
                            3
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "gaijin4.mp3"
                    },
                    "面对贾扎拉防线，隆美尔兵分两路：战斗力较弱的意大利军队负责正面佯攻，引开英军注意力，隆美尔亲自率领主力部队趁夜色迂回穿插。",
                    "这一行动非常冒险，他的补给线和撤退路线也从英军防线当中横穿过去，稍有不慎便会全军覆没。",
                    "但英军又一次没把握住这个机会。他们没有把大量兵力投入到阻击行动中，前来阻击的装甲部队像葫芦娃救爷爷一样被隆美尔逐个击破。",
                    "截至1942年6月12日，隆美尔已经包围歼灭了不少英军，这时英军连数量优势也不复存在了，只好全线撤退。不是撤退至托布鲁克重新防守，而是直接退到了埃及边界。他们已经没有足够的力量保护托布鲁克了。",
                    "在去年，托布鲁克还是隆美尔的眼中钉，他就是在这里失去了一切。这一次，德军有了炮兵和空军的掩护，英军主力也无法协助防守，隆美尔不费吹灰之力就拿下了它。",
                    "随着托布鲁克守军投降，隆美尔获得了大量的补给物资以及一个合适的前线港口。希特勒也发来了一份特殊的祝贺：一根元帅权杖——他将隆美尔晋升为元帅。",
                    "隆美尔迎来了人生的高光时刻。现在，他的沙漠军团矛头直指埃及和苏伊士运河。盟军需要更多补给物资来应对这次危机。",
                    "美国的加入使得往返于大西洋航线的商船多了起来，盟军调拨了其中一批船队前往北非，送去武器和给养。但相应的，为了阻止这些物资的流入，德国海军上将邓尼茨也拿出了他的杀手锏——潜艇大军。",
                    "必须从这些饥饿的“狼群”中活下来，北非的盟军才有一线希望。水上与水下的对决，拉开序幕。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT149",
                        "loc": [
                            -1,
                            -1
                        ],
                        "direction": "down"
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT154",
            "loc": [
                14,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  3,532,532,532,  3,  0,  0,381,531,531,531,  3,518,  3, 21],
    [  3,  3,211,  3,  3,578,  3,  3,  3,  3, 81,  3,  0,211, 21],
    [531,  0,  0,397,216,360,  0,  3,  0,234,  0,  3,216,  3,  3],
    [  3,  3, 81,  0,  3,  0,533,360,  0,  3,  0,397,  0,360,534],
    [521,  3,  0,  3,  3,  3,  3,  3,216,  3,  3, 81,  3,  3,216],
    [521,211,  0,  3,534,234,533,  3,  0,578,  0,531,531,  3, 82],
    [  3,  3,360,240,534,  3,533, 81,  0,360,  3,  3,  3,  3, 82],
    [ 92,  0,534,  3,  3,  3,  3,  3,  3,534,331, 81, 81, 81, 89],
    [  3,  3,360,240,534,  3,533, 81,  0,360,  3,  3,  3,  3, 82],
    [ 21, 81,216,  3,534,234,533,  3,  0,234,  0,531,531,  3, 82],
    [ 21,  3,  0,  3,  3,  3,  3,  3,216,  3,  3,  3,216,  3,216],
    [  3,  3,  0, 81,381,  0,  0,360,  0,  0,399,  0,  0,360,381],
    [ 21,  3,360,  3,  3,531,  3,  3,234,  3, 81,  3,  3,  3,518],
    [ 21,  3,  0,  3, 21,  3, 21,  3,  0,  3,255,532,530,  3,518],
    [578, 81,  0,211, 21,  3, 21,211,  0,  3, 22,532,530,  3,518]
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