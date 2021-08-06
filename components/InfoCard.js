import React from "react";
import Image from "next/image";
import { Rate } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { Star } from "@material-ui/icons";

function InfoCard({
  img,
  location,
  description,
  title,
  star,
  price,
  total,
  long,
  lat,
}) {
  return (
    <div className={"flex items-start my-3 p-3 pr-16"}>
      <div className={"relative h-24, w-40 md:h-52 md:w-80 flex-shrink-8 mx-5"}>
        <Image
          src={img}
          layout={"fill"}
          objectFit={"cover"}
          className={"rounded-xl"}
        />
      </div>

      <div className={"flex flex-col flex-grow"}>
        <div className={"flex justify-between"}>
          <p>{location}</p>
          <Rate
            character={<HeartOutlined />}
            count={1}
            style={{ color: "#fd5b61" }}
          />
        </div>

        <h4 className={"text-xl"}>{title}</h4>

        <div className={"border-b w-10 pt-2"} />

        <p className={"pt-2 text-sm text-gray-500 flex-grow"}>{description}</p>

        <div className={"flex justify-between items-start mt-10"}>
          <p className={"flex items-center"}>
            <Star className={"h-5 text-red-400 mx-1 -mt-0.5"} />
            {star}
          </p>

          <div>
            <p className={"text-lg lg:text-2xl font-semibold pb-2"}>{price}</p>
            <p className={"text-right font-extralight"}>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
