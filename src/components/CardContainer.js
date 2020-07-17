import React from "react";

import Card from "./Card";


class CardContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            user: null
        };
      }

    async componentDidMount() {
        const URL = 'https://randomuser.me/api/';
        const response = await fetch(URL)
        const data = await response.json()
        this.setState({ user: data.results[0], loading: false });
    }
    render() {
        if (this.state.loading) {
            return <div>Something went wrong with loading data user :(</div>
        }
        if (!this.state.user) {
            return <div>Did not get a person</div>
        }
        return (
            <div className='CardContainer'>
                <Card 
                    first = {this.state.user.name.first}
                    last = {this.state.user.name.last}
                    picture = {this.state.user.picture.large}
                />
            </div>
        )
    }


}

export default CardContainer;