import React, { useEffect, useState, type PropsWithChildren } from 'react';
import User from "../../images/user.png"
import Team from "../../images/team.png"
import UserColor from "../../images/user-color.png"
import TeamColor from "../../images/team-color.png"
import { useNavigate, useOutletContext } from 'react-router-dom';

export type Props = {
}

const Plan: React.FC<Props> = ({ }) => {

    const navigate = useNavigate()
    const [active, setActive] = useState('')
    var outlet: any = useOutletContext();

    useEffect(() => {
        if (outlet.display_name === '')
            navigate("/")
    }, [])

    return (
        <React.Fragment>
            <div className='welcome-div'>
                <p className='welcome-text'>How are you planning to use Eden?</p>
                <p className='desc-text'>We'll streamline your setup experience accordingly.</p>
            </div>

            <div className='form-main-div plan-box-div'>
                <div className={active === 'user' ? 'plan-box active-plan-box' : 'plan-box'} onClick={() => { setActive('user'); outlet.setPlan('user') }}>
                    {active === 'user' ?
                        <img alt='myself' src={UserColor} />
                        :
                        <img alt='myself' src={User} />

                    }
                    <p className='plan-head'>For myself</p>
                    <p className='plan-desc'>Write better. Think more clearly. Stay organized.</p>
                </div>
                <div className={active === 'team' ? 'plan-box active-plan-box' : 'plan-box'} onClick={() => { setActive('team'); outlet.setPlan('team') }}>
                    {active === 'team' ?
                        <img alt='myself' src={TeamColor} />
                        :
                        <img alt='myself' src={Team} />

                    }
                    <p className='plan-head'>With my team</p>
                    <p className='plan-desc'>Wikis, docs, tasks & projects, all in one place</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Plan