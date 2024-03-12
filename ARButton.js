// r5
class ARButton {
	// 追加	
	static model1_display = 1;	//初期有効
	static model2_display = 1;	//初期有効




	static createButton(renderer, sessionInit = {}) {

		// const arButton = new ARButton(); // ARButton クラスのインスタンスを作成


		// ボタンをbody要素に追加
		const button = document.createElement('button');

		function showStartAR( /*device*/) {


			if (sessionInit.domOverlay === undefined) {


				const overlay = document.createElement('div');
				overlay.classList.add('overlay_1');
				overlay.style.display = 'none';


				// //試し
				// //高さ指定
				// // overlay.style.height = '100px !important';			 //追加
				// overlay.style.cssText = 'height: 100px !important;';	// 他のスタイルも同時に設定可能



				// overlay.style.overflowY = 'hidden'; 	// スクロールを非表示にする
				document.body.appendChild(overlay);






				// svg要素
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('width', 38);
				svg.setAttribute('height', 38);
				svg.style.position = 'absolute';
				svg.style.right = '20px';
				svg.style.top = '20px';
				svg.addEventListener('click', function () {

					currentSession.end();

				});
				overlay.appendChild(svg);

				





				// ここに新しいbutton要素を追加
				const button_model1 = document.createElement('button');
				button_model1.classList.add('button_model1');
				button_model1.textContent = 'MODEL1(有効)';		// ボタンのテキストを設



				// ボタンにスタイルを適用
				button_model1.style.backgroundColor = 'white';
				button_model1.style.color = 'black';
				button_model1.style.padding = '10px 10px';
				button_model1.style.border = 'none';
				button_model1.style.borderRadius = '5px';
				button_model1.style.cursor = 'pointer';
				button_model1.style.position = 'absolute';
				button_model1.style.right = '10px';
				button_model1.style.bottom = '120px';		//(+60)

				// ボタンをoverlayに追加
				overlay.appendChild(button_model1);

				// // ボタンをbodyに追加
				// document.body.appendChild(button_model1);

				// ボタンクリックイベント
				button_model1.addEventListener('click', () => {
					//変数値を変更する
					if (ARButton.model1_display == 0) {
						ARButton.model1_display = 1;
						button_model1.textContent = 'MODEL1(有効)'; // ボタンのテキストを設定
						console.log("true ARButton.model1_display : ", ARButton.model1_display);

						// ARButton.model1_display の値が変更されたときにイベントを発火する
						model1_display_Event();
					}
					else {
						ARButton.model1_display = 0;
						console.log("else ARButton.model1_display : ", ARButton.model1_display);
						button_model1.textContent = 'MODEL1(無効)'; // ボタンのテキストを設定

						// ARButton.q の値が変更されたときにイベントを発火する
						model1_display_Event();
					}
				});

				// ARButton.q の値が変更されたときにイベントを発火する
				function model1_display_Event() {
					const m1_event = new Event('m1_event');
					document.dispatchEvent(m1_event);
				}







				// ここに新しいbutton要素を追加
				const button_model2 = document.createElement('button');
				button_model2.classList.add('button_model2');
				button_model2.textContent = 'MODEL2(有効)'; // ボタンのテキストを設定


				// ボタンにスタイルを適用
				button_model2.style.backgroundColor = 'white';
				button_model2.style.color = 'black';
				button_model2.style.padding = '10px 10px';
				button_model2.style.border = 'none';
				button_model2.style.borderRadius = '5px';
				button_model2.style.cursor = 'pointer';
				button_model2.style.position = 'absolute';
				button_model2.style.right = '10px';
				button_model2.style.bottom = '70px';	//(+60)




				// ボタンをoverlayに追加
				overlay.appendChild(button_model2);



				// ボタンクリックイベント
				button_model2.addEventListener('click', () => {
					//変数値を変更する
					if (ARButton.model2_display == 0) {
						ARButton.model2_display = 1;
						button_model2.textContent = 'MODEL2(有効)'; // ボタンのテキストを設定
						console.log("true ARButton.model2_display : ", ARButton.model2_display);

						// ARButton.model2_display の値が変更されたときにイベントを発火する
						fireARButtonQChangedEvent();
					}
					else {
						ARButton.model2_display = 0;
						console.log("else ARButton.model2_display : ", ARButton.model2_display);
						button_model2.textContent = 'MODEL2(無効)'; // ボタンのテキストを設定

						// ARButton.model2_display の値が変更されたときにイベントを発火する
						fireARButtonQChangedEvent();
					}
				});






				// ARButton.model2_display の値が変更されたときにイベントを発火する
				function fireARButtonQChangedEvent() {
					const arButtonQChangedEvent = new Event('arButtonQChanged');
					document.dispatchEvent(arButtonQChangedEvent);
				}








				const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
				path.setAttribute('d', 'M 12,12 L 28,28 M 28,12 12,28');
				path.setAttribute('stroke', '#fff');
				path.setAttribute('stroke-width', 2);
				svg.appendChild(path);

				if (sessionInit.optionalFeatures === undefined) {

					sessionInit.optionalFeatures = [];

				}

				sessionInit.optionalFeatures.push('dom-overlay');
				sessionInit.domOverlay = { root: overlay };

			}

			//

			let currentSession = null;

			async function onSessionStarted(session) {

				session.addEventListener('end', onSessionEnded);

				renderer.xr.setReferenceSpaceType('local');

				await renderer.xr.setSession(session);

				button.textContent = 'STOP AR';
				sessionInit.domOverlay.root.style.display = '';

				currentSession = session;

			}

			function onSessionEnded( /*event*/) {

				currentSession.removeEventListener('end', onSessionEnded);

				button.textContent = 'START AR';
				sessionInit.domOverlay.root.style.display = 'none';

				currentSession = null;
			}

			//

			button.style.display = '';

			button.style.cursor = 'pointer';
			button.style.left = 'calc(50% - 50px)';
			button.style.width = '100px';

			button.textContent = 'START AR';

			button.onmouseenter = function () {

				button.style.opacity = '1.0';

			};

			button.onmouseleave = function () {

				button.style.opacity = '0.5';

			};

			button.onclick = function () {

				if (currentSession === null) {

					navigator.xr.requestSession('immersive-ar', sessionInit).then(onSessionStarted);

				} else {

					currentSession.end();

				}

			};








		}

		function disableButton() {

			button.style.display = '';

			button.style.cursor = 'auto';
			button.style.left = 'calc(50% - 75px)';
			button.style.width = '150px';

			button.onmouseenter = null;
			button.onmouseleave = null;

			button.onclick = null;

		}

		function showARNotSupported() {

			disableButton();

			button.textContent = 'AR NOT SUPPORTED';

		}

		function showARNotAllowed(exception) {

			disableButton();

			console.warn('Exception when trying to call xr.isSessionSupported', exception);

			button.textContent = 'AR NOT ALLOWED';

		}

		function stylizeElement(element) {

			element.style.position = 'absolute';
			element.style.bottom = '20px';
			element.style.padding = '12px 6px';
			element.style.border = '1px solid #fff';
			element.style.borderRadius = '4px';
			element.style.background = 'rgba(0,0,0,0.1)';
			element.style.color = '#fff';
			element.style.font = 'normal 13px sans-serif';
			element.style.textAlign = 'center';
			element.style.opacity = '0.5';
			element.style.outline = 'none';
			element.style.zIndex = '999';

		}

		if ('xr' in navigator) {

			button.id = 'ARButton';
			button.style.display = 'none';

			stylizeElement(button);

			navigator.xr.isSessionSupported('immersive-ar').then(function (supported) {

				supported ? showStartAR() : showARNotSupported();


			}).catch(showARNotAllowed);

			return button;

		} else {

			const message = document.createElement('a');

			if (window.isSecureContext === false) {

				message.href = document.location.href.replace(/^http:/, 'https:');
				message.innerHTML = 'WEBXR NEEDS HTTPS'; // TODO Improve message

			} else {

				message.href = 'https://immersiveweb.dev/';
				message.innerHTML = 'WEBXR NOT AVAILABLE';

			}

			message.style.left = 'calc(50% - 90px)';
			message.style.width = '180px';
			message.style.textDecoration = 'none';

			stylizeElement(message);

			return message;

		}
	}




}




export { ARButton };