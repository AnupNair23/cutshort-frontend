import React, { type PropsWithChildren } from 'react';
import { useOutletContext } from 'react-router-dom';


export type Props = {
}

const Welcome: React.FC<Props> = ({ }) => {
   var outlet : any = useOutletContext();

    return (
        <React.Fragment>
            <div className='welcome-div'>
                <p className='welcome-text'>Welcome! First things first...</p>
                <p className='desc-text'>You can always change them later.</p>
            </div>

            <div className='form-main-div'>
                <div className='form-div'>
                    <p className='form-text'>Full Name</p>
                    <input type={'text'} placeholder={'Steve Jobs'} onChange={(e) => outlet.setFullName(e.target.value)} />
                </div>
                <div className='form-div'>
                    <p className='form-text'>Display Name</p>
                    <input type={'text'} placeholder={'Steve'} onChange={(e) => outlet.setDisplayName(e.target.value)}  />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Welcome