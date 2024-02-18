interface ComponentProps {
  title: string;
}

class Component<T extends ComponentProps> {
  constructor (public props:T) {

  }
}

class Page extends Component<{ title: string, description: string }> {
  pageInfo () {
    console.log(this.props.title);
  }
}
export {};