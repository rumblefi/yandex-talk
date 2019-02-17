import React from 'react'
import './MeetingNegotiation.scss'
import {beautifyClassNames} from '../../helpers'
import CloseIcon from '../CloseIcon/CloseIcon'

const MeetingNegotiation = ({className,data}) => (
    <div className={beautifyClassNames(['meeting-negotiation', className])}>
        <div className="meeting-negotiation__time">
            <span>{data.startTime}</span>
            <span className="meeting-negotiation__divider">—</span>
            <span>{data.endTime}</span>
        </div>
        <div className="meeting-negotiation__content">
            <span className="meeting__name">{data.name}</span>
            <span className="meeting-negotiation__divider">—</span>
            <span className="meeting__floor">{data.floor}</span>
        </div>
        <div className="meeting-negotiation__close">
            <CloseIcon />
        </div>
    </div>
)

export default MeetingNegotiation