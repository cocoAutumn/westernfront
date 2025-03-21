main.floors.MT369=
{
    "floorId": "MT369",
    "title": "比利时",
    "name": "比利时",
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
        "1,0": [
            {
                "type": "playSound",
                "name": "technology.mp3"
            },
            {
                "type": "function",
                "function": "function(){\nflags.learned[25]=true\n}"
            },
            "\t[系统提示]习得新技能：高脚柜炸弹",
            "\t[系统提示]\f[skill24.png,170,50]高脚柜炸弹（1000指挥点）：只能在陆地或浅滩使用，且必须装备着特定轰炸机（兰开斯特）。使用后在前方一格投下一枚“高脚柜”炸弹，直接摧毁面前的非boss陆军（无视抗破），并在爆炸地点九宫格3格半径内引发小范围地震，摧毁可破墙壁，范围内其他敌方陆军损失80%血量",
            "\t[历史来源]\f[skill24.png,170,50]“高脚柜”(Tallboy)是二战期间英国研制的一种巨型炸弹，装有2359千克铝末混合-D1炸药，巨大的爆炸甚至可以引发小型地震。到战争结束，英国一共生产了854枚“高脚柜”，另外还研发出加强版的“大满贯”(Grandslam)炸弹。“高脚柜”取得的最出名的战果是击沉德军提尔皮茨号战列舰。",
            {
                "type": "playSound",
                "name": "xinxinmagic.mp3"
            },
            "\t[系统提示]恭喜，你已解锁本游戏的最后一个技能！",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT368",
            "loc": [
                7,
                0
            ]
        },
        "7,0": {
            "floorId": "MT370",
            "loc": [
                7,
                14
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "0,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT369_1_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "1,11": {
            "0": {
                "condition": "flag:door_MT369_1_11==2",
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
                        "name": "flag:door_MT369_1_11",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "1,7": {
            "0": {
                "condition": "flag:door_MT369_1_7==5",
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
                        "name": "flag:door_MT369_1_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "1,3": {
            "0": {
                "condition": "flag:door_MT369_1_3==5",
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
                        "name": "flag:door_MT369_1_3",
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
    [636,551,636,146,580,384,146, 91,146,635,635,635,227,146,638],
    [636,636,636,146,519,146,146,201,146,146,146,146, 81,146,638],
    [636,201,636,146,228,146,608,632,608,146,  0,668,664,146,638],
    [146, 85,146,146,265,146,146, 81,146,146,608,146,  0, 81,632],
    [412,643,412,146,  0,  0,406,  0,  0,275,  0,146,146,146,146],
    [643,391,643,146,146,146, 82,146,146,146,406,250,  0,  0,  0],
    [270,643,270,146,518,146,  0,146,637,146,  0,146,146, 81,146],
    [146, 85,146,146,519,669,275,669,637,146,  0,146,635,636,635],
    [664,643,664,146,518,146,  0,146,637,146,668, 81,201,519,391],
    [643,228,643,146,146,146,275,146,146,146,  0,146,  0,664,  0],
    [228,643,228,146,  0,341,  0,146,518,146,  0,146,146, 81,146],
    [146, 85,146,146, 82,146,146,146,  0, 81,227,  0,250,  0,638],
    [632,643,632,146,  0,  0,250,275,250,  0,146,146,146,146,  0],
    [146, 82,146,146, 81,146,146,  0,146,250,146,581,580,146,275],
    [637,638,  0,670,265,637,146, 93,146,643,146,580,632, 81,266]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}