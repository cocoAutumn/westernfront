main.floors.MT226=
{
    "floorId": "MT226",
    "title": "马雷特防线",
    "name": "马雷特防线",
    "width": 15,
    "height": 15,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "sand",
    "bgm": "desert3.mp3",
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
        "\r[yellow]Mission 33 沙中猛虎",
        {
            "type": "text",
            "text": "\t[蒙哥马利]\f[montgomary.png,0,310]我们的兵力数量呈优势。空军开路，地面部队集中兵力，从单点突破马雷特防线。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[戴高乐]\f[gaulle.png,0,310]自由法国的战士们，不要畏惧敌人，让我们从侧翼骚扰敌人，迫使他们拿不出多余的兵力阻挡盟友的主力部队。",
            "pos": [
                100,
                300,
                380
            ]
        },
        {
            "type": "text",
            "text": "\t[巴顿]\f[patton.png,0,310]装甲部队，听我号令！我等不及要和隆美尔决一死战了！",
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
        "\t[系统提示]敌人战力重置中",
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "hp",
            "value": "200000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf2",
            "name": "special",
            "value": "[1]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "hp",
            "value": "180000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf3",
            "name": "atk",
            "value": "2200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "atk",
            "value": "7000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf4",
            "name": "special",
            "value": "[1]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf5",
            "name": "atk",
            "value": "2300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "italyinf6",
            "name": "atk",
            "value": "2500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "hp",
            "value": "70000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "l640",
            "name": "atk",
            "value": "3500",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "hp",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "m1340",
            "name": "atk",
            "value": "12000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "p2640",
            "name": "hp",
            "value": "180000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "p2640",
            "name": "atk",
            "value": "28000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "p2640",
            "name": "special",
            "value": "[1]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "hp",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "da90",
            "name": "atk",
            "value": "30000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "hp",
            "value": "220000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "commandos",
            "name": "atk",
            "value": "2800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mortar",
            "name": "atk",
            "value": "10000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "hp",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sniper",
            "name": "atk",
            "value": "40000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "hp",
            "value": "150000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "motorinf",
            "name": "atk",
            "value": "3200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "hp",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "lightmg",
            "name": "atk",
            "value": "3300",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mg42",
            "name": "atk",
            "value": "3800",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "hp",
            "value": "34000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "pak38",
            "name": "atk",
            "value": "20000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "hp",
            "value": "34000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "atk",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "howitzer105",
            "name": "zone",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "hp",
            "value": "85000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "sdkfz234",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "hp",
            "value": "95000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "atk",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer3f",
            "name": "special",
            "value": "[55,60]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "hp",
            "value": "70000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "stug3a",
            "name": "atk",
            "value": "23000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "hp",
            "value": "90000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4e",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "hp",
            "value": "110000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4f",
            "name": "atk",
            "value": "28000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "hp",
            "value": "110000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "atk",
            "value": "33000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "panzer4g",
            "name": "special",
            "value": "[55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "hp",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "atk",
            "value": "35000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "special",
            "value": "[40,51,55,59]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "flak88",
            "name": "zone",
            "value": "25000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "hp",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "atk",
            "value": "4000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me109g6",
            "name": "special",
            "value": "[6,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "hp",
            "value": "60000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "atk",
            "value": "8000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "me110g",
            "name": "special",
            "value": "[28,30,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "hp",
            "value": "45000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "atk",
            "value": "1000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "bom",
            "value": "120000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju87b",
            "name": "special",
            "value": "[28,36,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "hp",
            "value": "95000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "atk",
            "value": "2000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "bom",
            "value": "15000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "ju88a",
            "name": "special",
            "value": "[28,55]",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "hp",
            "value": "100000",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "atk",
            "value": "3200",
            "norefresh": true
        },
        {
            "type": "setEnemy",
            "id": "mgbunker",
            "name": "special",
            "value": "[6,55,63]",
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
        "\t[任务目标]⭐通过当前区域\n⭐至少摧毁一辆虎式坦克\n⭐消灭所有88毫米高射炮",
        {
            "type": "callBook"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "7,0": {
            "floorId": "MT227",
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
    [537,150,  0, 81, 21, 21,150, 91,150, 21, 81,  0,404,535,535],
    [537,150,404,150,218,150,150, 82,150, 11,150,408,150,150,150],
    [  0,408,  0,150,  0,  0,410,215,410,  0,150,  0,404,  0,  0],
    [150, 81,150,150,150,150, 81,150,405,150,150,150,150,150, 81],
    [571,277,571,150,518, 11,518,150,535,535,150,536,150,539,539],
    [150, 81,150,150,405,150,150,150,150,150,150, 11, 81,405,150],
    [518,518,518,150,  0,215,538,150,518, 11,207,  0,150,392, 21],
    [405,150,150,253, 81,150,150,218,150,150, 81,150,150,150,518],
    [  0,  0,363,363,363, 11,250,204,250,363,363,363, 21,150,518],
    [150,150,150,150,150,150,150, 81,150,150,150,150,150,150,150],
    [  0, 11,  0,204,250,203,  0,  0,  0,203,250,204, 11,539,539],
    [ 81,150,265,150,150,150,150, 86,150,150,150, 81,150,150,150],
    [366,150,536,536,150,605,543,  0,543,605,150,366,150,518,518],
    [365,150,150,150,150,571,  0,  0,  0,571,150,365,150,150,250],
    [253,538,538,538,150,605,543,  0,543,605,150, 11,253,539,539]
],
    "bgmap": [

],
    "fgmap": [

],
    "area": "陆地"
}