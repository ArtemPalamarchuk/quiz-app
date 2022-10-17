import {ReactNode} from "react";
import styles from "../../../styles";
import './Button.scss'

const {colors: {buttons}} = styles

type ButtonProps = {
  background?: string
  children: ReactNode
  onClick: () => void
}

export const Button = ({background = buttons.default, children, onClick}: ButtonProps) => {

  return (
    <button
      className="button"
      style={{background}}
      onClick={onClick}
    >
      {children}
    </button>
  );
};