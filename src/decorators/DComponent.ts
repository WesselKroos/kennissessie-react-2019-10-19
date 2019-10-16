export default (options: {
    templateUrl: string,
    styleUrls: string[]
}) => {
    return (target: any) => {
        target.prototype.render = function () {
            if(!this.template) {
                if(this.loadingTemplate) return null;
                this.loadingTemplate = true;
                import(`../Components/${options.templateUrl}`).then(module  => {
                    if(!this.loadingTemplate) return;
                    this.loadingTemplate = false;
                    this.template = module.default
                    this.setState({})
                })
                return null
            }

            if(options.styleUrls && options.styleUrls.length && !this.style) {
                if(this.loadingStyle) return null;
                this.loadingStyle = true;
                import(`../Components/${options.styleUrls[0]}`).then(module  => {
                    if(!this.loadingStyle) return;
                    this.loadingStyle = false;
                    this.style = module.default
                    this.setState({})
                })
                return null
            }

            return this.template(this);
        }
        
        var componentWillUnmount = target.prototype.componentWillUnmount;
        target.prototype.componentWillUnmount = function () {
            this.loadingTemplate = false;
            this.loadingStyle = false;
            if(componentWillUnmount) 
                componentWillUnmount();
        }
    }
}