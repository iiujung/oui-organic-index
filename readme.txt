切版頁面 名稱對照
https://www.notion.so/yurie888/ouiorganic-3af8889cde644af39c1ddf9b81bf45a0

css樣式 套用注意事項

會員專區頁面套用以下css

/* 頁面:會員專區登陸/註冊頁_問券調查
M-questionnaire.html------------ */

...

/* 頁面:會員專區登陸/註冊頁
M-notMemberotp.html
M-forgotPasswordResend.html
M-otpResend.html
M-forgotPasswordotp.html
M-notMemberResend.html
M-register.html
M-resetPassword.html
M-loginPassword.html
M-login.html
--------  */

...

/* 會員專區 頁面 */

...

log 10/28 show hide 樣式錯誤微調

before
--------
/* password eye icon styling */
label {
  position: relative;
  display: block;
}
.show,.hide {
  position: absolute;
  right: 16px;
  top: 38px;
  font-size: 28px;
}

after
---------
/* password eye icon styling */
label {
  position: relative;
  display: block;
}
.register .show,.register .hide {
  position: absolute;
  right: 16px;
  top: 38px;
  font-size: 28px;
}