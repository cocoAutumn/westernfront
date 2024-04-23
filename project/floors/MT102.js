main.floors.MT102=
{
    "floorId": "MT102",
    "title": "撒哈拉沙漠",
    "name": "撒哈拉沙漠",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "bgm7.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "showStatusBar"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "chapter4.jpg",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 500
        },
        {
            "type": "sleep",
            "time": 2000
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 500
        },
        "\r[yellow]Mission 16 罗盘行动",
        {
            "type": "setValue",
            "name": "flag:dry",
            "value": "true"
        },
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]虽然我们先前没能料到敌人的突袭导致丢失了大片占领地，但现在夺回来还不算晚。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[奥金莱克]\f[auchinleck.png,0,310]意大利人的战斗素质比较低，也没有多少重型武器。这里的战事必须快速解决，然后尽快去支援希腊的盟军。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]进入新章节，本章主战场位于非洲北部沙漠地区。",
        "\t[系统提示]沙漠环境恶劣，血瓶稀缺，且交战双方都将被赋予“炎热”debuff，在每回合战斗结束后，双方都将额外受到20%的回合伤害。因此，敌人伤害越高，战斗回合数越多，玩家受到的伤害将直线提升。",
        "\t[系统提示]此外，炎热debuff无法以任何形式解除。除非战场来到沙漠以外的区域，debuff将自动解除。",
        "\t[系统提示]前三章的敌人没有太多花里胡哨的特殊技能，就当是新手引导。从本章开始，逐渐出现新的技能和机制，但新技能或机制出现时，会有相应的系统提示，不用担心会被突如其来的离奇机制坑死。",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        {
            "type": "setEnemy",
            "id": "cr42",
            "name": "hp",
            "value": "6500"
        },
        {
            "type": "setEnemy",
            "id": "cr42",
            "name": "atk",
            "value": "500"
        },
        {
            "type": "setEnemy",
            "id": "cr42",
            "name": "n",
            "value": "3"
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "hp",
            "value": "8500"
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "atk",
            "value": "900"
        },
        {
            "type": "setEnemy",
            "id": "artillery75",
            "name": "hp",
            "value": "5000"
        },
        {
            "type": "setEnemy",
            "id": "artillery75",
            "name": "atk",
            "value": "4000"
        },
        {
            "type": "setEnemy",
            "id": "artillery75",
            "name": "zone",
            "value": "1000"
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "hp",
            "value": "5000"
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "atk",
            "value": "5000"
        },
        {
            "type": "setEnemy",
            "id": "ab41",
            "name": "hp",
            "value": "15000"
        },
        {
            "type": "setEnemy",
            "id": "ab41",
            "name": "atk",
            "value": "1500"
        },
        {
            "type": "setEnemy",
            "id": "ab41",
            "name": "special",
            "value": "[5]"
        },
        "\t[系统提示]敌人战力重置完成",
        "\t[系统提示]即将进入存档界面",
        {
            "type": "callSave"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐通过当前区域\n⭐击败格拉齐亚尼（支线boss）\n⭐击毁所有敌方坦克（不包括支线boss战）",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,7": {
            "floorId": "MT103",
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
    [ 21,361, 21,150, 21,361, 21,150,150, 22,150,363,533,534,566],
    [361,363,361,150,361,363,361,150, 21, 21,150, 81,150,150,150],
    [150, 81,150,150,150, 81,150,150,361,361,150,363,  0,  0,  0],
    [  0,  0,577,  0,  0,365,  0,  0,529,  0,  0,150,150,150,363],
    [361,150,150,150,362,150, 81,150,150,150,362, 81,  0,  0,  0],
    [  0,532,  0,150,518,150,  0,  0,150, 30,  0,150,150,150,150],
    [150,150,576,150,  0,150,150,362,150,150,361,150, 21,  0, 21],
    [ 92,361,361, 81,362,534,150,362,150, 30,  0, 86,  0,  0,  0],
    [150,150, 81,150,150,150,150,362,150,150,361,150, 21,  0, 21],
    [566,  0,364,150,527,361,  0,  0, 81,  0,  0,150,150,150,150],
    [566,530,  0,150,150, 82,150,361,150,  0,  0,362,150,  0,533],
    [150,150,150,150,528,  0,150,534,150,150,362,  0,576,361,  0],
    [566,  0,363,  0,  0,528,363,150,150,534,150, 81,150,150, 82],
    [150,150,150,150, 81,150,  0,361,361,532,150,364,  0,526,526],
    [533,532,566,530,363,150,  0,150,150,534,150,  0,  0,534,530]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}