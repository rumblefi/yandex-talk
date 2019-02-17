import React from 'react'
import './MeetingNegotiation.scss'
import {beautifyClassNames} from '../../helpers'

const MeetingNegotiation = ({className}) => (
    <div className={beautifyClassNames(['meeting-negotiation', className])}>
        <div className="meeting-negotiation__time">
            <span>16:00</span>
            <span className="meeting-negotiation__divider">—</span>
            <span>16:30</span>
        </div>
        <div className="meeting-negotiation__content">
            <span className="meeting__name">Готем</span>
            <span className="meeting-negotiation__divider">—</span>
            <span className="meeting__floor">4 этаж</span>
        </div>
    </div>
)

export default MeetingNegotiation