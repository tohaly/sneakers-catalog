import React from "react";
import style from './SomeError.module.css';

interface IProps {
  text: string
}

export const SomeError = ({ text }: IProps) => {
  return (
    <div className={ style.error }>
      <h2 className={ style.title }>
        { text }
      </h2>
    </div>
  );
};
