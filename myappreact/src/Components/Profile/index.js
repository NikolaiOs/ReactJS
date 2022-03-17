import { useContext } from "react";
import { useDispatch, connect } from "react-redux";
import { changeCheckBox, changeName, changeShowName } from "../../store/profile/actions";
import { ThemeContext } from "../../utils/ThemeContext";
import { FormMui } from "../FormMui";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { logout } from "../../services/firebase";

export const Profile = () => {
    const { setMessageColor } = useContext(ThemeContext);

    const dispatch = useDispatch();

    const handleChangeShowName = () => {
        dispatch(changeShowName);
    };

    const handleChangeCheckBox = () => {
        dispatch(changeCheckBox);
    };

    const handleClick = () => {
        setMessageColor((prevColor) => (prevColor === 'forestgreen' ? 'blue' : 'forestgreen') );
    };

    const handleChangeName =(text) => {
        dispatch(changeName(text));
    };

    return (
        <>
            <h3>Profile</h3>
            <div>
                <button onClick={handleClick} >Change theme</button>
            </div>
            <div>
                <input type="checkbox" onClick={handleChangeCheckBox} />

                <button onClick={handleChangeShowName} >Change show name</button>
            </div>
            <FormMui onSubmit={handleChangeName} />
        </>
    );
};


export const ProfileToConnect = ({ showName, name, setName, setShowName }) => {
    const { setMessageColor } = useContext(ThemeContext);
  
    const handleChangeShowName = () => {
      setShowName();
    };
  
    const handleClick = () => {
      setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
    };
  
    const handleChangeName = (text) => {
      setName(text);
    };

    const handleLogout = async () => {
        try {
          await logout();
        } catch (e) {
          console.warn(e);
        }
    };
  
    return (
      <>
        <h3>Profile</h3>
        <div>
            <button onClick={handleLogout} >LOGOUT</button>
        </div>
        <div>
            <button onClick={handleClick} >Change theme</button>
        </div>
        <div>
            <input type="checkbox"  />



            {showName && <span>{name}</span>}
            <button onClick={handleChangeShowName} >Change show name</button>
        </div>
        <FormMui onSubmit={handleChangeName} />
      </>
    );
};
  
const mapStateToProps = (state) => ({
    showName: selectShowName(state),
    name: selectName(state),
});
  
const mapDispatchToProps = {
    setShowName: () => changeShowName,
    setName: changeName,
};
  
const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps )(ProfileToConnect);

export default ConnectedProfile;