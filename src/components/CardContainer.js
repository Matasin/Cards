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
            return <div style={{textAlign: 'center'}}>Something went wrong with loading data user :(</div>
        }
        // if (!this.state.user) {
        //     return <div>Did not get a person</div>
        // }

        const user = this.state.user; //
        return (
            <div className='CardContainer'>
                <Card 
                    picture = {user.picture.large}

                    name = {user.name.first + '\xa0' + user.name.last}

                    email = {user.email}

                    data = {user.dob.date}

                    country = {user.location.country}
                    city = {user.location.city}
                    street = {user.location.street.name + '\xa0' + user.location.street.number}

                    phone = {user.phone}

                    password = {user.login.password}
                />
            </div>
        )
    }


}

export default CardContainer;