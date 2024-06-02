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
                "type": "setValue",
                "name": "flag:escort",
                "value": "false"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT157",
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
                        "name": "wots5.mp3"
                    },
                    "二战时期，德国海军有两位互相有矛盾的将军——邓尼茨和雷德尔。两个将军都一直在尝试说服希特勒采纳自己的建议。",
                    "其中，雷德尔擅长水面舰艇作战，他更倾向于建造大型战舰，使用这些大型战舰给予盟军护航线沉痛打击。",
                    "而邓尼茨认为德国海军水面力量完全不是盟军的对手，建造大型战舰完全是在浪费资源，给盟军送经验。因此他提议以潜艇为破交战的主要力量。",
                    "俾斯麦号战列舰的沉没使希特勒果断放弃了雷德尔的提议，邓尼茨的潜艇战思想得到了支持。",
                    "他发明了一种“狼群战术”，意思就是让他的潜艇部队像狼群一样，埋伏在盟军的必经之路上。一艘潜艇发现目标时，周围的潜艇就聚集起来，在夜色中发起绞杀。",
                    "这个战术非常有效。在1942年一年内，“狼群”达到了击沉商船的最高峰。全年共击沉商船1160艘，总吨位达630万吨，而自己的损失率却不到7%。盟军船员每天都生活在恐惧中，他们不知道下一枚鱼雷会从什么地方窜出，将所有人炸上天。",
                    "尽管盟军也在加紧建造更多的护航船只，并研究新的反潜设备和战术，但紧张的战况并不给他们足够的时间。",
                    "1942年春季后，回暖的天气使德军得以重新把力量投入东线战场，苏联再次陷入危机，他们急需军事援助。",
                    "在当时，盟军经由北极护航线前往苏联的船队用PQ加数字作为船队代号，返程的就是QP加同样的数字。",
                    "德军发现北极护航线的重要性后，也加大了袭击力度，从PQ7到PQ16船队几乎都遭到了不同程度的打击，这让盟军每一次出航都得经过深思熟虑。",
                    "但斯大林已经等不起了，他不断写信要求丘吉尔赶快开出PQ17船队。后来罗斯福也加入了劝说的行列，丘吉尔终于下定决心开出PQ17船队。",
                    "PQ17船队规模空前。34艘满载军火和物资的商船，6艘驱逐舰，2艘防空舰，2艘潜艇，4艘护卫舰，4艘猎潜舰，3艘扫雷舰，3艘救护船和1艘油船，其后方还有3艘驱逐舰、4艘巡洋舰，2艘战列舰和1艘航空母舰随时准备应对德军的大型舰艇。此外，11艘潜艇也在挪威海岸线警戒，发现德军出动就立即拉响警报。",
                    "如此兴师动众可不只是为了提防潜艇和飞机，盟军更担心的是德军“提尔皮茨”号战列舰。",
                    "“提尔皮茨”号是俾斯麦级的二号舰，拥有与“俾斯麦”号相差无几的配置。俾斯麦号一炮打爆胡德的场景还历历在目，那些战列舰和航空母舰就是为提尔皮茨号而来的，希望能顺便干掉提尔皮茨号。",
                    "6月27日，PQ17从冰岛出发，前往凶险异常的北极护航线。7月1日，船队的行踪被一艘德军潜艇捕捉到，并马上报告给了指挥中心。",
                    "北极护航线上最悲壮的一战，即将开场。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT156",
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