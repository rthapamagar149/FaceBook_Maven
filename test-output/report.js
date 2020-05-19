$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/Register.feature");
formatter.feature({
  "name": "Register",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sucessful Login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user Launch Chrome Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinations.regsteps.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens urlh \"https://www.facebook.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinations.regsteps.user_opens_urlh_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user firstName  as \"rabin\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.regsteps.user_firstname_as_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user lastName as \"magar\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.regsteps.user_lastname_as_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user email as \"4695948688\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.regsteps.user_email_as_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user password as \"rabin12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.regsteps.user_password_as_something(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user birthMonth as \"Feb\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.regsteps.user_birthMonth_as(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidElementStateException: invalid element state\n  (Session info: chrome\u003d80.0.3987.100)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3V10EK2N\u0027, ip: \u0027192.168.127.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.100, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\WINDOWS\\TEMP\\scoped_dir2...}, goog:chromeOptions: {debuggerAddress: localhost:55656}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4166859c683a37a0493a909489da1a57\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.clear(RemoteWebElement.java:124)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.clear(Unknown Source)\r\n\tat pageObjects.regPage.setbirthMonth(regPage.java:54)\r\n\tat stepDefinations.regsteps.user_birthMonth_as(regsteps.java:48)\r\n\tat ✽.user birthMonth as \"Feb\"(file:///C:/Users/Rabin-PC/eclipse-workspace/CommerceCucumber/Facebook_Maven/./features/Register.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.regsteps.click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinations.regsteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});