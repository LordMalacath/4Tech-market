import GoogleIcon from '@mui/icons-material/Google';
import { signInWithGoogle } from 'api/firebase/signInWithGoogle';
import { socialGoogleCustomStyle } from './MUIcustomStyles';


export default function SocialLogin() {

    const handleClick = () => {
        signInWithGoogle();
    }

    return (
        <div className="socialLogin">
            <div className='socialLogin__google' onClick={handleClick}>
                <span>Authenticate with</span>
                <GoogleIcon sx={socialGoogleCustomStyle} />
            </div>
            <div className='socialLogin__google'>
                <span>Authenticate with</span>
                <GoogleIcon sx={socialGoogleCustomStyle} />
            </div>
            <div className='socialLogin__google'>
                <span>Authenticate with</span>
                <GoogleIcon sx={socialGoogleCustomStyle} />
            </div>
        </div>
    )
};