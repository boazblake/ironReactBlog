// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
    // start app
    // new Router()

    var AppView = React.createClass({

    	render:function(){
    		return (
    			<div className="pageContainer">
    				<Hed/>
    				<Columns/>
    				<Floater/>
    				<Footer/>
    			</div>
    			)
    	}
    })

    var Hed = React.createClass({
    	render:function(){
    		return(
    			<div className="hed">
    				<img className="banner" src="http://magentanova.github.io/html-intro-1/images/houston.jpg"/>
    				<img className="logo" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
    			</div>
    		)
    	}
    })

    var Columns = React.createClass({
    	render:function(){
    		return(
	    		<div className="columns">	
	    			<div className="searchBox">
	    				<h3>THE IRON YARD | HOUSTON</h3>
	    				<p>Happenings and updates from The Iron Yard in Houston, TX
	    				</p>
	    				<hr/>
	    				<h3>SEARCH</h3>
	    				<input type="search" placeholder="Search here.."/>
	    			</div>
	    			<div className="blogPart">
	    				<h1>September 22 Starts a New Class of The Iron Yard Houston Students</h1>
	    				<p className="auth">By Brian Dorton Campus Director of <a href="https://www.theironyard.com/" className="TIYlink">The Iron Yard </a>Houston</p>
	    				<img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
	    				<p className="blogText">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

	    				</p>
	    			</div>
	    		</div>	
    		)
    	}
    })

    var Floater = React.createClass({
    	render:function(){
    		return(
    			<div className="floatWrapper">
	    			<div className="top">Never Miss A Post!</div>
	    			<div className="bottom">
	    				<img className="logoLeft" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
	    				<div className="text"></div>
	    				<div className="followMe"></div>
	    			</div>
	    		</div>
    		)
    	}
    })


    var Footer = React.createClass({
    	render:function(){
    		return(
    			<div className="footer">
    				<p>&copy; Boaz Blake 2016</p>
    			</div>
    		)
    	}
    })




    DOM.render(<AppView/>, document.querySelector('.container'))
}

app()
