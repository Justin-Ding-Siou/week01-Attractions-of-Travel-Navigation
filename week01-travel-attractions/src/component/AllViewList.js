import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/Taipei?$select=Name%2CID%2CPicture%2CAddress&$top=30&$format=JSON";
//台北資料



function AllViewList() {
  //設定 useState
  const [data, setData] = useState([]);


  useEffect(() => {
    const axiosScenicSpot = async () => {
      const response = await axios(BASE_URL);
      setData(response.data);
      console.log(JSON.stringify(response.data))
    };
    axiosScenicSpot();
  }, [])


    return(
      <React.Fragment>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {data.map((data) => (     
              <div class="rounded overflow-hidden shadow-lg">
                <img class="w-full" src={data.Picture.PictureUrl1} alt=""/>
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{data.Name}</div>
                  <p class="text-gray-700 text-base">
                  {data.Address}                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">地址</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">電話</span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">地圖</span>
                </div>
              </div>              
          ))}
        </div>  
      </React.Fragment>
      
    );
}
  
export default AllViewList;
  