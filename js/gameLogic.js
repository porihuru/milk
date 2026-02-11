/**
 * gameLogic.js - ゲームロジック
 * ゲームの進行・注ぐ処理・スコア計算
 */

/**
 * 1. 新しい牛乳瓶を開始
 */
function startNewBottle() {
    gameState.bottleCount++;
    gameState.currentMilk = 0;
    gameState.bottleState = 'incoming';

    updateScoreDisplay();
    updateStatus('牛乳瓶が移動中...');
    animateBottleIncoming();

    // 1.1 牛乳瓶が到着するまで待機
    setTimeout(() => {
        gameState.bottleState = 'ready';
        updateStatus(`注ぐボタンを押してください (${gameState.bottleCount}/${CONFIG.bottleCount})`);
        setButtonEnabled(true);
    }, CONFIG.bottleAnimationTime);
}

/**
 * 2. 注ぐ処理をトグル
 */
function togglePour() {
    if (gameState.bottleState !== 'ready') return;

    gameState.isPouringActive = !gameState.isPouringActive;

    // 2.1 注ぎ開始
    if (gameState.isPouringActive) {
        pour();
    }
}

/**
 * 3. 注ぐアニメーションループ
 */
function pour() {
    if (!gameState.isPouringActive || gameState.bottleState !== 'ready') return;

    // 3.1 牛乳量増加
    gameState.currentMilk += CONFIG.pourRate;
    updatePouringVisuals();

    // 3.2 規定量に達したか確認
    if (gameState.currentMilk >= CONFIG.targetMilk) {
        endBottle();
    } else {
        // 3.3 次のフレームをリクエスト
        requestAnimationFrame(pour);
    }
}

/**
 * 4. 注ぎ終了処理
 */
function endBottle() {
    gameState.isPouringActive = false;
    gameState.bottleState = 'ending';
    setButtonEnabled(false);

    // 4.1 スコア計算
    const accuracy = Math.min(100, gameState.currentMilk);
    const points = Math.round(accuracy);
    gameState.totalScore += points;

    updateScoreDisplay();
    updateStatus(`スコア+${points} (合計: ${gameState.totalScore})`);

    // 4.2 ゲーム終了判定
    if (gameState.bottleCount >= CONFIG.bottleCount) {
        // 4.2.1 ゲームクリア
        setTimeout(() => {
            showGameOver(gameState.totalScore);
        }, 500);
    } else {
        // 4.2.2 次の牛乳瓶
        setTimeout(() => {
            resetBottlePosition();
            startNewBottle();
        }, CONFIG.transitionDelay);
    }
}
