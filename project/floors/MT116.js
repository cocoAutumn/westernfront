main.floors.MT116=
{
    "floorId": "MT116",
    "title": "马耳他",
    "name": "马耳他",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10007",
    "bgm": "bgm5.mp3",
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
        "\r[yellow]Mission 18 马耳他之战",
        "\t[盟军指挥官,hero]各位战士们，在这场战斗中，请妥善利用身边的任何掩体，一击脱离，保护好自己。",
        "\t[盟军指挥官,hero]与以往不同，我们正在背水一战，这一次无法承受太多牺牲了。",
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
            "id": "italyinf1",
            "name": "hp",
            "value": "30000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf1",
            "name": "atk",
            "value": "800"
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "hp",
            "value": "30000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "atk",
            "value": "900"
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "hp",
            "value": "20000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "atk",
            "value": "1000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "hp",
            "value": "20000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "atk",
            "value": "1500"
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "hp",
            "value": "15000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "atk",
            "value": "900"
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "hp",
            "value": "12000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "atk",
            "value": "1100"
        },
        {
            "type": "setEnemy",
            "id": "italyinf7",
            "name": "hp",
            "value": "20000"
        },
        {
            "type": "setEnemy",
            "id": "italyinf7",
            "name": "atk",
            "value": "3000"
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "5000"
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "3000"
        },
        {
            "type": "setEnemy",
            "id": "cr42",
            "name": "hp",
            "value": "9000"
        },
        {
            "type": "setEnemy",
            "id": "cr42",
            "name": "atk",
            "value": "1500"
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "hp",
            "value": "11000"
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "atk",
            "value": "2000"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "7000"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "atk",
            "value": "500"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "bom",
            "value": "10000"
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "hp",
            "value": "15000"
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "atk",
            "value": "300"
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "bom",
            "value": "2500"
        },
        {
            "type": "setEnemy",
            "id": "sm79",
            "name": "special",
            "value": "[28]"
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
        "\t[任务目标]⭐通过当前区域\n⭐消灭所有步兵\n⭐击落所有中型轰炸机",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT117",
            "loc": [
                7,
                14
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
    [  0,  0,  0,80058,518,520,80058, 91,80058,  0,576,518,567,567,588],
    [364,80058,  0,361, 81,80058,80058,364,80058,80058, 82,80058,80058,80058,80058],
    [533,533,80058,80058,  0,361,  0, 81,  0,361,  0,80058,525,525,525],
    [534,534,80058,  0,527,80058,362,80058,526,80058,361,80058,  0,80058,  0],
    [80058,80058,  0,361,80058,  0,  0,528,80058,  0,  0, 81,381,80058, 81],
    [ 21,80058,  0,  0,362,  0,80058,80058,80058,80058,362,80058,80058,80058, 22],
    [ 21,363, 81,80058,80058,361,80058,  0,526,  0,  0, 81,381,80058, 81],
    [ 21,80058,  0,526,80058,  0,362,361,80058,80058,361,80058,  0,80058,  0],
    [80058,80058,80058,362,  0,80058,80058,  0,  0,  0,  0,80058,525,525,525],
    [533,  0,576,  0,80058, 21,80058,80058,80058, 81,80058,80058,80058,80058,80058],
    [530,  0,80058,  0,80058,361,  0,80058,  0,362,  0,80058,527,527,527],
    [80058,80058,80058,  0,362,  0,  0,  0,  0,80058,  0,80058,80058,361,80058],
    [  0,361, 81,  0,  0,80058,80058, 86,80058,80058,  0, 81,576,  0,  0],
    [ 21, 21,80058,80058,361,80058,518,  0,518,80058,  0,80058,80058,361,80058],
    [ 21, 21,80058,529,529,80058,518,  0,518,80058,  0,80058,528,528,528]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}