main.floors.MT449=
{
    "floorId": "MT449",
    "title": "东京",
    "name": "东京",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "bgm4.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "14,7": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "13,7": [
            {
                "type": "if",
                "condition": "(flag:savecommunist===true)",
                "true": [
                    "“中国人民与日本人民是一致的，只有一个敌人，就是日本帝国主义与中国民族败类。”\n-----毛泽东\n1941年5月15日",
                    "伊田助男、秋山良照、小林宽澄、牧口常三郎、野坂参三、杉本良吉、德田球一、小林多喜二、石川达三、宫本百合子、杉本一夫、小林武夫、冈田义雄、山田一郎、松野觉、山崎宏……以及无数没有提到的和没有留下姓名的国际主义战士们。",
                    "在那样的社会环境下，清醒的，坚持正义的人终究是极少数。但正是这极少数人，手握着一个国家、一个民族最后的火种。他们被冠上“叛国”之名，却是真正的爱国者。",
                    "铭记历史，勿忘国耻，但同时也不能忘记这些正直善良的异国勇士们。向这些在世界反法西斯战争中做出贡献的日本义士们，致以最崇高的敬意。"
                ],
                "false": [
                    {
                        "type": "show",
                        "loc": [
                            [
                                14,
                                7
                            ]
                        ],
                        "time": 500
                    },
                    {
                        "type": "playSound",
                        "name": "158-Skill02.mp3"
                    },
                    {
                        "type": "animate",
                        "name": "immekill"
                    },
                    {
                        "type": "animate",
                        "name": "wonder",
                        "loc": "hero",
                        "async": true
                    },
                    {
                        "type": "sleep",
                        "time": 200
                    },
                    {
                        "type": "animate",
                        "name": "shoot",
                        "loc": [
                            14,
                            7
                        ]
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                14,
                                7
                            ]
                        ],
                        "remove": true,
                        "time": 100
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[日共党员,N494]我选择了这条路，就没怕过死亡。把这些证据交到你们手上，我也就完成了组织的任务了。",
                    "\t[日共党员,N494]请一定要把万恶的军国主义送上绞刑架……我不能，看着我的国家和人民被军国主义残害，犯下滔天罪行……",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                13,
                                7
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    "\t[苏军指挥官,hero]我们虽然拿到了这些重要文件，但这位同志却不幸的离开了。他倒在了胜利的前夕。",
                    "\t[苏军指挥官,hero]这么多年的潜伏辛苦你们了。安心睡下吧，你的遗志我们收到了。",
                    {
                        "type": "setBlock",
                        "number": "X10207",
                        "loc": [
                            [
                                13,
                                7
                            ]
                        ],
                        "time": 0
                    },
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[60][1]=true\n}"
                    },
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[系统提示]包括这位在内，本章节整个是虚构的，但也是有现实原型的：",
                    "\t[系统提示]尾崎秀实，共产主义者、记者、日本《朝日新闻》社驻上海特派员、中国问题专家、反战同盟成员，日本首相近卫文麿的私人秘书。战争期间暗中为苏联提供日本战略情报，揭露日军侵华暴行，主张和平，周恩来曾经赞之为“国宝”。",
                    "\t[系统提示]1941年10月被捕，1944年11月7日，十月革命27周年纪念日，被军国主义分子秘密处决。"
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT448",
            "loc": [
                14,
                7
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_12_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_12_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_12_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_10_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_7_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_7_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_7_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT449_5_7",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "12,7": {
            "0": {
                "condition": "flag:door_MT449_12_7==3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_12_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "10,7": {
            "0": {
                "condition": "flag:door_MT449_10_7==6",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_10_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "7,7": {
            "0": {
                "condition": "flag:door_MT449_7_7==3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_7_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "5,7": {
            "0": {
                "condition": "flag:door_MT449_5_7==6",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT449_5_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [645,648,693, 82,  0,  2,646, 22,646,  2,  0,  0,691,612,  0],
    [645,648,  0,  2,  0,  2,646,691,646,  2,  0,  2,  2,  2, 82],
    [  2,  2,  2,  2,690,  2,  2, 81,  2,  2,686,  2,  0,705,695],
    [687,  0,690,  0,518,  2,  0,700,  0,  2,  0,  2,688,  2,  2],
    [ 81,  2,  2,518,  0,691,  0,  2,  0, 81,690,  2,  0,647,647],
    [685,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,645,645],
    [  2,684,  2,684,685,  2,687,  2,692,692,  2,693,  2,  2,  2],
    [ 92,  0, 82,688,686, 85,687, 85,691,691, 85,694, 85,494,683],
    [  2,684,  2,684,685,  2,687,  2,692,692,  2,693,  2,  2,  2],
    [685,  0,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,519,647],
    [ 81,  2,  2,  0,  0,  0,700,  0,518,518,  2,702,  0,519,648],
    [687,  0,  0,690,  2,  2, 81,  2,  2,  2,  2, 82,  2,  2,  2],
    [  2,  2,  2,  0, 21,  2,  0,  0,  0,686,  0,690,  0,612, 21],
    [ 22,647,  2,686,  2,  2,  2,695,  2,  2,  2,688,  2,  2,  2],
    [648,691, 81,518, 21,  2, 21, 21, 21,  2,612,  0, 22, 22,  2]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}