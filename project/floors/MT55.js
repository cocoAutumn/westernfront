main.floors.MT55=
{
    "floorId": "MT55",
    "title": "伦敦",
    "name": "伦敦",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "7days2.mp3",
    "firstArrive": [
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "showStatusBar"
        },
        "\r[yellow]Mission 9 伦敦上空的鹰",
        {
            "type": "playSound",
            "name": "airalarm.mp3"
        },
        {
            "type": "playSound",
            "name": "airstrike.mp3"
        },
        {
            "type": "sleep",
            "time": 2000
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "move",
            "loc": [
                6,
                1
            ],
            "time": 500,
            "async": true,
            "steps": [
                "up:6"
            ]
        },
        {
            "type": "move",
            "loc": [
                7,
                2
            ],
            "time": 500,
            "async": true,
            "steps": [
                "up:6"
            ]
        },
        {
            "type": "move",
            "loc": [
                8,
                1
            ],
            "time": 500,
            "async": true,
            "steps": [
                "up:6"
            ]
        },
        {
            "type": "moveHero",
            "time": 500,
            "async": true,
            "steps": [
                "up:6"
            ]
        },
        {
            "type": "waitAsync"
        },
        "\t[盟军指挥官,hero]呼叫总部，所有战机已抵达指定位置，敌机就在前方。",
        {
            "type": "text",
            "text": "\t[休·道丁]\f[dowdin.png,0,310]我是道丁元帅。伦敦的市民们已经牺牲了太多，今天你们一定要狠狠的打，用行动告诉市民们，所有的牺牲都不会白费！",
            "pos": [
                100,
                300,
                380
            ]
        },
        "\t[盟军指挥官,hero]收到。所有战斗机，解散大编队，自由攻击！",
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "hp",
            "value": "2900"
        },
        {
            "type": "setEnemy",
            "id": "me109e4",
            "name": "atk",
            "value": "340"
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "hp",
            "value": "4500"
        },
        {
            "type": "setEnemy",
            "id": "me110c",
            "name": "atk",
            "value": "440"
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
            "value": "150"
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "bom",
            "value": "500"
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
            "value": "150"
        },
        {
            "type": "setEnemy",
            "id": "he111",
            "name": "bom",
            "value": "500"
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
            "value": "130"
        },
        {
            "type": "setEnemy",
            "id": "do17z",
            "name": "bom",
            "value": "800"
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
        "\t[任务目标]⭐通过当前区域\n⭐击落所有轰炸机\n⭐击落所有战斗机",
        {
            "type": "playSound",
            "name": "xinxinmagic.mp3"
        },
        "\t[系统提示]本区域是爽区，战斗机数量较少，轰炸机几乎全是负伤。趁着这个机会，好好补充下自己的背包和状态！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT56",
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
    [  2,566,566,566,  2,  0,  0, 91,  0,  0,  2,  0,  0, 22,  2],
    [  2,566,566, 21, 81,  0,382,  0,382,  0, 81,  0,  0,  0,  2],
    [  2,566,566,566,  2,  0,  0,382,  0,  0,  2,  0,  0, 22,  2],
    [  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  2],
    [  2,528,528,528,  2,  0,  0,  0,  0,  0,  2,  0,567,567,  2],
    [  2,527,527, 21, 81,  0,  0,  0,  0,  0, 81, 21,  0,567,  2],
    [  2,528,528,528,  2,  0,  0,  0,  0,  0,  2,  0,567,567,  2],
    [  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  2],
    [  2,525,525,525,  2,  0,  0,  0,  0,  0,  2,526,526,526,  2],
    [  2,525,525,525, 82,  0,  0,  0,  0,  0, 82,526,526,526,  2],
    [  2,525,525,525,  2,  0,  0,  0,  0,  0,  2,526,526,526,  2],
    [  2,  2,  2,  2,  2,  0,  0,  0,  0,  0,  2,  2,  2,  2,  2],
    [  2,518,518,518,  2,  0,  0,  0,  0,  0,  2, 21, 21, 21,  2],
    [  2,518,518,518, 82,  0,  0,  0,  0,  0, 82, 21, 21, 21,  2],
    [  2,518,518,518,  2,  0,  0,  0,  0,  0,  2, 21, 21, 21,  2]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0],
    [574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574],
    [  0,  0,  0,  0,574,  0,  0,  0,  0,  0,574,  0,  0,  0,  0],
    [574,574,  0,574,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,574],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0],
    [574,  0,574,  0,574,  0,  0,  0,  0,  0,  0,574,  0,574,574],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574],
    [574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,574,  0,574,  0,  0,  0,  0,  0,  0,  0,574,  0,574],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [574,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,574,  0,  0,  0,  0]
],
    "area": "天空"
}