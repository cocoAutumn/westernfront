main.floors.MT8=
{
    "floorId": "MT8",
    "title": "阿登森林东",
    "name": "阿登森林东",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "cao5.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "\r[yellow]Mission 2  势不可挡的“闪电”",
        {
            "type": "text",
            "text": "\t[古德里安]\f[guderian.png,0,310]前面的盟军士兵听着！想活命的马上放下武器离开战场！我没时间俘虏你们！",
            "pos": [
                100,
                300,
                380
            ]
        },
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "lightinf",
            "name": "hp",
            "value": "400"
        },
        {
            "type": "setEnemy",
            "id": "lightinf",
            "name": "atk",
            "value": "30"
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "600"
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "40"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "400"
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "40"
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "hp",
            "value": "200"
        },
        {
            "type": "setEnemy",
            "id": "grenadier",
            "name": "atk",
            "value": "150"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "hp",
            "value": "400"
        },
        {
            "type": "setEnemy",
            "id": "sdkfz222",
            "name": "atk",
            "value": "40"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "hp",
            "value": "400"
        },
        {
            "type": "setEnemy",
            "id": "panzer2c",
            "name": "atk",
            "value": "80"
        },
        {
            "type": "setEnemy",
            "id": "panzer3e",
            "name": "hp",
            "value": "1500"
        },
        {
            "type": "setEnemy",
            "id": "panzer3e",
            "name": "atk",
            "value": "200"
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
        "\t[任务目标]⭐通过当前区域\n⭐至少击杀40个敌人\n⭐至少摧毁一辆四号坦克",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "14,7": {
            "floorId": "MT9",
            "loc": [
                0,
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
    [ 30,152, 28, 34,  0,152, 22,152, 33, 33,152, 22, 28, 28, 28],
    [ 30,244, 34,  0,401,152, 21,152,254,152,152,152,152, 82,152],
    [152,152,152,152, 81,152, 21,401,  0,  0,152,152, 28,518,  0],
    [ 21,152,152,345,345,152,152,152, 81,152, 21,152,152,152, 34],
    [ 21,152, 32,  0,152,152,152,152,  0,152,  0, 81,254,  0,  0],
    [ 21,250,  0,202,  0,202,  0,250,  0,250,  0,152,152,152,152],
    [152,152,152,152, 82,152,152,152,152,152, 81,345,  0,  0,152],
    [  0, 31, 32, 33, 22, 21, 21,152, 27, 27,226, 81,  0,401, 94],
    [152,152,152,152,152, 81,152,152,152, 34, 34,152,  0,  0,152],
    [  0,250,  0,202,  0,203,152, 29,152, 27, 27,152,403,152,152],
    [ 32,152,152,152,152,152,152, 29,152,152,152,152,  0,152,518],
    [  0,  0, 32,152, 28, 28,152,401,152,  0, 28,152,  0,152,  0],
    [152,254,152,152,  0,  0,203,  0,203, 28,  0,152,250, 81,226],
    [ 27, 27, 27,152, 31,152,152, 81,152,152,244,152,  0,152,  0],
    [ 32, 32, 32, 81, 31,152, 27,402, 27,152,  0, 81, 28,152,518]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}