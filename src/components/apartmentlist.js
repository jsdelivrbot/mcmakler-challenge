import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getVacantApartments } from '../actions'
import ApartmentItem from './apartmentitem'

const styles = {
    ApartmentListContainer: {
        width: '800px'
    }
}

class ApartmentList extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount() {
        this.props.getVacantApartments()
    }

    render() {
        return (
            <div style={styles.ApartmentListContainer}>
                {this.props.loading && <p>Loading...</p>}
                {this.props.vacantApartments && this.props.vacantApartments.map((apartment) => {
                    return (
                        <ApartmentItem
                            image={apartment.advertisementAssets[0].advertisementThumbnails.inventory_m.url}
                            title={apartment.title}
                            address={{
                                number: apartment.realestateSummary.address.number,
                                street: apartment.realestateSummary.address.street,
                                city: apartment.realestateSummary.address.city,
                            }}
                            price={apartment.advertisementPrice.baseRent}
                            numberOfRooms={apartment.realestateSummary.numberOfRooms}
                            space={apartment.realestateSummary.space}
                        />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    vacantApartments: state.apartment.vacantApartments,
    loading: state.apartment.loading
})

const mapDispatchToProps = {
    getVacantApartments
}

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentList)