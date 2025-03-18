import NavBar from '../components/navBar'
import Content from 'components/content'
import Steps from 'components/steps'
import ContactFeatures from 'components/contactFeatures'

export default function Group() {
    return (
        <div>
            <NavBar />
            <Content /> 
            <Steps  /> 
            <ContactFeatures />
        </div>
    )
}