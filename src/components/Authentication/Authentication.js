
import SignUp from '../Sign-up/SignUp';
import SignIn from '../SignIn/SignIn';
import './Authentication.styles.scss'
const Authentication =()=>{
    return(
        <div className='auth-container'>
          <SignIn/>
          <SignUp/>
        </div>
    )
}
export default Authentication;
