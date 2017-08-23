import React from 'react'

const styles = {
    ApartmentItemContainer: {
        border: '1px solid lightgray', 
        width: '250px', 
        height: '340px', 
        float: 'left', 
        margin: '5px'
    },
    ApartmentImage: {
        height: '170px', 
        width: '250px'
    },
    ApartmentInfoContainer: {
        padding: '18px'
    },
    ApartmentTitle: {
        fontSize: '12px', 
        fontWeight: 'bold'
    },
    ApartmentLocation: {
        fontSize: '10px', 
        color: '#8c8c8c'
    },
    ApartmentInfoContainer2: {
        float: 'left', 
        fontSize: '12px', 
        height: '100%', 
        width: '100%'
    },
    ApartmentPrice: {
        fontSize: '11px', 
        float: 'left', 
        fontWeight: 'bold'
    },
    ApartmentSpace: {
        fontSize: '11px', 
        float: 'right', 
        paddingLeft: '10px'
    },
    ApartmentRooms: {
        fontSize: '11px', 
        float: 'right', 
        borderRight: '1px solid lightgray', 
        paddingRight: '10px'
    }
}

const ApartmentItem = (props) => {
    return (
        <div style={styles.ApartmentItemContainer}>
            <img style={styles.ApartmentImage} src={props.image} />
            <div style={styles.ApartmentInfoContainer}>
                <p style={styles.ApartmentTitle}>{props.title}</p>
                <p style={styles.ApartmentLocation}>{`${props.address.number} ${props.address.street} / ${props.address.city}`}</p>
                <div style={styles.ApartmentInfoContainer2}>
                    <p style={styles.ApartmentPrice}>{props.price} €</p>
                    <p style={styles.ApartmentSpace}>ab {Math.round(props.space)} m²</p>
                    <p style={styles.ApartmentRooms}>{props.numberOfRooms} Zimmer</p>
                </div>
            </div>
        </div>
    )
}

export default ApartmentItem