import { authService } from 'fbase';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const Auth = () => {

    const onSocialClick = async (event) => {
        const {
            target: {name},
        } = event;
        let provider;
        if( name === "google") {
            provider = new GoogleAuthProvider();
        } else if (name === "github") {
            provider = new GithubAuthProvider();
        }
        const data = await signInWithPopup(authService, provider);
    }

    return (
        <div>
            <div>
                <button onClick={onSocialClick} name="google">
                    Continue with Google
                    </button>
                <button onClick={onSocialClick} name="github">
                    Continue with Github
                </button>
            </div>
        </div>
    )
};
export default Auth;