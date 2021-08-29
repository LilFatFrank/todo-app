import { Home, Category } from "..";

const Content = ({
  appClasses,
  addCategory,
  openCategory,
  categoriesToDoListMap,
  addToDo,
  removeToDo,
  ...props
}) => {
  return (
    <>
      {openCategory?.toLowerCase() === "home" ? (
        <Home appClasses={appClasses} addCategory={addCategory} />
      ) : (
        <Category
          appClasses={appClasses}
          openCategory={openCategory}
          categoriesToDoListMap={categoriesToDoListMap}
          addToDo={addToDo}
          removeToDo={removeToDo}
        />
      )}
    </>
  );
};

export default Content;
