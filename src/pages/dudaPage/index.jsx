import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import Comments from '../../components/Comments';

const DudaPage = props => {
    const { id } = useParams();

    return (
        <div>
            <Comments />
        </div>
    )
}

DudaPage.propTypes = {

}

export default DudaPage
