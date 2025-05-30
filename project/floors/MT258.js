main.floors.MT258=
{
    "floorId": "MT258",
    "title": "地图",
    "name": "地图",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground6",
    "bgm": "desert3.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "指挥官阁下，意大利已于昨日正式宣布投降。我们需要接管这片土地。",
        "我们即将在萨勒诺登陆，然后向北进军，占领那不勒斯。",
        {
            "type": "drawArrow",
            "x1": 176,
            "y1": 208,
            "x2": 336,
            "y2": 112,
            "style": [
                255,
                0,
                0,
                1
            ],
            "lineWidth": 3
        },
        {
            "type": "drawArrow",
            "x1": 336,
            "y1": 112,
            "x2": 176,
            "y2": 16,
            "style": [
                255,
                0,
                0,
                1
            ],
            "lineWidth": 3
        },
        {
            "type": "sleep",
            "time": 500
        },
        "我们接到消息，德军行动迅速，已经解除了大量意大利武装，恐怕现在他们已经做好了应对准备。",
        "我们有海军的协助，制空权也基本到手，但敌人的陆军不会很好对付。",
        "北非的德军即便是在物资匮乏的情况下仍然能给我们造成大量损失，现在我们在敌人的领地上登陆，遭到的反扑可能会更加强烈。",
        "要抓紧每分每秒，尽快站稳脚跟，然后向你的目标挺进。",
        {
            "type": "clearMap"
        },
        {
            "type": "changeFloor",
            "floorId": "MT259",
            "loc": [
                7,
                13
            ],
            "direction": "up"
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
    [  0,  0,  0,  0,  0,547,623,203,  0,  0,148,148,148,148,148],
    [  0,  0,  0,  0,  0,623,203,  0,501,623,  0,148,148,148,148],
    [  0,  0,  0,  0,  0,  0,  0,203,203,410,501,148,148,148,148],
    [  0,  0,  0,  0,  0,499,  0,  0,  0,624,270,623,148,148,148],
    [  0,  0,  0,  0,  0,584,  0,499,  0,  0,624,501,148,148,148],
    [  0,  0,  0,  0,550,550,550,  0,  0,  0,227,  0,  0,148,148],
    [  0,  0,591,  0,548,550,  0,  0,  0,  0,501,  0,148,148,148],
    [  0,  0,  0,500,548,548,550,  0,  0,  0,  0,  0,  0,148,148],
    [  0,  0,  0,  0,  0,548,548,499,  0,501,  0,203,203,148,148],
    [  0,  0,  0,  0,  0,584,  0,  0,  0,203,203,501,203,148,148],
    [  0,  0,  0,  0,  0,  0,499,  0,  0,  0,501,203,548,148,148],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,548,  0,550,550],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,550,  0,504],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,  0,  0,  0,  0],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,  0,  0,492,492,492],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,492,492,492,492],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,492,492,492],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,492,492],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

],
    "area": "陆地"
}