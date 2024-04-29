import { Component } from 'react' 
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state={ hasError:false}
    }

    static getDerivedStateFromError(error){
        return{hasError:true}
    }

    componentDidCatch(error,errorInfo){
        console.log(error,errorInfo);
    }

    render(){
        if(this.state.hasError){
            return(
                <div className='w-full flex justify-center'>

                <img src='https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1933.jpg?size=626&ext=jpg'/>
                </div>
            )
        }

        return this.props.children
    }
}

ErrorBoundary.propTypes={
    children:PropTypes.node.isRequired
}