import React, { useState, type PropsWithChildren } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Logo from "../images/logo.png"
import "../styles/home.scss"

export type Props = {
}


const Home: React.FC<Props> = ({ }) => {

    const navigate = useNavigate()

    const [full_name, setFullName] = useState("")
    const [display_name, setDisplayName] = useState("")
    const [workspace_name, setWorkspaceName] = useState("")
    const [workspace_url, setWorkspaceURL] = useState("")
    const [plan, setPlan] = useState("")
    const [page, setPage] = useState(1)
    const [error, setError] = useState(false)

    const nextScreen = () => {
        setError(false)

        switch (page) {
            case 1:
                if (full_name.length > 3 && display_name.length > 3) {
                    setPage(page + 1)
                    navigate("/workspace")
                }
                else
                    setError(true)
                break;

            case 2:
                if (workspace_name.length > 3 && workspace_url.length > 3) {
                    setPage(page + 1)
                    navigate("/plan")
                }
                else
                    setError(true)
                break;
            case 3:
                if (plan !== "") {
                    setPage(page + 1)
                    navigate("/finish")
                }
                else
                    setError(true)
                break;
            case 4:
                setPage(1)
                navigate("/")
                break;
            default:
                setPage(1)
                navigate("/")
        }
    }

    const getErrorMessages: Function = () => {
        switch (page) {
            case 1:
                return "Please have atleast 3 letters for full name and display name"
            case 2:
                return "Please have atleast 3 letters for workspace name and url"
            case 3:
                return "Please select your plan"
        }
    }

    return (
        <div className='home-container'>
            <div className='header-div'>
                <img alt='eden-logo' src={Logo} />
            </div>
            <div className='navigation-container'>
                <div className='navigation-row'>
                    <div className='nav-div'>
                        <div className={page >= 1 ? 'nav-element nav-active' : 'nav-element'}>
                            <p>1</p>
                        </div>
                        <hr className={page >= 1 ? 'horizontal-line line-active' : 'horizontal-line'} />
                    </div>

                    <div className='nav-div'>
                        <hr className={page >= 2 ? 'horizontal-line line-active' : 'horizontal-line'} />
                        <div className={page >= 2 ? 'nav-element nav-active' : 'nav-element'}>
                            <p>2</p>
                        </div>
                        <hr className={page >= 2 ? 'horizontal-line line-active' : 'horizontal-line'} />
                    </div>

                    <div className='nav-div'>
                        <hr className={page >= 3 ? 'horizontal-line line-active' : 'horizontal-line'} />
                        <div className={page >= 3 ? 'nav-element nav-active' : 'nav-element'}>
                            <p>3</p>
                        </div>
                        <hr className={page >= 3 ? 'horizontal-line line-active' : 'horizontal-line'} />
                    </div>

                    <div className='nav-div'>
                        <hr className={page >= 4 ? 'horizontal-line line-active' : 'horizontal-line'} />
                        <div className={page >= 4 ? 'nav-element nav-active' : 'nav-element'}>
                            <p>4</p>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet context={{ setFullName, setDisplayName, setWorkspaceName, setWorkspaceURL, setPlan, display_name }} />
            <button onClick={() => nextScreen()}>{page === 3 || page === 4 ? 'Go To Dashboard' : 'Create Workspace'}</button>
            {
                error === true &&
                <p className='error-msg'>{getErrorMessages()}</p>
            }
        </div>
    )
}

export default Home