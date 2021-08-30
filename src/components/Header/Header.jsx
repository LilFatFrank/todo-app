import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import clsx from "clsx";
import RenderIcons from "../RenderIcons/RenderIcons";

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
          {["Urgent", "Important", "Later"].map((category, index) => (
            <IconButton
              onClick={() => addDefaultCategories(category)}
              disabled={
                categoriesList.findIndex(
                  (c) => c.toLowerCase() === category.toLowerCase()
                ) > -1
              }
              key={`${category}-${index}`}
            >
              <RenderIcons
                label={category}
                fill={
                  categoriesList.findIndex(
                    (c) => c.toLowerCase() === category.toLowerCase()
                  ) > -1
                    ? "#0b2533"
                    : ""
                }
              />
            </IconButton>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
