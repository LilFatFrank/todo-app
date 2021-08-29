import {
  Warning as UrgentIcon,
  IndeterminateCheckBox as ImportantIcon,
  Stars as ForLaterIcon,
} from "@material-ui/icons";

export const DefaultCategories = [
  {
    label: "Urgent",
    icon: <UrgentIcon style={{ fill: "white" }} />,
  },
  {
    label: "Important",
    icon: <ImportantIcon style={{ fill: "white" }} />,
  },
  {
    label: "Later",
    icon: <ForLaterIcon style={{ fill: "white" }} />,
  },
];
