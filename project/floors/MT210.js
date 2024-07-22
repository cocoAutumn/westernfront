main.floors.MT210=
{
    "floorId": "MT210",
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
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "special",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "special",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "special",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "atk",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88c6",
            "name": "special",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "atk",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "fw190a1",
            "name": "special",
            "value": "200000"
        },
        "\t[系统提示]敌人战力重置完成",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]即将进入存档界面",
        {
            "type": "callSave"
        },
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[任务目标]⭐掩护轰炸机通过此区域\n⭐友军剩余血量不少于30%\n⭐击落所有FW190战斗机",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,14": [
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]本区域中，敌人的重型战斗机获得了“拦截”属性，虽然看起来伤害低了一些，但对友军造成的伤害却不小，相当于新新魔塔2的弓箭手。考虑用技能稍微回避一下吧！",
            "\t[伊吹萃香]\f[specialnpc.jpg,30,200,150,300]以及，本关任务要求中有一条“击落所有FW190”，除去你已经见过的那个A1型外，又新增了一个A4型，所以实际上要清光的是两种敌人，别漏下哦！"
        ]
    },
    "changeFloor": {
        "7,0": {
            "floorId": "MT211",
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
    [535, 22,537,140,539,539,140, 91,140,538,140,521,140, 21, 21],
    [535,  0,537,140,368,140,140, 82,140,538,140,521,140,206,140],
    [  0,277,  0,140,  0,  0,368,277,368,538,140,  0,368,  0,  0],
    [140, 82,140,140, 81,140,140, 81,140,140,140, 82,140,140,140],
    [  0,571,  0,  0,  0,140,  0,  0,368,  0,  0,  0,  0,571,  0],
    [140,140,140, 81,140,  0,378,140,140,140,378,140,140,140,368],
    [538,537,536,206,140,571,  0,  0,368,  0,  0,140, 21, 21, 21],
    [140, 82,140,140,140, 81,140,140,140,140, 81,140,140,140,140],
    [519,521,369,  0,140,  0,378,522,140,518,206,  0,206,518,518],
    [140,140,140,  0,206,  0,140,522,140,518,140, 81,140,140,140],
    [518,518,140, 81,140,140,140,140,140,140,140,  0,539,140, 21],
    [518,  0,368,  0,  0,  0,  0,  0,  0,  0,  0,538,  0,368,  0],
    [140, 81,140,140,206,140,140, 86,140,140,206,140,140, 81,140],
    [  0,369,  0,140,536,140,571,  0,571,140,536,140,  0,369,  0],
    [ 21, 22, 21,140,536,140,590,  0,601,140,536,140, 21, 22, 21]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}