const { app, BrowserWindow } = require("electron");
console.log("야호");

//새 인스턴스로 createWindow()로드되는 함수를 추가
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};
//시작
app.whenReady().then(() => {
  createWindow();
  //브라우저 창이 열려있지 않으면 호출
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  }); 
});

//모든 창이 닫히면 앱 종료
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
