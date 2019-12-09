import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

export const Slider = ({count, children}) => {
    return (
       <TransitionGroup component={null}>
           <CSSTransition
                in={ true }
                appear={ false }
                key={ count }
                timeout={ 900 }
                classNames={ "slide" }
           >
               {children}
           </CSSTransition>
       </TransitionGroup>
    );
};
