main.floors.MT165=
{
    "floorId": "MT165",
    "title": "利比亚",
    "name": "利比亚",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
    "bgm": "hiaction4.mp3",
    "firstArrive": [
        {
            "type": "setValue",
            "name": "flag:dry",
            "value": "true"
        },
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
        "\r[yellow]Mission 25 沙漠空战",
        "\t[盟军指挥官,hero]全体注意，前方发现敌军战斗机和高炮阵地，注意躲避。战斗机编队保护好各自的轰炸机！",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "hp",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "atk",
            "value": "1400",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109f4",
            "name": "special",
            "value": "[6,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "special",
            "value": "[55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "hp",
            "value": "14000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "g50",
            "name": "atk",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c200",
            "name": "hp",
            "value": "16000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "c200",
            "name": "atk",
            "value": "1100",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "hp",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "atk",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "special",
            "value": "[5,15,40,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak37",
            "name": "zone",
            "value": "3000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "6000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[15,40,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "8000",
            "norefresh": true
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
        "\t[任务目标]⭐摧毁押运车队\n⭐通关时不少于500指挥点数\n⭐通关时黄钥匙不少于20",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT166",
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
    [530,534, 82,518,518,518,140, 91,140,  0,532,532,  0,140, 21],
    [530,532,140,578,140,140,140,369,140,577,140,140, 81,140, 21],
    [369,532,140, 81,140,243,140,  0, 81,  0,140,243,  0,140, 21],
    [ 81,140,140,  0,368,  0,140,578,140,  0,532,140, 22, 81,578],
    [  0,  0,206,  0,140,521, 81,  0,140,368,140,140,140,140,140],
    [140,140,140, 81,140,140,  0,578,140,534,140,531,531,531,531],
    [  0,521,521,578,  0,532, 82,530,140,534,140,206,140,140,140],
    [ 81,140,140,140,140,532,140,530,140,534,140,533,533,140,530],
    [521,521,  0,  0,140,140,140,140,140,534,140,577,140,140,530],
    [140,140,140,368, 81,  0,140,243,140,368,140,533,533,140,518],
    [532,532,577,  0,140,  0,577,  0,577,  0, 81,577,140,140,518],
    [140,140,140, 81,140,140,140, 86,140,140,140,  0,  0, 81,378],
    [  0,569,569,  0,140,570,  0,  0,  0,570,140, 81,140,140,140],
    [368,140,140,140,140,570,  0,  0,  0,570,140,368,140,534,518],
    [ 21, 21, 21, 21,140,570,  0,  0,  0,570,140,  0,577,534,518]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}