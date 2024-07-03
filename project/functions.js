var functions_d6ad677b_427a_4623_b50f_a445a3b0ef8a = 
{
    "events": {
        "resetGame": function (hero, hard, floorId, maps, values) {
			// 重置整个游戏；此函数将在游戏开始时，或者每次读档时最先被调用
			// hero：勇士信息；hard：难度；floorId：当前楼层ID；maps：地图信息；values：全局数值信息

			// 清除游戏数据
			// 这一步会清空状态栏和全部画布内容，并删除所有动态创建的画布
			core.clearStatus();
			// 初始化status
			core.status = core.clone(core.initStatus, function (name) {
				return name != 'hero' && name != 'maps';
			});
			core.control._bindRoutePush();
			core.status.played = true;
			// 初始化人物，图标，统计信息
			core.status.hero = core.clone(hero);
			window.hero = core.status.hero;
			window.flags = core.status.hero.flags;
			core.events.setHeroIcon(core.status.hero.image, true);
			core.control._initStatistics(core.animateFrame.totalTime);
			core.status.hero.statistics.totalTime = core.animateFrame.totalTime =
				Math.max(core.status.hero.statistics.totalTime, core.animateFrame.totalTime);
			core.status.hero.statistics.start = null;
			// 初始难度
			core.status.hard = hard || "";
			// 初始化地图
			core.status.floorId = floorId;
			core.status.maps = maps;
			core.maps._resetFloorImages();
			// 初始化怪物和道具
			core.material.enemys = core.enemys.getEnemys();
			core.material.items = core.items.getItems();
			// 初始化全局数值和全局开关
			core.values = core.clone(core.data.values);
			for (var key in values || {})
				core.values[key] = values[key];
			core.flags = core.clone(core.data.flags);
			var globalFlags = core.getFlag("globalFlags", {});
			for (var key in globalFlags)
				core.flags[key] = globalFlags[key];
			core._init_sys_flags();
			// 初始化界面，状态栏等
			core.resize();
			// 状态栏是否显示
			if (core.hasFlag('hideStatusBar'))
				core.hideStatusBar(core.hasFlag('showToolbox'));
			else
				core.showStatusBar();
			// 隐藏右下角的音乐按钮
			core.dom.musicBtn.style.display = 'none';
		},
        "win": function (reason, norank, noexit) {
	// 游戏获胜事件
	// 请注意，成绩统计时是按照hp进行上传并排名
	// 可以先在这里对最终分数进行计算，比如将2倍攻击和5倍黄钥匙数量加到分数上
	// core.status.hero.hp += 2 * core.getRealStatus('atk') + 5 * core.itemCount('yellowKey');

	// 如果不退出，则临时存储数据
	if (noexit) {
		core.status.extraEvent = core.clone(core.status.event);
	}

	// 游戏获胜事件 
	var sum = 0;
	for (var i = 0; i < flags.mission.length; ++i)
		for (var j = 0; j < 3; ++j)
			if (flags.mission[i][j])
				sum += 100;
	core.status.hero.hpmax = sum;
	core.status.hero.hp = sum;
	core.ui.closePanel();
	var replaying = core.isReplaying();
	if (replaying) core.stopReplay();
	core.waitHeroToStop(function () {
		if (!noexit) {
			core.clearMap('all'); // 清空全地图
			core.deleteAllCanvas(); // 删除所有创建的画布
			core.dom.gif2.innerHTML = "";
		}
		reason = core.replaceText(reason);
		core.drawText([
			"\t[" + (reason || "恭喜通关") + "]你的分数是${status:hp}。"
		], function () {
			core.events.gameOver(reason || '', replaying, norank);
		})
	});
},
        "lose": function (reason) {
	// 游戏失败事件
	core.ui.closePanel();
	var replaying = core.isReplaying();
	core.stopReplay();
	core.waitHeroToStop(function () {
		var arr = ["\t[" + (reason || "战败") + "]你的指挥出现了重大失误，导致我军承受了本不该有的巨大损失。经国会商讨决定，你已被撤职，并彻底失去对军队的一切指挥权！"];
		core.status.gameOver = false;
		core.clearMap('uievent');
		core.events.insertAction([
			{ "type": "hideStatusBar" },
			{ "type": "pauseBgm" },
			{ "type": "screenFlash", "color": [255, 255, 255, 1], "time": 100, "times": 1 },
			{ "type": "sleep", "time": 500 },
			{ "type": "setCurtain", "color": [0, 0, 0, 1], "time": 500, "keep": true },
			{ "type": "showImage", "code": 1, "image": "failure.png", "loc": [0, 0], "opacity": 1, "time": 0 },
			{ "type": "playBgm", "name": "failed.mp3", "keep": true },
			{ "type": "setCurtain", "color": [0, 0, 0, 0], "time": 1000 },
			{ "type": "sleep", "time": 2000 },
		].concat(arr), null, null, function () {
			core.status.gameOver = true;
			core.events.gameOver(null, replaying);
		});
	})
},
        "changingFloor": function (floorId, heroLoc) {
			// 正在切换楼层过程中执行的操作；此函数的执行时间是“屏幕完全变黑“的那一刻
			// floorId为要切换到的楼层ID；heroLoc表示勇士切换到的位置

			// ---------- 此时还没有进行切换，当前floorId还是原来的 ---------- //
			var currentId = core.status.floorId || null; // 获得当前的floorId，可能为null
			var fromLoad = core.hasFlag('__fromLoad__'); // 是否是读档造成的切换
			var isFlying = core.hasFlag('__isFlying__'); // 是否是楼传造成的切换
			if (!fromLoad && !(isFlying && currentId == floorId)) {
				if (!core.hasFlag("__leaveLoc__")) core.setFlag("__leaveLoc__", {});
				if (currentId != null) core.getFlag("__leaveLoc__")[currentId] = core.clone(core.status.hero.loc);
			}

			// 可以对currentId进行判定，比如删除某些自定义图层等
			// if (currentId == 'MT0') {
			//     core.deleteAllCanvas();
			// }

			// 根据分区信息自动砍层与恢复
			if (core.autoRemoveMaps) core.autoRemoveMaps(floorId);

			// 重置画布尺寸
			core.maps.resizeMap(floorId);
			// 设置勇士的位置
			heroLoc.direction = core.turnDirection(heroLoc.direction);
			core.status.hero.loc = heroLoc;
			// 检查重生怪并重置
			if (!fromLoad) {
				core.extractBlocks(floorId);
				core.status.maps[floorId].blocks.forEach(function (block) {
					if (block.disable && core.enemys.hasSpecial(block.event.id, 23)) {
						block.disable = false;
						core.setMapBlockDisabled(floorId, block.x, block.y, false);
						core.maps._updateMapArray(floorId, block.x, block.y);
					}
				});
				core.control.gatherFollowers();
			}

			// ---------- 重绘新地图；这一步将会设置core.status.floorId ---------- //
			core.drawMap(floorId);

			// 切换楼层BGM
			if (core.status.maps[floorId].bgm) {
				var bgm = core.status.maps[floorId].bgm;
				if (bgm instanceof Array) bgm = bgm[Math.floor(Math.random() * bgm.length)]; // 多个bgm则随机播放一个
				if (!core.hasFlag("__bgm__")) core.playBgm(bgm);
			} else if (fromLoad && !core.hasFlag("__bgm__")) {
				core.pauseBgm();
			}
			// 更改画面色调
			var color = core.getFlag('__color__', null);
			if (!color && core.status.maps[floorId].color)
				color = core.status.maps[floorId].color;
			core.clearMap('curtain');
			core.status.curtainColor = color;
			if (color) core.fillRect('curtain', 0, 0, core._PX_ || core.__PIXELS__, core._PY_ || core.__PIXELS__, core.arrayToRGBA(color));
			// 更改天气
			var weather = core.getFlag('__weather__', null);
			if (!weather && core.status.maps[floorId].weather)
				weather = core.status.maps[floorId].weather;
			if (weather)
				core.setWeather(weather[0], weather[1]);
			else core.setWeather();

			// ...可以新增一些其他内容，比如创建个画布在右上角显示什么内容等等

		},
        "afterChangeFloor": function (floorId) {
			// 转换楼层结束的事件；此函数会在整个楼层切换完全结束后再执行
			// floorId是切换到的楼层

			// 如果是读档，则进行检查（是否需要恢复事件）
			if (core.hasFlag('__fromLoad__')) {
				core.events.recoverEvents(core.getFlag("__events__"));
				core.removeFlag("__events__");
			} else {
				// 每次抵达楼层执行的事件
				core.insertAction(core.floors[floorId].eachArrive);

				// 首次抵达楼层时执行的事件（后插入，先执行）
				if (!core.hasVisitedFloor(floorId)) {
					core.insertAction(core.floors[floorId].firstArrive);
					core.visitFloor(floorId);
				}
			}
		},
        "flyTo": function (toId, callback) {
			// 楼层传送器的使用，从当前楼层飞往toId
			// 如果不能飞行请返回false

			var fromId = core.status.floorId;

			// 检查能否飞行
			if (!core.status.maps[fromId].canFlyFrom || !core.status.maps[toId].canFlyTo || !core.hasVisitedFloor(toId)) {
				core.playSound('操作失败');
				core.drawTip("无法飞往" + core.status.maps[toId].title + "！", 'fly');
				return false;
			}

			// 平面塔模式
			var stair = null,
				loc = null;
			if (core.flags.flyRecordPosition) {
				loc = core.getFlag("__leaveLoc__", {})[toId] || null;
			}
			if (core.status.maps[toId].flyPoint != null && core.status.maps[toId].flyPoint.length == 2) {
				stair = 'flyPoint';
			}
			if (stair == null && loc == null) {
				// 获得两个楼层的索引，以决定是上楼梯还是下楼梯
				var fromIndex = core.floorIds.indexOf(fromId),
					toIndex = core.floorIds.indexOf(toId);
				var stair = fromIndex <= toIndex ? "downFloor" : "upFloor";
				// 地下层：同层传送至上楼梯
				if (fromIndex == toIndex && core.status.maps[fromId].underGround) stair = "upFloor";
			}

			// 记录录像
			core.status.route.push("fly:" + toId);
			// 传送
			core.ui.closePanel();
			core.setFlag('__isFlying__', true);
			core.changeFloor(toId, stair, loc, null, function () {
				core.removeFlag("__isFlying__");
				if (callback) callback();
			});

			return true;
		},
        "beforeBattle": function (enemyId, x, y) {
			// 战斗前触发的事件，可以加上一些战前特效（详见下面支援的例子）
			// 此函数在“检测能否战斗和自动存档”【之后】执行。如果需要更早的战前事件，请在插件中覆重写 core.events.doSystemEvent 函数。
			// 返回true则将继续战斗，返回false将不再战斗。

			// ------ 支援技能 ------ //
			if (x != null && y != null) {
				var index = x + "," + y,
					cache = core.status.checkBlock.cache[index] || {},
					guards = cache.guards || [];
				// 如果存在支援怪
				if (guards.length > 0) {
					// 记录flag，当前要参与支援的怪物
					core.setFlag("__guards__" + x + "_" + y, guards);
					var actions = [{ "type": "playSound", "name": "跳跃" }];
					// 增加支援的特效动画（图块跳跃）
					guards.forEach(function (g) {
						core.push(actions, { "type": "jump", "from": [g[0], g[1]], "to": [x, y], "time": 300, "keep": false, "async": true });
					});
					core.push(actions, [
						{ "type": "waitAsync" }, // 等待所有异步事件执行完毕
						{ "type": "setBlock", "number": enemyId, "loc": [[x, y]] }, // 重新设置怪物自身
						{ "type": "battle", "loc": [x, y] } // 重要！重新触发本次战斗
					]);
					core.insertAction(actions);
					return false;
				}
			}

			return true;
		},
        "afterBattle": function (enemyId, x, y) {
	// 战斗结束后触发的事件

	var enemy = core.material.enemys[enemyId];
	var special = enemy.special;
	var type = enemy.type;

	// 播放战斗音效和动画
	// 默认播放的动画；你也可以使用
	var animate = 'hand'; // 默认动画
	// 检查当前装备是否存在攻击动画
	var equipId = core.getEquip(0);
	if (equipId && (core.material.items[equipId].equip || {}).animate)
		animate = core.material.items[equipId].equip.animate;
	// 你也可以在这里根据自己的需要，比如enemyId或special或flag来修改播放的动画效果
	// if (enemyId == '...') animate = '...';
	if (type === '步兵') {
		animate = 'shoot';
	}
	if (type === '轻坦' || type === '中坦' || type === '坦歼') {
		animate = 'vehicleexplore';
		if (flags.closesound !== true)
			core.playSound("move2.mp3");
	}
	if (type === '重坦') {
		animate = 'vehicleexplore';
		if (flags.closesound !== true)
			core.playSound("move3.mp3");
	}
	if (type === '反坦克炮' || type === '榴弹炮' || type === '高射炮') {
		animate = "vehicleexplore";
		if (flags.closesound !== true)
			core.playSound("bomb.mp3");
	}
	if (type === '建筑') {
		animate = 'zone';
	}
	if (type === '潜艇') {
		animate = 'xinxinwater';
		if (flags.closesound !== true)
			core.playSound("Sonar.wav");
	}
	if (type === '驱逐' || type === '轻巡' || type === '重巡' || type === '战列' || type === '商船') {
		animate = "xinxinwater";
	}
	if (type === '战斗机' || type === '重型战斗机') {
		animate = "shootair";
		if (flags.closesound !== true)
			core.playSound("fighter.mp3");
	}
	if (type === '俯冲轰炸机') {
		animate = "shootair";
		if (flags.closesound !== true)
			core.playSound("stukadive.mp3");
	}
	if (type === '鱼雷轰炸机' || type === '中型轰炸机') {
		animate = "shootair";
		if (flags.closesound !== true)
			core.playSound("bomber1.mp3");
	}
	if (type === '导弹') {
		animate = "explore2";
		if (flags.closesound !== true)
			core.playSound("v_jet_pass.mp3");
	}

	// 检查该动画是否存在SE，如果不存在则使用默认音效
	if (!(core.material.animates[animate] || {}).se)
		core.playSound('attack.mp3');

	// 播放动画；如果不存在坐标（强制战斗）则播放到勇士自身
	if (x != null && y != null)
		core.drawAnimate(animate, x, y);
	else
		core.drawHeroAnimate(animate);

	// 获得战斗伤害信息
	var damageInfo = core.getDamageInfo(enemyId, null, x, y) || {};
	// 战斗伤害
	var damage = damageInfo.damage;
	// 当前战斗回合数，可用于战后所需的判定
	var turn = damageInfo.turn;
	// 判定是否致死
	if (flags['空战王牌']) {
		damage = 0;
		delete flags['空战王牌'];
	}
	if (flags['空中打击']) {
		damage = 0;
		delete flags['空中打击'];
	}
	if (core.hasSpecial(enemyId, 61)) damage = 0; // 投降
	if (damage == null || damage >= core.status.hero.hp) {
		core.status.hero.hp = 0;
		core.updateStatusBar(false, true);
		core.events.lose('战斗失败');
		return;
	}
	if (flags['escort'] && damage >= 0) {
		flags['友军血量'] -= 0.4 * damage;
		if (flags['友军血量'] <= 0) {
			core.events.lose('任务失败');
			// 战斗失败
		}
	}


	// 扣减体力值并记录统计数据
	core.status.hero.hp -= damage;
	core.status.hero.statistics.battleDamage += damage;
	core.status.hero.statistics.battle++;
	if (flags.skill === 13 && hero.hp * 10 < hero.hpmax && core.status.thisMap.area === "海洋") hero.hp = hero.hpmax; // 金牌损管

	// 计算当前怪物的支援怪物
	var guards = [];
	if (x != null && y != null) {
		guards = core.getFlag("__guards__" + x + "_" + y, []);
		core.removeFlag("__guards__" + x + "_" + y);
	}

	// 获得金币
	var money = guards.reduce(function (curr, g) {
		return curr + core.material.enemys[g[2]].money;
	}, core.getEnemyValue(enemy, "money", x, y));
	if (core.hasEquip('m4')) money += 5; //谢馒头，触发在双倍前
	if (flags.warmachine === true) money *= 2; //工业潜能，金币翻倍，计算在下面几个之前
	if (core.hasEquip('edinburgh')) money += 2; //爱丁堡号巡洋舰，金币+2
	if (core.hasEquip('hood')) money += 10; //胡德号，金币+10
	if (core.hasItem('coin')) money *= 2; // 幸运金币：双倍
	if (core.hasSpecial(enemyId, 61)) money = 0; // 投降
	core.status.hero.money += money;
	core.status.hero.statistics.money += money;

	// 获得经验
	var exp = guards.reduce(function (curr, g) {
		return curr + core.material.enemys[g[2]].exp;
	}, core.getEnemyValue(enemy, "exp", x, y));
	if (core.hasEquip('classv')) exp += 2; //V级驱逐舰
	if (core.hasEquip('hood')) exp += 10; //胡德号，经验+10
	if (core.hasSpecial(enemyId, 61)) exp = 0; // 投降
	core.status.hero.exp += exp;
	core.status.hero.statistics.exp += exp;

	var hint = "打败 " + core.getEnemyValue(enemy, "name", x, y);
	if (core.flags.statusBarItems.indexOf('enableMoney') >= 0)
		hint += ',' + core.getStatusLabel('money') + '+' + money; // hint += "，金币+" + money;
	if (core.flags.statusBarItems.indexOf('enableExp') >= 0)
		hint += ',' + core.getStatusLabel('exp') + '+' + exp; // hint += "，经验+" + exp;
	core.drawTip(hint, enemy.id);

	//战后关技能并扣mana
	if (flags.skill > 0) {
		hero.mana -= core.getSkillInfo(flags.skill).cost;
		flags.skill = 0;
	}

	// 中毒
	if (core.enemys.hasSpecial(special, 12)) {
		core.triggerDebuff('get', 'poison');
	}
	// 衰弱
	if (core.enemys.hasSpecial(special, 13)) {
		core.triggerDebuff('get', 'weak');
	}
	// 诅咒
	if (core.enemys.hasSpecial(special, 14)) {
		core.triggerDebuff('get', 'curse');
	}
	// 仇恨怪物将仇恨值减半
	if (core.enemys.hasSpecial(special, 17)) {
		core.setFlag('hatred', Math.floor(core.getFlag('hatred', 0) / 2));
	}
	// 自爆
	if (core.enemys.hasSpecial(special, 19)) {
		core.status.hero.statistics.battleDamage += core.status.hero.hp - 1;
		core.status.hero.hp = 1;
	}
	// 退化
	if (core.enemys.hasSpecial(special, 21)) {
		core.status.hero.atk -= (enemy.atkValue || 0);
		core.status.hero.def -= (enemy.defValue || 0);
		if (core.status.hero.atk < 0) core.status.hero.atk = 0;
		if (core.status.hero.def < 0) core.status.hero.def = 0;
	}
	// 增加仇恨值
	core.setFlag('hatred', core.getFlag('hatred', 0) + core.values.hatred);

	// 战后的技能处理，比如扣除魔力值
	if (core.flags.statusBarItems.indexOf('enableSkill') >= 0) {
		// 检测当前开启的技能类型
		var skill = core.getFlag('skill', 0);
		if (skill == 1) { // 技能1：二倍斩
			core.status.hero.mana -= 5; // 扣除5点魔力值
		}
		// 关闭技能
		core.setFlag('skill', 0);
		core.setFlag('skillName', '无');
	}
	//二区任务：击杀40敌人
	if (['MT8', 'MT9', 'MT10', 'MT11'].includes(core.status.floorId)) core.addFlag('二区杀敌', 1);


	// 事件的处理
	var todo = [];

	// 加点事件
	var point = guards.reduce(function (curr, g) {
		return curr + core.material.enemys[g[2]].point;
	}, core.getEnemyValue(enemy, "point", x, y)) || 0;
	if (core.flags.enableAddPoint && point > 0) {
		core.push(todo, [{ "type": "insert", "name": "加点事件", "args": [point] }]);
	}

	// 战后事件
	if (core.status.floorId != null) {
		core.push(todo, core.floors[core.status.floorId].afterBattle[x + "," + y]);
	}
	core.push(todo, enemy.afterBattle);

	// 在这里增加其他的自定义事件需求
	/*
	if (enemyId=='xxx') {
		core.push(todo, [
			{"type": "...", ...},
		]);
	}
	*/

	// 如果事件不为空，将其插入
	if (todo.length > 0) core.insertAction(todo, x, y);

	// 删除该点设置的怪物信息
	delete((flags.enemyOnPoint || {})[core.status.floorId] || {})[x + "," + y];

	// 因为removeBlock和hideBlock都会刷新状态栏，因此将删除部分移动到这里并保证刷新只执行一次，以提升效率
	if (core.getBlock(x, y) != null) {
		// 检查是否是重生怪物；如果是则仅隐藏不删除
		if (core.hasSpecial(enemy.special, 23)) {
			core.hideBlock(x, y);
		} else {
			core.removeBlock(x, y);
		}
	} else {
		core.updateStatusBar();
	}

	// 如果已有事件正在处理中
	if (core.status.event.id == null)
		core.continueAutomaticRoute();
	else
		core.clearContinueAutomaticRoute();

},
        "afterOpenDoor": function (doorId, x, y) {
			// 开一个门后触发的事件

			var todo = [];
			// 检查该点的开门后事件
			if (core.status.floorId) {
				core.push(todo, core.floors[core.status.floorId].afterOpenDoor[x + "," + y]);
			}
			// 检查批量开门事件
			var door = core.getBlockById(doorId);
			if (door && door.event.doorInfo) {
				core.push(todo, door.event.doorInfo.afterOpenDoor);
			}

			if (todo.length > 0) core.insertAction(todo, x, y);

			if (core.status.event.id == null)
				core.continueAutomaticRoute();
			else
				core.clearContinueAutomaticRoute();
		},
        "afterGetItem": function (itemId, x, y, isGentleClick) {
			// 获得一个道具后触发的事件
			// itemId：获得的道具ID；x和y是该道具所在的坐标
			// isGentleClick：是否是轻按触发的
			if (itemId.endsWith('Potion') && core.material.items[itemId].cls == 'items')
				core.playSound('回血');
			else if (itemId.endsWith('Gem') && core.material.items[itemId].cls == 'items')
				core.playSound('宝石')
			else
				core.playSound('获得道具');

			var todo = [];
			// 检查该点的获得道具后事件。
			if (core.status.floorId == null) return;
			var event = core.floors[core.status.floorId].afterGetItem[x + "," + y];
			if (event && (event instanceof Array || !isGentleClick || !event.disableOnGentleClick)) {
				if (event.data) event = event.data;
				core.unshift(todo, event);
			}

			if (todo.length > 0) core.insertAction(todo, x, y);
		},
        "afterPushBox": function () {
			// 推箱子后的事件
			if (core.searchBlock('box').length == 0) {
				// 可以通过if语句来进行开门操作
				/*
				if (core.status.floorId=='xxx') { // 在某个楼层
					core.insertAction([ // 插入一条事件
						{"type": "openDoor", "loc": [x,y]} // 开门
					])
				}
				*/
			}
		}
    },
    "enemys": {
        "getSpecials": function () {
	// 获得怪物的特殊属性，每一行定义一个特殊属性。
	// 分为五项，第一项为该特殊属性的数字，第二项为特殊属性的名字，第三项为特殊属性的描述
	// 第四项为该特殊属性的颜色，可以写十六进制 #RRGGBB 或者 [r,g,b,a] 四元数组
	// 第五项为该特殊属性的标记；目前 1 代表是地图类技能（需要进行遍历全图）
	// 名字和描述可以直接写字符串，也可以写个function将怪物传进去
	return [
		[1, "突袭", "该敌人首先攻击", "#ffcc33"],
		[4, "2连击", "每回合攻击2次", "#ffee77"],
		[5, "3连击", "每回合攻击3次", "#ffee77"],
		[6, function (enemy) { return (enemy.n || '') + "连击"; }, function (enemy) { return "每回合攻击" + (enemy.n || 4) + "次"; }, "#ffee77"],
		[15, "炮击", function (enemy) { return "经过敌人周围" + (enemy.zoneSquare ? "九宫格" : "十字") + "范围内" + (enemy.range || 1) + "格时遭受炮击，生命减少" + (enemy.zone ?? 0) + "点"; }, "#c677dd"],
		[16, "夹击", "经过两只相同的怪物中间，角色生命值变成一半", "#bb99ee"],
		[22, "固伤", function (enemy) { return "敌人对角色造成" + (enemy.damage ?? 0) + "点固定伤害，可被后勤值抵消。"; }, "#ff9977"],
		[24, "狙射", function (enemy) { return "经过敌人同行或同列时遭受远距离攻击，伤害为" + (enemy.laser ?? 0) + "点"; }, "#dda0dd"],
		[25, "指挥", function (enemy) { return "位于敌阵核心的指挥单位。" + (enemy.range != null ? ((enemy.haloSquare ? "自身九宫格" : "自身十字") + enemy.haloRange + "格范围内") : "同楼层所有") + "轴心国军队攻击提升" + (enemy.hpBuff ?? 0) + "%，雷击提升" + (enemy.atkBuff ?? 0) + "%，空袭提升" + (enemy.defBuff ?? 0) + "%," + (enemy.haloAdd ? "可叠加" : "不可叠加"); }, "#e6e099", 1],
		[28, "航弹", function (enemy) { return "每\r[red]" + (enemy.spd ?? 0) + "\r回合投放\r[red]" + (enemy.ammo ?? 0) + "\r枚航空炸弹，每颗炸弹伤害等于空袭值。造成的伤害计为“炸弹伤害”" },
			[255, 255, 0, 1]
		],
		[29, "鱼雷", function (enemy) { return "每\r[red]" + (enemy.cd ?? 0) + "\r回合投放\r[red]" + (enemy.tpn ?? 0) + "\r枚鱼雷，每发鱼雷伤害等于雷击值。造成的伤害计为“鱼雷伤害”" },
			[255, 150, 0, 1]
		],
		[30, "航炮", "每个偶数回合额外造成一次2倍攻击力的伤害"],
		[31, "280mm舰炮", "每\r[red]3\r回合额外发射一轮主炮，伤害等于3倍攻击力"],
		[32, "380mm舰炮", "每\r[red]4\r回合额外发射一轮主炮，伤害等于6倍攻击力"],
		[33, "潜行", "受到主角攻击力伤害减少90%"],
		[34, "惊雷", "战斗开始时，发起先手鱼雷攻击。发射鱼雷数量以及伤害等同于正常的鱼雷袭击"],
		[35, "闪避", function (enemy) { return "主角发起鱼雷攻击时，闪避其中的" + (enemy.dod ?? 0) + "枚" }],
		[36, "俯冲轰炸", "航空炸弹造成的伤害增加50%，且第一枚炸弹命中后，主角攻击力降低5%，持续到战斗结束", "#00ffff"],
		[37, "跨射", "强大的舰炮具有更远的射程。若主角未装备战列舰，该敌人首先以3倍攻击力攻击主角3次"],
		[38, "精锐", "对主角造成的伤害翻倍", "#dc143c"],
		[39, "集群", function (enemy) { return "主角同时与" + (enemy.gro ?? 0) + "个该敌人进行战斗" }],
		[40, "防空", "以自身为中心5*5范围内（包括自身）张开防空领域，主角与防空领域内的轴心国部队战斗时，每回合额外受到该防空炮20%攻击力的伤害", "#e6e099", 1],
		[41, "反制", "与该敌人战斗时，主角无法使用技能"],
		[42, "截断", "当前地图中，该敌人在场时，主角后勤值失效"],
		[43, "超压", "该陆军单位的穿甲值大于主角装甲值时，造成的回合伤害额外提升40%"],
		[44, "雷达", "每个存活的雷达能够为全图轴心国部队提供10%伤害加成"],
		[45, "警戒", "若主角与该敌人发生战斗，则永久为全图轴心国部队提供10%的攻击力加成"],
		[46, "夜枭", "存活时，周围3格内轴心国部队攻击力提升30%"],
		[47, "燃烧", "战后为主角施加3层燃烧debuff。该debuff存在时，主角在战斗期间每回合额外流失当前生命值的5%，每进行一场战斗就解除一层该debuff"],
		[48, "V1导弹", "巡航导弹，不会主动攻击。若主角未能在10回合内成功拦截该导弹，则立即爆炸并造成等同于自身攻击力的伤害。若成功拦截，则只造成50%攻击力伤害"],
		[49, "无线制导", "无线电遥控导弹。当前地图内存在具有“遥控”技能的敌人时，对主角造成1倍攻击力的伤害，否则失控坠毁，不会造成伤害"],
		[50, "遥控", "该敌人控制着“弗里茨X”导弹进行攻击。被摧毁后，“弗里茨X”就会失控坠毁"],
		[51, "歼灭", "主角经过该敌人十字范围内1格时，若生命值低于10%生命上限，则会立即死亡"],
		[52, "包夹", "主角站在两个该敌人中间时，遭受这两个敌人的一次普通攻击", "#c677dd"],
		[54, "渗透", "战斗伤害不会小于0，战后额外扣除主角100点mp。若mp不足则杀死主角"],
		[55, "沙漠军团", "不会受到“炎热debuff”的负面影响", "#bdb76b"],
		[56, "狙击", "主角与该敌人发生战斗时，立即遭受一次该敌人2倍攻击力的伤害，可被后勤值抵消"],
		[57, "主将", "主角必须消灭当前地图所有杂兵后才可攻击主将", "#00ff00"],
		[58, "狼群", "当前地图除自身外每有1艘潜艇，雷击值增加10%", "#e6e099", 1],
		[59, "陷阱", function (enemy) { return "主角与该敌人周围" + (enemy.zoneSquare ? "九宫格" : "十字") + (enemy.range || 1) + "格内的其他敌人战斗时，每回合额外受到" + enemy.zone + "点领域伤害" }, "#ffff00", 1],
		[60, "机动", "被主角单向击穿时，主角先手攻击回合数-3"],
		[61, "投降", "这些已投降的敌军伤害值固定为0，且不会提供金经奖励。", "#ffffff"],
		[62, "沙漠之狐", "隆美尔专属技能。当前具有“炎热”buff时，主角受到的炎热伤害提升至50%，隆美尔自身不会受到任何影响", "#bdb76b"],
		[63, "阵地", "该敌人存活时，九宫格半径2格范围内的敌人获得20%减伤。且该范围内存在其他队友时，自身获得40%减伤和10%攻击力加成。不可叠加。", "#ffff00", 1]
	];
},
        "getEnemyInfo": function (enemy, hero, x, y, floorId) {
	// 获得某个怪物变化后的数据；该函数将被伤害计算和怪物手册使用
	// 例如：坚固、模仿、仿攻等等
	// 
	// 参数说明：
	// enemy：该怪物信息
	// hero_hp,hero_atk,hero_def,hero_mdef：勇士的生命攻防护盾数据
	// x,y：该怪物的坐标（查看手册和强制战斗时为undefined）
	// floorId：该怪物所在的楼层
	// 后面三个参数主要是可以在光环等效果上可以适用（也可以按需制作部分范围光环效果）
	floorId = floorId || core.status.floorId;
	var hero_hp = core.getRealStatusOrDefault(hero, 'hp'),
		hero_atk = core.getRealStatusOrDefault(hero, 'atk'),
		hero_def = core.getRealStatusOrDefault(hero, 'def'),
		hero_mdef = core.getRealStatusOrDefault(hero, 'mdef');

	var mon_hp = core.getEnemyValue(enemy, 'hp', x, y, floorId),
		mon_atk = core.getEnemyValue(enemy, 'atk', x, y, floorId),
		mon_def = core.getEnemyValue(enemy, 'def', x, y, floorId),
		mon_special = core.getEnemyValue(enemy, 'special', x, y, floorId);
	var mon_money = core.getEnemyValue(enemy, 'money', x, y, floorId),
		mon_exp = core.getEnemyValue(enemy, 'exp', x, y, floorId),
		mon_point = core.getEnemyValue(enemy, 'point', x, y, floorId);
	var mon_ap = core.getEnemyValue(enemy, 'ap', x, y, floorId),
		mon_arm = core.getEnemyValue(enemy, 'arm', x, y, floorId),
		mon_tpn = core.getEnemyValue(enemy, 'tpn', x, y, floorId),
		mon_top = core.getEnemyValue(enemy, 'top', x, y, floorId),
		mon_bom = core.getEnemyValue(enemy, 'bom', x, y, floorId),
		mon_dod = core.getEnemyValue(enemy, 'dod', x, y, floorId),
		mon_cd = core.getEnemyValue(enemy, 'cd', x, y, floorId),
		mon_ammo = core.getEnemyValue(enemy, 'ammo', x, y, floorId),
		mon_spd = core.getEnemyValue(enemy, 'spd', x, y, floorId),
		n = core.getEnemyValue(enemy, 'n', x, y, floorId),
		mon_gro = core.getEnemyValue(enemy, 'gro', x, y, floorId);
	var mon_id = core.getEnemyValue(enemy, 'id', x, y, floorId);

	var guards = [];

	// 光环和支援检查
	if (!core.status.checkBlock) core.status.checkBlock = {};

	let damage_debuff = 0;
	if (core.status.checkBlock.needCache) {
		// 从V2.5.4开始，对光环效果增加缓存，以解决多次重复计算的问题，从而大幅提升运行效率。
		var atk_buff = 0,
			top_buff = 0,
			bom_buff = 0,
			trap_buff = 0,
			aa_buff = 0;
		// 已经计算过的光环怪ID列表，用于判定叠加
		var usedEnemyIds = {};
		// 检查光环和支援的缓存
		var index = x != null && y != null ? (x + "," + y) : floorId;
		if (!core.status.checkBlock.cache) core.status.checkBlock.cache = {};
		var cache = core.status.checkBlock.cache[index];
		if (!cache) {
			// 没有该点的缓存，则遍历每个图块
			core.extractBlocks(floorId);
			core.status.maps[floorId].blocks.forEach(function (block) {
				if (!block.disable) {
					// 获得该图块的ID
					var id = block.event.id,
						enemy = core.material.enemys[id];
					// 检查【光环】技能，数字25
					if (enemy && core.hasSpecial(enemy.special, 25)) {
						// 检查是否是范围光环
						var inRange = enemy.haloRange == null;
						if (enemy.haloRange != null && x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							// 检查十字和九宫格光环
							if (dx + dy <= enemy.haloRange) inRange = true;
							if (enemy.haloSquare && dx <= enemy.haloRange && dy <= enemy.haloRange) inRange = true;
						}
						// 检查是否可叠加
						if (inRange && (enemy.haloAdd || !usedEnemyIds[enemy.id])) {
							atk_buff += enemy.hpBuff || 0;
							top_buff += enemy.atkBuff || 0;
							bom_buff += enemy.defBuff || 0;
							usedEnemyIds[enemy.id] = true;
						}
					}
					// 检查【狼群】技能，数字58
					if (enemy && core.hasSpecial(enemy.special, 58) && core.hasSpecial(mon_special, 58)) { // 这里要判断一下两个怪都有狼群
						if (x !== block.x || y !== block.y) top_buff += 10;
					}
					// 检查【阵地】技能，数字63（其他阵地给当前怪物加光环）
					if (enemy && core.hasSpecial(enemy.special, 63)) {
						var inRange = false;
						if (x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							if (dx <= 2 && dy <= 2 && !(dx === 0 && dy === 0)) inRange = true;
						}
						if (inRange && !usedEnemyIds[enemy.id]) {
							damage_debuff += 0.2;
							usedEnemyIds[enemy.id] = true;
						}
					}
					// 检查【阵地】技能，数字63（其他怪物给当前阵地加光环）
					if (enemy && core.hasSpecial(mon_special, 63)) {
						var inRange = false;
						if (x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							if (dx <= 2 && dy <= 2 && !(dx === 0 && dy === 0)) inRange = true;
						}
						if (inRange && !usedEnemyIds[mon_id]) {
							damage_debuff += 0.4;
							atk_buff += 10;
							usedEnemyIds[mon_id] = true;
						}
					}
					// 检查【支援】技能，数字26
					if (enemy && core.hasSpecial(enemy.special, 26) &&
						// 检查支援条件，坐标存在，距离为1，且不能是自己
						// 其他类型的支援怪，比如十字之类的话.... 看着做是一样的
						x != null && y != null && Math.abs(block.x - x) <= 1 && Math.abs(block.y - y) <= 1 && !(x == block.x && y == block.y)) {
						// 记录怪物的x,y，ID
						guards.push([block.x, block.y, id]);
					}
					// 检查【陷阱】技能，数字59
					if (enemy && core.hasSpecial(enemy.special, 59)) {
						var range = enemy.range || 1,
							inRange = false;
						if (x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							// 检查十字和九宫格陷阱
							if (0 < dx + dy && dx + dy <= range) inRange = true;
							if (enemy.zoneSquare && 0 < dx + dy && dx <= range && dy <= range) inRange = true;
						}
						if (inRange) trap_buff += enemy.zone; // 叠加
					}
					// 检查【防空】技能，数字40
					if (enemy && core.hasSpecial(enemy.special, 40)) {
						var range = 2,
							inRange = false;
						if (x != null && y != null) {
							var dx = Math.abs(block.x - x),
								dy = Math.abs(block.y - y);
							// 检查十字和九宫格陷阱
							if (0 < dx && dx <= range && 0 < dy && dy <= range) inRange = true;
						}
						if (inRange) aa_buff += enemy.atk / 5; // 叠加
					}
					// TODO：如果有其他类型光环怪物在这里仿照添加检查
					// 注：新增新的类光环属性（需要遍历全图的）需要在特殊属性定义那里的第五项写1，参见光环和支援的特殊属性定义。
				}
			});

			core.status.checkBlock.cache[index] = { "atk_buff": atk_buff, "top_buff": top_buff, "bom_buff": bom_buff, "trap_buff": trap_buff, "aa_buff": aa_buff, "guards": guards, "damage_debuff": damage_debuff };
		} else {
			// 直接使用缓存数据
			atk_buff = cache.atk_buff;
			top_buff = cache.top_buff;
			bom_buff = cache.bom_buff;
			trap_buff = cache.trap_buff;
			aa_buff = cache.aa_buff;
			damage_debuff = cache.damage_debuff;
			guards = cache.guards;
		}

		// 增加比例；如果要增加数值可以直接在这里修改
		mon_atk *= (1 + atk_buff / 100);
		mon_top *= (1 + top_buff / 100);
		mon_bom *= (1 + bom_buff / 100);
	}

	// TODO：可以在这里新增其他的怪物数据变化
	// 比如仿攻（怪物攻击不低于勇士攻击）：
	// if (core.hasSpecial(mon_special, 27) && mon_atk < hero_atk) {
	//     mon_atk = hero_atk;
	// }
	// 也可以按需增加各种自定义内容

	return {
		"hp": Math.floor(mon_hp),
		"atk": Math.floor(mon_atk),
		"def": Math.floor(mon_def),
		"money": Math.floor(mon_money),
		"exp": Math.floor(mon_exp),
		"point": Math.floor(mon_point),
		"special": mon_special,
		"guards": guards, // 返回支援情况
		damage_debuff,
		"ap": Math.floor(mon_ap),
		"arm": Math.floor(mon_arm),
		"tpn": Math.floor(mon_tpn),
		"top": Math.floor(mon_top),
		"bom": Math.floor(mon_bom),
		"dod": Math.floor(mon_dod),
		"cd": Math.floor(mon_cd),
		"ammo": Math.floor(mon_ammo),
		"spd": Math.floor(mon_spd),
		"gro": Math.floor(mon_gro),
		"n": Math.floor(n),
		"enemyId": enemy.id,
		"type": enemy.type
	};
},
        "getDamageInfo": function (enemy, hero, x, y, floorId) {
	// 获得战斗伤害信息（实际伤害计算函数）
	// 
	// 参数说明：
	// enemy：该怪物信息
	// hero：勇士的当前数据；如果对应项不存在则会从core.status.hero中取。
	// x,y：该怪物的坐标（查看手册和强制战斗时为undefined）
	// floorId：该怪物所在的楼层
	// 后面三个参数主要是可以在光环等效果上可以适用
	floorId = floorId || core.status.floorId;

	var hero_hp = core.getRealStatusOrDefault(hero, 'hp'),
		hero_atk = core.getRealStatusOrDefault(hero, 'atk'),
		hero_def = core.getRealStatusOrDefault(hero, 'def'),
		hero_mdef = core.getRealStatusOrDefault(hero, 'mdef'),
		origin_hero_hp = core.getStatusOrDefault(hero, 'hp'),
		origin_hero_atk = core.getStatusOrDefault(hero, 'atk'),
		origin_hero_def = core.getStatusOrDefault(hero, 'def'),
		hero_ap = core.getRealStatusOrDefault(hero, 'ap'),
		hero_arm = core.getRealStatusOrDefault(hero, 'arm'),
		hero_top = core.getRealStatusOrDefault(hero, 'top'),
		hero_bom = core.getRealStatusOrDefault(hero, 'bom'),
		hero_tpn = core.getRealStatusOrDefault(hero, 'tpn'),
		hero_dod = core.getRealStatusOrDefault(hero, 'dod'),
		hero_gro = core.getRealStatusOrDefault(hero, 'gro');

	// 勇士的负属性都按0计算
	hero_hp = Math.max(0, hero_hp);
	hero_atk = Math.max(0, hero_atk);
	hero_def = Math.max(0, hero_def);
	hero_mdef = Math.max(0, hero_mdef);

	if (core.searchBlockWithFilter(block => core.hasSpecial(block.event.id, 42)).length > 0) hero_mdef = 0; // 截断：勇士护盾失效

	// 怪物的各项数据
	// 对坚固模仿等处理扔到了脚本编辑-getEnemyInfo之中
	var enemyInfo = core.enemys.getEnemyInfo(enemy, hero, x, y, floorId);
	var mon_hp = enemyInfo.hp,
		mon_atk = enemyInfo.atk,
		mon_def = enemyInfo.def,
		fixdamage = enemyInfo.damage,
		mon_special = enemyInfo.special,
		mon_ap = enemyInfo.ap,
		mon_arm = enemyInfo.arm,
		mon_top = enemyInfo.top,
		mon_bom = enemyInfo.bom,
		mon_tpn = enemyInfo.tpn,
		mon_dod = enemyInfo.dod,
		mon_cd = enemyInfo.cd,
		mon_ammo = enemyInfo.ammo,
		mon_spd = enemyInfo.spd,
		mon_gro = enemyInfo.gro,
		damage_debuff = enemyInfo.damage_debuff;

	if (flags.skill === 6) {
		hero_dod += 2;
	}
	hero_dod = core.clamp(hero_dod, 0, mon_tpn);
	mon_dod = core.clamp(mon_dod, 0, hero_tpn);

	//回合制战斗
	var curr_hp = mon_hp,
		turn = 0,
		damage = 0,
		notyet = true;

	//狙击
	if (core.hasSpecial(mon_special, 56)) {
		damage += mon_atk * 2 - hero_mdef;
	}
	//先攻
	if (core.hasSpecial(mon_special, 1) && !core.hasEquip("beautifighter")) {
		damage += core.getEnemyPerDamage(enemyInfo, hero, x, y, floorId, turn);
	}
	//跨射
	if (core.hasSpecial(mon_special, 37)) {
		if (!['hood', 'warspite', 'kinggeorge5', 'northcarolina', 'iowa'].some(id => core.hasEquip(id))) {
			damage += 3 * 3 * mon_atk;
		}
	}
	//英俊战士特殊判定
	if (core.hasSpecial(mon_special, 1) && core.hasEquip("beautifighter")) {
		curr_hp -= hero_atk * 2;
	}
	//谢菲尔德——巴伦支海
	if (core.hasEquip("sheffield")) {
		if (enemyInfo.type === '驱逐' || enemyInfo.type === '轻巡') {
			curr_hp -= mon_top * 0.3;
			mon_top *= 0.7;
		}
	}
	//谢菲尔德——警戒
	if (core.hasEquip("sheffield")) {
		curr_hp -= hero_atk;
	}
	//惊雷
	if (core.hasSpecial(mon_special, 34)) {
		damage += (mon_tpn - hero_dod) * mon_top;
	}
	//诺福克·先发制人
	if (core.hasEquip('norfolk') && core.plugin.Navy.includes(enemyInfo.type)) {
		curr_hp -= hero_atk;
	}
	//喷火MK5
	if (core.hasEquip('spitfiremk5') && enemyInfo.type === '战斗机' && curr_hp >= mon_hp * 0.6)
		curr_hp -= hero_atk * 0.4;
	//空射火箭弹
	if (core.hasEquip('beautifighter') && !core.plugin.Luftwaffe.includes(enemyInfo.type) && enemyInfo.type !== '潜艇') { //英俊战士
		curr_hp -= hero_atk * 0.2 * 8;
	}
	if (core.hasEquip('typhoon') && !core.plugin.Luftwaffe.includes(enemyInfo.type) && enemyInfo.type !== '潜艇') { //台风攻击机
		curr_hp -= hero_atk * 0.2 * 16;
	}
	if (core.hasEquip('p38') && !core.plugin.Luftwaffe.includes(enemyInfo.type) && enemyInfo.type !== '潜艇') { //P38闪电
		curr_hp -= hero_atk * 0.1 * 6;
	}
	const getHeroPerDamage = core.getHeroPerTurnDamageFn(enemyInfo, hero, x, y, floorId, turn);
	while (curr_hp > 0) {
		++turn; // 进入下一回合
		curr_hp -= getHeroPerDamage(turn) * (1 - damage_debuff);
		if (flags.skill === 9 && core.plugin.Army.includes(enemyInfo.type)) { //技能9：抵抗运动
			enemyInfo.atk = Math.max(11 - turn, 3) * mon_atk / 10;
		}
		//诺福克·最后一击
		if (core.plugin.Navy.includes(enemyInfo.type) && enemyInfo.type != '潜艇' && notyet && curr_hp < 0.2 * mon_hp) {
			if (core.hasEquip('norfolk')) {
				if (mon_dod <= 3) {
					curr_hp -= (3 - mon_dod) * hero_top;
					notyet = false;
				}
			}
		}
		if (curr_hp > 0) {
			damage += core.getEnemyPerDamage(enemyInfo, hero, x, y, floorId, turn);
			damage += core.status.checkBlock?.cache?.[x + ',' + y]?.trap_buff || 0; // 59: 陷阱
			damage += core.status.checkBlock?.cache?.[x + ',' + y]?.aa_buff || 0; // 40: 防空
		}
	}
	//技能1：战壕
	if (flags.skill === 1 && core.plugin.Army.includes(enemyInfo.type)) {
		damage *= 0.9;
	}
	//技能10：破译
	if (flags.skill === 10) {
		damage *= 0.8;
	}
	//主将
	if (core.hasSpecial(mon_special, 57)) {
		for (var xx = 0; xx < core.bigmap.width; ++xx) {
			for (var yy = 0; yy < core.bigmap.height; ++yy) {
				if ((x != xx || y != yy) && core.enemyExists(xx, yy, null, floorId))
					return null
			}
		}
	}

	//难度分歧
	if (core.hasItem('hard1')) {
		damage *= 0.6;
	}
	if (core.hasItem('hard2')) {
		damage *= 0.8;
	}
	if (core.hasItem('hard4')) {
		damage *= 1.1;
	}

	//扣除护盾
	if (flags.skill === 14) {
		hero_mdef *= 10;
	}
	damage -= hero_mdef; //这里可以变为负值

	//投降
	if (core.hasSpecial(mon_special, 61)) {
		damage *= 0;
	}

	//固伤
	if (core.hasSpecial(mon_special, 22)) {
		damage += fixdamage; //固伤在护盾前，可以被护盾减少
	}

	return {
		"mon_hp": Math.floor(mon_hp),
		"mon_atk": Math.floor(mon_atk),
		"mon_def": Math.floor(mon_def),
		"turn": Math.floor(turn),
		"damage": Math.floor(damage)
	};
}
    },
    "actions": {
        "onKeyUp": function (keyCode, altKey) {
	// 键盘按键处理，可以在这里自定义快捷键列表
	// keyCode：当前按键的keyCode（每个键的keyCode自行百度）
	// altKey：Alt键是否被按下，为true代表同时按下了Alt键
	// 可以在这里任意增加或编辑每个按键的行为
	// 如果处于正在行走状态，则不处理
	if (core.isMoving()) return;
	// 商店长按时忽略
	if (core.status.onShopLongDown) return core.status.onShopLongDown = false;
	// Alt+0~9，快捷换上套装
	if (altKey && keyCode >= 48 && keyCode <= 57)
		return core.items.quickLoadEquip(keyCode - 48);
	// 根据keyCode值来执行对应操作
	switch (keyCode) {
	case 27: // ESC：打开菜单栏
		core.openSettings(true);
		break;
	case 88: // X：使用怪物手册
		core.openBook(true);
		break;
	case 71: // G：使用楼传器
		core.useFly(true);
		break;
	case 65: // A：读取自动存档（回退）
		core.doSL("autoSave", "load");
		break;
	case 87: // W：撤销回退
		core.doSL("autoSave", "reload");
		break;
	case 83: // S：存档
		core.save(true);
		break;
	case 68: // D：读档
		core.load(true);
		break;
	case 69: // E：打开光标
		core.ui._drawCursor();
		break;
	case 84: // T：打开道具栏
		core.openToolbox(true);
		break;
	case 81: // Q：打开装备栏
		core.openEquipbox(true);
		break;
	case 90: // Z：转向
		core.turnHero();
		break;
	case 86: // V：打开快捷商店列表
		core.openQuickShop(true);
		break;
	case 32: // SPACE：轻按
		core.getNextItem();
		break;
	case 82: // R：回放录像
		core.ui._drawReplay();
		break;
	case 33:
	case 34: // PgUp/PgDn：浏览地图
		core.ui._drawViewMaps();
		break;
	case 66: // B：打开数据统计
		core.ui._drawStatistics();
		break;
	case 72: // H：打开帮助页面
		core.ui._drawHelp();
		break;
	case 77: // M：打开存档笔记
		core.actions._clickNotes_show();
		break;
	case 78: // N：重新开始
		core.confirmRestart();
		break;
	case 79: // O：查看工程
		core.actions._clickGameInfo_openProject();
		break;
	case 80: // P：游戏主页
		core.actions._clickGameInfo_openComments();
		break;
	case 56: //使用便携药
		if (core.canUseItem('tea')) {
			core.status.route.push('key:56');
			core.useItem('tea', true);
		}
		break;
	case 49:
	case 50:
	case 51:
	case 52:
	case 53:
	case 54:
	case 55:
		core.status.route.push('key:' + keyCode);
		var skill = flags.skillList[keyCode - 49];
		if (skill === flags.skill) skill = 0;
		if (skill === 0) {
			flags.skill = 0;
			core.drawTip('已取消当前战术指令');
		} else {
			var info = core.getSkillInfo(skill);
			if (info.strategy)
				if (hero.mana - core.getSkillInfo(flags.skill).cost < info.cost) {
					core.playSound('error.mp3');
					core.drawTip('指挥点不足，无法启用战略指令' + info.name);
				} else {
					core.control.autosave(true); // 自动存档
					hero.mana -= info.cost; //扣mp
					core.insertAction(info.event);
				}
			else
			if (hero.mana < info.cost) {
				core.playSound('error.mp3');
				core.drawTip('指挥点不足，无法启用战术指令' + info.name);
			} else
				flags.skill = info.id;
		}
		core.updateStatusBar(true, true);
	}
},
        "onStatusBarClick": function (px, py, vertical) {
			// 点击状态栏时触发的事件，仅在自绘状态栏开启时生效
			// px和py为点击的像素坐标
			// vertical为录像播放过程中的横竖屏信息
			// 
			// 横屏模式下状态栏的画布大小是 129*416 （开启拓展装备栏后是 129*457）
			// 竖屏模式下状态栏的画布大小是 416*(32*rows+9) 其中rows为状态栏行数，即全塔属性中statusCanvasRowsOnMobile值
			// 可以使用 _isVertical() 来判定当前是否是竖屏模式

			// 判定当前是否是竖屏模式。录像播放过程中可能会记录当时的横竖屏信息以覆盖。
			var _isVertical = function () {
				if (core.isReplaying() && vertical != null) return vertical;
				return core.domStyle.isVertical;
			}

			// 如果正在执行事件，则忽略
			if (core.status.lockControl) return;
			// 如果当前正在行走，则忽略；也可以使用 core.waitHeroToStop(callback) 来停止行走再回调执行脚本
			if (core.isMoving()) return;

			// 判定px和py来执行自己的脚本内容.... 注意横竖屏
			// console.log("onStatusBarClick: ", px, py, _isVertical());

			// 样例一：点击某个区域后使用一个道具
			/*
			if (core.hasItem("pickaxe")) {
				if (_isVertical()) {
					// 竖屏模式下
					if (px >= 200 && px <= 250 && py >= 50 && py <= 100) {
						core.useItem("pickaxe");
					}
				} else {
					// 横屏模式下
					if (px >= 50 && px <= 100 && py >= 200 && py <= 250) {
						core.useItem("pickaxe");
					}
				}
			}
			*/

			// 样例二：点击某个区域后执行一段公共事件或脚本
			/*
			if (core.hasFlag("xxx")) {
				if (_isVertical()) {
					// 竖屏模式下
					if (px >= 200 && px <= 250 && py >= 50 && py <= 100) {
						// 记录点击坐标。这里的1代表此时是竖屏！
						core.status.route.push("click:1:" + px + ":" + py);
						// 可以插入公共事件 / 普通事件 / 执行一段脚本（如打开自绘UI或增减flag）
						core.insertCommonEvent("道具商店");
						// core.insertAction(["一段事件"]);
						// core.openItemShop("shop1");
					}
				} else {
					// 横屏模式下
					if (px >= 50 && px <= 100 && py >= 200 && py <= 250) {
						// 记录点击坐标。这里的0代表此时是横屏！
						core.status.route.push("click:0:" + px + ":" + py);
						// 可以插入公共事件 / 普通事件 / 执行一段脚本（如打开自绘UI或增减flag）
						core.insertCommonEvent("道具商店");
						// core.insertAction(["一段事件"]);
						// core.openItemShop("shop1");
					}
				}
			}
			*/

		}
    },
    "control": {
        "saveData": function () {
			// 存档操作，此函数应该返回“具体要存档的内容”

			// 差异化存储values
			var values = {};
			for (var key in core.values) {
				if (!core.same(core.values[key], core.data.values[key]))
					values[key] = core.clone(core.values[key]);
			}

			// 要存档的内容
			var data = {
				'floorId': core.status.floorId,
				'hero': core.clone(core.status.hero),
				'hard': core.status.hard,
				'maps': core.clone(core.maps.saveMap()),
				'route': core.encodeRoute(core.status.route),
				'values': values,
				'version': core.firstData.version,
				'guid': core.getGuid(),
				"time": new Date().getTime()
			};

			return data;
		},
        "loadData": function (data, callback) {
			// 读档操作；从存储中读取了内容后的行为

			// 重置游戏和路线
			core.resetGame(data.hero, data.hard, data.floorId, core.maps.loadMap(data.maps, null, data.hero.flags), data.values);
			core.status.route = core.decodeRoute(data.route);
			core.control._bindRoutePush();
			// 文字属性，全局属性
			core.status.textAttribute = core.getFlag('textAttribute', core.status.textAttribute);
			var toAttribute = core.getFlag('globalAttribute', core.status.globalAttribute);
			if (!core.same(toAttribute, core.status.globalAttribute)) {
				core.status.globalAttribute = toAttribute;
				core.resize();
			}
			// 重置音量
			core.events.setVolume(core.getFlag("__volume__", 1), 0);
			// 加载勇士图标
			var icon = core.status.hero.image;
			icon = core.getMappedName(icon);
			if (core.material.images.images[icon]) {
				core.material.images.hero = core.material.images.images[icon];
				core.material.icons.hero.width = core.material.images.images[icon].width / 4;
				core.material.icons.hero.height = core.material.images.images[icon].height / 4;
			}
			core.setFlag('__fromLoad__', true);

			// TODO：增加自己的一些读档处理

			// 切换到对应的楼层
			core.changeFloor(data.floorId, null, data.hero.loc, 0, function () {
				// TODO：可以在这里设置读档后播放BGM
				if (core.hasFlag("__bgm__")) { // 持续播放
					core.playBgm(core.getFlag("__bgm__"));
				}

				core.removeFlag('__fromLoad__');
				if (callback) callback();
			});
		},
        "getStatusLabel": function (name) {
	// 返回某个状态英文名的对应中文标签，如atk -> 攻击，def -> 防御等。
	// 请注意此项仅影响 libs/ 下的内容（如绘制怪物手册、数据统计等）
	// 自行定义的（比如获得道具效果）中用到的“攻击+3”等需要自己去对应地方修改

	return {
		name: "名称",
		lv: "等级",
		hpmax: "生命上限",
		hp: "生命",
		manamax: "魔力上限",
		mana: "指挥点",
		atk: "攻击",
		def: "防御",
		ap: "穿甲",
		arm: "装甲",
		top: "雷击",
		tpn: "鱼雷管",
		bom: "空袭",
		dod: "闪避",
		mdef: "后勤",
		money: "黄金",
		exp: "经验",
		point: "加点",
		steps: "步数",
	} [name] || name;
},
        "triggerDebuff": function (action, type) {
			// 毒衰咒效果的获得与解除
			// action：获得还是解除；'get'表示获得，'remove'表示解除
			// type：一个数组表示获得了哪些毒衰咒效果；poison, weak，curse
			if (!(type instanceof Array)) type = [type];

			if (action == 'get') {
				if (core.inArray(type, 'poison') && !core.hasFlag("poison")) {
					// 获得毒效果
					core.setFlag('poison', true);
				}
				if (core.inArray(type, 'weak') && !core.hasFlag('weak')) {
					// 获得衰效果
					core.setFlag('weak', true);
					if (core.values.weakValue >= 1) {
						// >=1，直接扣数值
						core.addStatus('atk', -core.values.weakValue);
						core.addStatus('def', -core.values.weakValue);
					} else {
						// <1，扣比例
						core.addBuff('atk', -core.values.weakValue);
						core.addBuff('def', -core.values.weakValue);
					}
				}
				if (core.inArray(type, 'curse') && !core.hasFlag('curse')) {
					// 获得咒效果
					core.setFlag('curse', true);
				}
			} else if (action == 'remove') {
				var success = false;
				if (core.inArray(type, "poison") && core.hasFlag("poison")) {
					success = true;
					// 移除毒效果
					core.setFlag("poison", false);
				}
				if (core.inArray(type, "weak") && core.hasFlag("weak")) {
					success = true;
					// 移除衰效果
					core.setFlag("weak", false);
					if (core.values.weakValue >= 1) {
						// >=1，直接扣数值
						core.addStatus('atk', core.values.weakValue);
						core.addStatus('def', core.values.weakValue);
					} else {
						// <1，扣比例
						core.addBuff('atk', core.values.weakValue);
						core.addBuff('def', core.values.weakValue);
					}
				}
				if (core.inArray(type, "curse") && core.hasFlag("curse")) {
					success = true;
					// 移除咒效果
					core.setFlag("curse", false);
				}
				if (success) core.playSound('回血');
			}
		},
        "updateStatusBar": function () {
	// 更新状态栏

	// 检查等级
	core.events.checkLvUp();

	// 检查HP上限
	if (core.flags.statusBarItems.indexOf('enableHPMax') >= 0) {
		core.setStatus('hp', Math.min(core.getRealStatus('hpmax'), core.getStatus('hp')));
	}

	// 设置楼层名
	if (core.status.floorId) {
		core.setStatusBarInnerHTML('floor', core.status.maps[core.status.floorId].name);
	}

	// 设置勇士名字和图标
	core.setStatusBarInnerHTML('name', core.getStatus('name'));
	// 设置等级名称
	core.setStatusBarInnerHTML('lv', core.getLvName());

	// 设置生命上限、生命值、攻防护盾金币和经验值
	var statusList = ['hpmax', 'hp', 'mana', 'atk', 'def', 'mdef', 'money', 'exp'];
	statusList.forEach(function (item) {
		// 向下取整
		core.status.hero[item] = Math.floor(core.status.hero[item]);
		// 大数据格式化
		core.setStatusBarInnerHTML(item, core.getRealStatus(item));
	});

	// 设置魔力值; status:manamax 只有在非负时才生效。
	if (core.status.hero.manamax != null && core.getRealStatus('manamax') >= 0) {
		core.status.hero.mana = Math.min(core.status.hero.mana, core.getRealStatus('manamax'));
		core.setStatusBarInnerHTML('mana', core.status.hero.mana + "/" + core.getRealStatus('manamax'));
	} else {
		core.setStatusBarInnerHTML("mana", core.status.hero.mana);
	}
	// 设置技能栏
	// 可以用flag:skill表示当前开启的技能类型，flag:skillName显示技能名；详见文档-个性化-技能塔的支持
	core.setStatusBarInnerHTML('skill', core.getFlag('skillName', '无'));

	// 可以在这里添加自己额外的状态栏信息，比如想攻击显示 +0.5 可以这么写：
	// if (core.hasFlag('halfAtk')) core.setStatusBarInnerHTML('atk', core.statusBar.atk.innerText + "+0.5");

	// 如果是自定义添加的状态栏，也需要在这里进行设置显示的数值

	// 进阶
	if (core.flags.statusBarItems.indexOf('enableLevelUp') >= 0) {
		core.setStatusBarInnerHTML('up', core.formatBigNumber(core.getNextLvUpNeed()) || "");
	} else core.setStatusBarInnerHTML('up', "");

	// 钥匙
	var keys = ['yellowKey', 'blueKey', 'redKey', 'greenKey'];
	keys.forEach(function (key) {
		core.setStatusBarInnerHTML(key, core.setTwoDigits(core.itemCount(key)));
	});
	// 毒衰咒
	core.setStatusBarInnerHTML('poison', core.hasFlag('poison') ? "毒" : "");
	core.setStatusBarInnerHTML('weak', core.hasFlag('weak') ? "衰" : "");
	core.setStatusBarInnerHTML('curse', core.hasFlag('curse') ? "咒" : "");
	// 破炸飞
	core.setStatusBarInnerHTML('pickaxe', "破" + core.itemCount('pickaxe'));
	core.setStatusBarInnerHTML('bomb', "炸" + core.itemCount('bomb'));
	core.setStatusBarInnerHTML('fly', "飞" + core.itemCount('centerFly'));

	// 难度
	if (core.statusBar.hard.innerText != core.status.hard) {
		core.statusBar.hard.innerText = core.status.hard;
	}
	var hardColor = core.getFlag('__hardColor__');
	if (hardColor == null) core.statusBar.hard.innerText = '';
	if (core.statusBar.hard.getAttribute('_style') != hardColor) {
		core.statusBar.hard.style.color = hardColor;
		core.statusBar.hard.setAttribute('_style', hardColor);
	}
	// 自定义状态栏绘制
	core.drawStatusBar();

	// 更新阻激夹域的伤害值
	core.updateCheckBlock();
	// updateDamage只能在此处执行！！更新全地图显伤
	core.updateDamage();
},
        "updateCheckBlock": function (floorId) {
	// 领域、夹击、阻击等的伤害值计算
	floorId = floorId || core.status.floorId;
	if (!floorId || !core.status.maps) return;

	var width = core.floors[floorId].width,
		height = core.floors[floorId].height;
	var blocks = core.getMapBlocksObj(floorId);

	var damage = {}, // 每个点的伤害值
		type = {}, // 每个点的伤害类型
		repulse = {}, // 每个点的阻击怪信息
		ambush = {}; // 每个点的捕捉信息
	var betweenAttackLocs = {}; // 所有可能的夹击点
	var needCache = false;
	var canGoDeadZone = core.flags.canGoDeadZone;
	core.flags.canGoDeadZone = true;

	// 计算血网和领域、阻击、激光的伤害，计算捕捉信息
	for (var loc in blocks) {
		var block = blocks[loc],
			x = block.x,
			y = block.y,
			id = block.event.id,
			enemy = core.material.enemys[id];
		if (block.disable) continue;

		type[loc] = type[loc] || {};

		// 血网
		// 如需调用当前楼层的ratio可使用  core.status.maps[floorId].ratio
		if (id == 'lavaNet' && !core.hasItem('amulet')) {
			damage[loc] = (damage[loc] || 0) + core.values.lavaDamage;
			type[loc][(block.event.name || "血网") + "伤害"] = true;
		}
		// 水雷
		if (id == 'mine' && !core.hasItem('amulet')) {
			damage[loc] = (damage[loc] || 0) + core.values.lavaDamage;
			type[loc][(block.event.name || "血网") + "伤害"] = true;
		}

		// 歼灭：生命不足一成，靠近即死
		if (enemy && core.hasSpecial(enemy.special, 51) && hero.hp * 10 < hero.hpmax) {
			for (var loc of [
					[x - 1, y],
					[x + 1, y],
					[x, y - 1],
					[x, y + 1]
				]) {
				if (loc[0] < 0 || loc[0] >= width || loc[1] < 0 || loc[1] >= height) continue;
				damage[loc[0] + ',' + loc[1]] = Infinity;
				type[loc[0] + ',' + loc[1]] = type[loc[0] + ',' + loc[1]] || {};
				type[loc[0] + ',' + loc[1]]['歼灭伤害'] = true;
			}
		}

		// 领域
		// 如果要防止领域伤害，可以直接简单的将 flag:no_zone 设为true
		if (enemy && core.hasSpecial(enemy.special, 15) && !core.hasFlag('no_zone')) {
			// 领域范围，默认为1
			var range = enemy.range || 1;
			// 是否是九宫格领域
			var zoneSquare = false;
			if (enemy.zoneSquare != null) zoneSquare = enemy.zoneSquare;
			// 在范围内进行搜索，增加领域伤害值
			for (var dx = -range; dx <= range; dx++) {
				for (var dy = -range; dy <= range; dy++) {
					if (dx == 0 && dy == 0) continue;
					var nx = x + dx,
						ny = y + dy,
						currloc = nx + "," + ny;
					if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
					// 如果是十字领域，则还需要满足 |dx|+|dy|<=range
					if (!zoneSquare && Math.abs(dx) + Math.abs(dy) > range) continue;
					damage[currloc] = (damage[currloc] || 0) + (enemy.zone || 0);
					type[currloc] = type[currloc] || {};
					type[currloc]["领域伤害"] = true;
				}
			}
		}

		// 阻击
		// 如果要防止阻击伤害，可以直接简单的将 flag:no_repulse 设为true
		if (enemy && core.hasSpecial(enemy.special, 18) && !core.hasFlag('no_repulse')) {
			var scan = enemy.zoneSquare ? core.utils.scan2 : core.utils.scan;
			for (var dir in scan) {
				var nx = x + scan[dir].x,
					ny = y + scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				damage[currloc] = (damage[currloc] || 0) + (enemy.repulse || 0);
				type[currloc] = type[currloc] || {};
				type[currloc]["阻击伤害"] = true;

				var rdir = core.turnDirection(":back", dir);
				// 检查下一个点是否存在事件（从而判定是否移动）
				var rnx = x + scan[rdir].x,
					rny = y + scan[rdir].y;
				if (rnx < 0 || rnx >= width || rny < 0 || rny >= height) continue;
				// 如需禁止阻击被推到已隐藏的事件处（如重生怪处），可将这一句的false改为true
				if (core.getBlock(rnx, rny, floorId, false) != null) continue;
				if (core.utils.scan[rdir] && !core.canMoveHero(x, y, rdir, floorId)) continue;
				repulse[currloc] = (repulse[currloc] || []).concat([
					[x, y, id, rdir]
				]);
			}
		}

		// 激光
		// 如果要防止激光伤害，可以直接简单的将 flag:no_laser 设为true
		if (enemy && core.hasSpecial(enemy.special, 24) && !core.hasFlag("no_laser")) {
			for (var nx = 0; nx < width; nx++) {
				var currloc = nx + "," + y;
				if (nx != x) {
					damage[currloc] = (damage[currloc] || 0) + (enemy.laser || 0);
					type[currloc] = type[currloc] || {};
					type[currloc]["激光伤害"] = true;
				}
			}
			for (var ny = 0; ny < height; ny++) {
				var currloc = x + "," + ny;
				if (ny != y) {
					damage[currloc] = (damage[currloc] || 0) + (enemy.laser || 0);
					type[currloc] = type[currloc] || {};
					type[currloc]["激光伤害"] = true;
				}
			}
		}

		// 捕捉
		// 如果要防止捕捉效果，可以直接简单的将 flag:no_ambush 设为true
		if (enemy && core.enemys.hasSpecial(enemy.special, 27) && !core.hasFlag("no_ambush")) {
			var scan = enemy.zoneSquare ? core.utils.scan2 : core.utils.scan;
			// 给周围格子加上【捕捉】记号
			for (var dir in scan) {
				var nx = x + scan[dir].x,
					ny = y + scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height || (core.utils.scan[dir] && !core.canMoveHero(x, y, dir, floorId))) continue;
				ambush[currloc] = (ambush[currloc] || []).concat([
					[x, y, id, dir]
				]);
			}
		}

		// 包夹；在这里提前计算所有可能的夹击点，具体计算逻辑在下面
		// 如果要防止夹击伤害，可以简单的将 flag:no_betweenAttack 设为true
		if (enemy && core.enemys.hasSpecial(enemy.special, 52) && !core.hasFlag('no_betweenAttack')) {
			for (var dir in core.utils.scan) {
				var nx = x + core.utils.scan[dir].x,
					ny = y + core.utils.scan[dir].y,
					currloc = nx + "," + ny;
				if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
				betweenAttackLocs[currloc] = true;
			}
		}

		// 检查地图范围类技能
		var specialFlag = core.getSpecialFlag(enemy);
		if (specialFlag & 1) needCache = true;
		if (core.status.event.id == 'viewMaps') needCache = true;
		if ((core.status.event.id == 'book' || core.status.event.id == 'bool-detail') && core.status.event.ui) needCache = true;
	}

	// 对每个可能的包夹点计算夹击伤害
	for (var loc in betweenAttackLocs) {
		var xy = loc.split(","),
			x = parseInt(xy[0]),
			y = parseInt(xy[1]);
		// 包夹怪物的ID
		var enemyId1 = null,
			enemyId2 = null;
		// 检查左右包夹
		var leftBlock = blocks[(x - 1) + "," + y],
			rightBlock = blocks[(x + 1) + "," + y];
		var leftId = core.getFaceDownId(leftBlock),
			rightId = core.getFaceDownId(rightBlock);
		if (leftBlock && !leftBlock.disable && rightBlock && !rightBlock.disable && leftId == rightId) {
			if (core.hasSpecial(leftId, 52))
				enemyId1 = leftId;
		}
		// 检查上下包夹
		var topBlock = blocks[x + "," + (y - 1)],
			bottomBlock = blocks[x + "," + (y + 1)];
		var topId = core.getFaceDownId(topBlock),
			bottomId = core.getFaceDownId(bottomBlock);
		if (topBlock && !topBlock.disable && bottomBlock && !bottomBlock.disable && topId == bottomId) {
			if (core.hasSpecial(topId, 52))
				enemyId2 = topId;
		}

		if (enemyId1 != null || enemyId2 != null) {
			var value = 0;
			if (enemyId1 != null) {
				value += core.plugin.getEnemyPerDamage(enemyId1, hero, x - 1, y, floorId);
				value += core.plugin.getEnemyPerDamage(enemyId1, hero, x + 1, y, floorId);
			}
			if (enemyId2 != null) {
				value += core.plugin.getEnemyPerDamage(enemyId2, hero, x, y - 1, floorId);
				value += core.plugin.getEnemyPerDamage(enemyId2, hero, x, y + 1, floorId);
			}
			if (value > 0) {
				damage[loc] = (damage[loc] || 0) + value;
				type[loc] = type[loc] || {};
				type[loc]["包夹伤害"] = true;
			}
		}
	}

	// 取消注释下面这一段可以让护盾抵御阻激夹域伤害
	/*
	for (var loc in damage) {
		damage[loc] = Math.max(0, damage[loc] - core.getRealStatus('mdef'));
	}
	*/

	core.flags.canGoDeadZone = canGoDeadZone;
	core.status.checkBlock = {
		damage: damage,
		type: type,
		repulse: repulse,
		ambush: ambush,
		needCache: needCache,
		cache: {} // clear cache
	};
},
        "moveOneStep": function (callback) {
			// 勇士每走一步后执行的操作。callback为行走完毕后的回调
			// 这个函数执行在“刚走完”的时候，即还没有检查该点的事件和领域伤害等。
			// 请注意：瞬间移动不会执行该函数。如果要控制能否瞬间移动有三种方法：
			// 1. 将全塔属性中的cannotMoveDirectly这个开关勾上，即可在全塔中全程禁止使用瞬移。
			// 2, 将楼层属性中的cannotMoveDirectly这个开关勾上，即禁止在该层楼使用瞬移。
			// 3. 将flag:cannotMoveDirectly置为true，即可使用flag控制在某段剧情范围内禁止瞬移。

			// 增加步数
			core.status.hero.steps++;
			// 更新跟随者状态，并绘制
			core.updateFollowers();
			core.drawHero();
			// 检查中毒状态的扣血和死亡
			if (core.hasFlag('poison')) {
				core.status.hero.statistics.poisonDamage += core.values.poisonDamage;
				core.status.hero.hp -= core.values.poisonDamage;
				if (core.status.hero.hp <= 0) {
					core.status.hero.hp = 0;
					core.updateStatusBar(false, true);
					core.events.lose();
					return;
				} else {
					core.updateStatusBar(false, true);
				}
			}

			// 从v2.7开始，每一步行走不会再刷新状态栏。
			// 如果有特殊要求（如每走一步都加buff之类），可手动取消注释下面这一句：
			// core.updateStatusBar(true, true);

			// 检查自动事件
			core.checkAutoEvents();

			// ------ 检查目标点事件 ------ //
			// 无事件的道具（如血瓶）需要优先于阻激夹域判定
			var nowx = core.getHeroLoc('x'),
				nowy = core.getHeroLoc('y');
			var block = core.getBlock(nowx, nowy);
			var hasTrigger = false;
			if (block != null && block.event.trigger == 'getItem' &&
				!core.floors[core.status.floorId].afterGetItem[nowx + "," + nowy]) {
				hasTrigger = true;
				core.trigger(nowx, nowy, callback);
			}
			// 执行目标点的阻激夹域事件
			core.checkBlock();

			// 执行目标点的script和事件
			if (!hasTrigger)
				core.trigger(nowx, nowy, callback);

			// 检查该点是否是滑冰
			if (core.onSki()) {
				// 延迟到事件最后执行，因为这之前可能有阻激夹域动画
				core.insertAction({ "type": "moveAction" }, null, null, null, true);
			}

			// ------ 检查目标点事件 END ------ //

			// 如需强行终止行走可以在这里条件判定：
			// core.stopAutomaticRoute();
		},
        "moveDirectly": function (x, y, ignoreSteps) {
	// 瞬间移动；x,y为要瞬间移动的点；ignoreSteps为减少的步数，可能之前已经被计算过
	// 返回true代表成功瞬移，false代表没有成功瞬移

	// 判定能否瞬移到该点
	if (ignoreSteps == null) ignoreSteps = core.canMoveDirectly(x, y);
	if (ignoreSteps >= 0) {
		// 中毒也允许瞬移
		if (core.hasFlag('poison')) {
			var damage = ignoreSteps * core.values.poisonDamage;
			if (damage >= core.status.hero.hp) return false;
			core.status.hero.statistics.poisonDamage += damage;
			core.status.hero.hp -= damage;
		}

		core.clearMap('hero');
		// 获得勇士最后的朝向
		var lastDirection = core.status.route[core.status.route.length - 1];
		if (['left', 'right', 'up', 'down'].indexOf(lastDirection) >= 0)
			core.setHeroLoc('direction', lastDirection);
		// 设置坐标，并绘制
		core.control._moveDirectyFollowers(x, y);
		core.status.hero.loc.x = x;
		core.status.hero.loc.y = y;
		core.drawHero();
		// 记录录像
		core.status.route.push("move:" + x + ":" + y);

		if (flags.autoitem) { // 自动拾取
			for (var x = core.bigmap.width; --x >= 0;)
				for (var y = core.bigmap.height; --y >= 0;) {
					var block = core.getBlock(x, y);
					if (block != null && !block.event.id.endsWith('Potion') && block.event.trigger === 'getItem' && !core.floors[core.status.floorId].afterGetItem[x + "," + y]) {
						if ([
								[x - 1, y],
								[x + 1, y],
								[x, y - 1],
								[x, y + 1]
							].some(d => core.canMoveDirectly(d[0], d[1]) >= 0))
							core.getItem(block.event.id, 1, x, y);
					}
				}
		}

		// 统计信息
		core.status.hero.statistics.moveDirectly++;
		core.status.hero.statistics.ignoreSteps += ignoreSteps;
		if (core.hasFlag('poison')) {
			core.updateStatusBar(false, true);
		}
		core.ui.drawStatusBar();
		core.checkRouteFolding();
		return true;
	}
	return false;
},
        "parallelDo": function (timestamp) {
			// 并行事件处理，可以在这里写任何需要并行处理的脚本或事件
			// 该函数将被系统反复执行，每次执行间隔视浏览器或设备性能而定，一般约为16.6ms一次
			// 参数timestamp为“从游戏资源加载完毕到当前函数执行时”的时间差，以毫秒为单位

			// 检查当前是否处于游戏开始状态
			if (!core.isPlaying()) return;

			// 执行当前楼层的并行事件处理
			if (core.status.floorId) {
				try {
					eval(core.floors[core.status.floorId].parallelDo);
				} catch (e) {
					console.error(e);
				}
			}
		}
    },
    "ui": {
        "getToolboxItems": function (cls) {
			// 获得道具栏中当前某类型道具的显示项和显示顺序
			// cls为道具类型，只可能是 tools, constants 和 equips
			// 返回一个数组，代表当前某类型道具的显示内容和顺序
			// 默认按id升序排列，您可以取消下面的注释改为按名称排列

			return Object.keys(core.status.hero.items[cls] || {})
				.filter(function (id) { return !core.material.items[id].hideInToolbox; })
				.sort( /*function (id1, id2) { return core.material.items[id1].name <= core.material.items[id2].name ? -1 : 1 }*/);
		},
        "drawStatusBar": function () {
	if (!core.dymCanvas['status']) core.ui.createCanvas('status', 480, 0, core._PX_, core._PY_, 66); // 刚好盖过显伤层
	ctx = main.mode === 'editor' ? core.dom.statusCanvasCtx : core.dymCanvas['status']; // 为了预览，但预览宽度不足
	core.ui.clearMap(ctx); // 擦除
	if (core.hasFlag('hideStatusBar')) return; //状态栏隐藏
	core.ui.setFillStyle(ctx, core.status.globalAttribute.statusBarColor); // 填充颜色
	core.ui.drawImage(ctx, 'statusbar.png', 0, 0); // 背景
	core.ui.setFont(ctx, '20px Aaknife'); // 字体字号（地图名）
	core.ui.setTextAlign(ctx, 'center'); // 左右居中
	core.ui.setTextBaseline(ctx, 'bottom'); // 下对齐
	core.ui.fillText(ctx, core.status.thisMap?.name ?? '', 80, 34, '#66CCFF'); // 地图名
	core.ui.setFont(ctx, '20px Aaknife'); // 字体字号（军衔）
	core.ui.fillText(ctx, core.getLvName(), 80, 56, 'white'); // 军衔
	core.ui.setTextAlign(ctx, 'right'); // 右对齐
	core.ui.fillText(ctx, core.status.thisMap?.area ?? '', 158, 56, 'yellow'); // 地形
	core.ui.setTextAlign(ctx, 'left'); // 左对齐
	core.ui.setFont(ctx, '16px Aaknife'); // 字体字号（生命）
	core.ui.fillText(ctx, core.getStatus('hp'), 28, 82, '#00FF00'); // 生命值
	core.ui.fillRect(ctx, 10, 86, 140 * core.getStatus('hp') / core.getRealStatus('hpmax'), 12, '#00FF00'); // 血条，满血为140*12
	core.ui.setTextAlign(ctx, 'right'); // 右对齐
	core.ui.fillText(ctx, Math.ceil(core.getStatus('hp') / core.getRealStatus('hpmax') * 100) + '%', 158, 82); // 生命百分比
	core.ui.fillText(ctx, core.getRealStatus('hpmax'), 158, 120, 'white'); // 最大生命
	core.ui.setFont(ctx, '20px Aaknife'); // 字体字号（便携）
	core.ui.setTextAlign(ctx, 'left'); // 左对齐
	core.ui.fillText(ctx, core.itemCount('tea'), 28, 126, 'white'); // 下午茶
	core.ui.setFont(ctx, '16px Aaknife'); // 字体字号（攻击）
	core.ui.fillText(ctx, core.getRealStatus('atk'), 50, 146, 'red'); // 攻击力
	if (flags.escort) {
		core.ui.fillText(ctx, '友军: ' + flags['友军血量'], 5, 165, 'red'); //友军
	}
	core.ui.setTextAlign(ctx, 'center'); // 左右居中
	core.ui.fillText(ctx, core.getRealStatus('mana'), 134, 154, '#66CCFF'); // 指挥点
	core.ui.fillText(ctx, core.getRealStatus('ap'), 32, 234, 'white'); // 穿甲
	core.ui.fillText(ctx, core.getRealStatus('arm'), 122, 234); // 穿甲
	core.ui.fillText(ctx, core.getRealStatus('top'), 32, 300); // 雷击
	core.ui.fillText(ctx, core.getRealStatus('tpn'), 122, 300); // 鱼雷管
	core.ui.setTextAlign(ctx, 'left'); // 左对齐
	core.ui.fillText(ctx, core.getRealStatus('money'), 50, 338); // 黄金
	core.ui.fillText(ctx, core.control.getNextLvUpNeed(), 50, 358); // 经验
	core.ui.fillText(ctx, core.getRealStatus('mdef'), 50, 378); // 后勤
	core.ui.setFont(ctx, '16px Aaknife'); // 字体字号（技能名）
	if (flags.skill > 0) core.ui.fillText(ctx, core.getSkillInfo(flags.skill).name, 6, 404, 'orange') // 技能名
	core.ui.setFont(ctx, '18px Aaknife'); // 字体字号（钥匙）
	core.ui.fillText(ctx, core.replaceText('\r[#FFD700]${core.setTwoDigits(item:yellowKey)}  \r[#66CCFF]${core.setTwoDigits(item:blueKey)}  \r[#FF0000]${core.setTwoDigits(item:redKey)}'), 10, 428); // 钥匙
	if (flags.stage >= 0) {
		core.ui.drawIcon(ctx, flags.mission[core.getFlag('stage', 0)][0] ? 'star2' : 'star1', 124, 320, 32, 32);
		core.ui.drawIcon(ctx, flags.mission[core.getFlag('stage', 0)][1] ? 'star2' : 'star1', 124, 356, 32, 32);
		core.ui.drawIcon(ctx, flags.mission[core.getFlag('stage', 0)][2] ? 'star2' : 'star1', 124, 392, 32, 32);
	}
	core.ui.setFont(ctx, '16px Aaknife'); // 字体字号（buff和光环）
	if (flags.dry === true) {
		core.ui.fillText(ctx, '炎热', 5, 450, 'orange')
	}
},
        "drawStatistics": function () {
			// 浏览地图时参与的统计项目

			return [
				'yellowDoor', 'blueDoor', 'redDoor', 'greenDoor', 'steelDoor',
				'yellowKey', 'blueKey', 'redKey', 'greenKey', 'steelKey',
				'redGem', 'blueGem', 'greenGem', 'yellowGem',
				'redPotion', 'bluePotion', 'greenPotion', 'yellowPotion', 'superPotion',
				'pickaxe', 'bomb', 'centerFly', 'icePickaxe', 'freezeBadge',
				'earthquake', 'upFly', 'downFly', 'jumpShoes', 'lifeWand',
				'poisonWine', 'weakWine', 'curseWine', 'superWine',
				'sword1', 'sword2', 'sword3', 'sword4', 'sword5',
				'shield1', 'shield2', 'shield3', 'shield4', 'shield5',
				// 在这里可以增加新的ID来进行统计个数，只能增加道具ID
			];
		},
        "drawAbout": function () {
			// 绘制“关于”界面
			core.ui.closePanel();
			core.lockControl();
			core.status.event.id = 'about';

			var left = 48,
				top = 36,
				right = (core._PX_ || core.__PIXELS__) - 2 * left,
				bottom = (core._PY_ || core.__PIXELS__) - 2 * top;

			core.setAlpha('ui', 0.85);
			core.fillRect('ui', left, top, right, bottom, '#000000');
			core.setAlpha('ui', 1);
			core.strokeRect('ui', left - 1, top - 1, right + 1, bottom + 1, '#FFFFFF', 2);

			var text_start = left + 24;

			// 名称
			core.setTextAlign('ui', 'left');
			var globalAttribute = core.status.globalAttribute || core.initStatus.globalAttribute;
			core.fillText('ui', "HTML5 魔塔样板", text_start, top + 35, globalAttribute.selectColor, "bold 22px " + globalAttribute.font);
			core.fillText('ui', "版本： " + main.__VERSION__, text_start, top + 80, "#FFFFFF", "bold 17px " + globalAttribute.font);
			core.fillText('ui', "作者： 艾之葵", text_start, top + 112);
			core.fillText('ui', 'HTML5魔塔交流群：539113091', text_start, top + 112 + 32);
			// TODO: 写自己的“关于”页面，每次增加32像素即可
			core.playSound('打开界面');
		}
    }
}