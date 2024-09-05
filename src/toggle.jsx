export function Toggle (props) {
    // eslint-disable-next-line react/prop-types
    const { clickAction, textContent } = props

    return (
        <button className="toggler" onClick={clickAction}>{textContent}</button>
    );
};