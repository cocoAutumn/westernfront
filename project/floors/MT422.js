main.floors.MT422=
{
    "floorId": "MT422",
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
    "defaultGround": "grass",
    "bgm": "bgm7.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "指挥官阁下，我们的下一个任务是，消灭日本海军残部。",
        "经过四年的作战，日本人的海上力量已经难成气候，形同虚设。但如果我们要登陆本土，最好得把它们彻底消灭。",
        {
            "type": "drawArrow",
            "x1": 176,
            "y1": 432,
            "x2": 176,
            "y2": 80,
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
            "x1": 240,
            "y1": 464,
            "x2": 400,
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
            "type": "sleep",
            "time": 500
        },
        "我们打算出动航空母舰编队，袭击日军的各处港口。你所负责的是他们最重要的一处：吴港。侦察情报表明，绝大多数残存军舰都在那里停驻。",
        "与我们曾打过的那些战役相比，这一仗简直不能再轻松，那些军舰对我们的飞机而言与移动靶无异。",
        "不过仍然要留一些心眼：我们现在很接近日本本土，这意味着我们遭受神风特攻队袭击的可能性和规模也会更大。注意让你的战斗机加强巡逻。",
        "要快一点，苏联人已经攻占了北海道，我们不能落后。",
        {
            "type": "clearMap"
        },
        {
            "type": "changeFloor",
            "floorId": "MT423",
            "loc": [
                7,
                3
            ],
            "direction": "down"
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
    [  0,  0,  0,  0,  0,  0,  0,565,  0,547,  0,  0,565,  0,547],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,565,  0,  0,564,  0],
    [  0,  0,  0,  0,  0,564,  0,  0,  0,726,564,  0,  0,727,  0],
    [  0,  0,  0,  0,725,727,  0,  0,  0,723,  0,726,  0,  0,  0],
    [  0,547,  0,  0,  0,722,723,  0,  0,  0,  0,722,  0,564,  0],
    [564,  0,565,  0,724,716,  0,547,  0,  0,  0,722,725,  0,  0],
    [716,  0,  0,  0,716,  0,  0,  0,565,  0,547,716,  0,724,  0],
    [716,  0,  0,  0,  0,716,547,  0,  0,  0,  0,  0,716,  0,547],
    [  0,  0,  0,  0,716,  0,  0,  0,  0,  0,716,716,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,716,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,500,  0,  0,499,  0,  0,499,  0,  0,  0,  0,  0,  0],
    [  0,500,  0,587,  0,  0,586,  0,  0,  0,499,  0,  0,499,  0],
    [  0,592,  0,  0,  0,592,  0,  0,587,  0,  0,500,  0,  0,  0],
    [586,  0,  0,592,  0,  0,  0,592,500,586,  0,  0,  0,500,  0]
],
    "bgmap": [
    [ 16, 16, 16, 16, 16, 16,491,491,491,491,491,491,491,491,491],
    [ 16, 16, 16,491,491,491,491,491,491,491,491,491,491, 16,491],
    [ 16, 16,491,491,491, 16, 16, 16, 16, 16, 16, 16, 16, 16,491],
    [ 16, 16,491, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,491],
    [491,491,491,491, 16, 16, 16,491,491, 16, 16, 16, 16, 16,491],
    [ 16,491,491,491, 16, 16,491,491,491,491, 16, 16, 16, 16,491],
    [ 16,491,491,491, 16, 16,491,491,491,491,491, 16, 16, 16,491],
    [ 16,491,491,491, 16, 16,491,491,491,491,491, 16, 16,491,491],
    [ 16,491,491, 16, 16, 16,491,491,491,491, 16, 16, 16,491,491],
    [491,491, 16, 16, 16, 16,491,491,491,491, 16, 16, 16,491, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
    [ 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16]
],
    "fgmap": [

],
    "area": "陆地"
}