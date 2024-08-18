main.floors.MT214=
{
    "floorId": "MT214",
    "title": "法国",
    "name": "法国",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "sky.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "europe4.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,14": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]接下来的这个新技能就是一个加了限制条件的对称飞。本塔中没有固定的使用套路，看哪里空旷有好东西就尽管飞吧。"
        ],
        "14,7": [
            {
                "type": "playSound",
                "name": "technology.mp3"
            },
            {
                "type": "function",
                "function": "function(){\nflags.learned[15]=true\n}"
            },
            "\t[系统提示]习得新技能：C-47空中列车",
            "\t[系统提示]\f[skill15.jpg,170,50]C-47空中列车（300指挥点）：仅能在陆地或浅滩使用，空降至当前地图的中心对称落点。如果目标地点处于“防空”范围内或敌战斗机周围8格内，强行空降将损失80%血量。",
            "\t[历史来源]\f[skill15.jpg,170,50]C-47运输机是20世纪30年代美国道格拉斯公司研制的一种双发螺旋桨运输机，绰号“空中列车”。战争爆发后，该运输机被广泛用于各大战场，包括太平洋战场、中缅印战场和西线战场，以空运物资的方式为战争的胜利做出重大贡献，尤其在中国战场，负责将盟军的各种物资经由危险的“驼峰航线”运抵中国协助抗日的，大多数都是C-47。在欧洲服役的C-47经常担任空降伞兵以及牵引滑翔机的任务，包括在诺曼底登陆、市场花园行动等任务中，深入敌后防御薄弱处降下满天士兵，打敌人一个措手不及。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "7,0": [
            {
                "type": "function",
                "function": "function(){\nflags.mission[31][0]=true\n}"
            },
            {
                "type": "if",
                "condition": "(flag:友军血量>=500000)",
                "true": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[31][1]=true\n}"
                    }
                ]
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
                "type": "changeFloor",
                "floorId": "MT215",
                "loc": [
                    -1,
                    -1
                ]
            }
        ]
    },
    "changeFloor": {
        "7,14": {
            "floorId": "MT213",
            "loc": [
                7,
                0
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "12,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT214_13_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT214_13_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT214_13_7",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "13,7": {
            "0": {
                "condition": "flag:door_MT214_13_7==3",
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
                        "name": "flag:door_MT214_13_7",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,0": {
            "0": {
                "condition": "core.searchBlock('fw190a1',['MT210','MT211','MT212','MT213','MT214']).length + core.searchBlock('fw190a3',['MT210','MT211','MT212','MT213','MT214']).length === 0",
                "currentFloor": false,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "function",
                        "function": "function(){\nflags.mission[31][2]=true\n}"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 21,140, 21,140, 21,140,140, 89,140,  0,  0,378,536, 21,140],
    [ 21,140, 21,206, 21,378,140,372,140,371,140,140,140, 21,519],
    [368,140,140,140,140, 81,140,372,140,  0, 81,518,140, 82,140],
    [  0,  0, 81,  0,140,  0,140,372,140,538,140,518,140,371,536],
    [368,140,140,  0,140,  0, 81,  0, 81,  0,140,518,140,536,536],
    [539,539,390,  0,368, 21,140,140,140,140,140,140,140,140,536],
    [140,140,140,140,140,  0,369,571,140,539,140,539,277,140,140],
    [537,277,  0,277,537,140,140,369, 81,378, 82,369,522, 85,551],
    [537,140, 21,140,537,537,140,536,140,539,140,539,277,140,140],
    [140,140, 82,140,140, 81,140,  0,140,140,140,140,140,140,539],
    [  0,371,  0,140,536,  0,140,369,140,571,  0, 81,  0,140,539],
    [537,140,  0,  0,140,  0, 82,536, 81,  0,538,140,  0,378,539],
    [538,140,390,  0,140,571,140,  0,140,368,140,140,140, 82,140],
    [538,140,140,368,140,  0,140,369,140,521,521,140, 21,371, 21],
    [538,140, 21, 21, 81,536,140, 93,601,140,518,140,535,535,535]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}