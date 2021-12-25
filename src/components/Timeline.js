import React from 'react'
import { Events } from './Events'
export const Timeline = () => {
    return (
        <div>
            <Events events="PAST EVENTS"/>
            <Events events="ON GOING EVENTS"/>
            <Events events="UCOMING EVENTS"/>
        </div>
    )
}
