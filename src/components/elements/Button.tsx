/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Link from "next/link";
import React, { useState } from "react";
import Loader from "./Loader";
import Image, { StaticImageData } from "next/image";


interface btnProps {
  type?: String;
  text?: String;
  onBtnClick?: any;
  iconName?: String;
  imgPath?: StaticImageData;
  btnStyle?: String;
  imgStyle?: String;
  loading?: Boolean;
  btn_type?: String;
}

const Button = ({
  type,
  text,
  onBtnClick,
  iconName,
  imgPath,
  btnStyle,
  imgStyle,
  loading,
  btn_type,
}: btnProps) => {
  return (
    <>
      {type == "outline" ? (
        <button
          //type={btn_type}
          className={`border-2 flex items-center justify-center p-2 font-[500] gap-1 border-black text-black text-[13px] rounded-lg ${btnStyle}`}
          onClick={onBtnClick}
        >
          {loading === true ? (
            <Loader />
          ) : (
            <>
              {iconName ? (
                <span>{iconName}</span>
              ) : (
                <>
                  {imgPath && (
                    <Image
                      className={`${imgStyle}`}
                      width={24}
                      height={24}
                      src={imgPath}
                      alt=""
                    />
                  )}
                </>
              )}
              {text}
            </>
          )}
        </button>
      ) : (
        <button
          //type={btn_type}
          style={{background: 'linear-gradient(90deg, #22A1FE 0%, #FD18EF 100%)'}}
          className={`flex items-center justify-center gap-1 p-2 font-[500] text-center text-[13px] rounded-lg ${btnStyle}`}
          onClick={onBtnClick}
        >
          {loading === true ? (
            <Loader />
          ) : (
            <>
              {iconName ? (
                <span>{iconName}</span>
              ) : (
                <>
                  {imgPath && (
                    <Image src={imgPath} width={24} height={24} alt="" />
                  )}
                </>
              )}
              {text}
            </>
          )}
        </button>
      )}
    </>
  );
};

export default Button;
