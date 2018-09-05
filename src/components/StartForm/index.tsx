import * as React from 'react'

interface IProps {
  onSubmit: (name: string) => void
}

interface IState {
  name: string
}

export default class StartForm extends React.Component<IProps, IState> {
  public state = {
    name: ''
  }

  public handleNameOnInput = ({target: {value: name}}: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({name})
  }

  public handleFormOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {
      state: {name},
      props: {onSubmit}
    } = this
    if (!name) {
      return
    }
    onSubmit(name)
  }

  public render() {
    return (
      <div>
        <form onSubmit={this.handleFormOnSubmit}>
          <label htmlFor="username">Insert your name</label>
          <input name="username" id="username" type="text" onInput={this.handleNameOnInput} />
          <button type="submit">PLAY!</button>
        </form>
      </div>
    )
  }
}
