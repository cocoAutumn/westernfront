main.floors.MT48=
{
    "floorId": "MT48",
    "title": "英国本土",
    "name": "英国本土",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass3",
    "bgm": "europe3.mp3",
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
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "hp",
            "value": "2500"
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "atk",
            "value": "300"
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "4000"
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "400"
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "5500"
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "atk",
            "value": "50"
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "special",
            "value": "[]"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "hp",
            "value": "5000"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "atk",
            "value": "50"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "special",
            "value": "[]"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "hp",
            "value": "5300"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "atk",
            "value": "50"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "special",
            "value": "[]"
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
        "\t[任务目标]⭐通过当前区域\n⭐击落所有轰炸机\n⭐友军剩余血量大于20000",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}