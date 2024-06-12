import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to=""
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="events"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="eventId"
            >
              Event Detail
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="new"
            >
              New Event
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              to="edit"
            >
              Edit Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
