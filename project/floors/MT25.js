main.floors.MT25=
{
    "floorId": "MT25",
    "title": "敦刻尔克",
    "name": "敦刻尔克",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass2",
    "bgm": "cao4.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,7": [
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
                "function": "function(){\nflags.mission[4][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(item:yellowKey>=15)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[4][1]=true\n}"
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
                    -320,
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
                    320,
                    240
                ],
                "scale": 0.5,
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
                "type": "pauseBgm"
            },
            {
                "type": "setValue",
                "name": "flag:stage",
                "value": "5"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [],
                "no": [
                    "英军的新型“玛蒂尔达”坦克的装甲非常坚硬，一路所向披靡的德军坦克这次碰到了对手。",
                    "情急之下，德军将88mm口径的高射炮放平，装上穿甲弹，向英军开火。效果非常显著，英军的进攻被压制了。很快，配合进攻的法军也受到阻挡，被迫撤退。",
                    "这是德军88mm高射炮的首秀，而在未来的战争中，这种高射炮将一次又一次证明自己的实力，变为盟军飞机和战车的“梦魇”。",
                    "镜头闪回，阿拉斯反攻战的失利无疑是对盟军的一次沉重打击，但并不是毫无收获。这次袭击也震惊了德军高层，尤其是希特勒，虽然他本人也非常冒进，但这种速度果然还是太快了。",
                    "希特勒马上给古德里安发了电报，命令他和其他德国进攻部队立即停止前进，由德国空军元帅，赫尔曼·戈林，指挥空军担任主力。",
                    "元首的命令自然是不能违抗。尽管心有不甘，古德里安也只能乖乖停止进攻，将盟军大部队包围在敦刻尔克。",
                    "事实上，盟军已经没有招架之力，如果古德里安继续进攻，盟军将会在海滩上全军覆没。而德军突然的“刹车”，对盟军来说是绝佳的喘息之机。"
                ]
            }
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT24",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT25_7_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,6": {
            "0": {
                "condition": "flag:door_MT25_7_6==8",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            8,
                            7
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            8
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT25_7_6",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "8,6": {
            "0": {
                "condition": "!core.hasEnemyLeft(undefined,['MT21','MT22','MT23','MT24','MT25'])",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[4][2]=true\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 21,143, 21,143,518,143,  0, 91,  0,143,143, 27,143, 27,143],
    [ 21,143, 21,143,  0,143,401,143,401, 81, 27, 21,254, 21, 27],
    [  0,143,  0,143,254, 81,  0,143,  0,143,143,143, 81,143,143],
    [254,143,254,143,518,143,  0,143,  0,143,518,  0, 81, 30, 30],
    [  0,  0,  0,143,143,143,143,143,143,143,143,  0,143, 30, 30],
    [143, 81,143,  0,143, 31,407, 33,407, 31,143,402,143,143,205],
    [  0,  0,265,  0,143,226,109, 85,109,226,143,  0,143,  0,  0],
    [204,143,143,143,143, 31, 85, 89, 85, 31,143, 33,143, 30,143],
    [  0, 21,206,  0,143,226,109, 85,109,226,143,  0,143,  0,  0],
    [ 21,  0,143,  0,143, 31,401, 34,401, 31,143,  0,143,143,205],
    [143,143,143, 81,143,143,143, 83,143,143,143,403,143, 21, 21],
    [520, 82,  0,  0, 34,143,219,  0,219,143,  0,  0,143,143,143],
    [520,143,243,143,143,143,  0,  0,  0, 81,  0,  0, 82,390,  0],
    [520,143,243,143,  0,204,  0,203,143,143, 81,143,143,  0,  0],
    [520,143,  0, 81,  0,143,203,  0,143,518,518,518,143,347,347]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}