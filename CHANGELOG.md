# 0.3.x (July 29, 2017)

* added __Component.prototype.prevent__ method to prevent the compilation inside of a component 
* fixed some small bugs in the Akili.router
* deleted Akili __showEvaluationErrors__ option
* added Akili.router __saveScrollPosition__ option
* added url, object, audio, video, track, source components
* added the feature to recall functions in a template after the changing of dependent variables
* added Akili.deinit function to deactivate the framework
* fixed Akili.request xhr.ontimeout handling

# 0.2.x (June 6, 2017)

* removed window.event feature, fix recursive events fail
* added visibility support for server rendering before compilation
* added __iframe__, __image__, __embed__ components
* changed __radio__ component event from __on-check__ to __on-radio__
* added building (travis, coveralls etc)

# 0.1.x (May 29, 2017)
Initial public release (beta)