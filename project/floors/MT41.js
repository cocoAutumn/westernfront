main.floors.MT41=
{
    "floorId": "MT41",
    "title": "英吉利海峡",
    "name": "英吉利海峡",
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
    "defaultGround": "water",
    "bgm": "europe2.mp3",
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
        "\r[yellow]Mission 7 鹰击长空",
        "\t[地面指挥部]指挥官阁下，根据我们的计算，你们已经接近敌机群，请注意对空搜索，他们大约在4000米高空。",
        "\t[盟军指挥官,hero]看见了，一大群德国佬，我们已经占据有利高度，随时可以攻击。",
        "\t[地面指挥部]那就立即攻击，按预定计划行事！",
        "\t[盟军指挥官,hero]收到！所有战机分组行动，红队去打掉轰炸机，蓝队随我来，支开敌人的战斗机！",
        "\t[德国战斗机飞行员,me109e4]6点钟方向！上方！发现喷火战斗机！立刻做闪避机动，重复，立刻……",
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "animate",
            "name": "shootair",
            "loc": [
                7,
                12
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "fire",
            "loc": [
                7,
                12
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    12
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "playSound",
            "name": "fighter2.mp3"
        },
        "\t[德国战斗机队长,me109e4]没时间摆成防御阵型了，所有人脱离编队，迎敌！",
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "hp",
            "value": "3000"
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "atk",
            "value": "350"
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
            "id": "ju87b",
            "name": "hp",
            "value": "3000"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "atk",
            "value": "100"
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "special",
            "value": "[]"
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "6000"
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "atk",
            "value": "100"
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
            "value": "5500"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "atk",
            "value": "150"
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
            "value": "5800"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "atk",
            "value": "100"
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
        "\t[任务目标]⭐通过当前区域\n⭐击落所有战斗机\n⭐击落所有轰炸机",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT42",
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
    [518,518,518,518,140,383, 81, 91, 81,383,140,518,518,518,518],
    [ 82,140,140,140,140, 22,140,  0,140, 22,140,140,140,140, 82],
    [ 21, 21, 21, 21,140,527,140,  0,140,527,140, 21, 21, 21, 21],
    [140,140,140,207,140,525,140,205,140,525,140,206,140,140,140],
    [206,  0,527,  0,140,140,140, 81,140,140,140,  0,527,  0,207],
    [ 81,140,140,140,140,  0,205, 82,205,  0,140,140,140,140, 81],
    [  0,205,  0,140,  0,205,  0,140,  0,205,  0,140,  0,205,  0],
    [207,140,566,140,205,140,382,140,382,140,205,140,566,140,207],
    [525,140,  0, 81,  0,382,140,140,140,382,  0, 81,  0,140,525],
    [207,140,205,140,140,140,140,140,140,140,140,140,205,140,207],
    [  0,205,  0,529,529,  0,140,140,140,  0,529,529,  0,205,  0],
    [ 81,140,140,140,  0,  0,206,  0,206,  0,  0,140,140,140, 81],
    [  0,140,526,140,383,140,140,205,140,140,383,140,526,140,  0],
    [  0,140,526,140,528,140,567,  0,567,140,528,140,526,140,  0],
    [  0,206,526,140,528,140,567,  0,567,140,528,140,526,206,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "天空"
}