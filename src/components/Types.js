import { useEffect } from 'react';
import resultdata from './contents/resultdata';

const Types = () => {


    return(
        <>
            <ul>
                {resultdata.map((id) => (
                    <li key={id.best}>
                        {id.place}
                        <img src={id.img} alt='사진' className='descimg'/>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Types;