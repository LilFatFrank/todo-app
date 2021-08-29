import "./App.css";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Sidebar, Content, Header } from "./components";
import "fontsource-roboto";
import { useStyles, theme } from "./utils/styles";

const App = () => {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCategory, setOpenCategory] = useState("Home");
  const [categoriesToDoListMap, setCategoriesToDoListMap] = useState({});

  useEffect(() => {
    if (categoriesToDoListMap && Object.keys(categoriesToDoListMap)?.length) {
      localStorage.setItem(
        "categoriesToDoListMap",
        JSON.stringify(categoriesToDoListMap)
      );
    }
  }, [categoriesToDoListMap]);

  useEffect(() => {
    setCategoriesToDoListMap({
      Home: [],
      ...JSON.parse(localStorage.getItem("categoriesToDoListMap")),
    });
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setOpenDrawer(open);
  };

  const addCategory = (label) => {
    if (
      label &&
      Object.keys(categoriesToDoListMap).findIndex(
        (i) => i.toLowerCase() === label.toLowerCase()
      ) < 0
    ) {
      setCategoriesToDoListMap({
        ...categoriesToDoListMap,
        [label]: [],
      });
    }
    document.getElementById("add-category").value = "";
  };

  const deleteCategory = (item) => {
    let state = { ...categoriesToDoListMap };
    delete state[item];
    setCategoriesToDoListMap(state);
  };

  const addToDo = (val) => {
    if (val) {
      setCategoriesToDoListMap({
        ...categoriesToDoListMap,
        [openCategory]: [val, ...categoriesToDoListMap[openCategory]],
      });
    }
    document.getElementById("add-todo").value = "";
  };

  const removeToDo = (val) => {
    categoriesToDoListMap[openCategory].splice(
      categoriesToDoListMap[openCategory].findIndex((toDo) => toDo === val),
      1
    );
    setCategoriesToDoListMap({ ...categoriesToDoListMap });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        appClasses={classes}
        categoriesList={Object.keys(categoriesToDoListMap)}
        toggleDrawer={toggleDrawer}
        addDefaultCategories={(arr) => addCategory(arr)}
      />
      <Sidebar
        open={openDrawer}
        toggleDrawer={toggleDrawer}
        categorySelected={(item) => setOpenCategory(item)}
        deleteCategory={deleteCategory}
        categories={Object.keys(categoriesToDoListMap)}
        openCategory={openCategory}
      />
      <Content
        appClasses={classes}
        addCategory={addCategory}
        openCategory={openCategory}
        categoriesToDoListMap={categoriesToDoListMap}
        addToDo={addToDo}
        removeToDo={removeToDo}
      />
    </ThemeProvider>
  );
};

export default App;
