import * as React from "react";
import styles from "./BdSelect.module.css";
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { BdMenuItem } from "../../../Etc";
import { BdArrowIcon } from "../../DataDisplay/Icons/BdArrowIcon";
import { ReactNode } from "react";

interface BdSelectProps extends SelectProps {
  items: { value: any; text: any }[];
}

const BdSelectImpl = styled(Select)<BdSelectProps>(({ open, theme }) => ({
  "&:before": {
    border: "none !important",
  },
  "&:after": {
    border: "none !important",
  },
  ".MuiSelect-select": {
    background: "#ffffff !important",
  },
  ".MuiButtonBase-root": {
    display: "none",
  },
  ".MuiInputBase-input": {
    paddingRight: "0 !important",
    // transform:  'rotate(90deg)',
  },
  ".MuiIcon-root": {
    transform: open ? "rotate(270deg)" : "rotate(90deg)",
    transition: "all 0.8s linear",
    cursor: "pointer",
  },
  // 'MuiInput-input':{
  //     paddingLeft: 0
  // }
  // '.MuiSelect-icon': { //test
  //     dataTestId: IconsPaths.BdArrowIcon,
  //     color: 'red'
  // }
}));

export const BdSelect = (props: BdSelectProps) => {
  const { items, onChange } = props;
  const [value, setValue] = React.useState(items[0].value);
  const { children, ...rest } = props;

  const [open, setOpen] = React.useState(false);

  const onAdornmentClicked = () => {
    setOpen(!open);
  };

  const handleChange = (event: any, child?: Object) => {
    setOpen(false);
    setValue(event.target.value as string);
    if (onChange) {
      onChange(event?.target, null);
    }
  };

  return (
    <div className={styles.selectWrapper}>
      <BdSelectImpl
        {...rest}
        value={value}
        onChange={handleChange as any}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        variant={"standard"}
        MenuProps={{}}
        open={open}
        IconComponent={() => <BdArrowIcon onClick={onAdornmentClicked} />}
      >
        {items.map((item) => (
          <BdMenuItem value={item.value} disableRipple key={item.value}>
            {item.text}
          </BdMenuItem>
        ))}
      </BdSelectImpl>
    </div>
  );
};
