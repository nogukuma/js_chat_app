// 送信者が誰か保存
let isSender = true;

// 送信ボタンの取得
let sendBtn = document.getElementById("sendBtn");

// 送信ボタンがクリックされたときの処理
sendBtn.addEventListener("click",function(){
    // 入力欄を取得
    let inputMessage = document.getElementById("inputMessage");

    // 入力値を取得
    let messageText = inputMessage.value;

    // 入力値が空かどうか調べる
    if (messageText == "") {
        // 空の場合，処理を中断
        return;
    }

    // メッセージ用のdiv作成
    let messageBox = createMessageBox();
    
    // メッセージの内容が書かれているp作成
    let messageContent = createMessageContent(messageText);
    
    // 作成したdiv(会話文)にpタグを子要素として追加
    messageBox.appendChild(messageContent);

    // チャット画面のdivを取得
    let room = document.getElementById("room");

    // チャット画面のdivに新規メッセージのdivを追加
    room.appendChild(messageBox);

    // 入力欄の入力値をリセット
    inputMessage.value="";

    // 送信者を変更する
    isSender = !isSender;
})


// メッセージ用のdiv作成関数
function createMessageBox() {
     // divを作成
     let messageBox = document.createElement("div");
    
     // 誰が送信者か確認
     if (isSender) {
         // 自分が送信者
         // 自分が送信するので，右側配置
         messageBox.classList.add("box-right");
 
     } else {
         // 相手が送信者
         // 相手が送信するので，左側配置
         messageBox.classList.add("box-left");
 
     }
     
     return messageBox;
}


// メッセージの内容のp作成関数
function createMessageContent(messageText) {
    // pタグ配置
    let messageContent = document.createElement("p");
    
    // 入力した文字をpタグに追加
    messageContent.textContent = messageText;

    // pタグに「message-box」クラスを追加
    messageContent.classList.add("message-box");

    if(isSender) {
        // 自分が送信者
        // 藤色に設定
        // pタグ「fuji」クラスを追加
        messageContent.classList.add("fuji");

    } else {
        // 相手が送信者
        // 白色に設定
        // pタグ「white」クラスを追加
        messageContent.classList.add("white")
    }
    
    return messageContent;
}