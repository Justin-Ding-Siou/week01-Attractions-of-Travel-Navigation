# week01-Attractions-of-Travel-Navigation
The F2E 前端精神時光屋專題

# 安裝套件

1. React-Project
2. Tailwinds
3. Axios
4. Pwa

建置專案
npx create-react-app week01-travel-attractions --template cra-template-pwa

安裝 fetch data  
npm install axios

安裝 skeleton-loading 
npm install react-loading-skeleton

安裝css 各個瀏覽器排版 
npm install save normalize.css

安裝 emotion  
npm install --save @emotion/core @emotion/styled

安裝路由 
npm install react-router-dom

安裝framer-motion 
npm install framer-motion

安裝tailwinds    
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

npm install @headlessui/react 解除安裝


11/06
1. 設定好版面，刪減導覽列，全台地圖 完成
2. 建立非同步用法，useContext or useEffect 完成
3. 增加過濾條件  完成
4. 增加分頁      
5. 將喜歡的改為我要的版面

npm i -E @material-tailwind/react

11/06
1. 建立首頁，串接三種 API
2. 做景點過濾條件和設定返回路由
3. 設定分頁和READMORE



11/07
1. 做其他兩點的測試
2. 轉為可上傳機制 
3. 優化且確定版權
3. 上傳檔案


1. 先做我要的形狀，其他的再說。完成，剩下兩個 (活動和美食)
2. 雙北旅遊網站，定義好了

11/08
1.
API 使用
活動
Name,Picture,EndTime,Address,WebsiteUrl,MapUrl
美食
Name,Picture,OpenTime,Address,Class,,WebsiteUrl
景點
Name,Picture,OpenTime,Keyword,WebsiteUrl,MapUrl

2.
景點 作詳細的說明

11/09 
上傳 GITHUB PAGE

11/10
繳交精神時光屋

0. 設定api 路由
API 使用
1. 活動
Name,Picture,EndTime,Address,WebsiteUrl,MapUrl
2. 美食
Name,Picture,OpenTime,Address,Class,,WebsiteUrl
3. 景點
Name,Picture,OpenTime,Keyword,WebsiteUrl,MapUrl

1.   三個 button , 景點為首頁，會切換路由
參考我的首頁
https://ithelp.ithome.com.tw/m/articles/10247575?sc=pt

2.  每次都會有 loading的效果
https://tailwindcss.com/docs/animation

3. 分頁效果
https://blog.logrocket.com/pagination-components-react-tailwind-css/

4.  那個分類底下才會有搜尋效果
到七點前完成✅
https://tailwindui.com/components/application-ui/elements/dropdowns

https://www.digitalocean.com/community/tutorials/react-react-select


等一切結束，寒假在做修改吧!
1. 增加readmore 資訊
2. scroll to down 的功能
3. 將增加三個連結，