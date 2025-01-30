// import React from 'react';
// import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
export const earningData = [
    {
        icon: 'MdOutlineSupervisorAccount',
        amount: '39,354',
        percentage: '-4%',
        title: 'Customers',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
        pcColor: 'red-600',
    },
    {
        icon: 'BsBoxSeam',
        amount: '4,396',
        percentage: '+23%',
        title: 'Products',
        iconColor: 'rgb(255, 244, 229)',
        iconBg: 'rgb(254, 201, 15)',
        pcColor: 'green-400',
    },
    {
        icon: 'FiBarChart',
        amount: '423,39',
        percentage: '+38%',
        title: 'Sales',
        iconColor: 'rgb(228, 106, 118)',
        iconBg: 'rgb(255, 244, 229)',
        pcColor: 'green-500',
    },
    {
        icon: 'HiOutlineRefresh',
        amount: '39,354',
        percentage: '-12%',
        title: 'Refunds',
        iconColor: 'rgb(0, 194, 146)',
        iconBg: 'rgb(235, 250, 242)',
        pcColor: 'red-600',
    },
];

export const SparklineAreaData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },

];

export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
};

export const LinePrimaryYAxis = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
};

export const lineChartData = [
    [
        { x: new Date(2005, 0, 1), y: 21 },
        { x: new Date(2006, 0, 1), y: 24 },
        { x: new Date(2007, 0, 1), y: 36 },
        { x: new Date(2008, 0, 1), y: 38 },
        { x: new Date(2009, 0, 1), y: 54 },
        { x: new Date(2010, 0, 1), y: 57 },
        { x: new Date(2011, 0, 1), y: 70 },
    ],
    [
        { x: new Date(2005, 0, 1), y: 28 },
        { x: new Date(2006, 0, 1), y: 44 },
        { x: new Date(2007, 0, 1), y: 48 },
        { x: new Date(2008, 0, 1), y: 50 },
        { x: new Date(2009, 0, 1), y: 66 },
        { x: new Date(2010, 0, 1), y: 78 },
        { x: new Date(2011, 0, 1), y: 84 },
    ],

    [
        { x: new Date(2005, 0, 1), y: 10 },
        { x: new Date(2006, 0, 1), y: 20 },
        { x: new Date(2007, 0, 1), y: 30 },
        { x: new Date(2008, 0, 1), y: 39 },
        { x: new Date(2009, 0, 1), y: 50 },
        { x: new Date(2010, 0, 1), y: 70 },
        { x: new Date(2011, 0, 1), y: 100 },
    ],
];

export const lineCustomSeries = [
    {
        dataSource: lineChartData[0],
        xName: 'x',
        yName: 'y',
        name: 'Germany',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'
    },

    {
        dataSource: lineChartData[1],
        xName: 'x',
        yName: 'y',
        name: 'England',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'
    },

    {
        dataSource: lineChartData[2],
        xName: 'x',
        yName: 'y',
        name: 'India',
        width: '2',
        marker: { visible: true, width: 10, height: 10 },
        type: 'Line'
    },

];

export const stackedChartData = [
    [
        { x: 'Jan', y: 111.1 },
        { x: 'Feb', y: 127.3 },
        { x: 'Mar', y: 143.4 },
        { x: 'Apr', y: 159.9 },
        { x: 'May', y: 159.9 },
        { x: 'Jun', y: 159.9 },
        { x: 'July', y: 159.9 },
    ],
    [
        { x: 'Jan', y: 111.1 },
        { x: 'Feb', y: 127.3 },
        { x: 'Mar', y: 143.4 },
        { x: 'Apr', y: 159.9 },
        { x: 'May', y: 159.9 },
        { x: 'Jun', y: 159.9 },
        { x: 'July', y: 159.9 },
    ],
];

export const stackedCustomSeries = [

    {
        dataSource: stackedChartData[0],
        xName: 'x',
        yName: 'y',
        name: 'Budget',
        type: 'StackingColumn',
        background: 'blue',

    },

    {
        dataSource: stackedChartData[1],
        xName: 'x',
        yName: 'y',
        name: 'Expense',
        type: 'StackingColumn',
        background: 'red',

    },

];

export const stackedPrimaryXAxis = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: 'Rotate45',
    valueType: 'Category',
};

export const stackedPrimaryYAxis = {
    lineStyle: { width: 0 },
    minimum: 100,
    maximum: 400,
    interval: 100,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
};