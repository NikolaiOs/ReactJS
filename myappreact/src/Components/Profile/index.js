import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCheckBox, changeShowName } from "../../store/profile/actions";
import { ThemeContext } from "../../utils/ThemeContext";

export const Profile = () => {
    const { setMessageColor } = useContext(ThemeContext);

    const dispatch = useDispatch();
    const data =  useSelector((state) => state);

    const handleChangeShowName = () => {
        dispatch(changeShowName);
    };

    const handleChangeCheckBox = () => {
        dispatch(changeCheckBox);
    };

    const handleClick = () => {
        setMessageColor((prevColor) => (prevColor === 'forestgreen' ? 'blue' : 'forestgreen') );
    };

    return (
        <>
            <h3>Profile</h3>
            <div>
                <button onClick={handleClick} >Change theme</button>
            </div>
            <div>
                <input type="checkbox" onClick={handleChangeCheckBox} />



                {data.showName && <span>{data.name}</span>}
                <button onClick={handleChangeShowName} >Change show name</button>
            </div>
        </>
    );
};