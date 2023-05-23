

const Loader = ({ value }: any) => {
    return (
        <div className="loader-fullscreen">
            <div className="loader"></div>
            {value && <div className="loader-progress">{value} % </div>}
        </div>);

};


export default Loader;