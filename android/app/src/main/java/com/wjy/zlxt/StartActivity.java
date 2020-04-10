/*
 * @Author: wjy-mac
 * @Date: 2020-04-06 17:08:23
 * @LastEditors: wjy-mac
 * @LastEditTime: 2020-04-06 22:29:25
 * @Description: file content
 */
package com.wjy.zlxt;

import android.app.Activity;
import android.content.Intent;
import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Bundle;
import android.os.Handler;
import android.view.Window;
import android.view.WindowManager;
import android.widget.VideoView;

public class StartActivity extends Activity {

  StartActivity inst = null;

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    inst = this;
    // Initializes the Bridge
//    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
//      // Additional plugins you've installed go here
//      // Ex: add(TotallyAwesomePlugin.class);
//    }});
    // 全屏显示
    requestWindowFeature(Window.FEATURE_NO_TITLE);
    getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
            WindowManager.LayoutParams.FLAG_FULLSCREEN);
    setContentView(R.layout.activity_main);
    final VideoView vv = (VideoView) this.findViewById(R.id.videoView);
    final String uri = "android.resource://" + getPackageName() + "/" + R.raw.video;
    vv.setVideoURI(Uri.parse(uri));
    vv.start();
    vv.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
      @Override
      public void onPrepared(MediaPlayer mp) {
        mp.start();
        mp.setLooping(false);
      }
    });

//    定时播放跳转，时间十秒
    new Handler().postDelayed(new Runnable() {
      @Override
      public void run() {
        Intent intent = new Intent(StartActivity.this,MainActivity.class);
        startActivity(intent);
        inst.finish();
      }
    },10000);

//    视频播放完成后执行跳转
//    vv.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
//      @Override
//      public void onCompletion(MediaPlayer mp) {
//        Intent intent = new Intent(StartActivity.this,MainActivity.class);
//        startActivity(intent);
//        inst.finish();
//      }
//    });
    /*主要代码结束位置*/
  }
}
