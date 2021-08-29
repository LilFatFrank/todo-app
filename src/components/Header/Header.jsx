import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import clsx from "clsx";
import { DefaultCategories } from "../../utils/DefaultCategories";

const Header = ({
  toggleDrawer,
  categoriesList,
  appClasses,
  addDefaultCategories,
  ...props
}) => {
  return (
    <AppBar>
      <Toolbar className={appClasses.justifyBetween}>
        <div className={appClasses.flex}>
          <IconButton onClick={toggleDrawer(true)}>
            <Menu style={{ fill: "white" }} />
          </IconButton>
          <Typography variant={"h4"}>Energi</Typography>
        </div>
        <div className={clsx(appClasses.flex, appClasses.alignCenter)}>
          <Typography variant={"h6"}>Add categories:</Typography>
          {DefaultCategories.map((category, index) => (
            <Tooltip key={index} title={category.label}>
              <IconButton
                onClick={() => addDefaultCategories([...categoriesList, category])}
                disabled={
                  categoriesList.findIndex((c) => c.label === category.label) >
                  -1
                }
              >
                {category.icon}
              </IconButton>
            </Tooltip>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
