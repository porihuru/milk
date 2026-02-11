/**
 * gameState.js - ゲーム状態管理
 * ゲームの定数と状態をまとめて管理
 */

// 1. ゲーム定数
const CONFIG = {
    version: '1.0.0',
    bottleCount: 10,
    targetMilk: 100,
    pourRate: 2,
    bottleAnimationTime: 600,
    transitionDelay: 1000
};

// 2. ゲーム状態
const gameState = {
    // 2.1 カウンター
    bottleCount: 0,
    currentMilk: 0,
    totalScore: 0,

    // 2.2 フラグ
    isPouring: false,
    isPouringActive: false,

    // 2.3 ゲーム状態
    bottleState: 'waiting' // waiting -> incoming -> ready -> ending -> waiting
};

// 3. ゲーム状態リセット関数
function resetBottleState() {
    gameState.bottleCount = 0;
    gameState.currentMilk = 0;
    gameState.totalScore = 0;
    gameState.isPouring = false;
    gameState.isPouringActive = false;
    gameState.bottleState = 'waiting';
}
