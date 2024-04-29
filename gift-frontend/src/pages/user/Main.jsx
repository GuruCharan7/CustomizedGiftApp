import PropTypes from 'prop-types'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Main = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

Main.propTypes = {
    children: PropTypes.node.isRequired

}
export default Main