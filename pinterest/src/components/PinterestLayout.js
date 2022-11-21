import React from "react";
import Pin from "./Pin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
function PinterestLayout() {
    return (
        <div>
            <Header />
            <Link to='/post'>
                <div style={styles.pin_container}>
                    <Pin size='small' teste='sup' />
                    <Pin size='medium' teste='sup1' />
                    <Pin size='large' teste='sup2' />
                    <Pin size='small' teste='sup22' />
                    <Pin size='medium' teste='sup4' />
                    <Pin size='large' teste='sup5' />
                    <Pin size='small' teste='sup6' />
                    <Pin size='medium' teste='sup7' />
                    <Pin size='large' teste='sup8' />
                    <Pin size='small' teste='sup9' />
                    <Pin size='medium' teste='sup10' />
                    <Pin size='large' teste='sup11' />
                    <Pin size='small' teste='sup12' />
                    <Pin size='medium' teste='sup25' />
                    <Pin size='large' teste='sup14' />
                    <Pin size='small' teste='sup15' />
                    <Pin size='medium' teste='sup17' />
                    <Pin size='large' teste='sup19' />
                    <Pin size='small' teste='sup23' />
                    <Pin size='medium' teste='sup16' />
                    <Pin size='large' teste='sup21' />
                    <Pin size='medium' teste='sup24' />
                    <Pin size='medium' teste='sup20' />
                    <Pin size='medium' teste='sup28' />
                    <Pin size='small' teste='sup13' />
                    <Pin size='small' teste='sup26' />
                    
                </div>
            </Link>
        </div>
    )
}

const styles = {
    pin_container: {
        top: 40,
        margin: 0,
        padding: 0,
        width: '100vw',
        backgroundColor: 'white',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        justifyContent: 'center'

    }
}

export default PinterestLayout