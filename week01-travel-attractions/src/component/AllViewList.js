import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot";




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
          {data.map((data) => (
              <tr>
                  <img src={data.Picture.PictureUrl1} alt=""/>
                  <td>{data.Name}</td>
                  <td>{data.OpenTime}</td>
              </tr>                    
          ))}
      </React.Fragment>
      
    );
}
  
export default AllViewList;
  