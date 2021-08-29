import { Category } from "@material-ui/icons";
import { TextField, Button, Typography, Container } from "@material-ui/core";
import clsx from "clsx";

const Home = ({ appClasses, addCategory, ...props }) => {
  return (
    <Container
      className={clsx(
        appClasses.container,
        appClasses.flex,
        appClasses.alignCenter,
        appClasses.justifyCenter,
        appClasses.flexColumn
      )}
      style={{ gap: "10px" }}
    >
      <div
        className={clsx(appClasses.flex, appClasses.alignCenter)}
        style={{ gap: "10px" }}
      >
        <img
          src={"assets/images/energi-logo.png"}
          alt={"energi-logo"}
          width={80}
        />
        <Typography variant={"h3"}>Energi</Typography>
      </div>
      <Typography variant={"h6"}>
        A simple to-do list app to organise your tasks efficiently.
      </Typography>
      <Typography variant={"body2"}>
        Start with adding a category. The category then shows up on the sidebar.
        <br />
        Add your to-do list depending on your category (urgent, important or for
        later).
        <br />
        You're free to create your category as well. Get started.
      </Typography>
      <div
        className={clsx(appClasses.flex, appClasses.alignCenter)}
        style={{ gap: "10px" }}
      >
        <TextField
          type={"text"}
          label={"Category"}
          placeholder={"e.g.: 'Not important'"}
          inputProps={{
            id: "add-category",
          }}
        />
        <Button
          variant={"contained"}
          color={"primary"}
          startIcon={<Category style={{ fill: "white" }} />}
          style={{ color: "white" }}
          onClick={() =>
            addCategory(document.getElementById("add-category").value)
          }
        >
          Add Category
        </Button>
      </div>
    </Container>
  );
};

export default Home;
