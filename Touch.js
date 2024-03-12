// ボタンの外側の画面全体にタッチイベントリスナーを追加する
document.addEventListener('touchstart', function(event) {
    // タッチした座標を取得
    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;

    // 座標をコンソールに出力する（デバッグ用）
    console.log('タッチした座標:', touchX, touchY);

    // 他の処理と一緒に、ここにタッチした座標に関する追加の処理を記述する
});
