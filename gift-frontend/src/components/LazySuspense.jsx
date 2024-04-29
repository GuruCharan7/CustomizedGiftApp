import { Suspense } from "react"
import PropTypes from 'prop-types'
// import '../assets/css/LazySuspense.css'
import Loader from "./Loader"
import ErrorBoundary from "./ErrorBoundary"

const LazySuspense = ({ component: Component, ...rest }) => {
  return (
    <div className="suspense">
      <Suspense fallback={<Loader />}>
        <ErrorBoundary>
          <Component {...rest} />
        </ErrorBoundary>
      </Suspense>
    </div>
  )
}

LazySuspense.propTypes = {
  component: PropTypes.element.isRequired
}
export default LazySuspense