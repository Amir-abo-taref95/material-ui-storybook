/* eslint-disable */
import {BdTablePagination} from './BdTablePagination';
import {BdAutocomplete} from "../Inputs/Autocomplete";
import React from "react";
import {BdButton} from "../Inputs/BdButton";
import {ComponentMeta, ComponentStory} from "@storybook/react";




export default {
    title: "Data Display/Table/Pagination",
    component: BdTablePagination,
} as ComponentMeta<typeof BdTablePagination>;

const Template: ComponentStory<typeof BdTablePagination> = (args) => (
    <BdTablePagination {...args} />
);

const onPageChanged = (forward: boolean) => {
   // console.log(forward)
}

const onRowsCountChange = (event: any) => {
  //  console.log(event)
}

export const Regular = Template.bind({});
Regular.args = {
    perPageOptions: [{
        value: 10,
        text: 10
    },{
        value: 16,
        text: 16
    },{
        value: 20,
        text: 20
    },{
        value: 24,
        text: 24
    },{
        value: '*',
        text: "הכל"
    }],
    from: 1,
    to: 10,
    totalRows: 120,
    onPageChanged,
    onRowsCountChange: onRowsCountChange as any
};


