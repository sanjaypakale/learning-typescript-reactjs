
type InputProps = {
    value: string,
    onchange: () => void
}

export const Input = (props: InputProps) => {

    return (
        <>
            <input type="text" value={props.value} onChange={props.onchange}></input>
        </>
    )
}