# Mission4 ブロックを並べよう！


## ブロックを並べよう！ @unplugged
<p>繰り返しを使って、お手本と同じ形にブロックを並べよう</p>
<n></n>
<img style="display: block; margin: auto;" height="50%" width="50%" src="https://vcode-esia.com/images_for_world_data/koube_yamate/mission4_1.gif">



## ゴール
<p>台座の上に、お手本と同じ形にブロックを並べよう！</p>
<br></br>
<p>・プログラムを実行したら、プレイヤーに**棒**と**骨**をそれぞれ１本渡す</p>
<p>・プログラムを実行したら、変数``||variables.position||``に``||positions.world(0, 0, 0)||``を入れておく</p>
<p>・棒を使ったら、変数``||variables.position||``に``||player.player world posiiton||``を入れる</p>
<p>・変数にplayer world positionを入れたときに、**Set!**とメッセージを送信する</p>
<p>・骨を使ったら、変数``||variables.position||``を範囲の始まりとして、**Block of Ironを並べる**→``||variables.position||``**に入った座標を次の位置に動かす**を繰り返してお手本と同じ形に並べる</p>
<br></br>
<p>次のページからの**ヒント**を参考にしてプログラムしよう！</p>
<br></br>
<img width="100%" src="https://vcode-esia.com/images_for_world_data/koube_yamate/mission4_1.gif">



## ヒント1: ボタンを押したときにプログラムを実行するには
<p>``||loops.on start||``にはめ込んだコードは、右下の**▶ボタン**を押した時に1度だけ実行されます。</p>
<img height="40%" width="40%" src="https://vcode-esia.com/images_for_world_data/school/1st/execute.gif">
<p>**1回だけ実行したい**ものには、``||loops.on start||``を使うようにしましょう。</p>



## ヒント2: ブロックやアイテムを渡すには
<p>``||mobs.give block or item||``を使うと、指定した相手にブロックやアイテムを好きな数だけ渡すことができます。</p>
<p>そのままだとブロックを選ぶことができ、``||blocks.item||``を代わりにはめ込むとアイテムを選べるようになります。</p>
<p>プレイヤーにブロックやアイテムを渡したいときは、対象を**yourself(@s)**にして使いましょう。</p>



## ヒント3: アイテムに特殊効果を与えるには
<p>``||player.on item used||``を使うと、**プレイヤーが指定したアイテムを使うたびにプログラムが実行されます**。</p>
<p>これを使えば、好きなアイテムに特殊効果を与えることができます！</p>



## ヒント4: 変数の作り方
<p>``||variables.make a variables...||``を押すと、好きな名前の変数を作ることができます。</p>
<img width="100%" src="https://vcode-esia.com/images_for_world_data/koube_yamate/mission3_2.gif">



## ヒント5: 変数に座標を入れる準備をする
<p>作った変数に座標を入れるには、はじめに「この変数には座標を入れます」と宣言をする必要があります！</p>
<p>下の手順で変数に座標を入れるための準備をしましょう。</p>
<p>1. 変数``||variables.position||``を作る。</p>
<p>2. ``||loops.on start||``に``||variables.set position to 0||``をはめ込み、0の部分に、``||positions.world(0, 0, 0)||``を入れる。</p>
<p>これで座標を入れた変数の準備ができました！</p>



## ヒント6: 変数に座標を入れる
<p>変数に、プレイヤーが今いる位置の座標を入れるには、``||variables.set ~ to 0||``と``||player.player world position||``を使います。</p>
<p>``||variables.set position to 0||``の**0**の部分に``||player.player world position||``をはめ込むと、変数にプレイヤーが今いる位置の座標を入れることができます。</p>
<br></br>
<img width="100%" src="https://vcode-esia.com/images_for_world_data/koube_yamate/mission3_4.png">



## ヒント7: 変数に入れた座標を使ってブロックを並べるには
<p>変数に入れた座標を使ってブロックを並べるには、``||positions.(~0, ~0, ~0) + (~0, ~0, ~0)||``と組み合わせて使います。</p>
<p>たとえば、``||variables.position||``に入った座標から、4ブロック東までブロックを並べたいときは、下のように``||variables.position||``と``||positions.(~0, ~0, ~0) + (~0, ~0, ~0)||``を組み合わせます。</p>
<br></br>
<img width="100%" src="https://vcode-esia.com/images_for_world_data/koube_yamate/mission4_2.png">



## ヒント8: 変数に入った座標を変えるには
<p>``||variables.set ~ to 0||``と``||positions.(~0, ~0, ~0) + (~0, ~0, ~0)||``、``||variables.position||``を組み合わせると、``||variables.position||``に入った座標の数字を変えることができます。</p>
<p>下の例では、``||variables.position||``に入った座標を、**東に1ブロック、南に2ブロック**分動かしています。</p>
<br></br>
<img width="100%" src="https://vcode-esia.com/images_for_world_data/koube_yamate/mission4_3.png">
<p>お手本の形のようにブロックを並べるには、1列分ブロックを並べた後、次にブロックを並べ始める位置を、どの位置にすれば良いか、下の赤いブロックの位置を参考にして考えてみましょう。</p>
<br></br>
<img width="100%" src="https://vcode-esia.com/images_for_world_data/koube_yamate/mission4_4.gif">



## ヒント9: メッセージを送信する
<p>``||player.say ~||``を使うと、プレイヤーにメッセージを送ることができます。</p>
<p>このコードが使われると、ゲーム画面の左側に指定したメッセージが表示されます。</p>
<br></br>
<img width="100%" src="https://vcode-esia.com/images_for_world_data/koube_yamate/mission3_7.png">



## ヒント10: 同じ動きを繰り返すには
<p>``||loops.repeat ~ times||``を使うと、このコードで挟んだ部分を、指定した回数だけ繰り返すことができます。</p>
<p>**ブロックを一列分並べる→次にブロックを並べる位置に変数**``||variables.position||``**に入った座標を変える**を何回繰り返せば、お手本と同じ形になるか考えてみましょう。</p>
<br></br>
<img width="100%" src="https://vcode-esia.com/images_for_world_data/koube_yamate/mission4_5.png">



## 実行しよう！
<p>プログラミングができあがったら、▶ボタンを押して実行しよう</p>
<br></br>
<img height="50%" width="50%" src="https://vcode-esia.com/images_for_world_data/school/1st/execute.gif">
<br></br>
<p>ゲーム画面にもどったら、白色のコンクリートブロックの上に立って、棒を手に持った状態で右クリックして使用して、変数に作り始めたい位置の座標を入れよう</p>
<p>座標が変数に入ったとき、「Set!」と表示されるのを確認しよう</p>
<p>次に、骨に持ち替えてもう一度右クリックして使って、建物をつくろう！</p>
<br></br>
<img width="100%" src="https://vcode-esia.com/images_for_world_data/koube_yamate/mission4_1.gif">
<br></br>
<p>お手本と同じ形にできたら、**Francisに話しかけよう**</p>