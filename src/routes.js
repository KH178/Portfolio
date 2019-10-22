import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import useRouter from './useRouter';
import Home from './Home';
import About from './About';
import Portfolio from './portfolio';
import Blog from './Blog';
import AdminBlog from './AdminBlog';

function Routes({ navFocus }) {
    const { location } = useRouter();
    
    const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: 'translate3d(-100vw, 0, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-100vw, 0, 0)' },
  });
    return (
    <>
         {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
        <Switch location={item}>
        <Route exact path="/" render={(routeProps)=><Home {...routeProps}/>} />
        <Route exact path="/about" render={(routeProps)=><About {...routeProps}/>} />
        <Route exact path="/portfolio" render={(routeProps)=><Portfolio {...routeProps}/>} />
        <Route exact path="/blog" render={(routeProps)=><Blog/>} />
        <Route exact path="/admin/blog" render={(routeProps)=><AdminBlog/>} />
        <Route render={(routeProps)=><Home {...routeProps}/>} />
        {/* <Route exact path="/food/:name" render={(routeProps)=><Food {...routeProps}/>} />
        <Route exact path="/food/:foodName/drink/:drinkName" render={(routeProps)=><Meal {...routeProps}/>} /> */}
        </Switch>
        </animated.div>
         ))}
    </>
    );

}
export default Routes;