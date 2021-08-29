import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Drawer,
  makeStyles,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import clsx from "clsx";
import { RenderIcons } from "..";

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
          {[...categories].map((item, index) => (
            <ListItem
              button
              key={item}
              onClick={() => categorySelected(item)}
              className={classes.color}
            >
              <ListItemIcon>
                <RenderIcons label={item} />
              </ListItemIcon>
              <ListItemText primary={item} />
              {index !== 0 && item !== openCategory ? (
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
