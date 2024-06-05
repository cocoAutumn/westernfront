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
            "value": "[6,28]",
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
    [  0,  0, 82,  0,  0,  0,140, 91,140,  0,  0,  0,  0,140,  0],
    [  0,  0,140,  0,140,140,140,  0,140,  0,140,140, 81,140,  0],
    [  0,  0,140, 81,140,  0,140,  0, 81,  0,140,  0,  0,140,  0],
    [ 81,140,140,  0,  0,  0,140,  0,140,  0,  0,140,  0, 81,  0],
    [  0,  0,  0,  0,140,  0, 81,  0,140,  0,140,140,140,140,140],
    [140,140,140, 81,140,140,  0,  0,140,  0,140,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0, 82,  0,140,  0,140,  0,140,140,140],
    [ 81,140,140,140,140,  0,140,  0,140,  0,140,  0,  0,140,  0],
    [  0,  0,  0,  0,140,140,140,140,140,  0,140,  0,140,140,  0],
    [140,140,140,  0, 81,  0,140,  0,140,  0,140,  0,  0,140,  0],
    [  0,  0,  0,  0,140,  0,  0,  0,  0,  0, 81,  0,140,140,  0],
    [140,140,140, 81,140,140,140, 86,140,140,140,  0,  0, 81,  0],
    [  0,  0,  0,  0,140,570,  0,  0,  0,570,140, 81,140,140,140],
    [  0,140,140,140,140,570,  0,  0,  0,570,140,  0,140,  0,  0],
    [  0,  0,  0,  0,140,570,  0,  0,  0,570,140,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}