/**
 * main.js - ゲーム初期化
 * アプリケーション起動時の初期化処理
 */

/**
 * 1. 初期化関数
 */
function initializeGame() {
    // 1.1 バージョン表示設定
    setVersion();

    // 1.2 ゲーム状態リセット
    resetBottleState();

    // 1.3 UI初期化
    updateScoreDisplay();
    updateStatus('牛乳瓶を待機中...');

    // 1.4 ゲーム開始
    startNewBottle();
}

/**
 * 2. DOMContentLoaded時に初期化
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeGame);
} else {
    initializeGame();
}
