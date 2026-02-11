/**
 * ui.js - UI管理と更新
 * DOMエレメント参照と画面更新処理
 */

// 1. DOM要素参照
const elements = {
    // 1.1 ゲーム要素
    bottle: document.getElementById('bottle'),
    pouring: document.getElementById('pouring'),
    milkLevel: document.getElementById('milkLevel'),

    // 1.2 スコア表示
    scoreDisplay: document.getElementById('score'),
    countDisplay: document.getElementById('count'),
    versionDisplay: document.getElementById('version'),

    // 1.3 ステータス表示
    statusDisplay: document.getElementById('status'),

    // 1.4 ボタン
    pourBtn: document.getElementById('pourBtn'),

    // 1.5 ゲームオーバー画面
    gameOverPanel: document.getElementById('gameOver'),
    finalScoreDisplay: document.getElementById('finalScore')
};

// 2. UI更新関数

/**
 * 2.1 スコア表示を更新
 */
function updateScoreDisplay() {
    elements.scoreDisplay.textContent = gameState.totalScore;
    elements.countDisplay.textContent = gameState.bottleCount;
}

/**
 * 2.2 牛乳の流れを表示
 */
function updatePouringVisuals() {
    const pourHeight = gameState.currentMilk * 1.5;
    const milkHeight = gameState.currentMilk * 0.6;

    elements.pouring.style.height = pourHeight + 'px';
    elements.milkLevel.style.height = milkHeight + 'px';
}

/**
 * 2.3 ステータスメッセージ更新
 */
function updateStatus(message) {
    elements.statusDisplay.textContent = message;
}

/**
 * 2.4 ボタン状態更新
 */
function setButtonEnabled(enabled) {
    elements.pourBtn.disabled = !enabled;
}

/**
 * 2.5 牛乳瓶のアニメーション開始
 */
function animateBottleIncoming() {
    elements.bottle.classList.add('moving');
}

/**
 * 2.6 牛乳瓶のアニメーション終了
 */
function resetBottlePosition() {
    elements.bottle.classList.remove('moving');
    elements.pouring.style.height = '0px';
    elements.milkLevel.style.height = '0px';
}

/**
 * 2.7 ゲームオーバー画面表示
 */
function showGameOver(score) {
    elements.finalScoreDisplay.textContent = score;
    elements.gameOverPanel.classList.add('show');
}

/**
 * 2.8 バージョン表示を設定
 */
function setVersion() {
    elements.versionDisplay.textContent = CONFIG.version;
}
