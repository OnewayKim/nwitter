import { authService, dbService } from "fbase";
import { updateProfile } from "firebase/auth";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Profile = ({ userObj, refreshUser }) => {
    const navigate = useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut();
        navigate('/');
    };

    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setNewDisplayName(value);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await updateProfile(authService.currentUser, {displayName: newDisplayName});
            refreshUser();
        }
        
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange}
                    type="text" 
                    placeholder="Display name"
                    value={newDisplayName} 
                />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    )
}
export default Profile;