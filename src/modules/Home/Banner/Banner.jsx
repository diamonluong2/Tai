import React, { useState, useEffect } from "react";
import { apiGetBanners } from "../../../apis/movieAPI";

function Banner() {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);

  const getBanners = async () => {
    try {
      const data = await apiGetBanners();
      setBanners(data.content);
    } catch (error) {
      setError(error.response?.data?.content);
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  if (error) return null;

  // carousel: slick, swiper
  return (
    <div style={{ display: "flex" }}>
      {banners.map((item) => {
        return <img height={300} src={item.hinhAnh} alt={item.maBanner} />;
      })}
    </div>
  );
}

export default Banner;
