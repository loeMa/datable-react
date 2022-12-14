/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import Arrow from './Arrow';
import Pagination from './Pagination';
import PropTypes from 'prop-types';
import 'datable-react/dist/index.css';


/**
 * Footer of the Table
 * @param {boolean} english - to set the language 
 * @param {Object} customFooter - style of the footer
 * @param {string} firstBackground - the color of the first background
 * @param {string} secondBackground - the color of the second color
 * @param {string} color - the color of the font
 * @returns { HTMLElement }
 */
const Footer = ({language, customFooter, firstBackground, secondBackground, color}) => {

    const {store} = useContext(StoreContext)

    return (
        <div className='dataTable__footer' style={customFooter}>
            <div className='dataTable__footer__entries'>
                {language? <p>Showing {store.indexStart[0]+1} to {store.indexEnd[0]< store.dataArr[0].length? store.indexEnd[0] : store.dataArr[0].length} of {store.dataArr[0].length} entries</p> 
                : <p>Affichage de {store.indexStart[0]+1} à {store.indexEnd[0]< store.dataArr[0].length? store.indexEnd[0] : store.dataArr[0].length} sur {store.dataArr[0].length} données</p>
                }
            </div>
            <div className='dataTable__footer__pagination'>
            { store.totalPage[0] > 1 && store.currentPage[0] > 1 ?
                    <Arrow classname='previous' onclick='previousData' title={language? "Previous" : "Précédent "} />
                    :
                    
                    <div/>
                }

                <Pagination language={language} firstBackground={firstBackground} secondBackground={secondBackground} color={color} />

                { store.currentPage[0] < store.totalPage[0] &&
                    <Arrow classname='nextBtn' onclick='nextData' title={language? "Next" : "Suivant " }  />
                }
            </div>
        </div>
    );
};

Footer.propTypes = {
    language: PropTypes.bool,
    customFooter: PropTypes.object,
    firstBackground: PropTypes.string,
    color: PropTypes.string,
    secondBackground: PropTypes.string,
}

export default Footer;