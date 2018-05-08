# 0.7.x (May 08, 2018)

* added tags system
* fixed a lot of core bugs
* added __Akili.globals__ object to pass custom global variables to scope expressions
* added __.store()__ and __.attr()__ __set__ and __get__ options
* added __router.transition.reload()__
* added __router.reload()__
* added __Akili.defaults()__ to define module settings
* added __utils.includeKeys()__, __utils.excludeKeys()__
* improved the loop system


# 0.6.x (March 22, 2018)

* improved router initialization
* improved an error catching in templates
* improved __deinit__ functions
* improved __utils.filter__
* added request cache system
* added a lot of tests
* added __eslint__
* changed server rendering approach
* sped up the loops

# 0.5.x (March 12, 2018)

* changed attributes binding system
* changed store binding system
* optimized a loop perfomance
* added __debounce__ event and attribute to input
* added __Akili.nextTick()__
* added __router.isolate()__
* fixed many core bugs

# 0.4.x (February 21, 2018)

* added store to save and distribute data
* added an automatic loop creation in __for__ component
* added utils.copy enumerable option
* changed the default context of scope functions
* fixed the router __saveScrollPosition__ option bug
* fixed loop's item deletion speed 
* fixed scope objects copying
* fixed router __hashMode__, when current url is the same
* removed nested watching possibility

# 0.3.x (July 29, 2017)

* added __Component.prototype.prevent__ method to prevent the compilation inside of a component 
* fixed some small bugs in the Akili.router
* deleted Akili __showEvaluationErrors__ option
* added Akili.router __saveScrollPosition__ option
* added __url__, __object__, __audio__, __video__, __track__, __source__ components
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