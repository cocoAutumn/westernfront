main.floors.MT281=
{
    "floorId": "MT281",
    "title": "北角",
    "name": "北角",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "backwater.mp3",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "animate",
            "name": "wonder",
            "loc": [
                7,
                12
            ]
        },
        "\t[盟军指挥官,hero]发现敌舰沙恩霍斯特号！友军战列舰在不远处的海域，发射照明弹照亮敌人，给友军提供指引！",
        "\t[埃里希·贝（沙恩霍斯特号指挥官）,scharnhost]敌军巡洋舰队出现，暂未发现商船队踪影。不要与他们过多纠缠，开炮驱离他们。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[警告]极寒海域的拦路虎——沙恩霍斯特号战列舰 袭来！",
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
                    "x": 98,
                    "y": 64,
                    "width": 32,
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
                    "x": 98,
                    "y": 64,
                    "width": 32,
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
                    "x": 130,
                    "y": 64,
                    "width": 32,
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
                    "width": 32,
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
                    "x": 162,
                    "y": 64,
                    "width": 32,
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
                    "x": 162,
                    "y": 64,
                    "width": 32,
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
                    "width": 32,
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
                    "width": 32,
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
                    "x": 226,
                    "y": 64,
                    "width": 32,
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
                    "x": 226,
                    "y": 64,
                    "width": 32,
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
                    "width": 32,
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
                    "width": 32,
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
                    "x": 290,
                    "y": 64,
                    "width": 32,
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
                    "x": 290,
                    "y": 64,
                    "width": 32,
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
                    "width": 32,
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
                    "width": 32,
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
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "14,0": [
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
                "value": "40"
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT283",
                        "loc": [
                            7,
                            7
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    "德军吃了情报的亏，沙恩霍斯特号的行踪早已被盟军截获，于是盟军商船刻意避开了德军的行进路线。",
                    "德军还不知道的是，盟军在这个区域不只有JW55B船队，另一支JW55A船队也在。于是，护送商船离开后，两支护航舰队也加入了对沙恩霍斯特的围剿。",
                    "12月26日上午，英军巡洋舰率先与德舰发生遭遇。身为战列舰，对付一些巡洋舰没有什么问题，但损伤是不可避免的——沙恩霍斯特的雷达在战斗中受损。",
                    "意识到行踪暴露的德军战舰决定返航，但已经太迟。雷达受损的沙恩霍斯特号并不知道，自己已经十分清晰的显示在约克公爵号战列舰的雷达显示屏上。",
                    "下午16：54，一发照明弹划破天空，将德舰的轮廓照得通明。紧随其后，10枚重型炮弹呼啸而来。",
                    "两艘战列舰开始了对射，但沙恩霍斯特号的性能完全比不上约克公爵号，再加上雷达损毁，几乎无法准确命中。很快，其中一座主炮塔和水上飞机机库便被炸毁。",
                    "正面冲突不是对手，但沙恩霍斯特还是有一项优势——航速，打不过就跑。但天命没有给他们这个机会。就在德舰快要跑出英军视野范围的时候，一发重型炮弹不偏不倚砸进了锅炉舱。",
                    "德军的航速迅速降了下来，虽然很快被损管人员恢复，但这段时间足够英军追上来。迷雾中，英军驱逐舰率先赶到，并发射鱼雷。",
                    "2枚鱼雷命中沙恩霍斯特号防御最薄弱的位置，两个推进轴停止工作。只剩下10节航速的沙恩霍斯特号已难逃被击沉的命运。",
                    "绝望之余，贝少将给邓尼茨发去了最后一封电报：“只要我们还有最后一发炮弹，我们都将坚持战斗。”邓尼茨表示，附近所有的潜艇和飞机都在赶往增援，但已经来不及了。",
                    "19：15，照明弹再次照亮天空，英军的炮弹再次呼啸而至。沙恩霍斯特号的20毫米高射炮都在尝试向远方模糊的船影还击，但只是杯水车薪。这艘战舰的上层建筑几乎被完全摧毁，副炮也在剧烈的爆炸中彻底哑火。",
                    "19：45，当英军驱逐舰准备最后一次鱼雷齐射时，沙恩霍斯特号已经消失在海面上，只剩一些水兵还漂浮在冰冷刺骨的北冰洋中。",
                    "由于惧怕德军潜艇和飞机，英军只打捞了36个德军水手就匆忙离开，包括贝少将在内的其他人均随战舰一同沉入大海。出于对沙舰勇敢作战的尊敬，弗雷泽下令在沙舰沉没处投放了一个花圈。",
                    "德军仅有的四艘战列舰——沙恩霍斯特、格奈森瑙、俾斯麦和提尔皮茨，盟军已歼灭其二。剩余的两艘战舰，不是躺在船坞维修，就是龟缩在挪威无法出航。",
                    "从此之后，德国海军大型水面战舰的战斗历程彻底结束，只剩下潜艇和飞机还能零星骚扰着盟军往返苏联的船队，但随着盟军反潜技术的加强和小型航母的空中掩护加入，德军的袭击效果也与日俱减，正如他们在陆地上被苏军打的节节溃败那样。",
                    "海上的战斗告一段落，现在回到陆地。意大利战场远比盟军想象中的要艰难得多，原计划在1943年10月就该被拿下的罗马，直到1944年仍然遥不可及。",
                    "盟军的攻势在一个名叫卡西诺山的地方陷入停滞，这里位于罗马和那不勒斯之间，地势险要，还有德军布下的“古斯塔夫”防线，可以居高临下对盟军实施降维打击。这里把控着通向罗马主干道公路的咽喉，是盟军的必经之路。",
                    "为了夺下这个通向罗马必经之路的控制权，1944年1月，暴风雪过后，盟军再次开始了对卡西诺山的进攻。",
                    "而这场血腥的战役，将会把卡西诺山上历史悠久的基督教宝贵遗产，连同不计其数的英勇战士一起，焚烧殆尽。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT282",
                        "loc": [
                            -1,
                            -1
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "7,3": [
            {
                "type": "if",
                "condition": "(flag:MT281boss===0)",
                "true": [
                    {
                        "type": "clearMap",
                        "x": 322,
                        "y": 64,
                        "width": 32,
                        "height": 16
                    },
                    {
                        "type": "setBlock",
                        "number": "scharnhost",
                        "loc": [
                            [
                                7,
                                3
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
                        "name": "flag:MT281boss",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "playSound",
                        "name": "xinxinmagic.mp3"
                    },
                    "\t[系统提示]沙恩霍斯特号战列舰 攻击力小幅提升了",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:MT281boss===1)",
                        "true": [
                            {
                                "type": "clearMap",
                                "x": 290,
                                "y": 64,
                                "width": 32,
                                "height": 16
                            },
                            {
                                "type": "setBlock",
                                "number": "scharnhost",
                                "loc": [
                                    [
                                        7,
                                        3
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
                                "name": "flag:MT281boss",
                                "operator": "+=",
                                "value": "1"
                            },
                            {
                                "type": "playSound",
                                "name": "xinxinmagic.mp3"
                            },
                            "\t[系统提示]沙恩霍斯特号战列舰 生命值和攻击力提升了",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "waitAsync"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:MT281boss===2)",
                                "true": [
                                    {
                                        "type": "clearMap",
                                        "x": 258,
                                        "y": 64,
                                        "width": 32,
                                        "height": 16
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "scharnhost",
                                        "loc": [
                                            [
                                                7,
                                                3
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
                                        "name": "flag:MT281boss",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "playSound",
                                        "name": "xinxinmagic.mp3"
                                    },
                                    "\t[系统提示]沙恩霍斯特号战列舰 开启了“截断”技能",
                                    {
                                        "type": "sleep",
                                        "time": 500
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "if",
                                        "condition": "(flag:MT281boss===3)",
                                        "true": [
                                            {
                                                "type": "clearMap",
                                                "x": 226,
                                                "y": 64,
                                                "width": 32,
                                                "height": 16
                                            },
                                            {
                                                "type": "setBlock",
                                                "number": "scharnhost",
                                                "loc": [
                                                    [
                                                        7,
                                                        3
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
                                                "name": "flag:MT281boss",
                                                "operator": "+=",
                                                "value": "1"
                                            },
                                            {
                                                "type": "playSound",
                                                "name": "xinxinmagic.mp3"
                                            },
                                            "\t[系统提示]沙恩霍斯特号战列舰 开启了“三连击”技能",
                                            {
                                                "type": "sleep",
                                                "time": 500
                                            },
                                            {
                                                "type": "waitAsync"
                                            }
                                        ],
                                        "false": [
                                            {
                                                "type": "if",
                                                "condition": "(flag:MT281boss===4)",
                                                "true": [
                                                    {
                                                        "type": "clearMap",
                                                        "x": 194,
                                                        "y": 64,
                                                        "width": 32,
                                                        "height": 16
                                                    },
                                                    {
                                                        "type": "setBlock",
                                                        "number": "scharnhost",
                                                        "loc": [
                                                            [
                                                                7,
                                                                3
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
                                                        "name": "flag:MT281boss",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    "\t[埃里希·贝（沙恩霍斯特号指挥官）,scharnhost]目标受重创，继续攻击，拿下这个战果……",
                                                    {
                                                        "type": "animate",
                                                        "name": "explore2",
                                                        "loc": [
                                                            7,
                                                            3
                                                        ]
                                                    },
                                                    {
                                                        "type": "animate",
                                                        "name": "wonder",
                                                        "loc": [
                                                            7,
                                                            3
                                                        ]
                                                    },
                                                    {
                                                        "type": "setBlock",
                                                        "number": "N584",
                                                        "loc": [
                                                            [
                                                                7,
                                                                0
                                                            ]
                                                        ],
                                                        "time": 500
                                                    },
                                                    "\t[约克公爵号战列舰,N586]我们来晚了，但还来得及。瞄准沙恩霍斯特号，击沉她！",
                                                    {
                                                        "type": "playSound",
                                                        "name": "xinxinmagic.mp3"
                                                    },
                                                    "\t[系统提示]友军战列舰 乔治五世级三号舰 约克公爵号 加入战斗！已自动装备！",
                                                    {
                                                        "type": "setValue",
                                                        "name": "item:kinggeorge5",
                                                        "operator": "+=",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "type": "loadEquip",
                                                        "id": "kinggeorge5"
                                                    },
                                                    "\t[系统提示]沙恩霍斯特号战列舰受损 失去技能组",
                                                    {
                                                        "type": "hide",
                                                        "loc": [
                                                            [
                                                                7,
                                                                0
                                                            ]
                                                        ],
                                                        "remove": true
                                                    },
                                                    {
                                                        "type": "sleep",
                                                        "time": 500
                                                    },
                                                    {
                                                        "type": "waitAsync"
                                                    }
                                                ],
                                                "false": [
                                                    {
                                                        "type": "if",
                                                        "condition": "(flag:MT281boss===5)",
                                                        "true": [
                                                            {
                                                                "type": "clearMap",
                                                                "x": 162,
                                                                "y": 64,
                                                                "width": 32,
                                                                "height": 16
                                                            },
                                                            {
                                                                "type": "setBlock",
                                                                "number": "scharnhost",
                                                                "loc": [
                                                                    [
                                                                        7,
                                                                        3
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
                                                                "name": "flag:MT281boss",
                                                                "operator": "+=",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "playSound",
                                                                "name": "xinxinmagic.mp3"
                                                            },
                                                            "\t[系统提示]沙恩霍斯特号战列舰 主炮炮塔被摧毁 攻击力降低，失去相应技能",
                                                            {
                                                                "type": "sleep",
                                                                "time": 500
                                                            },
                                                            {
                                                                "type": "waitAsync"
                                                            }
                                                        ],
                                                        "false": [
                                                            {
                                                                "type": "if",
                                                                "condition": "(flag:MT281boss===6)",
                                                                "true": [
                                                                    {
                                                                        "type": "clearMap",
                                                                        "x": 130,
                                                                        "y": 64,
                                                                        "width": 32,
                                                                        "height": 16
                                                                    },
                                                                    {
                                                                        "type": "setBlock",
                                                                        "number": "scharnhost",
                                                                        "loc": [
                                                                            [
                                                                                7,
                                                                                3
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
                                                                        "name": "flag:MT281boss",
                                                                        "operator": "+=",
                                                                        "value": "1"
                                                                    },
                                                                    "\t[埃里希·贝（沙恩霍斯特号指挥官）,scharnhost]向邓尼茨元帅报告，我舰已受重创，引擎被毁，已无力回天。但只要还有一发炮弹，我们就不会放弃战斗！直至沉没！",
                                                                    {
                                                                        "type": "playSound",
                                                                        "name": "xinxinmagic.mp3"
                                                                    },
                                                                    "\t[系统提示]沙恩霍斯特号战列舰 最后的挣扎！生命值、攻击力降低！",
                                                                    {
                                                                        "type": "sleep",
                                                                        "time": 500
                                                                    },
                                                                    {
                                                                        "type": "waitAsync"
                                                                    }
                                                                ],
                                                                "false": [
                                                                    {
                                                                        "type": "if",
                                                                        "condition": "(flag:MT281boss===7)",
                                                                        "true": [
                                                                            {
                                                                                "type": "clearMap",
                                                                                "x": 98,
                                                                                "y": 64,
                                                                                "width": 32,
                                                                                "height": 16
                                                                            },
                                                                            {
                                                                                "type": "setBlock",
                                                                                "number": "scharnhost",
                                                                                "loc": [
                                                                                    [
                                                                                        7,
                                                                                        3
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
                                                                                "name": "flag:MT281boss",
                                                                                "operator": "+=",
                                                                                "value": "1"
                                                                            },
                                                                            {
                                                                                "type": "sleep",
                                                                                "time": 500
                                                                            },
                                                                            {
                                                                                "type": "animate",
                                                                                "name": "explore",
                                                                                "loc": [
                                                                                    7,
                                                                                    3
                                                                                ]
                                                                            },
                                                                            {
                                                                                "type": "animate",
                                                                                "name": "explore",
                                                                                "loc": [
                                                                                    7,
                                                                                    3
                                                                                ]
                                                                            },
                                                                            {
                                                                                "type": "animate",
                                                                                "name": "explore",
                                                                                "loc": [
                                                                                    7,
                                                                                    3
                                                                                ]
                                                                            },
                                                                            {
                                                                                "type": "playSound",
                                                                                "name": "torpeodoexplo.wav"
                                                                            },
                                                                            {
                                                                                "type": "hide",
                                                                                "loc": [
                                                                                    [
                                                                                        7,
                                                                                        3
                                                                                    ]
                                                                                ],
                                                                                "remove": true,
                                                                                "time": 1000
                                                                            },
                                                                            {
                                                                                "type": "setBlock",
                                                                                "number": "X10207",
                                                                                "loc": [
                                                                                    [
                                                                                        7,
                                                                                        3
                                                                                    ]
                                                                                ]
                                                                            },
                                                                            "\t[弗雷泽（英国本土舰队司令，坐镇约克公爵号）,N586]他们直到最后一刻，都没有放弃用仅存的武器向我们发起还击。虽是敌人，但值得敬佩。",
                                                                            "\t[弗雷泽（英国本土舰队司令，坐镇约克公爵号）,N586]先生们，与沙恩霍斯特号的战斗已经以我们的胜利而告终。我希望当你们中的任何人指挥一艘战舰面对强大数倍的对手时，会像今天沙恩霍斯特号的指挥官一样勇敢。",
                                                                            {
                                                                                "type": "playSound",
                                                                                "name": "xinxinmagic.mp3"
                                                                            },
                                                                            "\t[系统提示]主线boss战 胜利！",
                                                                            {
                                                                                "type": "unloadEquip",
                                                                                "pos": 3
                                                                            },
                                                                            {
                                                                                "type": "setValue",
                                                                                "name": "item:kinggeorge5",
                                                                                "operator": "-=",
                                                                                "value": "1"
                                                                            },
                                                                            {
                                                                                "type": "function",
                                                                                "function": "function(){\nflags.mission[39][0]=true\n}"
                                                                            },
                                                                            {
                                                                                "type": "playSound",
                                                                                "name": "torpeodoexplo.wav"
                                                                            },
                                                                            {
                                                                                "type": "hide",
                                                                                "loc": [
                                                                                    [
                                                                                        7,
                                                                                        3
                                                                                    ]
                                                                                ],
                                                                                "remove": true,
                                                                                "time": 1000
                                                                            },
                                                                            {
                                                                                "type": "openDoor",
                                                                                "loc": [
                                                                                    14,
                                                                                    1
                                                                                ]
                                                                            },
                                                                            {
                                                                                "type": "clearMap",
                                                                                "x": 0,
                                                                                "y": 0,
                                                                                "width": 416,
                                                                                "height": 416
                                                                            },
                                                                            {
                                                                                "type": "forbidSave"
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109, 89],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,109, 85],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,332,  0,  0,  0,  0,  0,  0,  0],
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
    "area": "海洋"
}