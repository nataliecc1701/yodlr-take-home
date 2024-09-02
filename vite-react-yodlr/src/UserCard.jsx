import React from "react"
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom"

const UserCard = ({user}) => {
    return <li>
        <Card>
            <CardBody>
                <CardTitle>
                    <h3>{`${user.firstName} ${user.lastName}`}</h3>
                </CardTitle>
                <CardText>
                    ID: {user.id}<br/>
                    Email: {user.email}<br/>
                    Status: {user.state}<br/>
                    <Link to={`/admin/${user.id}`}>Edit User</Link>
                </CardText>
            </CardBody>
        </Card>
    </li>
}

export default UserCard;