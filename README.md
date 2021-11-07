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


<div class="bg-white">
          <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">123456789</h2>
              <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div class="group relative">
                  <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                    <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" class="absolute inset-0"></span>
                          Basic Tee
                        </a>
                      </h3>
                      <p class="mt-1 text-sm text-gray-500">Black</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$35</p>
                  </div>
                </div>
              </div>
            </div>
      </div>


function Home() {
    const [data, setData] = useState([]);

    useEffect(async () => { setData(await getTimeTable()) }, [])

    return (
        <table>
            <thead>
                <tr>
                    <th>站牌</th>
                    <th>時間</th>
                </tr>
            </thead>
            <tbody>
                {data.map((s) => (
                    <tr>
                        <td>{s.StopName.Zh_tw}</td>
                        <td>{s.NextBusTime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}