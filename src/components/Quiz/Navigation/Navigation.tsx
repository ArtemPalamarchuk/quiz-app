import Timer from "./Timer/Timer";
import NavList from "./NavList/NavList";
import Progress from "./Progress/Progress";
import './Navigation.scss'

export const Navigation = () => {
  return (
    <div className={'navigation'}>
      <Timer/>
      <NavList/>
      <Progress/>
    </div>
  )
}

