main.floors.train3=
{
    "floorId": "train3",
    "title": "训练场",
    "name": "训练场",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:hpmax",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "10",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:top",
            "value": "100",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:money",
            "value": "0",
            "norefresh": true
        },
        {
            "type": "setValue",
            "name": "status:exp",
            "value": "0"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "text",
            "text": "\t[道丁]\f[dowdin.png,0,310]指挥官阁下，接下来我会告诉你如何妥善运用我方空中力量。",
            "pos": [
                100,
                340,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[道丁]\f[dowdin.png,0,310]空军在战斗中经常能为你提供强大的火力支援以及掩护，是非常有价值的部队。对敌人来说也是如此。",
            "pos": [
                100,
                340,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[道丁]\f[dowdin.png,0,310]战斗机是空军最重要的一部分力量。它们虽然攻击力并不高，但却非常适合对空攻击，也可以为地面部队提供少量助力。",
            "pos": [
                100,
                340,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[道丁]\f[dowdin.png,0,310]与敌方战斗机进行战斗时，双方只通过攻击力以及技能来战斗，其他数值均不参与。",
            "pos": [
                100,
                340,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[道丁]\f[dowdin.png,0,310]所以，在战斗机的空战中，我们要做的很简单——提升攻击力，强化装备或制定合理的战术技能即可。",
            "pos": [
                100,
                340,
                380
            ]
        },
        {
            "type": "setValue",
            "name": "item:hurricanemk1",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "loadEquip",
            "id": "hurricanemk1"
        },
        {
            "type": "text",
            "text": "\t[道丁]\f[dowdin.png,0,310]一队战斗机已抵达当前空域，让他们加入战斗！",
            "pos": [
                100,
                340,
                380
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,4": [
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]前方发现敌军轰炸机！",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]轰炸机对于地面或海上的战斗有着非常强力的支援作用，如果不能及时击落敌方轰炸机，就会导致我方承受大量伤害！",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]轰炸机造成的伤害往往由“空袭”这一数值决定。具体的计算方式则是通过其技能来计算的。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "callBook"
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]我们可以看到，轰炸机自身的攻击力非常贫弱，但每一个通过“空袭”值计算的技能都会对我方造成巨额伤害。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]缩减回合数是最好的方法。刚才我们用的轻型战斗机虽然也可以完虐轰炸机，但因为机枪火力不足，比较缺乏效率。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]而重型战斗机具有较高的攻击力，可以更快的拦截敌方轰炸机。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]但因为重型战斗机通常要承受更大的负重，导致自身灵活性大大降低，所以并不适合作为主力输出手段。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "setValue",
                "name": "item:beautifighter",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "loadEquip",
                "id": "beautifighter"
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]一架重型战斗机已经赶来支援，注意，重型战斗机属于“攻击机”类，可以和普通战斗机一起出战。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "4,10": [
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]接下来是最后一个装备类型：轰炸机。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]轰炸机也分多种类型：鱼雷轰炸机、中型轰炸机和战略轰炸机。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]鱼雷轰炸机载弹量较小，但可以挂载鱼雷，打击海上目标，而且效率更快。并且，它们可以从航空母舰上起飞。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]鱼雷不能朝地面发射，但这时候，鱼雷机会自动切换武器为常规炸弹。不过数量肯定是比较少的。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]中型轰炸机则正相反，它们的载弹量更多，更适合对地。但精准度也较差，故对舰效率并不理想。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]战略轰炸机具有特殊的机制，需要依据时机来使用，并且没有对舰攻击的能力。这个需要由你自己在实战中去悟了。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "14,9": [
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]前面是我们的最后一个目标，一艘靶舰。你可以使用航母来攻击它。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]每艘航母都会搭载3种舰载机：战斗机、俯冲轰炸机和鱼雷机。航母自身战斗力虽然不强，但三种飞机挤在同一个装备格子里，也会爆发很强的战斗力。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]但是航母毕竟不是正规陆地机场。航母空间有限，只有经过特殊处理的舰载机才能从航母上起降。能够在航母上起飞的飞机都会有特殊标识，不用你担心。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]一般情况下，同一级的舰载机的战斗力是略低于陆基飞机的，但是差距不会太大。所以说航空母舰的战斗力是值得期待一下的。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "setValue",
                "name": "item:eagle",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:swordfish",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "loadEquip",
                "id": "eagle"
            },
            {
                "type": "loadEquip",
                "id": "swordfish"
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]我已经为你装备了合适的轰炸机和航空母舰。现在，完成你的最后一个教学任务，你就可以毕业了。去吧。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "14,0": [
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
                "type": "pauseBgm"
            },
            {
                "type": "hideStatusBar"
            },
            {
                "type": "update"
            },
            {
                "type": "setHeroOpacity",
                "opacity": 0
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "value": "1000"
            },
            {
                "type": "setValue",
                "name": "status:hpmax",
                "value": "2000"
            },
            {
                "type": "setValue",
                "name": "status:mana",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:atk",
                "value": "10"
            },
            {
                "type": "setValue",
                "name": "status:arm",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:top",
                "value": "100"
            },
            {
                "type": "setValue",
                "name": "status:tpn",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:dod",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:mdef",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:money",
                "value": "0"
            },
            {
                "type": "setValue",
                "name": "status:exp",
                "value": "0"
            },
            {
                "type": "function",
                "function": "function(){\nflags.skillList=[0,0,0,0,0,0,0]\n}"
            },
            {
                "type": "confirm",
                "text": "跳过初始剧情吗？",
                "yes": [
                    {
                        "type": "changeFloor",
                        "floorId": "prepare1",
                        "loc": [
                            7,
                            7
                        ],
                        "direction": "down"
                    }
                ],
                "no": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT0",
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
        "7,4": [
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]敌机已被击落，继续前进。",
                "pos": [
                    100,
                    300,
                    380
                ]
            }
        ],
        "11,6": [
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]本游戏中，攻击机是多种飞机的统称（注意与现实区分）。除了重型战斗机外，攻击机还包括对地攻击机和俯冲轰炸机等。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]对地攻击机在保留部分对空能力的同时，装备了多种副武器，可以为我方陆军提供有力支援。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]而俯冲轰炸机虽然载弹量较小，但精准度更高，非常适合对舰攻击。而且，大多数俯冲轰炸机都可以在航空母舰上起降。",
                "pos": [
                    100,
                    300,
                    380
                ]
            },
            {
                "type": "unloadEquip",
                "pos": 5
            },
            {
                "type": "setValue",
                "name": "item:beautifighter",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:typhoon",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "loadEquip",
                "id": "typhoon"
            },
            {
                "type": "text",
                "text": "\t[道丁]\f[dowdin.png,0,310]你的重型战斗机已被替换为攻击机，试着摧毁前方的地面目标。",
                "pos": [
                    100,
                    300,
                    380
                ]
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_train3_4_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_train3_4_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "14,1": [
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
                "type": "setValue",
                "name": "item:eagle",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:hurricanemk1",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:typhoon",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:swordfish",
                "operator": "-=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "4,9": {
            "0": {
                "condition": "flag:door_train3_4_9==2",
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
                        "name": "flag:door_train3_4_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  0,  0,  0,  0,  0,  0, 17, 17, 17,  0,  0,  0,  0, 17, 89],
    [  0,  0,  0,  0,  0, 17, 17,  0, 17, 17,  0,  0,  0, 17,209],
    [  0,  0,  0,  0,  0, 17,  0,  0,  0, 17,  0,  0,  0, 17,  0],
    [150,150,150,150,150,150,150,  0,150,150,150,150,150,150,  0],
    [150,150,150,150,150,150,150,205,150,  0,  0,  0,  0,150,  0],
    [150,150,150,150,150,150,150,  0, 33,  0,150,  0,150,150,  0],
    [150,150,150,  0,  0,  0,150,150,150,150,150,207,150,150,  0],
    [150,150,150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,150,  0],
    [150,150,150,226,  0,226,150,150,150,150,  0,  0,  0,150,  0],
    [150,150,150,150, 85,150,150,  0,  0,150,150,150,150,150,  0],
    [150,150,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [148,148,148,148,148,148,148,148,148,148,148,148,148,148,148],
    [148,148,148,148,148,148,148,148,148,148,148,148,148,148,148],
    [148,148,148,148,148,148,148,148,148,148,148,148,148,148,148],
    [148,148,148,148,148,148,148,148,148,148,148,148,148,148,148]
],
    "bgmap": [
    [155,155,155,155,154,154,145,145,145,154,154,155,155,155,155],
    [154,154,154,154,154,145,145,  0,145,145,154,154,154,154,154],
    [145,145,145,145,145,145,  0,  0,  0,145,145,145,145,145,145],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bgm": "ConquestofParadise.mp3",
    "area": "浅滩"
}