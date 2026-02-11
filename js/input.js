/**
 * input.js - 入力イベント処理
 * キーボード・タッチイベントのハンドリング
 */

/**
 * 1. タッチイベント処理
 */

/**
 * 1.1 タッチ開始
 */
function handleTouchStart(event) {
    event.preventDefault();
    togglePour();
}

/**
 * 1.2 タッチ終了
 */
function handleTouchEnd(event) {
    event.preventDefault();
    if (gameState.isPouringActive) {
        togglePour();
    }
}

/**
 * 2. キーボードイベント処理
 */

/**
 * 2.1 キー押下イベント
 */
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (!gameState.isPouringActive) {
            togglePour();
        }
    }
});

/**
 * 2.2 キー解放イベント
 */
document.addEventListener('keyup', (e) => {
    if (e.code === 'Space' && gameState.isPouringActive) {
        togglePour();
    }
});
