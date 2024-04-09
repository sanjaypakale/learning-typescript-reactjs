

export const Person = (props: {
    name: {
        firstname: string;
        lastname: string;
    }
}) => {
    return (
        <>
            <div>
                First Name: {props.name.firstname} <br />
                Last Name: {props.name.lastname}
            </div>
        </>
    )
}