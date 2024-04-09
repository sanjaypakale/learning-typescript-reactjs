type PersonProp = {
    names: {
        firstName: string;
        lastName: string
    }[]
}

export const PersonList = (props: PersonProp) => {

    return (
        <>
            {props.names.map(name => {
                return (
                    <h2 key={name.firstName}>
                        {name.firstName} {name.lastName}
                    </h2>
                )
            })}
        </>
    )

}