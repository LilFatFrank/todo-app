import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Drawer,
  makeStyles,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Home, Delete } from "@material-ui/icons";
import clsx from "clsx";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  background: {
    background: "#0bc98d",
  },
  color: {
    color: "#fff",
  },
});

const Sidebar = ({
  open,
  toggleDrawer,
  categorySelected,
  categories,
  deleteCategory,
  openCategory,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={toggleDrawer(false)}
      classes={{ paper: classes.background }}
    >
      <div
        className={clsx(classes.list)}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {[
            { label: "Home", icon: <Home style={{ color: "white" }} /> },
            ...categories,
          ].map((item, index) => (
            <ListItem
              button
              key={item.label}
              onClick={() => categorySelected(item)}
              className={classes.color}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
              {index !== 0 && item.label !== openCategory ? (
                <ListItemSecondaryAction>
                  <ListItemIcon
                    onClick={() => deleteCategory(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <Delete style={{ color: "white" }} />
                  </ListItemIcon>
                </ListItemSecondaryAction>
              ) : null}
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
