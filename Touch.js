// ボタンの外側の画面全体にタッチイベントリスナーを追加する
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');

    container.addEventListener('touchstart', function (event) {
        // タッチされた座標を取得
        const touchX = event.touches[0].clientX;
        const touchY = event.touches[0].clientY;

        // 赤いドットを作成して配置
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.left = (touchX - 5) + 'px'; // 5px はドットの半径の半分
        dot.style.top = (touchY - 5) + 'px';
        container.appendChild(dot);
    
	
	    // 座標をコンソールに出力する（デバッグ用）
		console.log('タッチした座標:', touchX, touchY);
		alert('タッチした座標:', touchX, touchY);
		// 他の処理と一緒に、ここにタッチした座標に関する追加の処理を記述する	
	});
});