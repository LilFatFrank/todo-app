import clsx from "clsx";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Add, AssignmentLate, Delete } from "@material-ui/icons";

const Category = ({
  appClasses,
  openCategory,
  categoriesToDoListMap,
  addToDo,
  removeToDo,
  ...props
}) => {
  return (
    <Container
      className={clsx(
        appClasses.container,
        appClasses.flex,
        appClasses.flexColumn
      )}
      style={{ gap: "10px", paddingRight: "90px", paddingLeft: "90px" }}
    >
      <div className={clsx(appClasses.flex, appClasses.justifyBetween)}>
        <div>
          <Typography variant={"h3"}>{openCategory}</Typography>
        </div>
        <div
          className={clsx(appClasses.flex, appClasses.alignCenter)}
          style={{ gap: "10px" }}
        >
          <TextField
            type={"text"}
            label={"To-Do"}
            placeholder={"e.g.: 'Take the trash out'"}
            inputProps={{
              id: "add-todo",
            }}
          />
          <Button
            variant={"contained"}
            color={"primary"}
            startIcon={<Add style={{ fill: "white" }} />}
            style={{ color: "white" }}
            onClick={() => addToDo(document.getElementById("add-todo").value)}
          >
            Add To-Do
          </Button>
        </div>
      </div>
      <div>
        <Typography variant={"h6"}>My to-do list:</Typography>
        <Typography variant={"body2"}>
          The list is sorted with most recent todo at the top
        </Typography>
      </div>
      {categoriesToDoListMap[openCategory]?.length ? (
        <List>
          {categoriesToDoListMap[openCategory]?.map((toDo, index) => (
            <ListItem key={`${toDo}-${index}`}>
              <ListItemIcon>
                <AssignmentLate style={{ fill: "white" }} />
              </ListItemIcon>
              <ListItemText primary={toDo} />
              <ListItemSecondaryAction>
                <ListItemIcon
                  onClick={() => removeToDo(toDo)}
                  style={{ cursor: "pointer" }}
                >
                  <Delete style={{ color: "white" }} />
                </ListItemIcon>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Container>
  );
};

export default Category;
