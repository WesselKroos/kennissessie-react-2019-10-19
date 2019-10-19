export default (options: {
  template: (
    props: any,
    state: any,
    handlers: any,
    style: any
  ) => JSX.Element,
  style?: any
}) =>
  (target: any) => {
    target.prototype.render = function () {
      const { props, state, ...handlers } = this;
      return options.template(props, state, handlers, options.style || {});
    }
  }