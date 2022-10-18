import React, { useEffect, type PropsWithChildren } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Tick from "../../images/tick.png"

export type Props = {
}

const Finish: React.FC<Props> = ({ }) => {

    var outlet: any = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        if(outlet.display_name === '')
            navigate("/")
    }, [])

    const capitalize: Function = (name: string) => {
        console.log(name)
        if (name === '') {
            console.log('here ---')
            navigate("/")
        }
        else {
            const name_split = name.split("")
            return name[0].toUpperCase() + name.slice(1)
        }
    }
    return (
        <React.Fragment>
            <div className='header-div'>
                <div className='tick-div'>
                    <img alt='tick' src={Tick} />
                </div>
            </div>
            <div className='welcome-div welcome-div-finish'>
                <p className='welcome-text'>Congrajulations, {capitalize(outlet.display_name ? outlet.display_name : '')}!</p>
                <p className='desc-text'>You have completed onboarding, you can start using Eden!</p>
            </div>
        </React.Fragment>
    )
}

export default Finish