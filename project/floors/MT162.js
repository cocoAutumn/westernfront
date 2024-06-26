main.floors.MT162=
{
    "floorId": "MT162",
    "title": "北冰洋",
    "name": "北冰洋",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "water",
    "bgm": "wots5.mp3",
    "firstArrive": [
        "\t[盟军指挥官,hero]友军发来通讯，提尔皮茨号可能与我们的舰队非常接近，而主力打击舰队无法及时赶来。一旦遭遇提尔皮茨号，我们将全军覆没。",
        "\t[盟军指挥官,hero]总部已经下达命令，为保存海军实力，就地解散编队，商船队分散前往苏联，护航队立即撤回。",
        "\t[盟军指挥官,hero]虽然我认为这是一道非常荒谬的命令，但我们也不得不服从。抱歉了，商船队的各位，接下来的航程中我们不会再提供任何保护了。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]船队已解散，不再有需要保护的友军目标。",
        {
            "type": "if",
            "condition": "(flag:友军血量>=200000)",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\nflags.mission[24][2]=true\n}"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flag:友军血量>=400000)",
            "true": [
                {
                    "type": "function",
                    "function": "function(){\nflags.mission[24][1]=true\n}"
                }
            ]
        },
        {
            "type": "setValue",
            "name": "flag:escort",
            "value": "false"
        }
    ],
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
                "function": "function(){\nflags.mission[24][0]=true\n}"
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
                "value": "25"
            },
            {
                "type": "confirm",
                "text": "跳过剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT164",
                        "loc": [
                            7,
                            9
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "playBgm",
                        "name": "wots5.mp3"
                    },
                    "航程的最初，一切都还比较顺利。德国空军和潜艇发动了几次小规模袭击，但都被庞大的护航舰队击退。",
                    "德军指挥中心得知PQ-17的规模后，认为仅凭潜艇和飞机是没法有效拦截这支船队的。他们决定派出那艘杀手锏——正是盟军颇为忌惮的提尔皮茨号战列舰。",
                    "盟军打击舰队是击沉提尔皮茨号的唯一希望，但他们却在关键时刻被浮冰阻挡了去路，没法及时与船队会合。在这种情况下，提尔皮茨号甚至不需要与英军展开激烈的炮战，只需要在英军射程之外用380mm的主炮逐个点名，就能轻松灭掉整个船队。",
                    "7月5日，盟军收到了苏联潜艇的报告，提尔皮茨号、舍尔海军上将号和希佩尔海军上将号组成的致命舰队已经离开了挪威。苏军潜艇虽然发起了攻击，但随后的英军潜艇却发现，他们的攻击没有起到效果。",
                    "提尔皮茨号先不提，另外两艘重巡洋舰面对船队里这些小型护航舰也能照样如入无人之境。这三艘船一起出动，PQ-17绝无任何生还的可能。",
                    "提尔皮茨号只需10个小时就可以进入射程。远在伦敦的庞德上将担心PQ-17会全军覆没，于是痛苦地下令解散PQ-17，护航队原路返回，商船分散自行前往苏联。",
                    "接到命令的商船队水兵们气的直骂娘，但他们还是表现出了视死如归的气概，没有一艘选择逃避，相继分开前往苏联。",
                    "结果显而易见，他们遭到了海运史上最恐怖的屠杀。商船速度缓慢，没有任何装甲保护，用于自保的手段仅有可怜的几挺高射机枪，甚至有的连高射机枪都没有，随便几架战斗机的扫射就可以使整艘船布满尸骸。",
                    {
                        "type": "showImage",
                        "code": 1,
                        "image": "pq17.jpg",
                        "loc": [
                            0,
                            0
                        ],
                        "opacity": 1,
                        "time": 0
                    },
                    {
                        "type": "setCurtain",
                        "time": 1000
                    },
                    {
                        "type": "sleep",
                        "time": 1000
                    },
                    "德国空军和潜艇部队密切配合，巡逻机一旦发现任何一艘商船的行踪，就马上报告给周围的潜艇或是空军基地，然后这艘可怜的商船就会被潜艇或飞机团团围住，难逃一死。",
                    "戏剧性的是，提尔皮茨号为首的舰队并没有亲自参与屠杀。他们截获了英军电报，但没有完全破译，只知道PQ-17后面跟着航母和战列舰，却不知道他们被浮冰阻挡的事情。于是为了保存有生力量，提尔皮茨号在距离船队仅4小时航程的位置上，掉头回去了。",
                    "PQ-17的命运是北方航线中最凄惨的一幕，皇家海军对流冰、天气和航程中的困难估计过低，而对“提”舰的威力又估计过高，走向了惊慌失措的极端。这一致命的错误的结果就是，34艘商船中的24艘就这样永远地埋在了北冰洋的海底。",
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
                    "一个月后，仅存的商船终于抵达了阿尔汉格尔斯克和摩尔曼斯克。救护船没有遭到袭击，但上面也挤满了伤员，其中很多因为爆炸和冻伤，烙下了终身的残疾。",
                    "7万吨货物奇迹般的从德军残暴的攻击下运抵苏联，并参与了卫国战争，为曾经保护着它们的船员复仇。另外13万吨货物，包括430辆坦克、250架飞机、3350辆卡车，还有大批粮食、汽油、轮胎、医药、弹药、电台等，永远留在了海底。",
                    "盟军的牺牲不会白费。经此一战，盟军吸取了教训，改良战术，为下一次的护航行动做准备，而且，苏联接收的货物也足够支撑他们撑过最困难的那段时光。用不了多久，他们就能重整旗鼓，向法西斯畜生们发起反攻。",
                    {
                        "type": "sleep",
                        "time": 500
                    },
                    "回到北非战场，隆美尔拿下了自己心心念念的托布鲁克，但还没有赢得整场北非战争。他和苏伊士运河之间，还隔着一个埃及。",
                    "英军在加查拉战役中败退后，撤到了埃及的阿拉曼，并在这里构筑防线。",
                    "盟军已经没有多少退路，这道防线绝不能再被攻破。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT163",
                        "loc": [
                            -1,
                            -1
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "0,7": {
            "floorId": "MT161",
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
    [518,531,  3,  3,533,  6,  6,530,  6,530,  3,533,533,  6,518],
    [531,393,  3,531,531,360,393,530,216,530,  6,  3,216,360,518],
    [  6, 81,  3,  6, 81,  3,  6, 81,  3, 81,533,382,  0,  6, 21],
    [  0,360,384,  3,383,  6,531,534,  6,  0,  6,  0,533,  3,  6],
    [534,  6,534,  6,534,360,207,569,  3,  0,  3,216,  3,  6, 21],
    [  0,  3,569,360,521,  6,  3,216, 81,385,  6,  0,531,384, 21],
    [216,  3,  6, 81,  3,  3,534,534,  3,531,360,368,  0,  3,  3],
    [ 92,  0,569,207,521,360,534,  6,  6,385,  3,  6,255,360, 89],
    [  3,  3,360,  6,569,  6, 82,534,  3,521,360,368,521,  3,  3],
    [ 21,  3,216,  3,  3,  0,382,534,360,216,  3,  3,394,  6,532],
    [ 21,393,  0,534,  6,216,  3,  3,  3,531,  6,531,531,360,532],
    [ 21,  3,382,  0,360,521,383,534,  6,531, 82,531,  3, 81,  6],
    [  3,  3, 81,  3,  3,  3, 81,  3,  3,  3,332,  6,  3,395,532],
    [ 21,  6,216,533,  6,532,255,532,  3,588,588,588,  3,  6,532],
    [ 21,360,533,533, 82,530,530,530,  3,588,588,588,  6,518,518]
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