var GUI;
var menu;
var exitUI;

function dip2px(dips){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);

            var menuBtn = new android.widget.Button(ctx);
            menuBtn.setText("HELP");
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    mainMenu();
                }
            }));
            layout.addView(menuBtn);

            GUI = new android.widget.PopupWindow(layout, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
            GUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
        }catch(err){
            print("An error occured: " + err);
        }
    }}));
}

function mainMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var menuLayout = new android.widget.LinearLayout(ctx);
            var menuScroll = new android.widget.ScrollView(ctx);
            var menuLayout1 = new android.widget.LinearLayout(ctx);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);

            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);
            
            var general = new android.widget.TextView(ctx);
            general.setTextSize("25");
            general.setText("General");
            general.setTextColor(android.graphics.Color.RED);
            general.setGravity(android.view.Gravity.CENTER);
            menuLayout.addView(general);

            menu = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
            menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("An error occured: " + error);
        }
    }}));
}

function exit(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var xLayout = new android.widget.LinearLayout(ctx);

            var xButton = new android.widget.Button(ctx);
            xButton.setText("x");
            xButton.setTextColor(android.graphics.Color.WHITE);
            xButton.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
                    exitUI.dismiss();
                    menu.dismiss();
                }
            }));
            xLayout.addView(xButton);

            exitUI = new android.widget.PopupWindow(xLayout, dip2px(40), dip2px(40));
            exitUI.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
            exitUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(exception){
            print(exception);
        }
    }}));
}
