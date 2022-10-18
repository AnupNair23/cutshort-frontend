import React, { useEffect, type PropsWithChildren } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

export type Props = {
}

const Workspace: React.FC<Props> = ({ }) => {

    var outlet: any = useOutletContext();
    const navigate = useNavigate()

    useEffect(() => {
        if (outlet.display_name === '')
            navigate("/")
    }, [])

    return (
        <React.Fragment>
            <div className='welcome-div'>
                <p className='welcome-text'>Let's set up a home for all your work</p>
                <p className='desc-text'>You can always create another workspace later.</p>
            </div>

            <div className='form-main-div'>
                <div className='form-div'>
                    <p className='form-text'>Workspace Name</p>
                    <input type={'text'} placeholder={'Steve Jobs'} onChange={(e) => outlet.setWorkspaceName(e.target.value)} />
                </div>
                <div className='form-div'>
                    <p className='form-text'>Workspace URL <span>(optional)</span></p>
                    <div className='url-div'>
                        <div className='url-text'>
                            <p>www.eden.com/</p>
                        </div>
                        <input type={'text'} placeholder={'Example'} onChange={(e) => outlet.setWorkspaceURL(e.target.value)} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Workspace