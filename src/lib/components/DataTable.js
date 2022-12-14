/* eslint-disable prettier/prettier *//* eslint-disable no-unneeded-ternary */

import React from 'react';
import 'datable-react/dist/index.css';
import {StoreProvider } from '../utils/storeContext';
import PropTypes from 'prop-types'
import Footer from './Footer';
import Header from './Header';
import Table from './Table';



/**
 * table's labels and data 
 * @param {Object[]} labels - column title of the table
 * @param {string} labels.text - the text title of the column
 * @param {string} labels.value - the value of the column
 * @param {boolean} language -to set in french(false) or english(true)
 * @param {Object[]} data - all data for rows in the table
 * @param {string} firstBackground - the color of the first background
 * @param {string} secondBackground - the color of the second color
 * @param {string} color - the color of the font
 * @param {string} arrowColor - the color of arrows of sorting data
 * @param {Object} customDataTable-style of the data Table
 * @returns { HTMLElement }
 */
const DataTable = ({labels, language, data, firstBackground, secondBackground, color, arrowColor, customDataTable}) => {

    // const {store} = useContext(StoreContext)

    const defaultBackgroundfirst = '#5e5d5c';
    const defaultBackgroundSecond = '#e9e9ed';
    const defaultColor = 'white';
    const defaultArrowColor = '#75797a';
    

    return (
        <StoreProvider data={data}>
            <div className='dataTable__wrapper' style={customDataTable}>
                <Header labels={labels} data={data} language={language? language : false} />
                <Table labels={labels} 
                firstBackground={firstBackground? firstBackground : defaultBackgroundfirst} 
                color={color? color : defaultColor} 
                secondBackground={secondBackground? secondBackground : defaultBackgroundSecond}
                arrowColor={arrowColor? arrowColor : defaultArrowColor} 
                />
                <Footer language={language? language : false} firstBackground={firstBackground? firstBackground : defaultBackgroundfirst} secondBackground={secondBackground? secondBackground : defaultBackgroundSecond} color={color? color : defaultColor} />
            </div>
        </StoreProvider>
    );
};

DataTable.propTypes = {
    labels: PropTypes.array, 
    data: PropTypes.array,
    language: PropTypes.bool,
    firstBackground: PropTypes.string,
    secondBackground: PropTypes.string,
    color: PropTypes.string,
    arrowColor: PropTypes.string,
    customDataTable: PropTypes.object,
}

export default DataTable;