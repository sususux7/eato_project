function getLocation() {
    const output = document.getElementById("output");
  
    if (!navigator.geolocation) {
      output.textContent = "⚠️ 你的瀏覽器不支援定位功能。";
      return;
    }
  
    output.textContent = "定位中...";
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        output.innerHTML = `✅ 你的位置：<br>緯度：${lat}<br>經度：${lng}`;
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            output.textContent = "❌ 使用者拒絕定位請求。";
            break;
          case error.POSITION_UNAVAILABLE:
            output.textContent = "❌ 位置資訊無法取得。";
            break;
          case error.TIMEOUT:
            output.textContent = "❌ 取得位置逾時。";
            break;
          default:
            output.textContent = "❌ 發生未知錯誤。";
            break;
        }
      }
    );
  }
  