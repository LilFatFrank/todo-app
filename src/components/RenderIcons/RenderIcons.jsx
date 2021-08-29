import {
  Home,
  Category as CategoryIcon,
  Warning as UrgentIcon,
  IndeterminateCheckBox as ImportantIcon,
  Stars as ForLaterIcon,
} from "@material-ui/icons";

const RenderIcons = ({ label, fill, ...props }) => {
  return label.toLowerCase() === "home" ? (
    <Home style={{ fill: fill || "white" }} />
  ) : label.toLowerCase() === "urgent" ? (
    <UrgentIcon style={{ fill: fill || "white" }} />
  ) : label.toLowerCase() === "important" ? (
    <ImportantIcon style={{ fill: fill || "white" }} />
  ) : label.toLowerCase() === "later" ? (
    <ForLaterIcon style={{ fill: fill || "white" }} />
  ) : (
    <CategoryIcon style={{ fill: fill || "white" }} />
  );
};

export default RenderIcons;
