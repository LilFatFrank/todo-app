import "./App.css";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Category as CategoryIcon } from "@material-ui/icons";
import { Sidebar, Content, Header } from "./components";
import "fontsource-roboto";
import { useStyles, theme } from "./utils/styles";

const App = () => {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCategory, setOpenCategory] = useState("Home");
  const [categoriesList, setCategoriesList] = useState([]);
  const [categoriesToDoListMap, setCategoriesToDoListMap] = useState({});

  useEffect(() => console.log(localStorage?.energiToDo), [localStorage]);

  useEffect(() => {
    if (categoriesList || setCategoriesToDoListMap)
      localStorage.setItem("energiToDo", {
        categoriesList: categoriesList,
        categoriesToDoListMap: categoriesToDoListMap,
      });
  }, [categoriesList, categoriesToDoListMap]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setOpenDrawer(open);
  };

  const addCategory = (label) => {
    if (label && categoriesList.findIndex((i) => i.label === label) < 0) {
      setCategoriesList([
        {
          label: label,
          icon: <CategoryIcon style={{ fill: "white" }} />,
        },
        ...categoriesList,
      ]);
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
    categoriesList.splice(
      categoriesList.findIndex((i) => i.label === item.label),
      1
    );
    setCategoriesList(categoriesList);
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
        categoriesList={categoriesList}
        toggleDrawer={toggleDrawer}
        addDefaultCategories={(arr) => setCategoriesList(arr)}
      />
      <Sidebar
        open={openDrawer}
        toggleDrawer={toggleDrawer}
        categorySelected={(item) => setOpenCategory(item.label)}
        deleteCategory={deleteCategory}
        categories={categoriesList}
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
