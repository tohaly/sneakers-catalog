import React, {useLayoutEffect, useRef, useState} from 'react';
import classes from './AppImage.module.css';
import {ReactComponent as LoaderIcon} from "../../images/loader.svg";
import classNamesBind from "classnames/bind";

interface IProps {
  src: string;
  className: string
  classNameLoaderWrapper: string
}

const cx = classNamesBind.bind(classes)

export const AppImage = ({src, className, classNameLoaderWrapper}: IProps) => {
  const [isLoad, setIsLoad] = useState(true)
  const ref = useRef<HTMLImageElement>()


  useLayoutEffect(() => {
    ref.current = new Image()
    ref.current.src = src
    console.log(ref.current?.width)
    ref.current.onload = () => {
      setTimeout(() => {
        setIsLoad(false)
      }, 500)
    }
    ref.current.onerror = () => {
      setIsLoad(false)
    }
  }, [src])

  if(isLoad) {
    return (
      <div className={cx('loaderWrapper', {[classNameLoaderWrapper]: classNameLoaderWrapper})}>
        <LoaderIcon className={classes.loader} />
      </div>
    )
  }

  return  <img className={cx('image', {[className]: className})} src={src} alt={'sneaker'} />
};
